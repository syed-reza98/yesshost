[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - Exceptions

The Standardized Hooks System honors exceptions in hook action code or in check actions. The use of [exceptions](http://en.wikipedia.org/wiki/Exceptions) is commonplace for many developers.

* The dispatch loop will halt iteration, log the exception to the `/usr/local/cpanel/logs/error_log` file, and proceed to iterate through any rollback actions when hook action code or the check action in a `blocking` event raises an exception.


Important:
For the check action in a `blocking` event to raise an exception, you **must** set the `blocking` value to `1` in the `describe` method and include an [exception](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-exceptions/#exceptions-in-perl-modules). Only specific `pre`-stage events can block an event from executing.

* When a non-`blocking` event raises an exception, the dispatch loop will log the exception, but continue to iterate through any remaining hook actions.


### Exceptions in Perl modules

In Perl code, you can use any Perl function that normally raises an exception (for example, `die()`). The message body **must** contain the term `BAILOUT`.

### Exceptions in scripts

Different scripting languages have different implementations of exceptions. To raise an exception in a script, the script must print `BAILOUT` to `STDOUT` and exit.

## Examples

The following sections illustrate how to raise an exception that will print  `Could not connect to remote server` in the error log.

### Perl

The following example Perl code includes an exception:


```perl
# Perl Module Example
sub my_hook {
    my ($context, $dataset) = @_;
    my $conn = AwesomeServer->connect($user, $pass, $whatever);
    if (!$conn) {
        die "BAILOUT Could not connect to remote server";
    }
    #...    
    return 1;
}
```

### Script

The following example script includes an exception:


```php
// PHP Script Example
function my_hook($context, $dataset){
    try {
        $result = _hook($context, $dataset);
        $msg = ($result)? "Hook succeeded" : "Hook failed";
        echo "$result $msg";
    }
    catch(Exception $e) {
        echo $e->getMessage();
        exit;
    }
}
function _hook($context, $dataset) {
    my $conn = AwesomeServer->connect($user, $pass, $whatever);
    if (!$conn) {
        throw new RuntimeException("BAILOUT Could not connect to remote server");
    }
    #...
    return 1;
}
```