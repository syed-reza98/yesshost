[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - The describe() Method

The `describe()` method embeds hook action code attributes in your hook action code. This provides a programmatic means for the action code to express the developer's intended use of the hook.

## Basic usage

To use the `describe()` method, create a `describe` subroutine that returns the appropriate category, event, stage, and other attributes for the `/usr/local/cpanel/bin/manage_hooks` utility.

If you use a `blocking` attribute, you **must** set its value to `1` in the `describe()` method, and add an [exception](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-exceptions/#exceptions-in-perl-modules) to define a failure message.

For more information, read our [The `manage_hooks` Utility](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility) and [Hook Action Code](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hook-action-code) documentation.

### The describe() method in Perl modules

In Perl modules, the `describe()` method **must** return a Perl array reference, which **must** contain one or more hash references.

* Each hash reference relates to **one** hookable action and creates a single entry for the Standardized Hooks database.
* The hash reference must, at minimum, contain the `category`, `event`, `stage`, `exectype`, and `hook` descriptors.


### The describe() method in scripts

Important:
Scripts must include argument evaluation in the hook action code in order to use the `describe()` method. When you register hooks with script hook action code, the `/usr/local/cpanel/bin/manage_hooks` utility calls the script with the `--describe` argument.

In scripts, the `describe()` method **must** return a JSON-encoded string. When you decode the string, the JSON structure **must** be an array that contains one or more hashes, or associative arrays.

* Each hash reference relates to **one** hookable action and creates a single entry for the Standardized Hooks database.
* The hash reference must, at minimum, contain the `category`, `event`, `stage`, `exectype`, and `hook` descriptors.


Make certain that the `hook` descriptor uses the correct method to invoke the script in order to perform the hookable action.

* If the script is monolithic, and performs internal logic based on the context, provide the script's absolute path and filename.
* If the script can parse input arguments via a shell argument array (for example, `$argv` or `@argv`), it should specify the absolute path and filename and the argument to switch to the proper code block.


## Examples

The following examples contain `describe` method information and subroutines for two hooks:

1. The first hook's information executes the `add()` subroutine (the `MyApp::WHM::add()` subroutine in the Perl module example) after cPanel & WHM creates an account.
2. The second hook's information executes the `remove()` subroutine (the `MyApp::WHM::remove()` subroutine in the Perl module example) prior to the account's deletion.


### Perl module


```perl
# Package this module.
package MyApp::WHM;

# Return errors if Perl experiences problems.
use strict;
use warnings;

# Properly decode JSON.
use JSON;

# Embed hook attributes alongside the action code.
sub describe {
    my $my_add = {
        'category' => 'Whostmgr',
        'event'    => 'Accounts::Create',
        'stage'    => 'post',
        'hook'     => 'MyApp::WHM::add',
        'exectype' => 'module',
    };

    my $my_remove = {
        'blocking' => 1,
        'category' => 'Whostmgr',
        'event'    => 'Accounts::Remove',
        'stage'    => 'pre',
        'hook'     => 'MyApp::WHM::remove',
        'exectype' => 'module',
    };

    return [$my_add, $my_remove];
}

sub add {
    my ( $context, $data ) = @_;                 # Get the data that the system passes to the hook.

    my $result  = 1;                             # This boolean value is set to fail.    
    my $message = 'This is an error message.';   # This string is a reason for $result.

    # Insert your actions here.

    # Return the hook's result and message.
    return $result, $message;
}

sub remove {
    my ( $context, $data ) = @_;                 # Get the data that the system passes to the hook.

    my $result  = 1;                             # This boolean value is set to fail.    
    my $message = 'This is an error message.';   # This string is a reason for $result.

    # Insert your actions here.

    # Return the hook's result and message.
    return $result, $message;
}

1;
```

### PHP script


```php
#!/usr/local/cpanel/3rdparty/bin/php -q
<?php
// file - /var/cpanel/myapp/whm.php

// Any switches passed to this script
$switches = (count($argv) > 1) ? $argv : array();

// Argument evaluation.
if (in_array('--describe', $switches)) {
    echo json_encode( describe() );
    exit;
} elseif (in_array('--add', $switches)) {
    list($status, $msg) = add();
    echo "$status $msg";
    exit;
} elseif (in_array('--remove', $switches)) {
    list($status, $msg) = remove();
    echo "$status $msg";
    exit;
} else {
    echo '0 myapp/whm.php needs a valid switch';
    exit(1);
}

// Embed hook attribute information.
function describe() {
    $my_add = array(
        'category' => 'Whostmgr',
        'event'    => 'Accounts::Create',
        'stage'    => 'post',
        'hook'     => '/var/cpanel/myapp/whm.php --add',
        'exectype' => 'script',
    );
    $my_remove = array(
        'blocking' => 1,
        'category' => 'Whostmgr',
        'event'    => 'Accounts::Remove',
        'stage'    => 'pre',
        'hook'     => '/var/cpanel/myapp/whm.php --remove',
        'exectype' => 'script',
    );
    return array($my_add, $my_remove);
}

function add() {
    // Your actions go here.
}

function remove() {
    // Your actions go here.
}
?>
```