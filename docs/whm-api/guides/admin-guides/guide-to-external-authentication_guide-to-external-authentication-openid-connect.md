[Development Guides Home](/guides) >> [Guide to External Authentication](/guides/guide-to-external-authentication)

# Guide to External Authentication - OpenID Connect

## Introduction

External authentication allows your server's users to log in to WHM, cPanel, and Webmail through OpenID Connect-compliant identity providers. The OpenID Connect Provider Module configures a server to connect to and authenticate through the identity provider. Create the identity provider module in the `/var/cpanel/perl/Cpanel/Security/Authn/Provider/` directory and use the `Cpanel::Security::Authn::Provider::OpenIdConnectBase` base class.

Note:
Additional examples that demonstrate other methods are available in the `/usr/local/cpanel/Cpanel/Security/Authn/Provider/` directory with the `.sample` file extension.

Warning:
After you install the identity provider module, you must obtain credentials from that identity provider and then use WHM's [*Manage External Authentications*](https://docs.cpanel.net/whm/security-center/manage-external-authentications/) interface (*WHM >> Home >> Security Center >> Manage External Authentications*) to configure the identity provider module with those credentials.

## OpenID Connect's authentication chain

When you use an identity provider, the system performs the following steps:

1. The cPanel service login interface displays a list of configured and enabled identity providers.
2. The user clicks the desired identity provider.
3. The browser redirects the user to the login interface for the identity provider.
4. The user enters their credentials for the identity provider.
5. The browser returns the user to the cPanel service login interface.
6. If the user has not yet associated their authentication credentials with the account in cPanel's *Password & Security* interface (*cPanel >> Home >> Preferences >> Password & Security*), the server asks for their local server credentials.
7. If the user has associated their authentication credentials with the account, the server will automatically log them in to the cPanel service.


## OpenID Connect's provider methods

The tables below contain the required, recommended, and optional methods.

### Required

Warning:
You **must** configure the following methods in the `Cpanel::Security::Authn::Provider::OpenIdConnectBase` base class. If you do not configure a required method, it will die with a `Cpanel::Exception::NotImplemented` exception.

| Method name | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `_DISPLAY_NAME` | *string* | The identity provider's friendly name. cPanel & WHM interfaces display this value. | A valid string. | `Izzy` |
| `_PROVIDER_NAME` | *string* | The identity provider's system name.This method must be unique among the installed OpenID Connect identity providers.This method should consist of lower-case letters, numbers, dashes, periods, and underscores in 7-bit ASCII. We recommend that you enter the identity provider name in lower case in order to avoid case conversion issues. | A valid string in lower case. | `izzy` |
| `_WELL_KNOWN_CONFIG_URI` | *string* | The well-known configuration URI of the OpenID Connect implementation. The system uses the configuration to discover the endpoints to use in the OpenID Connect exchange.The system retrieves the configuration on demand and caches it for 24 hours.Upon receipt of a fresh configuration file, the system will update the changes in the remote endpoints for OpenID Connect authorization.For more information about well-known configuration URIs, read RFC 5785. | A valid URI. | `https://accounts.izzy.com/.well-known/openid-configuration` |


### Suggested

We **strongly** recommend that you update the following methods in order to properly label your OpenID Connect implementation.

| Method name | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `_BUTTON_COLOR` | *string* | The background color of the button on the cPanel interface. This value defaults to `cccccc`. | A valid RGB hexadecimal value. | `dd4b39` |
| `_BUTTON_ICON` | *string* | The icon file to display in the button on the cPanel login interface. This value defaults to empty string. | A valid Base64-encoded image file. | (see example in above code) |
| `_BUTTON_ICON_TYPE` | *string* | The icon file's MIME type. | A valid image format's MIME type. | `image/svg+xml` |
| `_BUTTON_LABEL` | *string* | The text label of the login icon on the cPanel login interface. This value defaults to `Log in with an OpenID Connect`. | A valid string. | `Log in with Izzy account` |
| `_BUTTON_TEXT_COLOR` | *string* | The color of the text label on the cPanel login interface.  This value defaults to `000000`. | A valid RGB hexadecimal color value. | `ffffff` |
| `_DOCUMENTATION_URL` | *string* | The public URL of the OpenID implementation's documentation at the openid.net website. | A valid URL. | `https://developers.izzy.com/identity/protocols/OpenIDConnect` |


