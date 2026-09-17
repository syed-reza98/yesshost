[Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to-api-privilege-escalation)

# Guide to API Privilege Escalation - Call Your Application

To use your `AdminBin` application, call the appropriate method. The method to use depends on whether you wrote the application in Perl.

## Application call methods

Select a method below to view the recommended method for your application:

* [The Call method](#the-call-method)
* [The Wrap method](#the-wrap-method)


## The Call method

To run your Perl-based `AdminBin` application, call the `Cpanel::AdminBin::Call::call` function. This function passes your arguments to the `AdminBin` module.

### Example

The following example demonstrates how to use this functionality within a Perl script:


```perl
#!/usr/local/cpanel/3rdparty/bin/perl

use Data::Dumper ();

use Cpanel::AdminBin::Call ();

sub do_MyExample_stuff {
    my $thing_to_do = shift;
    my $string_to_mess_with = shift;

    #Prevent potential action-at-a-distance bugs.
    #(cf. documentation for CPAN's Try::Tiny module)
    local $@;

    my $val;

    #NOTE: call() will throw an exception if there was an error
    #while communicating with the admin module or if an exception
    #escaped from a method call within the admin module.
    my $ok = eval {
        $val = Cpanel::AdminBin::Call::call(
            'MyNamespace',
            'MyExample',
            $thing_to_do,
            $string_to_mess_with,
        );

        1;
    };

    if ($ok) {
        return ref($val) ? Data::Dumper::Dumper($val) : $val;
    }

    my $err = $@;
    return "Error: $err";
}

print "Content-type: text/html\r\n\r\n";

print "<pre>";

print "ECHO test:\n" . do_MyExample_stuff("ECHO","Hello, World!") . "\n\n";
print "MIRROR test:\n" . do_MyExample_stuff("MIRROR","Hello, World!") . "\n\n";
print "BOUNCY test:\n" . do_MyExample_stuff("BOUNCY","Hello, World!") . "\n\n";
print "HASHIFY test:\n" . do_MyExample_stuff("HASHIFY","Hello, World!") . "\n\n";
print "WRONG test:\n" . do_MyExample_stuff("WRONG","Hello, World!") . "\n\n";

print "DEATH test:\n" . do_MyExample_stuff("DEATH") . "\n\n";

print "test complete!\n";
```

In the same directory as the `MyExample` module file, you **must** create the `MyExample.conf` configuration file with the following contents:


```
mode=full
```

For more information about the configuration file, read our [Configuration Files](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-configuration-files/) documentation.

## The Wrap method

If you did not write your `AdminBin` application in Perl, call the `Cpanel::Wrap::send_cpwrapd_request` method. This method passes your arguments and parameters into the application via `STDIN`.

* Your subroutines are private to the `AdminBin` application. User-level code that calls the `Cpanel::Wrap::send_cpwrapd_request` method **cannot** access these subroutines because `AdminBin` applications execute in a separate process.
* The `AdminBin` application receives a pseudo-function name as the second argument.
  * Use the pseudo-function name to determine the code path to execute in your `AdminBin` application.
  * The simplest way to implement this is an `IF` block.


### Example

The following LiveAPI example uses this functionality within the Perl environment.


```perl
#!/usr/local/cpanel/3rdparty/bin/perl

BEGIN {
    unshift @INC, '/usr/local/cpanel';
}

use Cpanel::LiveAPI ();
use Data::Dumper    ();
use Cpanel::Wrap    ();

sub do_MyExample_stuff {
    my $thing_to_do = shift;
    my $string_to_mess_with = shift;

    my $result = Cpanel::Wrap::send_cpwrapd_request(
        'namespace' => 'MyNamespace',
        'module'    => 'MyExample',
        'function'  => $thing_to_do,
        'data'      => $string_to_mess_with
    );

    if ( $result->{'error'} ) {
        return "Error code $result->{'exit_code'} returned: $result->{'data'}";
    }
    elsif ( ref ( $result->{'data'} ) ) {
        return Data::Dumper::Dumper($result->{'data'});
    }
    elsif ( defined( $result->{'data'}) ) {
        return $result->{'data'};
    }
    return 'cpwrapd request failed: ' . $result->{'statusmsg'};
}

my $cpanel = Cpanel::LiveAPI->new();

print "Content-type: text/html\r\n\r\n";

print "<pre>";

print "ECHO test:\n".do_MyExample_stuff("ECHO","Hello, World!")."\n\n";
print "MIRROR test:\n".do_MyExample_stuff("MIRROR","Hello, World!")."\n\n";
print "BOUNCY test:\n".do_MyExample_stuff("BOUNCY","Hello, World!")."\n\n";
print "HASHIFY test:\n".do_MyExample_stuff("HASHIFY","Hello, World!")."\n\n";
print "WRONG test:\n".do_MyExample_stuff("WRONG","Hello, World!")."\n\n";

print "test complete!\n";
$cpanel->end();
```

### Returns

The system sends returns from the `AdminBin` application via `STDOUT` and processes them through the `AdminBin` server. The system returns them via the `Cpanel::Wrap::send_cpwrapd_request` method.

* The system may return data in the form of a data structure or a scalar value.
* If the `AdminBin` application returns a data structure, it **must** serialize the output with either the `Cpanel::AdminBin::Serializer::Dump` module, or in the JSON format.
  * You **must** prefix serialized output with a period and a newline (`.\n`) before you send the serialized data.
  * When the `AdminBin` server receives a period and a newline, it automatically treats the data as serialized and processes it with the `Cpanel::AdminBin::Serializer::Load` module.