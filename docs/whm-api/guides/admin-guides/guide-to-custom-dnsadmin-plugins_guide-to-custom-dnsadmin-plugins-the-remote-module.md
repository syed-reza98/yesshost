[Development Guides Home](/guides) >> [Guide to Custom dnsadmin Plugins](/guides/guide-to-custom-dnsadmin-plugins/)

# Guide to Custom dnsadmin Plugins - The Remote Module

## Introduction

The `Remote` module communicates with other servers in the DNS cluster. Store the `Remote` module as a file with the `.pm` extension in the `/usr/local/cpanel/Cpanel/NameServer/Remote/` directory, which corresponds to the `Cpanel::NameServer::Remote` namespace.

* Remote modules require that you use the `cPanel::PublicAPI` clients.
* When you create a `Remote` module, you **must** use the [`PublicAPI new()`](https://github.com/CpanelInc/cPanel-PublicAPI) method.
* You may call one command method within another command method.
  * Whenever this occurs, the command method that called another method **must** modify the `dnsuniqid` value.
  * We recommend that you append Perl's `_$int` function to the `dnsuniqid` value.


You can find additional example modules in the `/usr/local/cpanel/Cpanel/NameServer/Remote/` directory on your cPanel & WHM server.

## Variables

When you write a `Remote` module, you can use the following variables in your code:

| Variable | Description |
|  --- | --- |
| `accesshash` | The access hash password in the DNS configuration file in the `/var/cpanel/cluster/username/config/` directory, where `username` represents the authenticated WHM account's username. To create or view an access hash, use WHM's [*Remote Access Key*](https://docs.cpanel.net/whm/clusters/remote-access-key/) interface (*WHM >> Home >> Clusters >> Remote Access Key*). **Warning:** We **strongly** recommend that you use API tokens instead. |
| `dnsrole` | The remote server's DNS role. |
| `host` | The host to which the module connects. |
| `local_timeout` | The amount of time to wait to send an HTTP request before the system times out, in seconds. |
| `logger` | **Required**The `Cpanel::Logger` instance to use. You **must** use the `bless` function to pass this value in the module's final hash. For more information, read the [Perl documentation on the bless function](http://perldoc.perl.org/functions/bless.html). |
| `original_request_time` | The time at which the user called the DNS command, in Unix time format. |
| `output_callback` | **Required**A subroutine reference that handles display data. You **must** use the `bless` function to pass this value in the module's final hash. For more information, read the [Perl documentation on the bless function](http://perldoc.perl.org/functions/bless.html). |
| `queue_callback` | **Required**A subroutine reference to the subroutine that manages queue requests. You **must** use the `bless` function to pass this value in the module's final hash. For more information, read the [Perl documentation on the bless function](http://perldoc.perl.org/functions/bless.html). |
| `remote_timeout` | The amount of time to wait to receive an HTTP request before the system times out, in seconds. |
| `timeout` | The timeout to use. |
| `token` | The user's API token. To create or view an API token, use WHM's [*Manage API Tokens*](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/) interface (*WHM >> Home >> Development >> Manage API Tokens*). |
| `update_type` | The type of update. |
| `user` | The username in the DNS configuration file in the `/var/cpanel/cluster/username/config/` directory, where `username` is the authenticated WHM account's username. |


## Parameters

Each command method **must** use the following parameters:

| Parameter | Description |
|  --- | --- |
| `dnsuniqid` | The command's unique identifier, which the method should use to ensure that the same system does not receive a command twice. |
| `dataref` | A hash reference that contains a serialized version of arguments that the method passed to the command. |
| `rawdata` | A hash reference that contains a raw URL version of the arguments that the method passed to the system. |


For this reason, we recommend that you begin each method with the following line of code:


```perl
my ( $self, $dnsuniqid, $dataref, $rawdata ) = @_;
```

## Returns

The `dnsadmin` system returns data as output and parameters, because the system executes processes through output data. The base class implements this output as the `output()` subroutine. This subroutine relies on the `output_callback` value that your module passes with the `bless` function into the `new()` subroutine.

Command methods return a hash that contains two values:

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `status` | *string* | A constant that the `Cpanel::NameServers::Constants` namespace defines. | This value **must** be `$Cpanel::NameServer::Constants::*`, where `*` is one of the following constants:`ERROR_INVALID_RESPONSE_LOGGED``ERROR_GENERIC``ERROR_TIMEOUT``ERROR_GENERIC_LOGGED``ERROR_TIMEOUT_LOGGED``SUCCESS``QUEUE``DO_NOT_QUEUE` | `$Cpanel::NameServer::Constants::QUEUE` |
| `message` | *string* | A message of success, or a reason for failure. | `OK`An error message. | `OK` |


### The _check_action() subroutine

The `_check_action()` subroutine returns proper data constants when the `dnsadmin` system sends or receives information. This subroutine checks remote systems' HTTP statuses, and determines whether the system can recover from errors.

Calls to this subroutine resemble the following examples:


```perl
_check_action($msg, $Cpanel::NameServer::Constants::QUEUE);
_check_action($msg, $Cpanel::NameServer::Constants::DO_NOT_QUEUE);
```

In these examples, the `QUEUE` and `DO_NOT_QUEUE` constants determine whether the system queues an action if it fails.

* The `QUEUE` constant retries a failed action if the system determines that the action is recoverable.
* The `DO_NOT_QUEUE` constant returns an error message for a failed action, and does **not** attempt to retry the action.
* Use the `$msg` variable to pass in a message about the action that failed.


## Command methods

You **must** implement each command that you pass to the `dnsadmin` system as a subroutine in your `Remote` module.

For more information about the required and optional command methods, read our [Remote Module Command Methods](/guides/guide-to-custom-dnsadmin-plugins/guide-to-custom-dnsadmin-plugins-the-remote-module-command-methods) documentation.

Warning:
You **must** include the following **required** methods in your module:

* `addzoneconf()`
* `getallzones()`
* `getips()`
* `getpath()`
* `getzone()`
* `getzonelist()`
* `getzones()`
* `quickzoneadd()`
* `removezone()`
* `removezones()`
* `savezone()`
* `synczones()`
* `version()`
* `zoneexists()`


## Basic usage

The following example code creates the `MyRemoteModule` server type:


```perl
# Package the module.
package Cpanel::NameServer::Remote::MyRemoteModule;

# Add use statements.
use strict;
use cPanel::PublicAPI                     ();
use cPanel::PublicAPI::WHM                ();
use cPanel::PublicAPI::WHM::DNS           ();
use cPanel::PublicAPI::WHM::CachedVersion ();
use Cpanel::Encoder::URI                  ();
use Cpanel::StringFunc::Match             ();
use Cpanel::StringFunc::Trim              ();
use Cpanel::NameServer::Remote            ();

our @ISA = ('Cpanel::NameServer::Remote');
our $VERSION = '1.2';


# Use the new() method to create a new LiveAPI object.
sub new {
    my $self = shift;
    my %OPTS = @_;
    $self = {%OPTS};
    bless $self;

    my $dnspeer        = $OPTS{'host'};
    my $user           = $OPTS{'user'};
    my $ip             = $OPTS{'ip'};
    my $pass           = $OPTS{'token'} || $OPTS{'pass'};
    my $remote_timeout = $OPTS{'timeout'};

    $self->{'name'}            = $dnspeer;
    $self->{'update_type'}     = $OPTS{'update_type'};
    $self->{'local_timeout'}   = $OPTS{'local_timeout'};
    $self->{'remote_timeout'}  = $OPTS{'remote_timeout'};
    $self->{'queue_callback'}  = $OPTS{'queue_callback'};
    $self->{'output_callback'} = $OPTS{'output_callback'};

    $self->{'publicapi'} = cPanel::PublicAPI->new(
        'host'       => $dnspeer,
        'user'       => $user,
        'keepalive'  => 1,
        'token'      => $APITOKEN,
        'debug'      => ( $OPTS{'debug'} || 0 ),
        'usessl'     => 1,
        'timeout'    => $remote_timeout,
        ( $ip ? ( 'ip' => $ip ) : () )
    );

    return $self;
}


# Create the getallzones command method.
sub getallzones {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    require Cpanel::Gzip::ungzip;
    my $zdata  = $self->{'publicapi'}->getallzones_local($unique_dns_request_id);
    my $uzdata = Cpanel::Gzip::ungzip::gunzipmem($zdata);
    $self->output( $uzdata ne '' ? $uzdata : $zdata );
    return $self->_check_action( 'get all the zones', $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}


# Create the cleandns method, to remove unnecessary zones.
sub cleandns {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    $self->output( $self->{'publicapi'}->cleandns_local($unique_dns_request_id) );
    return $self->_check_action( 'cleanup dns', $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}


# Create a method to remove a single zone.
sub removezone {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->removezone_local( $dataref->{'zone'}, $unique_dns_request_id ) . "\n" );
    return $self->_check_action( "remove the zone: $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}


# Create a method to remove multiple zones.
sub removezones {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    chomp( $dataref->{'zones'} );
    if ( isatleastversion( '11.24.2', $self->{'publicapi'}->cached_version() ) ) {
        $self->output( $self->{'publicapi'}->removezones_local( ( $dataref->{'zones'} || $dataref->{'zone'} ), $unique_dns_request_id ) . "\n" );
    }
    else {
        my $count = 0;
        foreach my $zone ( split( /\,/, ( $dataref->{'zones'} || $dataref->{'zone'} ) ) ) {
            $count++;
            $zone =~ s/^\s*|\s*$//g;
            print $self->{'publicapi'}->removezone_local( $zone, $unique_dns_request_id . '_' . $count ) . "\n";
            {
                my @check_action_results = $self->_check_action( "remove the zone(s): " . ( $dataref->{'zones'} || $dataref->{'zone'} ), $Cpanel::NameServer::Constants::QUEUE );
                return (@check_action_results) if $check_action_results[$Cpanel::NameServer::Constants::CHECK_ACTION_POSITION_IS_RECOVERABLE_ERROR];
            }
        }
    }
    return $self->_check_action( "remove the zone(s): " . ( $dataref->{'zones'} || $dataref->{'zone'} ), $Cpanel::NameServer::Constants::QUEUE );
}


# Create a method to force BIND to reload all zones.
sub reloadbind {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->reloadbind_local( $unique_dns_request_id, $dataref->{'zone'} ) . "\n" );
    return $self->_check_action( "reload bind", $Cpanel::NameServer::Constants::QUEUE );
}


# Create a method to force BIND to reload specific zones.
sub reloadzones {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    if ( isatleastversion( '11.23.2', $self->{'publicapi'}->cached_version() ) ) {
        $self->output( $self->{'publicapi'}->reloadzones_local( $unique_dns_request_id, $dataref->{'zone'} ) . "\n" );
        {
            my @check_action_results = $self->_check_action( "reload zones $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
            return (@check_action_results) if $check_action_results[$Cpanel::NameServer::Constants::CHECK_ACTION_POSITION_STATUS] != $Cpanel::NameServer::Constants::SUCCESS;
        }
    }
    else {
        $self->output( $self->{'publicapi'}->reloadbind_local($unique_dns_request_id) . "\n" );
        {
            my @check_action_results = $self->_check_action( "reload bind", $Cpanel::NameServer::Constants::QUEUE );
            return (@check_action_results) if $check_action_results[$Cpanel::NameServer::Constants::CHECK_ACTION_POSITION_STATUS] != $Cpanel::NameServer::Constants::SUCCESS;
        }
    }
    return ( $Cpanel::NameServer::Constants::SUCCESS, 'OK' );
}

# Create a method to force BIND to reload configuration files.
sub reconfigbind {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    if ( isatleastversion( '10.0.0', $self->{'publicapi'}->cached_version() ) ) {
        $self->output( $self->{'publicapi'}->reconfigbind_local($unique_dns_request_id) . "\n" );
    }
    else {
        $self->output( $self->{'publicapi'}->reloadbind_local( $unique_dns_request_id, $dataref->{'zone'} ) . "\n" );
    }
    return $self->_check_action( "reconfig bind", $Cpanel::NameServer::Constants::QUEUE );
}


# Create a method to save new records to existing zone files.
sub savezone {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->savezone_local( $dataref->{'zone'}, $dataref->{'zonedata'}, $unique_dns_request_id ) );
    return $self->_check_action( "save the zone $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}


# Create a method to add multiple zones to a remote system and the config database.
sub synczones {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $rawdata =~ s/^dnsuniqid=[^\&]+\&//g;
    $rawdata =~ s/\&dnsuniqid=[^\&]+//g;
    local $self->{'publicapi'}->{'timeout'} = ( ( int( $self->{'local_timeout'} / 2 ) > $self->{'remote_timeout'} ) ? int( $self->{'local_timeout'} / 2 ) : $self->{'remote_timeout'} );
    $self->output( $self->{'publicapi'}->synczones_local( $rawdata, $unique_dns_request_id ) );
    return $self->_check_action( "sync zones: $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}

# Create a method that adds a new zone to the system and saves its contents.
sub quickzoneadd {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    if ( isatleastversion( '11.24.4', $self->{'publicapi'}->cached_version() ) ) {
        $self->output( $self->{'publicapi'}->quickzoneadd_local( $dataref->{'zone'}, $dataref->{'zonedata'}, $unique_dns_request_id ) );
    }
    else {
        if ( isatleastversion( '11.24.2', $self->{'publicapi'}->cached_version() ) ) {
            $self->output(
                $self->{'publicapi'}->synczones_local(
                'cpdnszone-' . Cpanel::Encoder::URI::uri_encode_str($dataref->{'zone'}) .
                '=' .
                Cpanel::Encoder::URI::uri_encode_str($dataref->{'zonedata'}) .
                '&',
                $unique_dns_request_id . '_1'
                )
            );
        }
        else {
            $self->output( $self->{'publicapi'}->addzoneconf_local( $dataref->{'zone'}, $unique_dns_request_id . '_1' ) );
            $self->output( $self->{'publicapi'}->savezone_local( $dataref->{'zone'}, $dataref->{'zonedata'}, $unique_dns_request_id . '_2' ) ) unless ( $self->{'publicapi'}->{'error'} ne '' );
        }
        $self->output( $self->{'publicapi'}->reconfigbind_local( $unique_dns_request_id . '_3' ) ) unless ( $self->{'publicapi'}->{'error'} ne '' );
    }
    return $self->_check_action( "quick add the zone $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}

# Create a method to add a zone to the configuration database.
sub addzoneconf {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->addzoneconf_local( $dataref->{'zone'}, $unique_dns_request_id ) );
    return $self->_check_action( "add the zone $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}

# Create a method to get the contents of a single zone file.
sub getzone {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->getzone_local( $dataref->{'zone'}, $unique_dns_request_id ) );
    return $self->_check_action( "get the zone $dataref->{'zone'}", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}

# Create a method to get the contents of multiple zone files.
sub getzones {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    chomp( $dataref->{'zones'} );
    require Cpanel::Gzip::ungzip;
    if ( isatleastversion( '11.1.0', $self->{'publicapi'}->cached_version() ) ) {
        my $zdata = $self->{'publicapi'}->getzones_local( ( $dataref->{'zones'} || $dataref->{'zone'} ), $unique_dns_request_id );
        my $uzdata = Cpanel::Gzip::ungzip::gunzipmem($zdata);
        $self->output( $uzdata ne '' ? $uzdata : $zdata );
    }
    else {
        my @NEEDEDZONES = split( /\,/, ( $dataref->{'zones'} || $dataref->{'zone'} ) );
        my $count = 0;
        my $zonedata;
        foreach my $zone (@NEEDEDZONES) {
            $count++;
            $zonedata = $self->{'publicapi'}->getzone_local( $zone, $unique_dns_request_id . '_' . $count );
            $self->output('cpdnszone-' . Cpanel::Encoder::URI::uri_encode_str($zone) . '=' . Cpanel::Encoder::URI::uri_encode_str($zonedata) . '&' );
        }
    }
    return $self->_check_action( "get the zones " . ( $dataref->{'zones'} || $dataref->{'zone'} ), $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}

# Create a method to list all of the zones on the system.
sub getzonelist {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    my @ZONES = $self->{'publicapi'}->getzonelist_local($unique_dns_request_id);
    my @check_action_results = $self->_check_action( "get the zone list", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
    return (@check_action_results) if $check_action_results[$Cpanel::NameServer::Constants::CHECK_ACTION_POSITION_STATUS] != $Cpanel::NameServer::Constants::SUCCESS;
    foreach my $zone (@ZONES) {
        if ( Cpanel::StringFunc::Match::endmatch( $zone, '.db' ) ) {
            my $cleanzone = $zone;
            $cleanzone =~ Cpanel::StringFunc::Trim::endtrim( $cleanzone, '.db' );
            $self->output( $cleanzone . "\n" );
        }
        elsif ( !Cpanel::StringFunc::Match::beginmatch( $zone, '.' ) && $zone !~ /\.\./ ) {
            $self->output( $zone . "\n" );
        }
    }
    return ( $Cpanel::NameServer::Constants::SUCCESS, 'OK' );
}

# Create a method to check whether a zone exists.
sub zoneexists {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->zoneexists_local( $dataref->{'zone'}, $unique_dns_request_id ) ? '1' : '0' );
    return $self->_check_action( "determine if the zone $dataref->{'zone'} exists", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}

# Create a method to list the nameserver records' IP addresses.
sub getips {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    $self->output( $self->{'publicapi'}->getips_local($unique_dns_request_id) );
    return $self->_check_action( "receive an ips list", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}

# Create a method that lists the nodes with which the current node is peered.
sub getpath {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    $self->output( $self->{'publicapi'}->getpath_local($unique_dns_request_id) . "\n" );
    return $self->_check_action( "getpath", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}

# Create a method that gets a module's version number.
sub version {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    my $version = $self->{'publicapi'}->version();
    $self->{'error'} = $self->{'publicapi'}->{'error'} if $self->{'publicapi'}->{'error'};
    return $version;
}

# Create a method that synchronizes DNSSEC keys in the DNS cluster.
sub synckeys {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );    
    $rawdata =~ s/^dnsuniqid=[^\&]+\&//g;
    $rawdata =~ s/\&dnsuniqid=[^\&]+//g;
    $self->output( $self->{'publicapi'}->synckeys_local( $rawdata, $unique_dns_request_id ) );
    return $self->_check_action( "sync keys: $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}

# Create a method to deauthorize DNSSEC keys in the DNS cluster.
sub revokekeys {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $rawdata =~ s/^dnsuniqid=[^\&]+\&//g;
    $rawdata =~ s/\&dnsuniqid=[^\&]+//g;
    $self->output( $self->{'publicapi'}->revokekeys_local( $rawdata, $unique_dns_request_id ) );
    return $self->_check_action( "revoke keys: $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}

1;
```