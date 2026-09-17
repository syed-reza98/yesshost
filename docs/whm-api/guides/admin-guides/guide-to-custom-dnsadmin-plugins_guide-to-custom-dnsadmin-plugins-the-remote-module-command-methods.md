[Development Guides Home](/guides) >> [Guide to Custom dnsadmin Plugins](/guides/guide-to-custom-dnsadmin-plugins/)

# Guide to Custom dnsadmin Plugins - The Remote Module Command Methods

## Introduction

When the `dnsadmin` system receives a command, it runs the subroutine for that command from your `Remote` module. You **must** include command methods in your custom `dnsadmin` plugin's `Remote` module.

Warning:
* You **may** need to include the full `/usr/local/cpanel/whostmgr/bin/` path when you call the `dnsadmin` binary.
* You **must** include the following **required** methods in your module:
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


For more information about the `Remote` module and additional examples, read our [The Remote Module](/guides/guide-to-custom-dnsadmin-plugins/guide-to-custom-dnsadmin-plugins-the-remote-module) documentation.

## addzoneconf()

* **Required:** Yes.
* **Required input:** Yes.
* **Required output:** No.


The `addzoneconf()` method adds a zone to the configuration database (the `named.conf` file on BIND servers). We recommend that you queue this method, in case of non-fatal errors.

**Example call**


```perl
./dnsadmin --action ADDZONECONF --data zone=example.com
```

**Input**

