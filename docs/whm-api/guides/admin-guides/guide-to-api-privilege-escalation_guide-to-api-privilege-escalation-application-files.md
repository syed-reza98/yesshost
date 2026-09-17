[Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to-api-privilege-escalation)

# Guide to API Privilege Escalation - Application Files

The application file contains the functions that you wish for the system to escalate. The application file performs the following steps:

1. Receives and sanitizes the data.
2. Authorizes the action.
3. Performs the requested action.
4. Returns the result.


## How to write the application

You can write your `AdminBin` application in any programming language. However, we recommend that you write the file as a Perl module that uses the `Cpanel::AdminBin::Base` module.

* The `root` user **must** own the file.
* You **must** set the file to `0700` permissions (writable, readable, and executable by owner).
* Store this file with the configuration file in a new namespace in the `/usr/local/cpanel/bin/admin/` directory.
  * The namespace and the directory name that you create in the `/usr/local/cpanel/bin/admin/` **must** be identical.
  * For example, you could create the `TheNameSpace` namespace and `/usr/local/cpanel/bin/admin/TheNameSpace` directory.
* The configuration file should contain the following text:

```
mode=full
```


Note:
* You do **not** need a separate configuration file for the [Admin module method](#the-admin-module-method).
* For more about the configuration file and its parameters, read the [Configuration File](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-configuration-files) documentation.


## The Admin module method

Important:
We **strongly** recommend that you use this method.

This example file shows the admin module's basic usage:


```perl
package Cpanel::Admin::Modules::GreatHosting::GreatThings;

use strict;
use warnings;

use parent 'Cpanel::Admin::Base';

use constant _actions => (
    'SAY_HI',
    'GET_INFO',
);

# This function returns the string, “hello”.
sub SAY_HI {
    return 'hello';
}

# This function returns a list of values. The first-returned value is an array reference that
# contains all of the values that the caller sent.
sub GET_INFO {
    my ($self, @args) = @_;

    return (
        \@args,
        $self->get_cpuser_domains(),
        $self->get_caller_username(),
    );
}

1;
```

## The Wrap method

Warning:
The application file **must** sanitize its own inputs. The system does **not** sanitize them.

This example file uses `simple` mode. However, we recommend that you use `full` mode whenever possible.


```perl
#!/usr/local/cpanel/3rdparty/bin/perl
use strict;
use Cpanel::AdminBin::Serializer ();
use Cpanel::Logger               ();
use Cpanel::PwCache              ();

my $stdin = <STDIN>;
chomp $stdin;
my ($uid,$function,$data) = split (/ /,$stdin,3);
#
 sanitize the input; in this case, only alphanumeric, underscore, space,
 period, and exclamation are allowed $data =~ s/![\w \.\!]//g;  

# make a note in the logs! my $user = (Cpanel::PwCache::getpwuid($uid))[0];
my $logger = Cpanel::Logger->new();
$logger -> warn("Myexample called by user $user with function: $function");

if ($function eq 'ECHO') {
        print $data;
        exit(0);
}

elsif ($function eq 'MIRROR') {
        print scalar reverse($data);
        exit(0);
}

elsif ($function eq 'BOUNCY') {
        print _bouncy($data);
        exit(0);
}

elsif ($function eq 'HASHIFY') {
        print ".\n" . Cpanel::AdminBin::Serializer::Dump ({ 'ourdata' =>  $data} );
        exit(0);
}

else {
        print "Invalid function specified to MyExample adminbin function";
        exit(1);
}

1;

sub _bouncy {
        my $data_in = shift;
        my $data_out = q{};
        for my $i (0..length($data_in)-1) {
                if ($i % 2) {
                        $data_out .= substr( $data_in,$i,1); }
                else {
                        $data_out .= uc(substr( $data_in,$i,1)); }}
        return $data_out;
}
```

### Parameters

The parameter order that the system passes to the `Cpanel::Wrap::send_cpwrapd_request` method is constant. However, some parameters' behavior depends on the configuration file's `mode` value.

For more information, read our [Configuration Files](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-configuration-files) documentation.

| Parameter | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `uid` | *integer* | **Required**  The authenticated user's user ID. The system passes this value automatically.  The configuration file's `mode` value determines this parameter's behavior. | A valid system user ID. | `1000` |
| `function` | *string* | **Required**  The application's pseudo-function.  The configuration file's `mode` value determines this parameter's behavior. | A valid string. | `ECHO` |
| `data` | *scalar* **or** *data structure* | **Required**  The data to process.  The configuration file's `mode` value determines this parameter's behavior. | A scalar value, if the configuration `mode` value is `simple`.  A data structure, if the configuration `mode` value is `full`. | `data` |
| `action` | *string* | **Required**  The output's behavior. This value defaults to `run`.  If the `AdminBin` application module return starts with `.\n`, the system automatically switches the action to `fetch`. | `run` — Return the output as a string.  `fetch` — Serialize the output into a JSON structure.  `stream` — Streams the results. This causes the `AdminBin` server to send the output directly to the filehandle that the system passed in the stream key to the `Cpanel::Wrap::send_cpawrapd_request` call.  | `run` |
| `env` | *hash reference* | **Required**  A hash reference of keys and values to set in the environment before the `AdminBin` application executes. | `REMOTE_PASSWORD`  `CPRESELLER`  `CPRESELLERSESSION`  `CPRESELLERSESSIONKEY`  `WHM50`  `cp_security_token`  `Cpanel::Wrap::Config::safe_hashref_of_allowed_env` | `WHM50` |
| `module` | *string* | **Required**  The application's filename. | The application file's filename. | `Example` |
| `namespace` | *string* | **Required**  The application's namespace. | The application's namespace. This value is identical to the directory name. | `NameSpace` |
| `stream` | *string* | A filehandle to which the system streams the application's output.  **Only** use this parameter if you set the action parameter to `stream`. | A valid filehandle. | `Filehandle` |
| `version` | *string* | **Always** set this value to `Cpanel::AdminBin::Serializer::VERSION`. | `Cpanel::AdminBin::Serializer::VERSION` | `Cpanel::AdminBin::Serializer::VERSION` |