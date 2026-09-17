[Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-authentication)

# Guide to API Authentication - Two-Factor Authentication

## Introduction

[Two-factor authentication](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/) (2FA) requires an additional security code to log in to cPanel & WHM.  A smartphone with a supported time-based one-time password (TOTP) app provides the security code.

Important:
API calls that use a method that includes a URL **must** use the correct port:

* `2082` — Unsecure calls to cPanel's APIs.
* `2083` — Secure calls to cPanel's APIs.
* `2086` — Unsecure calls to WHM's APIs, or to cPanel's APIs via the WHM API 1.
* `2087` — Secure calls to WHM's APIs, or to cPanel's APIs via the WHM API 1.
* `2095` — Unsecure calls to cPanel's APIs via a Webmail session.
* `2096` — Secure calls to cPanel's APIs via a Webmail session.
* Otherwise-correct calls will return `Permission denied` or `Function not found` errors if they use an incorrect port number.
* This guide **only** includes cPanel & WHM authentication methods. For Manage2 authentication information, read our [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/) documentation.


## Enabling 2FA for API calls

To authenticate API calls that require a [username and password](/guides/guide-to-api-authentication/guide-to-api-authentication-username-and-password-authentication) with 2FA, enable *API requests* in the *Security Policy Extensions* section of WHM's *Configure Security Policies* interface (*WHM >> Home >> Security Center >> Configure Security Policies*).

## 2FA with session-based authentication

This script sends the OTP once to establish an authenticated session, and then performs all of the API calls within that session.

### Example Perl script

Note:
This script requires the `LWP::Protocol:https` module. If you attempt to run this script, you **must** first run the `/scripts/perlinstaller LWP::Protocol::https` command to install the module.


```
#!/usr/local/cpanel/3rdparty/bin/perl

use strict;
use warnings;
use Data::Dumper;

use Cpanel::JSON::XS                               ();
use LWP::UserAgent                                 ();
use HTTP::Cookies                                  ();
use Cpanel::Security::Authn::TwoFactorAuth::Google ();

my $user = 'cptest';
my $pass = 'blahblah';

my $base_url  = 'https://127.0.0.1:2083';
my $login_url = $base_url . '/login';

my $cookie_jar = HTTP::Cookies->new();
my $ua         = LWP::UserAgent->new(
    ssl_opts => {
        verify_hostname => 0,
    },
    cookie_jar => $cookie_jar,
);

# This takes the secret that is generated for the account when 2FA
# was configured - if you do not have the secret handy, you can
# choose to reconfigure 2FA on the account, and note the new secret.
my $google_auth = Cpanel::Security::Authn::TwoFactorAuth::Google->new(
    {
        'account_name' => $user,
        'secret'       => 'QSARBVKLZHYHLJ3M',
        'issuer'       => 'issuer name'
    }
);

# Login, and establish a session
my $resp = $ua->post( $login_url, { 'user' => $user, 'pass' => $pass, 'tfa_token' => $google_auth->generate_code() } );
# Parse the security token out, so that you can provide it properly in the subsequent requests
my $security_token = ( split /\//, $resp->header('location') )[1];

my $api_url = $base_url . '/' . $security_token . '/execute/Email/list_pops';
$resp = $ua->get($api_url);
my $json = Cpanel::JSON::XS::decode_json( $resp->decoded_content );
print Dumper $json;
```

### Example PHP script


