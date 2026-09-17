[Development Guides Home](/guides) >> [Guide to Custom dnsadmin Plugins](/guides/guide-to-custom-dnsadmin-plugins/)

# Guide to Custom dnsadmin Plugins - The Setup Module

## Introduction

The `Setup` module creates the [node configuration file](/guides/guide-to-custom-dnsadmin-plugins/guide-to-custom-dnsadmin-plugins-node-configuration-files/) for a new DNS node. Store the `Setup` module as a file with the `.pm` extension in the `/usr/local/cpanel/Cpanel/NameServer/Setup/Remote/` directory, which corresponds to the  `Cpanel::NameServer::Setup::Remote` namespace. You can find additional example modules in the `/usr/local/cpanel/Cpanel/NameServer/Setup/Remote/` directory on your cPanel & WHM server.

Each `Setup` module corresponds to a server type in the *Backend Type* menu in WHM's [*DNS Cluster*](https://docs.cpanel.net/whm/clusters/dns-cluster/) interface (*WHM >> Home >> Clusters >> DNS Cluster*).

Setup modules **must** include both the `get_config()` and `setup()` subroutines.

* The `get_config()` subroutine generates the interface that displays after users select that `Setup` module's server type and click *Configure*.
* The `setup()` subroutine processes the data that the user enters.


## Basic usage

The following example code creates the `MySetupModule` server type:


```perl
# Package the module.
package Cpanel::NameServer::Setup::Remote::MySetupModule;

# Use statements go here.
use Cpanel::AccessIds              ();
use Cpanel::AcctUtils              ();
use Cpanel::FileUtils::Copy        ();
use Cpanel::Form                   ();
use Cpanel::Hostname               ();
use Cpanel::Validate::IP::v4       ();
use cPanel::PublicAPI::WHM::DNS    ();
use cPanel::PublicAPI::WHM::Legacy ();
use Cpanel::Validate::Domain       ();
use Cpanel::Validate::IP           ();
use Socket;
use Whostmgr::ACLS                 ();
use Whostmgr::HTMLInterface        ();
use Whostmgr::Version              ();

# Initialize WHM's ACLs.
Whostmgr::ACLS::init_acls();

# Create the configuration form in the WHM interface.
sub get_config {
    my %config = (
        'options' => [
            {
                'name'        => 'host',
                'type'        => 'text',
                'locale_text' => 'Remote MySetupModule DNS host',
            },
            {
                'name'        => 'user',
                'type'        => 'text',
                'locale_text' => 'Remote Server Username',
            },
            {
                'name'        => 'pass',
                'type'        => 'bigtext',
                'locale_text' => 'Remote Server API token',
            },
            {
                'name'        => 'recurse',
                'locale_text' => 'Set Up Reverse Trust Relationship',
                'type'        => 'binary',
                'default'     => 1,
            },
            {
                'name'        => 'debug',
                'locale_text' => 'Debug Mode',
                'type'        => 'binary',
                'default'     => 0,
            },
        ],
        'name' => 'MySetupModule',
    );
    return wantarray ? %config : \%config;
}

# Process data from the configuration form.
sub setup {
    my $self = shift;
    my %OPTS = @_;

    # Make sure that the user uses DNS clustering.
    if ( !Whostmgr::ACLS::checkacl('clustering') ) {
        return 0, 'The user does not use DNS clustering.';
    }

    # Make sure that the username and password are available.
    return 0, 'No user given.'        if !defined $OPTS{'user'};
    return 0, 'No API token given.' if !defined $OPTS{'pass'};
    return 0, 'No host given.'        if !defined $OPTS{'pass'} && !defined $OPTS{'accesshash'};

    # Validate the remote user.
    my $safe_remote_user = $ENV{'REMOTE_USER'};
    $safe_remote_user =~ s{/}{}g;

    # Get the user's home directory, hostname, and version of WHM.
    my $homedir      = Cpanel::AcctUtils::gethomedir($safe_remote_user);
    my $selfhostname = Cpanel::Hostname::gethostname();
    my $selfversion  = Whostmgr::Version::getversion();

    # Validate whether to use debug mode.
    my $debug = $OPTS{'debug'} ? 1 : 0;

    # Validate the host paramenter.
    my $clustermaster = $OPTS{'host'};
    my $hostname = Cpanel::Validate::Domain::Normalize::normalize($clustermaster);

    # Perform a DNS lookup for the master cluster server.
    my $inetaddr;
    if ( Cpanel::Validate::IP::v4::is_valid_ipv4($clustermaster) ) {
        if ( $inetaddr = gethostbyname($clustermaster) ) {
            $clustermaster = inet_ntoa($inetaddr);
        }
        else {
            return 0, "DNS Lookup failed for $clustermaster";
        }
    }

    # Validate the user paramenter.
    my $user = $OPTS{'user'};
    $user =~ tr/\r\n\f\0//d;
    $user =~ s/^\s+//g;
    $user =~ s/\s+$//g;
    return 0, 'Invalid user given' if !$user;

    # Validate the pass paramenter.
    my $pass = $OPTS{'pass'};
    $pass =~ tr/\r\n\f\0//d;
    $pass =~ s/^\s*\-+BEGIN\s+WHM\s+ACCESS\s+KEY\-+//g;
    $pass =~ s/\-+END\s+WHM\s+ACCESS\s+KEY\-+\s*$//g;
    $pass =~ s/^\s+//g;
    $pass =~ s/\s+$//g;
    return 0, 'Invalid API token!' if !$pass;

    # Pass values to the PublicAPI.
    my $whm = cPanel::PublicAPI->new(
        'host'       => $clustermaster,
        'user'       => $user,
        'token' => $pass,
        'usessl'     => 1,
    # If you MUST use self-signed certificates,
    # Set ssl_no_verify to 0. Default is 1.
    );

    # Check the remote server's WHM version.
    my $version;
    $version = $OPTS{'version'} if defined $OPTS{'version'};
    if ( $OPTS{'recurse'} ne '0' ) {
        $version = $whm->version();
    }
    else {
        $version = '10.0.0';
    }

    # Return an error if the server did not accept the API token.
    if ( $whm->{'error'} && $whm->{'error'} ne '' ) {
        if ( $whm->{'error'} =~ /401/ ) {
            return 0, "The remote server did not accept the API token. Please verify the API token and username and try again. The exact message was $whm->{'error'}. For more information check /usr/local/cpanel/logs/login_log on the remote server.";
        }
        else {
            return 0, "There was an error while processing your request: cPanel::PublicAPI returned [$whm->{'error'}]";
        }
    }

    # Prevent cyclic trust relationships.
    elsif ( grep { $_ eq $clustermaster } Cpanel::Ips::fetchipslist() ) {
        return 0, "The specified IP address would create a cyclic trust relationship: $clustermaster";
    }

    # Prevent invalid hostnames.
    if ( exists $OPTS{'recurse'} && $OPTS{'recurse'} ne '0' ) {
        my $remote_hostname = $whm->showhostname();
        if ( $remote_hostname =~ /[\r\n\0]/ ) {
            return 0, "The remote host returned an invalid hostname.";
        }
        else {
            $hostname = $remote_hostname;
        }
    }

    # Return an error if the version of WHM is not high enough.
    my ( $majorv, $minorv, $rev ) = split( /\./, $version );
    if ( $majorv < 6 ) {
        return 0, "This operation requires the remote server to be running WHM 6.0 or later. The server reported version $version";
    }
    my $success_msg = '';
    my $notices     = '';

    # Set up the necessary cluster directories.
    mkdir '/var/cpanel/cluster', 0700 if !-e '/var/cpanel/cluster';
    mkdir '/var/cpanel/cluster/' . $safe_remote_user, 0700 if !-e '/var/cpanel/cluster/' . $safe_remote_user;
    mkdir '/var/cpanel/cluster/' . $safe_remote_user . '/config', 0700 if !-e '/var/cpanel/cluster/' . $safe_remote_user . '/config';

    # Set up the node configuration file.
    if ( open my $config_fh, '>', '/var/cpanel/cluster/' . $safe_remote_user . '/config/' . $clustermaster ) {
        chmod 0600, '/var/cpanel/cluster/' . $safe_remote_user . '/config/' . $clustermaster
          or warn "Failed to secure permissions on cluster configuration: $!";
        print {$config_fh} "#version 2.0\nuser=$user\nhost=$hostname\npass=$pass\nmodule=MySetupModule\ndebug=$debug\n";
        close $config_fh;
        $success_msg .= "The Trust Relationship has been established. ";
        $success_msg .= "The remote server, $hostname is running WHM version: $version ";
    }
    else {
        warn "Could not write DNS trust configuration file: $!";
        return 0, "The trust relationship could not be established, please examine /usr/local/cpanel/logs/error_log for more information.";
    }

    if ( !-e '/var/cpanel/cluster/root/config/' . $clustermaster && Whostmgr::ACLS::hasroot() ) {
        Cpanel::FileUtils::Copy::safecopy( '/var/cpanel/cluster/' . $safe_remote_user . '/config/' . $clustermaster, '/var/cpanel/cluster/root/config/' . $clustermaster );
    }

    if ( exists $OPTS{'recurse'} && $OPTS{'recurse'} ne '0' ) {
        my $access_hash = Cpanel::AccessIds::loadfile_as_user( $ENV{'REMOTE_USER'}, $homedir . '/.accesshash' );
        local $whm->{'timeout'} = 20;
        if ( $whm->addtocluster( $safe_remote_user, $selfhostname, $access_hash, $selfversion ) ) {
            $success_msg .= "The reverse trust relationship has been established from the remote server to this server as well. ";
        }
        else {
            $notices .= "The reverse trust relationship could not be established from the remote server to this server.   You must login to the remote server and add this server to it's cluster manager manually if you want the other server to be able to access this one.";
        }
    }
    return 1, $success_msg, $notices, $clustermaster;
}

1;
```