The `addzoneconf()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `zone` | *string* | The zone to add to the configuration database. | A valid DNS zone name. | `example.com.db` |


**Output**

The `addzoneconf()` method does not require output.

**Example subroutine**


```perl
# Create a method to add a zone to the configuration database.
sub addzoneconf {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->addzoneconf_local( $dataref->{'zone'}, $unique_dns_request_id ) );
    return $self->_check_action( "add the zone $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}
```

## cleandns()

* **Required:** No.
* **Required input:** No.
* **Required output:** No.


The `cleandns()` method removes unnecessary DNS zones from the system.

**Example call**


```perl
./dnsadmin --action CLEANDNS
```

**Input**

The `cleandns()` method does not require input.

**Output**

The `cleandns()` method does not require output.

**Example subroutine**


```perl
# Create the cleandns method to remove unnecessary zones.
sub cleandns {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    $self->output( $self->{'publicapi'}->cleandns_local($unique_dns_request_id) );
    return $self->_check_action( 'cleanup dns', $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}
```

## getallzones()

* **Required:** Yes.
* **Required input:** No.
* **Required output:** Yes.


The `getallzones()` method retrieves a complete dump of all of the zone files on the system.

**Example call**


```perl
./dnsadmin --action GETALLZONES --data zones=example1.com,example2.com,example3.com
```

**Input and output**

The `getallzones()` method does not require input.

**Output**

The `getallzones()` method **must** return a URI-encoded, ampersand-delimited (`&`) list of zone files and their contents.

For example:


```perl
cpdnszone-$zone1=$zone1contents&$zone2=$zone2contents
```

**Example subroutine**


```perl
# Create the getallzones command method to get a dump of zone files.
sub getallzones {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    require Cpanel::Gzip::ungzip;
    my $zdata  = $self->{'publicapi'}->getallzones_local($unique_dns_request_id);
    my $uzdata = Cpanel::Gzip::ungzip::gunzipmem($zdata);
    $self->output( $uzdata ne '' ? $uzdata : $zdata );
    return $self->_check_action( 'get all the zones', $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}
```

## getips()

* **Required:** Yes.
* **Required input:** No.
* **Required output:** Yes.


The `getips()` method retrieves a list of the IP addresses that the system's nameserver records use.

**Example call**


```perl
./dnsadmin --action GETIPS
```

**Input**

The `getips()` method does not require input.

**Output**

The `getips()` method **must** return a line-delimited (`&`) list of the IP addresses that the remote system uses.

**Example subroutine**


```perl
# Create a method to list the nameserver records' IP addresses.
sub getips {
   my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
   $self->output( $self->{'publicapi'}->getips_local($unique_dns_request_id) );
   return $self->_check_action( "receive an ips list", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}
```

## getpath()

* **Required:** Yes.
* **Required input:** No.
* **Required output:** Yes.


The `getpath()` method lists the nodes with which the current node is peered. The system uses this method to build the graph in WHM's [*DNS Cluster*](https://docs.cpanel.net/whm/clusters/dns-cluster/) interface (*WHM >> Home >> Clusters >> DNS Cluster*).

**Example call**


```perl
./dnsadmin --action GETPATH
```

**Input**

The `getpath()` method does not require input.

**Output**

The `getpath()` method **must** return a space-separated pair of hosts and nameservers in the DNS cluster.

* The host values **must** match their entries in the node configuration file.
* The nameserver values **must** match their entries in the NS records.


For example:


```perl
host.example.com ns1.example.com
host.example.com ns2.example.com
```

**Example subroutine**


```perl
# Create a method that lists the nodes with which the current node is peered.
sub getpath {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    $self->output( $self->{'publicapi'}->getpath_local($unique_dns_request_id) . "\n" );
    return $self->_check_action( "getpath", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}
```

## getzone()

* **Required:** Yes.
* **Required input:** Yes.
* **Required output:** Yes.


The `getzone()` method retrieves the contents of a single zone file.

**Example call**


```perl
./dnsadmin --action GETZONE --data zone=example.com
```

**Input**

The `getzone()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `zone` | *string* | The zone file to retrieve. | A valid DNS zone name. | `example.com.db` |


**Output**

The `getzone()` method **must** return a BIND-compatible zone file.

**Example subroutine**


```perl
# Create a method to get the contents of a single zone file.
sub getzone {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->getzone_local( $dataref->{'zone'}, $unique_dns_request_id ) );
    return $self->_check_action( "get the zone $dataref->{'zone'}", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}
```

## getzonelist()

* **Required:** Yes.
* **Required input:** No.
* **Required output:** Yes.


The `getzonelist()` method lists all of the available zones on the system.

**Example call**


```perl
./dnsadmin --action GETZONELIST
```

**Input**

The `getzonelist()` method does not require input.

**Output**

The `getzonelist()` method **must** return a line-delimited list of the available DNS zones.

**Example subroutine**


```perl
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
```

## getzones()

* **Required:** Yes.
* **Required input:** Yes.
* **Required output:** Yes.


The `getzones()` method retrieves the contents of multiple zone files.

**Example call**


```perl
./dnsadmin --action GETZONES --data zones=example1.com,example2.com,example3.com
```

**Input**

The `getzones()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `getzones` | *string* | The domains for which the method will retrieve zone files. | A comma-separated list of domains. | `example.com,example.net` |


**Output**

The `getzones()` method **must** return a URI-encoded, ampersand-delimited (`&`) list of zone files and their contents. For example:


```perl
cpdnszone-$zone1=$zone1contents&$zone2=$zone2contents
```

**Example subroutine**


```perl
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
```

## quickzoneadd()

* **Required:** Yes.
* **Required input:** Yes.
* **Required output:** Yes.


The `quickzoneadd()` method adds a zone to the system and saves its contents. We recommend that you queue this method, in case of non-fatal errors.

**Example call**


```perl
./dnsadmin --action QUICKZONEADD --data zone=example.com\&zonedata=< uri encoded zonefile >
```

**Input**

The `quickzoneadd()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `zone` | *string* | The zone to add to the configuration database. | A valid DNS zone name. | `example.com.db` |
| `zonedata` | *string* | The contents to save in the new zone file. | A valid string. | `< uri encoded zonefile >` |


**Output**

The `quickzoneadd()` method must return a message of success or an error message:

* An error message — The method failed.
* `Zone $zone has been successfully added` — The method succeeded.


**Example subroutine**


```perl
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
```

## reconfigbind()

* **Required:** No.
* **Required input:** No.
* **Required output:** No.


The `reconfigbind()` method forces BIND to reload the configuration file.

**Example call**


```perl
./dnsadmin --action RECONFIGBIND\
```

**Input**

The `reconfigbind()` method does not require input.

**Output**

The `reconfigbind()` method does not require output.

**Example subroutine**


```perl
# An optional method.
sub reconfigbind {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    $self->output("No reload needed on $self->{'name'}\n");
    return ( $Cpanel::NameServer::Constants::SUCCESS, 'OK' );
}
```

## reloadbind()

* **Required:** No.
* **Required input:** No.
* **Required output:** No.


The `reloadbind()` method forces BIND to reload completely.

**Example call**


```perl
./dnsadmin --action RELOADBIND
```

**Input**

The `reloadbind()` method does not require input.

**Output**

The `reloadbind()` method does not require output.

**Example subroutine**


```perl
# An optional method.
sub reloadbind {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    $self->output("No reload needed on $self->{'name'}\n");
    return ( $Cpanel::NameServer::Constants::SUCCESS, 'OK' );
}
```

## reloadzones()

* **Required:** No.
* **Required input:** No.
* **Required output:** No.


The `reloadzones()` method forces BIND to reload specific zones.

**Example call**


```perl
./dnsadmin --action RELOADZONES --data zones=example1.com,example2.com
```

**Input**

The `reloadzones()` method does not require input.

**Output**

The `reloadzones()` method does not require output.

**Example subroutine**


```perl
# An optional method.
sub reloadzones {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    $self->output("No reload needed on $self->{'name'}\n");
    return ( $Cpanel::NameServer::Constants::SUCCESS, 'OK' );
}
```

## removezone()

* **Required:** No.
* **Required input:** Yes.
* **Required output:** Yes.


The `removezone()` method removes a single zone from the system.

**Example call**


```perl
./dnsadmin --action REMOVEZONE --data zone=example.com
```

**Input**

The `removezone()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `zone` | *string* | The zone to remove. | A valid DNS zone name. | `example.com.db` |


**Output**

The `removezone()` method **must** return one of the following messages:

* An error message — The method failed.
* `'zone' => 'deleted from $node'` — The method succeeded.


**Example subroutine**


```perl
# Create a method to remove a single zone.
sub removezone {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->removezone_local( $dataref->{'zone'}, $unique_dns_request_id ) . "\n" );
    return $self->_check_action( "remove the zone: $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}
```

## removezones()

* **Required:** Yes.
* **Required input:** Yes.
* **Required output:** Yes.


The `removezones()` method removes multiple zones from the system.

**Example call**


```perl
./dnsadmin --action REMOVEZONES --data zone=example.com,example.net
```

**Input**

The `removezones()` method **must** include the following values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `zone` | *string* | The zones to remove. | A comma-separated list of valid DNS zone names. | `example.com,example.net` |


**Output**

The `removezones()` method **must** return one of the following messages:

* An error message — The method failed.
* `'zone' => 'deleted from $node'` — The method succeeded.


**Example subroutine**


```perl
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
```

## revokekeys()

* **Required**: No.
* **Required input**: Yes.
* **Required output**: No.


The `revokekeys()` method removes DNSSEC keys from a remote system and the PowerDNS DNSSEC key database.

**Example call**


```perl
./dnsadmin --action REVOKEKEYS --data cpdnskey-example1.com=< uri encoded DNSSEC key>\&cpdnskey-example2.com=< uri encoded DNSSEC key >
```

**Input**

The `revokekeys()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `cpdnskey-$zonename` | string | A URI-encoded version of the DNSSEC key to remove.  **Note:**  Replace `$zonename` with the name of the zone. For example, cpdnskey-example.com. | A URI-encoded DNSSEC key. | `< uri encoded key >` |


## savezone()

* **Required:** Yes.
* **Required input:** Yes.
* **Required output:** No.


The `savezone()` method saves new records to an existing zone file. This method does **not** add the zone file to the configuration database (for example, the `named.conf` file on BIND servers). We recommend that you queue this method, in case of non-fatal errors.

**Example call**


```perl
./dnsadmin --action SAVEZONE --data zone=example.com\&zonedata=< uri encoded zonefile >
```

**Input**

The `savezone()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `zone` | *string* | The zone to modify. | A valid DNS zone name. | `example.com.db` |
| `zonedata` | *string* | The contents to add to the zone file. | A valid string. | `< uri encoded zonefile >` |


**Output**

The `savezone()` method does not require output.

**Example subroutine**


```perl
# Create a method to save new records to existing zone files.
sub savezone {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->savezone_local( $dataref->{'zone'}, $dataref->{'zonedata'}, $unique_dns_request_id ) );
    return $self->_check_action( "save the zone $dataref->{'zone'}", $Cpanel::NameServer::Constants::QUEUE );
}
```

## synckeys()

* **Required**: No.
* **Required** input: Yes.
* **Required** output: No.


The `synckeys()` method adds DNSSEC keys to a remote system and the PowerDNS DNSSEC key database.

**Example call**


```perl
./dnsadmin --action SYNCKEYS --data cpdnskey-example1.com=< uri encoded DNSSEC key>\&cpdnskey-example2.com=< uri encoded DNSSEC key >
```

**Input**

The `synckeys()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `cpdnskey-$zonename` | string | A URI-encoded version of the DNSSEC key to synchronize.  **Note:**  Replace `$zonename` with the name of the zone. For example, cpdnskey-example.com. | A URI-encoded DNSSEC key. | `< uri encoded key >` |


## synczones()

* **Required:** Yes.
* **Required input:** Yes.
* **Required output:** No.


The `synczones()` method adds multiple zones to a remote system and to the configuration database (the `named.conf` file on BIND servers). We recommend that you queue this method, in case of non-fatal errors.

**Example call**


```perl
./dnsadmin --action SYNCZONES --data cpdnszone-example1.com=< uri encoded zone>\&cpdnszone-example2.com=< uri encoded zone >
```

**Input**

The `synczones()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `cpdnszone-$zonename` | *string* | A URI-encoded version of the zone file to synchronize.**Note:**Replace `$zonename` with the name of the zone. For example, `cpdnszone-example.com`. | A URI-encoded zone name. | `< uri encoded zone >` |


**Output**

The `synczones()` method does not require output.

**Example subroutine**


```perl
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
```

## version()

* **Required:** Yes.
* **Required input:** No.
* **Required output:** Yes.


The `version()` method retrieves the version number of the module on the local or remote system.

**Example call**


```perl
./dnsadmin --action VERSION
```

**Input**

The `version()` method does not require input values.

**Output**

The `version()` method **must** return a version number to display.

**Example subroutine**


```perl
# Create a method that gets a module's version number.
sub version {
   my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
   my $version = $self->{'publicapi'}->version();
   $self->{'error'} = $self->{'publicapi'}->{'error'} if $self->{'publicapi'}->{'error'};
   return $version;
}
```

## zoneexists()

* **Required:** Yes.
* **Required input:** Yes.
* **Required output:** Yes.


The `zoneexists()` method checks whether a zone exists.

**Example call**


```perl
./dnsadmin --action ZONEEXISTS --data zone=example.com
```

**Input**

The `zoneexists()` method **must** include the following input values:

| Variable | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `zone` | *string* | The zone to check. | A valid DNS zone name. | `example.com` |


**Output**

The `zoneexists()` method **must** return one of the following boolean values:

* `1` — The zone exists.
* `0` — The zone does not exist.


**Example subroutine**


```perl
# Create a method to check whether a zone exists.
sub zoneexists {
    my ( $self, $unique_dns_request_id, $dataref, $rawdata ) = @_;
    chomp( $dataref->{'zone'} );
    $self->output( $self->{'publicapi'}->zoneexists_local( $dataref->{'zone'}, $unique_dns_request_id ) ? '1' : '0' );
    return $self->_check_action( "determine if the zone $dataref->{'zone'} exists", $Cpanel::NameServer::Constants::DO_NOT_QUEUE );
}
```