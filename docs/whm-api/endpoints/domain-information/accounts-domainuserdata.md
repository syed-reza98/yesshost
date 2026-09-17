# Return domain user information

This function retrieves domain data.

Endpoint: GET /domainuserdata
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The account's main domain.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.userdata` (object)
    The domain information.

  - `data.userdata.customlog` (array)
    A list of objects of Apache log information.

  - `data.userdata.customlog.format` (string)
    The custom log's format. A valid Apache log format.
    Example: "combined"

  - `data.userdata.customlog.target` (string)
    An Apache custom log's location. The absolute path to the log file.
    Example: "/usr/local/apache/domlogs/example.com"

  - `data.userdata.documentroot` (string)
    The path to the domain's document root. A valid filepath.
    Example: "/home/username/public_html"

  - `data.userdata.group` (string)
    The account's group name. A valid group name.
    Example: "reseller_username"

  - `data.userdata.hascgi` (integer)
    Whether CGI is enabled for the account.
- 1  Enabled.
- 0  Disabled.
    Enum: 0, 1

  - `data.userdata.homedir` (string)
    The path to the domain's home directory. The absolute path to the domain's home directory.
    Example: "/home/username"

  - `data.userdata.ip` (string)
    The domain's IP address. A valid IP address.
    Example: "10.0.0.1"

  - `data.userdata.owner` (string)
    The WHM user who owns the cPanel account. A valid WHM username.
    Example: "root"

  - `data.userdata.phpopenbasedirprotect` (integer)
    Whether the PHP open_basedir tweak is enabled.
- 1  Enabled.
- 0  Disabled.
    Enum: 0, 1

  - `data.userdata.port` (integer)
    Apache's port to access the domain. A valid port number.
    Example: 80

  - `data.userdata.scriptalias` (array)
    an object containing Apache ScriptAlias information.

  - `data.userdata.scriptalias.path` (string)
    The path to Apache's CGI scripts. The url alias redirects to this location. A valid URL or absolute file path.
    Example: "/home/user/public_html/cgi-bin/"

  - `data.userdata.scriptalias.url` (string)
    The alias URL. This URL redirects to the path URL. A valid URL or file path.
    Example: "/cgi-bin/"

  - `data.userdata.serveradmin` (string)
    The account owner's contact email address. A valid email address.
    Example: "owner@example.com"

  - `data.userdata.serveralias` (string)
    The domain's aliases. A space-separated list of domain aliases.
    Example: "parkeddomain.com www.parkeddomain.com seconddomain.com"

  - `data.userdata.servername` (string)
    The main domain on the domain's account. A valid domain name.
    Example: "example.com"

  - `data.userdata.usecanonicalname` (string)
    The domain's setting for canonical names (CNAMEs).
- On
- Off
    Example: "Off"

  - `data.userdata.user` (string)
    The cPanel account username. A valid cPanel username.
    Example: "user"

  - `data.userdata.userdirprotect` (string)
    The domain's setting for the Apache mod_userdir Tweak.
- On
- Off
    Example: "Off"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "domainuserdata"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Obtained userdata."

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