### Other

The following methods may not precisely conform to the specification of the OpenID Connect identity provider's protocol. Also, your identity provider may include newer or custom features that you wish to use.

| Method name | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `_CAN_VERIFY` | *Boolean* | Whether the OpenID Connect identity provider supports signature verification of the identity tokens that the authorization server sends. This value defaults to `1`. | `1` — The authorization server supports signature verification.`0` — The authorization server does not support signature verification. | `1` |
| `_CONFIG` | *hash* | A hash of the identity provider's configuration settings.	This hash contains the `id`, `secret`, `authorize_url`, `access_token_uri`, `user_info_uri`, and `redirect_uris` parameters. |  |  |
| `id` | *string* | The client ID that you received when you registered your application with the authorization server. For more information, read For more information, read RFC-6749. | A valid string. | `123456789012345678901` |
| `secret` | *string* | The client secret that you received when you registered your application with the authorization server. For more information, read RFC-6749. | A valid string. | `Victoria` |
| `authorize_url` | *string* | The URI to the authorization endpoint of the authentication server.This value defaults to the URI that the system retrieves from the well-known configuration.For more information, read OpenID's Authorization Endpoint documentation. | A valid URI. | `http://authorize.izzy.com/` |
| `access_token_uri` | *string* | The URI to the token endpoint of the authorization server. This value defaults to the URI that the system retrieves from the well-known configuration.For more information, read OpenID's Token Endpoint documentation. | A valid URI. | `https://accounts.izzy.com/tokens/` |
| `user_info_uri` | *string* | The URI to the user_info endpoint of the authorization server. This value defaults to the URI that the system retrieves from the well-known configuration.For more information, read OpenID's User Info documentation. | A valid URI. | `https://accounts.izzy.com/user_info/` |
| `redirect_uris` | *array of strings* | A list of valid redirection URIs that you sent when you registered your application to the authorization server.  This value defaults to the values that the WHM configuration interface generates.For more information, read RFC-6749. | An array of valid URIs. | `http://izzy.com/` |
| `_CONFIG_FIELDS` | *hash of hashes* | A hash of the identity provider's configuration fields.	This hash contains the `field_name` parameter. |  |  |
| `field_name` | *hash* | A hash of a configuration field's parameters. The hash uses the configuration field's name as a parameter name. | (varies) |  |
| `label` | *string* | The configuration entry's display name. | (varies) |  |
| `description` | *string* | The configuration entry's description. | (varies) |  |
| `value` | *string* | The configuration entry's default value, which will be `undef` if the identity provider has not set a value . | (varies) |  |
| `_DISPLAY_CONFIG` | *hash* | A hash of the identity provider's display configuration values.	This hash contains `label`, `color`, `textcolor`, `icon`, `icon_type`, `display_name`, `provider_name`, and `documentation` parameters. |  |  |
| `label` | *string* | The text label of the login button on the cPanel login interface. This value defaults to `_BUTTON_LABEL`. | A valid string. | `Log in to Izzy.` |
| `color` | *string* | The background color of the button on the cPanel interface. This value defaults to `_BUTTON_COLOR` . | A valid RGB hexadecimal color value. | `cccccc` |
| `textcolor` | *string* | The text color of the button on the cPanel interface.  This value defaults to `_BUTTON_TEXT_COLOR`. | A valid RGB hexadecimal color value. | `000000` |
| `icon` | *string* | The icon file to display in the button on the cPanel login interface. This value defaults to `_BUTTON_ICON` . If `_BUTTON_ICON` returns `0`, empty string, or `undef`, then the hash will not include this value. | A valid Base64-encoded image file. |  |
| `icon_type` | *string* | The icon file's MIME type. | A valid image format's MIME type. | `image/svg+xml` |
| `display_name` | *string* | The identity provider's friendly name.  This value defaults to `_DISPLAY_NAME`. | A valid string. | `Izzy` |
| `provider_name` | *string* | The identity provider's system name.  This value defaults to `_PROVIDER_NAME`. | A valid string. | `izzy` |
| `documentation` | *string* | The public URL of the OpenID implementation's documentation at the openid.net website. | A valid publicly-available URL. | `https://developers.izzy.com/identity/protocols/OpenIDConnect` |
| `_POSSIBLE_DISPLAY_USERNAME_KEY_NAMES` | *array* | An array that contains a list of keys in an attempt to get the display username from the `UserInfo` response.This value defaults to the email entry, and then uses the name entry if the email entry is not available.You may need to adjust this value in order to match the desired value for your identity provider.For more information, read OpenID's UserInfoResponse documentation. | An array of valid strings. | `email, name` |
| `_POSSIBLE_DISPLAY_USERNAME_SUBKEY_NAMES` | *array* | An array that contains a list of sub keys in an attempt to get the display username from the `UserInfo` response.This value defaults to the `preferred` entry, and then uses the `account` entry if the `preferred` entry is not available.You may need to adjust this value in order to match the desired value for your identity provider.For more information, read OpenID's UserInfoResponse documentation. | An array of valid strings. | `preferred, account, business, personal` |
| `_POSSIBLE_ID_TOKEN_KEY_NAMES` | *array* | An array that contains a list of ID Token keys in an attempt to get the ID token from the Token response.This value defaults to the `id_token` entry.You may need to adjust this value in order to match the desired value for your identity provider.For more information, read OpenID's TokenResponse documentation. | An array of valid strings. | `id_token` |
| `_POSSIBLE_UNIQUE_IDENTIFIER_KEY_NAMES` | *array* | An array that contains a list of keys in an attempt to get the subject unique identifier from the access token response.  This value defaults to the `email` entry, and then uses the `name` entry if the `email` entry is not available.You may need to adjust this value in order to match the desired value for your identity provider.For more information, read OpenID's TokenEndpoint documentation. | An array of valid strings. | `email, name` |
| `_GET_SECRET_BASED_SIGNING_KEY_PLAINTEXT` | *string* | This method returns the secret that the system used to verify the signature of the ID tokens. This value defaults to the client's secret. | A valid string. | `Victoria` |
| `_SCOPE` | *string* | This method allows you to declare an alternate or add an additional scope to the claim of your authorization request. This value defaults to `openid profile email`.For more information about scopes, read OpenID's scope documentation. | A valid string. | `openid profile email` |