```
<?
// Path to your OTP Library
// The one used for this script can be downloaded from:
// https://github.com/lelag/otphp
require_once('otphp-master/lib/otphp.php');

$user = "username";
$pass = "password";
$secret = "secret"; // the secret generated from the 2fa setup page

$base_url  = 'https://127.0.0.1:2083';
$login_url = $base_url . '/login';
$cookie_jar = 'cookie.txt';

// get the token
$totp = new \OTPHP\TOTP($secret);
$token = $totp->now();

// these are the fields we went to send in the body of the POST request
$params = array(
    'user' => $user,
    'pass' => $pass,
    'tfa_token' => $token
);

// create a request to the login page that sends your username, password, and tfa token
$login_request = curl_init();                                     // Create Curl Object.
curl_setopt($login_request, CURLOPT_SSL_VERIFYPEER, false);       // Allow self-signed certificates...
curl_setopt($login_request, CURLOPT_SSL_VERIFYHOST, false);       // and certificates that don't match the hostname.
curl_setopt($login_request, CURLOPT_HEADER, true);                // Include headers
curl_setopt($login_request, CURLOPT_RETURNTRANSFER, true);        // Return contents of transfer on curl_exec.
curl_setopt($login_request, CURLOPT_POST, true);                  // We want a POST submission
curl_setopt($login_request, CURLOPT_POSTFIELDS, $params);         // Set the parameters we want
curl_setopt($login_request, CURLOPT_COOKIEJAR, $cookie_jar);      // Set the cookie jar.
curl_setopt($login_request, CURLOPT_URL, $login_url);             // Execute the query.
$result = curl_exec($login_request);
if (!$result) {
    error_log("curl_exec threw error \"" . curl_error($login_request) . "\" for $login_url");
}
curl_close($login_request);

$found_location = preg_match("/cpsess\d+/i", $result, $matches);
if (!$found_location) {
    error_log("Could not find the security token.");
    die;
}

// create an api request to fetch email accounts on your cPanel account
$security_token = $matches[0];
$api_url = $base_url . '/' . $security_token . '/execute/Email/list_pops';

$api_request = curl_init();
curl_setopt($api_request, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($api_request, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($api_request, CURLOPT_RETURNTRANSFER, true);
curl_setopt($api_request, CURLOPT_POST, true);
curl_setopt($api_request, CURLOPT_COOKIEFILE, $cookie_jar); // Send the cookie file with our request
curl_setopt($api_request, CURLOPT_URL, $api_url);
$api_result = curl_exec($api_request);
if (!$api_result) {
    error_log("curl_exec threw error \"" . curl_error($api_request) . "\" for $api_url");
}
curl_close($api_request);

print $api_result;

// remove the cookie jar
unlink($cookie_jar);

?>
```

## 2FA with non-session-based authentication

This script allows you to perform API calls without the need to establish a session, but requires you to send the OTP token with every request in the `X-CPANEL-OTP` header. This script also requires that you know the 2FA secret in order to generate the required tokens.

### Example Perl script


```
use strict;
use warnings;

use Data::Dumper;
use MIME::Base64 ();
use HTTP::Tiny   ();

use Cpanel::Security::Authn::TwoFactorAuth::Google ();

my $user = "asder";
my $pass = "blah1";

my $auth_str    = "Basic " . MIME::Base64::encode( $user . ":" . $pass );
chomp $auth_str;
my $ua          = HTTP::Tiny->new( 'verify_ssl' => 0 );
my $google_auth = Cpanel::Security::Authn::TwoFactorAuth::Google->new(
    {
        'account_name' => $user,
        'secret'       => 'FZ4ZVGTMFTIOF54T',
        'issuer'       => 'e'
    }
);

my $resp = $ua->request(
    "GET",
    "https://127.0.0.1:2083/execute/Ftp/list_ftp",
    {
        headers => {
            'Authorization' => $auth_str,
            'X-CPANEL-OTP'  => $google_auth->generate_code(),
        }
    }
);

if ( $resp->{'success'} ) {
    print "CPANEL API Request successful using user/pass combination\n";
    print "Return:\n$resp->{'content'}\n";
}
else {
    print "CPANEL API Request failed using user/pass combination. $resp->{'status'}: $resp->{'reason'}\n";
}

my $token = "UWU28DCA23NKY76CN17MDPKM3O7EFQY8";

$auth_str = "WHM $user:$token";
$resp = $ua->request(
    "GET",
    "https://127.0.0.1:2087/json-api/applist?api.version=1",
    {
        headers => {
            'Authorization' => $auth_str,
            'X-CPANEL-OTP'  => $google_auth->generate_code(),
        }
    }
);

if ( $resp->{'success'} ) {
    print "WHM API Request successful using user/pass combination\n";
    print "Return:\n$resp->{'content'}\n";
}
else {
    print "WHM API Request failed using user/pass combination. $resp->{'status'}: $resp->{'reason'}\n";
}
```