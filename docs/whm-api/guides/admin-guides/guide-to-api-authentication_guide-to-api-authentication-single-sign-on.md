[Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-authentication)

# Guide to API Authentication - Single Sign On

## Introduction

The *Single Sign On* feature generates a temporary session to authenticate with cPanel & WHM.  For example, this feature generates a temporary session whenever the root user or a reseller uses the following methods to access a cPanel user's account:

* WHM's  [*List Accounts*](https://docs.cpanel.net/whm/account-information/list-accounts/) interface (*WHM >> Home >> Account Information >> List Accounts*).
* WHM API 1's  [`create_user_session`](/openapi/whm/operation/create_user_session/)  function.


Third-party applications with WHM access can use this feature to log in to cPanel accounts without the need to store their account passwords. The system automatically destroys the temporary session when it logs out or expires (sessions expire after 15 minutes of inactivity). This feature also creates temporary sessions when a cPanel user logs in to Webmail through the cPanel interface.

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


## Single sign-on

To use this method, perform the following steps:

1. Call WHM API 1's  `create_user_session`  function.
2. Send a GET request to the URL that the function returns as the url value.
**Note**: The session will **not** function until you sent this request. The GET request to the login URL returns a cookie that **must** exist for subsequent API calls to authenticate successfully.
3. Configure your script to use the temporary session ID and security token to access the account through either the [API tokens](/guides/guide-to-api-authentication/guide-to-api-authentication-api-tokens-in-whm) or [username and password](/guides/guide-to-api-authentication/guide-to-api-authentication-username-and-password-authentication) methods.


### Example Perl script

Note:
This script calls WHM API 1's [`create_user_session`](/openapi/whm/operation/create_user_session/) function. Make **certain** that you update this code for the correct API version, port, and other function-specific call information.


```
#!/usr/bin/perl
use strict;
use LWP::UserAgent;
use LWP::Protocol::https;
use HTTP::Cookies ();
use MIME::Base64 ();
use JSON;

# This can also be the reseller who owns the cPanel user
my $user = "root";
my $pass = "password";

# The user on whose behalf the API call runs
# For webmaild sessions, use the cPanel user or their full email address
my $cpanel_user = "username";

# form the authentication header
my $auth = "Basic " . MIME::Base64::encode( "${user}:${pass}" );

# instantiate the root http request object
my $root_ua = LWP::UserAgent->new(
    ssl_opts   => { verify_hostname => 0, SSL_verify_mode => 'SSL_VERIFY_NONE', SSL_use_cert => 0 },
);
# Set the authentication header
$root_ua->default_header( Authorization => $auth );
# Allows for self signed certificates
$root_ua->ssl_opts( verify_hostname => 0 );

# make the request to create the user session
my $response = $root_ua->get("https://10.0.0.1:2087/json-api/create_user_session?api.version=1&user=$cpanel_user&service=cpaneld" );

# Decode the json formatted response
my $json_decoded_payload = decode_json($response->decoded_content());
my $session_url = $json_decoded_payload->{'data'}->{'url'};

# Create the user cookie jar, this will contain the cookies needed to continue making requests after login
my $user_cookie_jar  = HTTP::Cookies->new();

# instantiate the user http request object
my $user_ua = LWP::UserAgent->new;
# Enable cookies for this request session
$user_ua->cookie_jar($user_cookie_jar);
# Allow self signed certificates
$user_ua->ssl_opts( verify_hostname => 0 );

# login as the user using the session url
$response = $user_ua->get($session_url);

# strip the login portion of the url to make $session_url = https://10.0.0.1/$session_key
$session_url =~ s{/login(?:/)??.*}{};

# Continue using the authenticated http request object to perform API calls
$response = $user_ua->get("$session_url/execute/Ftp/list_ftp");
print $response->content;
```

### Example PHP script

Note:
This script calls WHM API 1's [`create_user_session`](/openapi/whm/operation/create_user_session/) function. Make **certain** that you update this code for the correct API version, port, and other function-specific call information.


