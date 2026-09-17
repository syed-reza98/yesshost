[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - Hook Action Code

You can create hook action code in a custom Perl module or as an executable script. Use hook action code to customize how cPanel & WHM functions in specific scenarios. For example, you can create a hook action Perl module that runs each time that a user creates an account.

* Hook action code **must** read the entire input stream until end of line (EOL) and it **must** treat it as a JSON-encoded data structure. After the system decodes the JSON string, the native data structure is a hash.
* Scripts may use any language that the Linux shell can execute.
* Hook action code file and subroutine names are arbitrary. However, the system references these names later when you [register your code](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility).
* Make certain that you save hook action code in the correct location on the cPanel & WHM server:
  * Install hook action code modules to your [Perl environment's correct directory](/guides/guide-to-perl).
  * Save hook action scripts in the `/usr/local/cpanel/3rdparty/bin` directory. Scripts **must** have `root:root` ownership and `755` permissions.
* Hook scripts execute as a separate process. Hook modules execute as part of the cPanel Server daemon (`cpsrvd`).
  * Hook action code in a custom Perl module can access cPanel environment variables. For steps to create a hook action code Perl module, read our [Create a Standardized Hook tutorial](/guides/quickstart-development-guide/tutorial-create-a-standardized-hook).
  * Hook action code as a script **cannot** access cPanel environment variables.
  * For more information about cPanel environment variables, read our [Guide to cPanel Variables](/guides/guide-to-cpanel-variables) documentation.


## Perl module

We recommend that you use the following Perl module boilerplate for hook action code:


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

    return [ $my_add ];
}

sub add {
    # Get the data that the system passes to the hook.
    my ( $context, $data ) = @_;               

    my ($result, $message) = (0, '');

    my $ok = your_action();  # Insert your action here
    if ($ok) {
      $result  = 1;                              # This Boolean value is set to succeed.
      $message = 'This is a success message.';   # This string is a reason for $result.
    }
    else {
      $result  = 0;                              # This Boolean value is set to fail.
      $message = 'This is a failure message.';   # This string is a reason for $result.
      }
}

1;
```

### Package the module


```perl
# Package this module.
package MyApp::WHM;
```

This instructs Perl to treat all of the module's functions as part of the `MyApp::WHM` module. Use the module's name as your hook action code's location when you use the [`/usr/local/cpanel/bin/manage_hooks`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility) utility to register your hook.

For more information, read [perldoc.perl.org's package documentation](http://perldoc.perl.org/functions/package.html).

### Set the use strict and use warnings pragmas


```perl
# Return errors if Perl experiences problems.
use strict;
use warnings;
```

If the file contains any code that may be unsafe, these pragmas instruct Perl to return errors.

You can omit the `warnings` pragma in production code. However, we **strongly** recommend that you use it during development.

### Properly decode JSON


```perl
# Properly decode JSON.
use JSON;
```

The JSON module properly encodes and decodes JSON.

Hook action code **must** read the entire input stream until end of line (EOL) and it **must** treat it as a JSON-encoded data structure. After the system decodes the JSON string, the native data structure is a hash.

### Use the describe() method to embed hook attributes


```perl
# Embed hook attributes alongside the action code.
sub describe {
    my $my_add = {
        'category' => 'Whostmgr',
        'event'    => 'Accounts::Create',
        'stage'    => 'post',
        'hook'     => 'MyApp::WHM::add',
        'exectype' => 'module',
    };

    return [ $my_add ];
}
```

This method embeds hook attributes in your hook action code. This helps to simplify the `/usr/local/cpanel/bin/manage_hooks` hook registration process. We **strongly** recommend that you use this method. You **must** use this method if you use a `blocking` attribute.

For more information, read our [`describe()` method](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-describe-method) documentation.

### Write the hook subroutine

The hook subroutine contains all of the actions that your hook will perform. When you create a hook subroutine, we recommend that you:

* Use lowercase function names.
* Separate names that have multiple words with an underscore (`_`) character. This will help to improve readability.
* Do **not** begin functions with an underscore (`_`) character.


For more information about subroutines in Perl, read [perldoc.perl.org's perlsub documentation](http://perldoc.perl.org/perlsub.html).

#### Get data from @_ array


```perl
# Get the data that the system passes to the hook.
my ( $context, $data ) = @_;
```

Declare the `$context` and `$data` variables and assign them the appropriate values from the `@_` array.

When an event triggers the hook action code, the system passes in the following input parameters:

| Input | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `context` | *string* | The hookable event and its category. | A hookable event category, two colons (`:`), and the event name. | `Passwd::ChangePasswd` |
| `data` | *hash reference* | The event's information. | A hash reference to a hash of `key=value` pairs. The system does not define the `data` parameter for events that do **not** provide data. | `key=value` |


#### Set hook success


```perl
# Set a success and success message
my $result  = 1;                               # This Boolean value is set to succeed.
my $message = 'This is a success message.';    # This string is a reason for $result.
...
return ($result, $message);
```

#### Set hook failure


```perl
# Set a failure and failure message
my $result  = 0;                              # This Boolean value is set to fail.
my $message = 'This is a failure message.';   # This string is a reason for $result.
...
return ($result, $message);
```

Declare the `$result` and `$message` variables and assign them values. You can manipulate these values in your custom actions to return helpful output.

We recommend that you write hook action code to return the following:

| Input | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `result` | *Boolean* | **Required**  Whether the action succeeded. The only meaningful `return` values in Perl are `1` (for success) and `0` (for failure).  While Perl allows bare `return` values, we **do not** recommend that you use them. In some circumstances, the system may misinterpret bare `return` values as true. | `1` — Success.  `0` — Failure. | `1` |
| `message` | *string* | A message of success, or an error message.  To block the hook event on failure, you **must** set the `blocking` value to `1` in the `describe()` method. You must also include the following line in your code:  `die("BAILOUT $message");`undefined {% title=" If your code does not contain `BAILOUT`, the system will **not** block the event. | A confirmation message.  A reason for failure. | `This is an error message.` |


#### Return the hook's result


```perl
# Return the hook's result and message.
return $result, $message;
```

After your subroutine performs the desired actions, return the `$result` and `$message` values. The hook action code's primary return value **must** be a single-line print statement to `STDOUT`.

## Perl script

We recommend that you use the following Perl script boilerplate for hook action code:


```perl
#!/usr/local/cpanel/3rdparty/bin/perl

# Return errors if Perl experiences problems.
use strict;
use warnings;

# Use objects to handle input.
use IO::Select;

# Properly decode JSON.
use JSON::Syck;

# Get decoded input.
my $input = get_passed_data();

# Declare return variables and set their values.
my ( $result_result, $result_message ) = do_something($input);

# Return the return variables and exit.
print "$result_result $result_message";
exit;

# Perform the hook's action.
sub do_something {
    # Get the input data.
    my ($input) = @_;

    my ($result, $message) = (0, '');

    my $ok = your_action();  # Insert your action here
    if ($ok) {
        $result  = 1;                              # This Boolean value is set to succeed.
        $message = 'This is a success message.';   # This string is a reason for $result.
    }
    else {
        $result  = 0;                              # This Boolean value is set to fail.
        $message = 'This is a failure message.';   # This string is a reason for $result.
    }

}

# Process data from STDIN.
sub get_passed_data {
    # Declare input variables.
    my $raw_data   = '';
    my $input_data = {};

    # Set up an input object.
    my $selects    = IO::Select->new();

    # Get input from STDIN.
    $selects->add( \*STDIN );

    # Process the raw output, and JSON-decode.
    if ( $selects->can_read(.1) ) {
        while (<STDIN>) {
            $raw_data .= $_;
        }
        $input_data = JSON::Syck::Load($raw_data);
    }

    # Return the output.
    return $input_data;
}
```

### Set the use strict and use warnings pragmas


```perl
# Return errors if Perl experiences problems.
use strict;
use warnings;
```

If the file contains any code that may be unsafe, these pragmas instruct Perl to return errors.

You can omit the `warnings` pragma in production code. However, we **strongly** recommend that you use it during development.

### Properly handle input


```perl
# Use objects to handle input.
use IO::Select;
```

This example uses the `IO::Select` module to handle input. For more information, read [perldoc.perl.org's `IO::Select` documentation](http://perldoc.perl.org/IO/Select.html).

### Properly decode JSON


```perl
# Properly decode JSON.
use JSON::Syck;
```

This example uses the `JSON::Syck` module to properly encode and decode JSON.

Hook action code **must** read the entire input stream until end of line (EOL) and it **must** treat it as a JSON-encoded data structure. After the system decodes the JSON string, the native data structure is a hash.

### Assign decoded input to $input


```perl
# Get decoded input.
my $input = get_passed_data();
```

Declare a variable to contain decoded input and use the `get_passed_data()` subroutine to set its value. The `get_passed_data()` subroutine contains the logic to retrieve the data that the system passes via `STDIN`. This subroutine then decodes the data and returns it in a useful format.

### Declare return variables and set their values


```perl
# Declare return variables and set their values.
my ( $result_result, $result_message ) = do_something($input);
```

Declare the `$result_result` and `$result_message` variables and use the `do_something()` subroutine to set their values. The `do_something()` subroutine performs the desired hook action. It also returns the Boolean status and a message of success or failure.

### Return the hook's result and exit


```perl
# Return the return variables and exit.
print "$result_result $result_message";
exit;
```

Return the `$result_result` and `$result_message` values and then exit. The hook action code's primary return value must be a single-line print statement to `STDOUT`.

### Write a subroutine to perform the hook's action

The hook subroutine contains all of the actions that your hook will perform. When you create a hook subroutine, we recommend that you:

* Use lowercase function names.
* Separate names that have multiple words with an underscore (`_`) character. This will help to improve readability.
* Do **not** begin functions with an underscore (`_`) character.


For more information about subroutines in Perl, read [perldoc.perl.org's perlsub documentation](http://perldoc.perl.org/perlsub.html).

#### Get data from @_ array


```perl
# Get the input data.
my ($input) = @_;
```

Declare the `$input` variable and assign it the appropriate value from `@_` array.

#### Set hook success


```perl
# Set a success and success message
my $result  = 1;                               # This Boolean value is set to succeed.
my $message = 'This is a success message.';    # This string is a reason for $result.
...
return ($result, $message);
```

#### Set hook failure


```perl
# Set a failure and failure message
my $result  = 0;                              # This Boolean value is set to fail.
my $message = 'This is a failure message.';   # This string is a reason for $result.
...
return ($result, $message);
```

Declare the `$result` and `$message` variables and assign them values. You can manipulate these values in your custom actions to return helpful output.

We recommend that you write the hook action code to return the following output:

| Input | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `result` | *Boolean* | **Required**  Whether the action succeeded. The only meaningful return values in Perl are `1` (for success) and `0` (for failure).  While Perl allows bare `return` values, we **do not** recommend that you use them. In some circumstances, the system may misinterpret bare `return` values as true. | `1` — Success.  `0` — Failure. | `1` |
| `message` | *string* | A message of success, or an error message.  To block the hook event on failure, you **must** set the `blocking` value to `1` in the `describe()` method. You must also include the following line in your code:  `die("BAILOUT $message");`undefined {% title=" If your code does not contain `BAILOUT`, the system will **not** block the event. | A confirmation message.  A reason for failure. | `This is an error message.` |


#### Return the hook's result


```perl
# Return the hook's result and message.
return $result, $message;
```

After your subroutine performs the desired actions, return the `$result` and `$message` values.

### Write a subroutine to retrieve and decode input

This subroutine contains the logic to retrieve the data that the system passes via `STDIN`. The subroutine then decodes and returns the data in a useful format.

#### Declare input variables


```perl
# Declare input variables.
my $raw_data   = '';
my $input_data = {};
```

Declare the `$raw_data` and `$input_data` variables and set their values.

#### Create an input object


```perl
# Set up an input object.
my $selects    = IO::Select->new();
```

Declare the `$selects` value and use the `IO::Select` module's `new()` method to create a new `IO::Select` object. For more information, read [perldoc.perl.org's `IO::Select` documentation](http://perldoc.perl.org/IO/Select.html).

#### Get input from STDIN


```perl
# Get input from STDIN.
$selects->add( \*STDIN );
```

Use the `IO::Select` module's `add()` method to retrieve input from `STDIN`. When an event triggers hook action code, the system passes in the following input parameters:

| Input | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `context` | *string* | The hookable event and its category. | A hookable event category, two colons (`:`), and the event name. | `Passwd::ChangePasswd` |
| `data` | *hash reference* | The event's information. | A hash reference to a hash of `key=value` pairs. The system does not define the `data` parameter for events that do **not** provide data. | `key=value` |


#### Process and JSON-decode the raw output


```perl
# Process the raw output, and JSON-decode.
if ( $selects->can_read(.1) ) {
    while (<STDIN>) {
        $raw_data .= $_;
    }
    $input_data = JSON::Syck::Load($raw_data);
}
```

Assign the data from `STDIN` to the `$raw_data` variable. Then use the `JSON::Syck` module's `Load()` method to decode the raw JSON input and assign it to the `input_data` variable.

#### Return the properly-decoded output


```perl
# Return the output.
return $input_data;
```

Return the decoded data for use by the script's other functions.

## PHP script

We recommend that you use the following PHP script boilerplate for hook action code:


```php
#!/usr/local/cpanel/3rdparty/bin/php -q

<?php

// Get decoded input.
$input = get_passed_data();

// Declare return variables and set their values.
list($result_result, $result_message) = do_something($input);

// Return the return variables.
echo "$result_result $result_message";

// Perform the hook's action, using the decoded input.
function do_something($input = array()) {
    // Insert your actions here.

    my ($result, $message) = (0, '');

    my $ok = your_action();  # Insert your action here
    if ($ok) {
      $result  = 1;                              # This Boolean value is set to succeed.
      $message = 'This is a success message.';   # This string is a reason for $result.
    }
    else {
      $result  = 0;                              # This Boolean value is set to fail.
      $message = 'This is a failure message.';   # This string is a reason for $result.
    }

  }

// Process data from STDIN.
function get_passed_data() {

    // Get input from STDIN.
    $raw_data = '';
    $stdin_fh = fopen('php://stdin', 'r');
    if ( is_resource($stdin_fh) ) {
        stream_set_blocking($stdin_fh, 0);
        while ( ($line = fgets( $stdin_fh, 1024 )) !== false ) {
            $raw_data .= trim($line);
        }
        fclose($stdin_fh);
    }

    // Process and JSON-decode the raw output.
    if ($raw_data) {
        $input_data = json_decode($raw_data, true);
    } else {
        $input_data = array('context'=>array(),'data'=>array(), 'hook'=>array());
    }

    // Return the output.
    return $input_data;
}
?>
```

### Assign decoded input to $input


```php
// Get decoded input.
$input = get_passed_data();
```

Use the `get_passed_data()` function to set the value for the `$input` variable. The `get_passed_data()` function contains logic to retrieve the data that the system passes via `STDIN`. The function then decodes and returns the data in a useful format.

### Declare return variables and set their values


```php
// Declare return variables and set their values.
list($result_result, $result_message) = do_something($input);
```

Declare the `$result_result` and `$result_message` variables and use the `do_something()` function to set their values. The `do_something()` function performs the desired hook action. It also returns a Boolean status and a message of success or failure.

### Return the hook's result


```php
// Return the return variables.
echo "$result_result $result_message";
```

Return the `$result_result` and `$result_message` values. The hook action code's primary return value **must** be a single-line print statement to `STDOUT`.

### Write a function to perform the hook's action

The hook function contains all of the actions that your hook will perform. When you create a hook function, we recommend that you:

* Use lowercase function names.
* Separate names that have multiple words with an underscore (`_`) character. This will help to improve readability.
* Do **not** begin functions with an underscore (`_`) character.


#### Begin the function and set the $input value


```php
// Perform the hook's action, using the decoded input.
function do_something($input = array()) {
```

Begin the `do_something` function and assign a value to `$input`.

#### Set hook success


```php
# Set a success and success message
my $result  = 1;                               # This Boolean value is set to succeed.
my $message = 'This is a success message.';    # This string is a reason for $result.
...
return ($result, $message);
```

#### Set hook failure


```php
# Set a failure and failure message
my $result  = 0;                              # This Boolean value is set to fail.
my $message = 'This is a failure message.';   # This string is a reason for $result.
...
return ($result, $message);
```

Assign values to the `$result` and `$message` variables. You can manipulate these values in your custom actions to return helpful output.

We recommend that you write the hook action code to return the following output:

| Input | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `result` | *Boolean* | **Required**  Whether the action succeeded. The only meaningful `return` values in Perl are `1` (for success) and `0` (for failure).  While Perl allows bare `return` values, we **do not** recommend that you use them. In some circumstances, the system may misinterpret bare `return` values as true. | `1` — Success.  `0` — Failure. | `1` |
| `message` | *string* | A message of success, or an error message.  To block the hook event on failure, you **must** set the `blocking` value to `1` in the `describe()` method and include `BAILOUT` in the failure message. If the message does not include `BAILOUT`, the system will **not** block the event. | A confirmation message.  A reason for failure. | `This is an error message.` |


#### Return the hook's result


```php
// Return the hook result and message.
return array($result, $message);
```

After your subroutine performs the desired actions, return the `$result` and `$message` values.

### Write a function to retrieve and decode input

This function contains logic to retrieve the data that the system passes via `STDIN`. This function then decodes the data and returns it in a useful format.

#### Get input from STDIN


```php
// Get input from STDIN.
$raw_data = '';
$stdin_fh = fopen('php://stdin', 'r');
if ( is_resource($stdin_fh) ) {
    stream_set_blocking($stdin_fh, 0);
    while ( ($line = fgets( $stdin_fh, 1024 )) !== false ) {
        $raw_data .= trim($line);
    }
    fclose($stdin_fh);
}
```

Assign the values from `STDIN` to the `$raw_data` variable.

When an event triggers the hook action code, the system passes in the following input parameters:

| Input | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `context` | *string* | The hookable event and its category. | A hookable event category, two colons (`:`), and the event name. | `Passwd::ChangePasswd` |
| `data` | *hash reference* | The event's information. | A hash reference to a hash of `key=value` pairs. The system does not define the `data` parameter for events that do **not** provide data. | `key=value` |


#### Process and JSON-decode the raw output.


```php
// Process and JSON-decode the raw output.
if ($raw_data) {
    $input_data = json_decode($raw_data, true);
} else {
    $input_data = array('context'=>array(),'data'=>array(), 'hook'=>array());
}
```

JSON-decode the input and assign it to the `input_data` variable.

#### Return the properly-decoded output


```php
// Return the output.
return $input_data;
```

Return the decoded data for use by the script's other functions.