## Example

The following example uses the `Cpanel::Security::Authn::Provider::OpenIdConnectBase` base class and overrides the necessary methods to create an identity provider that connects to Google's authentication service:


```
package Cpanel::Security::Authn::Provider::Izzy;

# cpanel - Cpanel/Security/Authn/Provider/Izzy.pm
#                                                 Copyright(c) 2018 WebPros International, LLC
#                                                           All rights Reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited

use strict;

use parent 'Cpanel::Security::Authn::Provider::OpenIdConnectBase';

my $image = <<EOF;
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
O/utDBkW8dfn/Ba8+byP4QKg/g7AOjX9jXVbwH/EPwCGGQVDbR7I2wAAAAlwSFlzAAALEwAACxMB
AJqcGAAAAgRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRv
YmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6
cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAg
PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0
cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6
Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9u
PjM5MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lv
bj41MTU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x
PC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRG
Pgo8L3g6eG1wbWV0YT4KxfVkQAAACgpJREFUWAmNV1lvG9cZPTMcLsN9EUmJlCzJ+9oEaZAu6WIU
CVD0pb+lr31x3/oL8hKgaOOiQVugRV10SZG2dlGntqPElmzZliWLEimJkkhxEfchh5ye71LMQ2Cg
HXI4w5k793zL+c53R3McZ4T/Y+M4NUrTNHUcjYYYDm11brgMaLpLnTtwoPHzv7YJrPHliV/1oIyZ
AA/6XTx//CmKu3nYgyH6/QEE78rrb+HC5dehiZ3jn1dN9aVrGnSZeDK5AE32ycgJeHHnJSqlAtwe
E51mHceVffQ6NTTqFRQL27j1y/ewuvIZwTWMRuNoTeZ41VECKsHUD4q76HbbaszEmIlBo9FIGbeb
38CtX/wUrUZFjZs5dRr+oB8ejwfBkIlIPIFgfA4f/eG3KB3uQdd15cirgCfXxpnU4Dozl7mR29zA
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
EOF

sub _DISPLAY_NAME          { return 'Izzy'; }
sub _PROVIDER_NAME         { return 'izzy'; }
sub _WELL_KNOWN_CONFIG_URI { return 'https://accounts.izzy.com/.well-known/openid-configuration'; }
sub _DOCUMENTATION_URL     { return 'https://developers.izzy.com/identity/protocols/OpenIDConnect'; }

sub _BUTTON_LABEL      { return 'Log in with a Izzy Account'; }
sub _BUTTON_COLOR      { return 'dd4b39'; }
sub _BUTTON_TEXT_COLOR { return 'FFFFFF'; }
sub _BUTTON_ICON       { $image =~ s/\n//g; return $image; }
sub _BUTTON_ICON_TYPE  { return 'image/svg+xml';}
sub _CAN_VERIFY        { return 1; }

1;
```