## The get_config() subroutine

The `get_config()` subroutine returns a hash reference that WHM uses to create a *DNS Remote Configuration* form. The `get_config()` subroutine **must** return the `%config` hash reference.

The `%config` hash reference includes the following parameters and values:

| Parameter | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `options` | *array of hashes* | **Required**An array of hashes of form settings. | This array's hashes contain the `name`, `type`, `locale_text`, and `default` parameters. |   |
|     `name` | *string* | **Required**The node configuration file value to which the form field corresponds.You **must** include hashes for the `user`, `host`, and `pass` values. | A valid string.For more information, read our [Node Configuration Files](/guides/guide-to-custom-dnsadmin-plugins/guide-to-custom-dnsadmin-plugins-node-configuration-files) documentation. | `host` |
|     `type` | *string* | The form input type to use in the WHM interface for this value. | `text` — A single-line text box.`bigtext` — A multi-line text box.`radio` — A radio button. If you set the `type` value to `radio`, you **must** also include the `options` parameter.`binary` — A single checkbox. If you set the `type` value to `binary`, you **must** also include the `default` parameter. | `bigtext` |
|     `locale_text` | *string* | **Required**The text that the WHM interface will display. | A string value. | `Remote Server Username` |
|     `default` | `Boolean` | The default value to assign to values that use the `binary` type. | `1` — The setting defaults to true (selected).`0` — The setting defaults to false (unselected). | `1` |
|     `options` | *array of hashes* | An array of hashes of the available choices for values that use the `radio` type. | This array of hashes includes the `value` and `label` parameters.This array must contain at least two `value` elements and one `label` element. |   |
|         `value` | *string* | The radio button's value. | A valid string. | `choice1` |
|         `label` | *string* | The radio button's display label. | A valid string. | `Choice #1` |
| `name` | *string* | The module's name. This value displays at the top of the WHM interface. | A string value. | `MySetupModule` |


## The setup() subroutine

The `setup()` subroutine must perform the following actions:

* Validate the input from the `get_config()` subroutine.
* Write the node configuration to the `/var/cpanel/cluster/username/config/node` file, where `username` is the account username and node is the node name.


### Order of operations

We **strongly** recommend that your `setup()` subroutine use the following order of operations:

1. Receive the `get_config()` function's parameters. For example:

```perl
my (undef, %OPTS ) = @_;
```
This code assigns all of the `get_config()` subroutine's input to the `%OPTS` hash.
2. Validate the parameters.
3. Ensure that the parameters will function correctly on the system.
4. Create the `/var/cpanel/cluster/username/config/node` file, if it does not already exist. We recommend that you use the name of your product or hostname as the node configuration file's name.
5. Write the configuration settings to the file.
  * This file **must** contain values for the user and module settings, and must begin with the following string: `#version 2.0`
  * The system also uses any optional data that you include in the file in order to create the remote object instance that queries the remote system.
  * For more information, read our [Node Configuration Files](/guides/guide-to-custom-dnsadmin-plugins/guide-to-custom-dnsadmin-plugins-node-configuration-files) documentation.


### Return data

The `setup()` subroutine returns data in the following format:


```perl
return $boolean, $msg, $notices, $nodename;
```

This example uses the following variables:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `$boolean` | *Boolean* | Whether the module successfully set up the node. | `1` — Success.`0` — Failure. | `1` |
| `$msg` | *string* | A success message or reason for failure. | A string value. | `This is an error message.` |
| `$notices` | *string* | One or more important messages that display regardless of success or failure. | A string value. | `Good news, everyone!` |
| `$nodename` | *string* | The node's name, as it appears in the `/var/cpanel/cluster/username/config` file. | A string value. | `nodename` |