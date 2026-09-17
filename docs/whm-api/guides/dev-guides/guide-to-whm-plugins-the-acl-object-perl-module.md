[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - The ACL Object Perl Module

## Introduction

The ACL object Perl module configures the ACL's namespace and display information. Create the ACL object Perl module in the `/usr/local/cpanel/Cpanel/Config/ConfigObj/Driver/` directory. This file creates a `Cpanel::Config::ConfigObj::Interface::Config::v1` object with additional information about the object's visibility.

## The ACL object Perl module

div
Warning:

To avoid a significant startup cost, we recommend that you load modules dynamically. Load modules at the top of each subroutine; do not call modules via the use function directly. For more information, see the init submodule in the following example.

The following example code creates an object for the `ExampleACL` namespace:


```
package Cpanel::Config::ConfigObj::Driver::ExampleACL;

use strict;

use parent  qw(Cpanel::Config::ConfigObj::Interface::Config::v1);  

our $VERSION = '1.0';

sub init {

    my $class        = shift;
    my $software_obj = shift;

    my $ExampleACL_defaults = {
        'thirdparty_ns' => "ExampleACL",
        'meta'          => {},
    };

    Cpanel::LoadModule::load_perl_module('Cpanel::Config::LoadCpConf');  

    my $self = $class->SUPER::base( $ExampleACL_defaults, $software_obj );

    return $self;
}

sub info {
    my ($self)   = @_;
    my $meta_obj = $self->meta();
    my $abstract = $meta_obj->abstract();
    return $abstract;
}

sub acl_desc {
    return [
        {
            'acl'              => 'software-ExampleACL',
            'default_value'    => 0,
            'default_ui_value' => 1,
            'name'             => 'ExampleACL test',
            'acl_subcat'       => 'Third-Party Services',
        },
    ];
}

1;
```

### Package the module


```
package Cpanel::Config::ConfigObj::Driver::ExampleACL;
```

This declaration instructs Perl to treat all of the file's functions as part of the `Cpanel::Config::ConfigObj::Driver::ExampleACL` namespace.

For more information, read [perldoc.perl.org's package](https://perldoc.perl.org/functions/package) documentation.

### Set the strict pragma


```
use strict;
```

This declaration instructs Perl to return errors if the file contains potentially unsafe code.

For more information, read [perldoc.perl.org's strict](https://perldoc.perl.org/strict) documentation.

### Specify the class's parents


```
use parent qw(Cpanel::Config::ConfigObj::Interface::Config::v1);
```

This declaration instructs Perl to establish an ISA relationship with base classes at compile time.

For more information, read [perldoc.perl.org's perlobj](https://perldoc.perl.org/perlobj) documentation.

### Declare a module version


```
our $VERSION = '1.0';
```

This declaration creates the variable `$VERSION` and sets it to `1.0`. This declaration allows you to differentiate between this and future versions of your module.

### Call modules as needed


```
Cpanel::LoadModule::load_perl_module('<MODULE NAME>');
```

To avoid a significant startup cost, you should load modules dynamically. Call modules at the beginning of each subroutine, do **not** call modules via the use method.

### Initialize the ACL's custom namespace


```
sub init {
    my $class        = shift;
    my $software_obj = shift;

    my $ExampleACL_defaults = {
        'thirdparty_ns' => "ExampleACL",
        'meta'          => {},
    };
    my $self = $class->SUPER::base( $ExampleACL_defaults, $software_obj );

    return $self;
}
```

The `init` subroutine initializes the ACL's custom namespace (`ExampleACL`).

### Configure the object's information


```
sub info {
    my ($self)   = @_;
    my $meta_obj = $self->meta();
    my $abstract = $meta_obj->abstract();
    return $abstract;
}
```

The `info` subroutine configures the ACL's object's information.

### Configure the ACL's description


```
sub acl_desc {
    return [
        {
            'acl'              => 'software-ExampleACL',
            'default_value'    => 0,
            'default_ui_value' => 1,
            'name'             => 'ExampleACL',
            'acl_subcat'       => 'Third-Party Services',
        },
    ];
}
```

The `acl_desc` subroutine configures the ACL's description. This subroutine must return the following parameters and values:

| Parameter | Type | Description | Possible Values | Example |
|  --- | --- | --- | --- | --- |
| `acl` | *string* | The ACL's internal name. | A valid string. | `software-ExampleACL` |
| `default_value` | *Boolean* | The ACL's default setting, to add to the ACL lists for WHM users that already exist. | `1` — Enabled.`0` — Disabled. | `0` |
| `default_ui_value` | *Boolean* | Whether the ACL displays in WHM's [*Edit Reseller Nameservers and Privileges*](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface (*WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges*). | `1` — Display.`0` — Do not display. If you set this value to `0`, server administrators can still set the ACL through the WHM API 1. | `1` |
| `name` | *string* | The ACL's display name (*Feature List* name) in the WHM interface. | A valid string. | `ExampleACL` |
| `acl_subcat` | *string* | The subcategory name under which the ACL will display in the WHM interface. | An [existing category name](/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart):`Account Information``Account Management``Accounts``Advanced Account Management``Clustering``cPanel Management``DNS``Everything``Locales``Package Access``Packages``Packages Creation``Server Information``Services``Third-Party Services``Troubleshooting` | `Third Party Services` |