### Package the module


```
package Cpanel::Security::Authn::Provider::Google;
```

This declaration instructs Perl to treat all of the file's functions as part of the `Cpanel::Security::Authn::Provider::Izzy` namespace.

For more information, read [perldoc.perl.org's package](https://perldoc.perl.org/functions/package.html) documentation.

### Set the strict pragma


```
use strict;
```

This declaration instructs Perl to return errors if the file contains potentially unsafe code.

For more information, read [perldoc.perl.org's strict](https://perldoc.perl.org/strict) documentation.

### Specify the class's parents


```
use parent 'Cpanel::Security::Authn::Provider::OpenIdConnectBase';
```

This declaration instructs Perl to use the `Cpanel::Security::Authn::Provider::OpenIdConnectBase` module as a parent to this module.

### Set the image variable


```
my $image = <<EOF;
iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAKq2lDQ1BJQ0MgUHJvZmlsZQAASImV
lgdQU+kWx7970xstAQEpoffeQUroofcmKiGhhBJiICDYEXEFVhQRacqCrjQFV6XIKiIWRFkUG/YF
WRTUdbFgQ+Vd4BHee/N23rwzc3J/c+Z8/3vul++b+QNAvsfi81NgCQBSeRmCIA9nekRkFB33O8AC
JUAC2kCFxU7nMwICfMDfxoe7AJp73jKY0/r7vv8akpy4dDYAUADCsZx0dirCp5DsZvMFGQCgkARq
WRn8OS5HmCZABkT46BwnLHDPHMcu8O35npAgF4QnAMCTWSxBAgCk90idnslOQHTINISNeRwuD2FX
...
```

This declaration sets the value of the $image variable to a Base64-encoded image.

Note:
To encode an icon file into Base64, use an online decoder such as [askapache.com's base64-image-converter](http://www.askapache.com/online-tools/base64-image-converter/).

### Set required parameters


```
sub _DISPLAY_NAME          { return 'Izzy'; }
sub _PROVIDER_NAME         { return 'izzy'; }
sub _WELL_KNOWN_CONFIG_URI { return 'https://accounts.izzy.com/.well-known/openid-configuration'; }
sub _DOCUMENTATION_URL     { return 'https://developers.izzy.com/identity/protocols/OpenIDConnect'; }
```

This set of declarations overrides the required parameters for the module:

* The display name of the identity provider is `Izzy`.
* The identity provider's name is `izzy`.
* The well-known configuration URL is `https://accounts.izzy.com/.well-known/openid-configuration`
* The documentation for the Izzy identity provider is at `https://developers.izzy.com/identity/protocols/OpenIDConnect`


### Set suggested parameters


```
sub _BUTTON_LABEL      { return 'Log in with a Izzy Account'; }
sub _BUTTON_COLOR      { return 'dd4b39'; }
sub _BUTTON_TEXT_COLOR { return 'FFFFFF'; }
sub _BUTTON_ICON       { $image =~ s/\n//g; return $image; }
sub _BUTTON_ICON_TYPE  { return 'image/svg+xml';}
sub _CAN_VERIFY        { return 1; }
```

This set of declarations overrides the suggested parameters for the module:

* The button's label is `Log in with a Izzy Account`.
* The button's color is `dd4b39`, or light reddish brown.
* The button's text color is `FFFFFF`, or white.
* The module strips line breaks from the `$image` variable before it sets that value as the icon for the button.
* The icon's MIME type is `image/svg+xml`.
* The identity provider is set to verify authentication.