```
<?

// This can also be the reseller who owns the cPanel user.
$whmusername = "root";
$whmpassword = "password";

// The user on whose behalf the API call runs.
// For webmaild sessions, use the cPanel user or their full email address
$cpanel_user = "username";

$query = "https://10.0.0.1:2087/json-api/create_user_session?api.version=1&user=$cpanel_user&service=cpaneld";

$curl = curl_init();                                     // Create Curl Object.
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);       // Allow self-signed certificates...
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);       // and certificates that don't match the hostname.
curl_setopt($curl, CURLOPT_HEADER, false);               // Do not include header in output
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);        // Return contents of transfer on curl_exec.
$header[0] = "Authorization: Basic " . base64_encode($whmusername.":".$whmpassword) . "\n\r";
curl_setopt($curl, CURLOPT_HTTPHEADER, $header);         // Set the username and password.
curl_setopt($curl, CURLOPT_URL, $query);                 // Execute the query.
$result = curl_exec($curl);
if ($result == false) {
    error_log("curl_exec threw error \"" . curl_error($curl) . "\" for $query");
                                                    // log error if curl exec fails
}


$decoded_response = json_decode( $result, true );

$session_url = $decoded_response['data']['url'];
$cookie_jar = 'cookie.txt';

curl_setopt($curl, CURLOPT_HTTPHEADER, null);             // Unset the authentication header.
curl_setopt($curl, CURLOPT_COOKIESESSION, true);          // Initiate a new cookie session.
curl_setopt($curl, CURLOPT_COOKIEJAR, $cookie_jar);       // Set the cookie jar.
curl_setopt($curl, CURLOPT_COOKIEFILE, $cookie_jar);      // Set the cookie file.
curl_setopt($curl, CURLOPT_URL, $session_url);            // Set the query url to the session login url.

$result = curl_exec($curl);                               // Execute the session login call.
if ($result == false) {
    error_log("curl_exec threw error \"" . curl_error($curl) . "\" for $query");
                                                    // Log an error if curl_exec fails.
}

$session_url = preg_replace( '{/login(?:/)??.*}', '', $session_url );  // make $session_url = https://10.0.0.1/$session_key

$query = "$session_url/execute/Ftp/list_ftp";

curl_setopt($curl, CURLOPT_URL, $query);  // Change the query url to use the UAPI call.
$result = curl_exec($curl);               // Execute the UAPI call.
if ($result == false) {
    error_log("curl_exec threw error \"" . curl_error($curl) . "\" for $query");
                                                    // log error if curl exec fails
}

curl_close($curl);

print $result;

?>
```

## The Single Sign On session log

Whenever the *Single Sign On* feature generates or destroys a temporary session, the system stores information to the Single Sign On session log:


```
127.0.0.1 [12/05/2013:06:36:09 -0000] PURGE fz49w:ym5mFKRIAChAQ_yHyn6i19p6DQupDepQN4I3HnH490AAWPFSP2ZipQ7YpE_uA_CG logout
127.0.0.1 [12/05/2013:06:36:12 -0000] NEW z2p:BADVVmryioLExTGvKITEbSuDFHztNAyEeetBPpUmA8sA8Iu_y4eofHZmbbzIG2UU address=127.0.0.1,app=cpaneld,creator=z2p,method=handle_form_login,path=form,possessed=0
127.0.0.1 [12/05/2013:06:36:13 -0000] PURGE z2p:BADVVmryioLExTGvKITEbSuDFHztNAyEeetBPpUmA8sA8Iu_y4eofHZmbbzIG2UU loginsucess
127.0.0.1 [12/05/2013:06:36:13 -0000] NEW z2p:qgBu2rqQh_9R4tDhD2qgqVx0Oy21Ezy6_E581eYvBv0AbuA5oMZAWw_l0vahOhiH address=127.0.0.1,app=cpaneld,creator=z2p,method=handle_form_login,path=form,possessed=0
```

The system logs the following types of entries:

* [NEW](#new-entries)  — The system logs a NEW entry for each new temporary session.
* [PURGE](#purge-entries)  — The system logs a PURGE entry each time that it removes a temporary session.


### NEW entries

NEW entries include the following information in a comma-separated list:

| Key | Description | Possible values | Example |
|  --- | --- | --- | --- |
| *(Session ID)* | The session ID that the system created. Note:  Unlike other log entry items, the session ID does **not** appear in `key=value` format. | A valid session ID. | `z2p:BADVVmryioLExTGvKITEbSuDFHztNAyEeetBPpUmA8sA8Iu_y4eofHZmbbzIG2UU` |
| `address` | The IP address that requested the session. | A valid IP address. | `127.0.0.1` |
| `app` | The application that created the session. | A valid application or service name. | `cpaneld` |
| `creator` | The WHM account that created the session. | A valid WHM username. | `z2p` |
| `method` | The method through which the user created the session. | `handle_form_login` — The creator logged in from a login form.<.li> `handle_auth_transfer` — The creator logged in through a cPanel & WHM interface. | `handle_form_login` |
| `path` | The path to the process that created the session. | A valid path. `form` — The creator logged in from a login form. | `form` |
| `possessed` | Whether the session runs with another user's privileges (impersonation). | `1` — The session runs with another user's privileges. `0` — The session runs with the creator's privileges. | `0` |


### PURGE entries

PURGE entries include the session ID, and one of the following reason codes:

| Reason code | Description |
|  --- | --- |
| `badpass` | The temporary session authentication failed. |
| `expired` | The session expired. |
| `kill` | The system stopped the session but did not provide a reason. |
| `loadsession` | The creator logged in with a session token that the system destroyed when it created the new session. |
| `loginsuccess` | The creator logged in successfully and the system created a new session. |
| `logout` | The creator logged out. |
| `xfercpanel` | WHM transferred the session to cPanel. |
| `xferwebmail` | cPanel transferred the session to Webmail. |
| `xferwhm` | cPanel transferred the session to WHM. |