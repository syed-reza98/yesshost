[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - The ACL Metadata Perl Module

## Introduction

The ACL metadata Perl module defines necessary functions for the ACL system. Create the ACL metadata Perl module in the `/usr/local/cpanel/Cpanel/Config/ConfigObj/Driver/Namespace/` directory, where `Namespace` is the ACL's namespace.

div
Warning:

* This file **must** be the `META.pm` file.
* Do **not** load your `Driver` module in your `META` module.
* To avoid a significant startup cost, we recommend that you load modules dynamically. Load modules at the top of each subroutine. Do **not** call modules via the use function directly.


## The ACL metadata Perl module

The following example code configures metadata for the `ExampleACL` ACL:


```
package Cpanel::Config::ConfigObj::Driver::ExampleACL::META;

use parent qw(Cpanel::Config::ConfigObj::Interface::Config::Version::v1);
our $VERSION = '1.1';
our $REQUIRED_MEM_IN_MIB                          = 512;
our $_RECOMMENDED_MINIMUM_AVAILABLE_MEMORY_IN_MIB = $REQUIRED_MEM_IN_MIB * 2;
use Cpanel::LoadModule ();

use strict;

sub meta_version {
    return 1;
}

sub get_driver_name {
    return 'ExampleACL_driver';
}

sub content {
    my ($locale_handle) = @_;

    my $content = {
        'vendor' => 'WebPros International, LLC',
        'url'    => 'www.cpanel.net',
        'name'   => {
            'short'  => 'ExampleACL Driver',
            'long'   => 'ExampleACL Driver for ExampleACL Plugin test module',
            'driver' => get_driver_name(),
        },
        'since'    => 'cPanel & WHM version 11.118.0.8',
        'abstract' => "An ExampleACL driver for developers to emulate.",
        'version'  => $Cpanel::Config::ConfigObj::Driver::ExampleACL::VERSION,
    };

    if ($locale_handle) {
        $content->{'abstract'} = $locale_handle->maketext("An ExampleACL driver for developers to emulate.");
    }

    return $content;
}

sub showcase {
    Cpanel::LoadModule::load_perl_module('Cpanel::Sys::Hardware::Memory');
    my $available_mem_in_mib = Cpanel::Sys::Hardware::Memory::get_available();
    my $can_display          = $available_mem_in_mib > $_RECOMMENDED_MINIMUM_AVAILABLE_MEMORY_IN_MIB;
    my $can_spotlight        = $available_mem_in_mib > ( $_RECOMMENDED_MINIMUM_AVAILABLE_MEMORY_IN_MIB * 2 );
    if ($can_display) {
         return { 'is_spotlight_feature' => $can_spotlight ? 1 : 0 };
    }  
    return undef;
}
1;
```

### Package the module


```
package Cpanel::Config::ConfigObj::Driver::ExampleACL::META;
```

This declaration instructs Perl to treat all of the file's functions as part of the `Cpanel::Config::ConfigObj::Driver::ExampleACL::META` namespace.

For more information, read [perldoc.perl.org's package](https://perldoc.perl.org/functions/package) documentation.

### Set the strict pragma


```
use strict;
```

This declaration instructs Perl to return errors if the file contains potentially unsafe code.

For more information, read [perldoc.perl.org's strict](https://perldoc.perl.org/strict) documentation.

### Use the ACL object module


```
use Cpanel::Config::ConfigObj::Driver::ExampleACL ();
```

Set the ACL object module as a dependency.

For more information, read [perldoc.perl.org's use](https://perldoc.perl.org/functions/use) documentation.

### Call modules as needed


```
Cpanel::LoadModule::load_perl_module('<MODULE NAME>');
```

To avoid a significant startup cost, you should load modules dynamically. Call modules at the beginning of each subroutine, do **not** call modules via use.

### Set a metadata version


```
sub meta_version {
    return 1;
}
```

The `meta_version` subroutine sets a metadata version number.

### Set the ACL's driver's name


```
sub get_driver_name {
    return 'ExampleACL_driver';
}
```

The `get_driver_name` subroutine returns the ACL's driver's name (`ExampleACL_driver`).

### Configure the ACL's metadata


```
sub content {
    my ($locale_handle) = @_;

    my $content = {
        'vendor' => 'WebPros International, LLC',
        'url'    => 'www.cpanel.net',
        'name'   => {
            'short'  => 'ExampleACL Driver',
            'long'   => 'ExampleACL Driver for ExampleACL Plugin test module',
            'driver' => get_driver_name(),
        },
        'since'    => 'cPanel & WHM version 11.118.0.8',
        'abstract' => "An ExampleACL driver for developers to emulate.",
        'version'  => $Cpanel::Config::ConfigObj::Driver::ExampleACL::VERSION,
    };

    if ($locale_handle) {
        $content->{'abstract'} = $locale_handle->maketext("An ExampleACL driver for developers to emulate.");
    }

    return $content;
}
```

The `content` subroutine configures the ACL's metadata. This subroutine **must** assign the following values to the `$content` hash:

| Parameter | Type | Description | Possible Values | Example |
|  --- | --- | --- | --- | --- |
| `vender` | *string* | The custom ACL's vendor. | A valid string. | `WebPros International, LLC` |
| `url` | *string* | The vendor's website. | A valid URL. | `www.cpanel.net` |
| `name` | *hash* | A hash of ACL name information. | This hash includes the `short`, `long`, and `driver` parameters. |  |
| `short` | *string* | The ACL's driver's short name. Supply this value in the name hash. | A valid string. | `ExampleACL Driver` |
| `long` | *string* | The ACL's driver's long name. Supply this value in the name hash. | A valid string. | `ExampleACL Driver for ExampleACL Plugin test module` |
| `driver` | *string* | The ACL's driver's internal name. Supply this value in the name hash. | Use the `get_driver_name` subroutine to supply this value. | `get_driver_name()` |
| `since` | *string* | The first cPanel & WHM version with which the plugin is compatible. | A valid string. | `cPanel & WHM version 11.118.0.8` |
| `abstract` | *string* | A short description of the plugin. | A valid string. | `An ExampleACL driver for developers to emulate.` |
| `version` | *string* | The ACL's version. | Use the `VERSION` value from the [ACL object module](/guides/guide-to-whm-plugins/guide-to-whm-plugins-the-acl-object-perl-module) to supply this value | `$Cpanel::Config::ConfigObj::Driver::ExampleACL::VERSION` |