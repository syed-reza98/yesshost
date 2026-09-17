[Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-authentication)

# Guide to API Authentication - Secure Remote Logins

## Introduction

cPanel & WHM supports secure remote logins via the `Cpanel::LogMeIn` module.

Important:
* API calls that use a method that includes a URL **must** use the correct port:
* `2082` — Unsecure calls to cPanel's APIs.
* `2083` — Secure calls to cPanel's APIs.
* `2086` — Unsecure calls to WHM's APIs, or to cPanel's APIs via the WHM API 1.
* `2087` — Secure calls to WHM's APIs, or to cPanel's APIs via the WHM API 1.
* `2095` — Unsecure calls to cPanel's APIs via a Webmail session.
* `2096` — Secure calls to cPanel's APIs via a Webmail session.
* Otherwise-correct calls will return `Permission denied` or `Function not found` errors if they use an incorrect port number.
* This document **only** includes cPanel & WHM authentication methods. For Manage2 authentication information, read our [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/) documentation.


## Secure remote logins

To allow users to log in to cPanel & WHM remotely, write a script that calls the `Cpanel::LogMeIn` module's `get_loggedin_url()` subroutine. This subroutine returns a URL for remote logins to cPanel, WHM, or Webmail.

## Parameters

When you call the `get_loggedin_url()` subroutine, you must pass in the following parameters:

| Parameter | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | **Required** The cPanel, WHM, or Webmail username. | A valid username. In most scripts, retrieve this value from user input. | `username` |
| `pass` | *string* | **Required** The account's password. | A secure password. In most scripts, retrieve this value from user input. | `123456luggage` |
| `hostname` | *string* | **Required** The cPanel, WHM, or Webmail account's main domain. | A valid domain on the server. | `example.com` |
| `service` | *string* | **Required** The account's service type. | cpanel whm webmail | cpanel |
| `goto_uri` | *string* | **Required** The location to which the script will redirect the user. The `get_loggedin_url()` subroutine uses this value to create the URL. | A valid path, relative to the `/usr/local/cpanel/base/` directory. Note: For the best system speed and performance, we recommend that you append the `/json-api/dummy` string to your `goto_uri` parameter. For example:`undefined {% title="&goto_uri=/json-api/dummy/frontend/jupiter/park/index.html` | `/frontend/jupiter/park/index.html` |


## Returns

The `get_loggedin_url()` subroutine returns the following values:

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `login_ok` | *Boolean* | Whether the function authenticated the user successfully. | `1` — Success. `0` — Failure. | `1` |
| `login_message` | *string* | A status message from the subroutine. | `Login OK`An error message. | `Login OK` |
| `login_url` | *string* | The secure remote login URL. | A valid URL that includes a valid session token and directs the user to the `goto_uri` path. | `https://example.com:2083/cpsess##########/frontend/jupiter/park/index.html` |


## Example Perl script


```

#!/usr/bin/perl

use lib '/usr/local/cpanel';
use Cpanel::LogMeIn           ();
use Cpanel::Config::Constants ();

# The cPanel, WHM, or Webmail username entered at login.
my $user = 'XXXXXX';

# The cPanel, WHM, or Webmail password entered at login.
my $pass = 'XXXXXX';

# The cPanel, WHM, or Webmail account's main domain.
my $host = 'localhost';

# The service to log in to (cpanel, whm, or webmail).
my $service = 'cpanel';

# This should be user's theme
my $theme = $Cpanel::Config::Constants::DEFAULT_CPANEL_THEME;

# Call the get_loggedin_url subroutine.
my ( $login_ok, $login_message, $login_url, $security_token ) =
  Cpanel::LogMeIn::get_loggedin_url(
    'user'     => $user,
    'pass'     => $pass,
    'hostname' => $host,
    'service'  => $service,
    'goto_uri' => '/'
  );

# Set up HTTP headers with the returned values.
if ($login_ok) {
    print "Location: $login_url\r\n\r\n";
}
else {
    print "Content-type: text/plain\r\n\r\n";
    print "LOGIN FAILED: $login_message\n";
}

# Call the get_loggedin_url subroutine for a different URL.
( $login_ok, $login_message, $login_url, $security_token ) =
  Cpanel::LogMeIn::get_loggedin_url(
    'active_token_for_reuse' => $security_token,
    'user'                   => $user,
    'pass'                   => $pass,
    'hostname'               => $host,
    'service'                => $service,
    'goto_uri'               => '/frontend/' . $theme . '/domains/index.html'
  );

# Set up HTTP headers with the returned values.
if ($login_ok) {
    print "Location: $login_url\r\n\r\n";
}
else {
    print "Content-type: text/plain\r\n\r\n";
    print "LOGIN FAILED: $login_message\n";
}
```