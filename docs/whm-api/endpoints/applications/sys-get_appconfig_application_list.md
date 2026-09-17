# Return registered applications

This function lists registered AppConfig applications.

Endpoint: GET /get_appconfig_application_list
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cpanel` (array)
    An array of objects representing the values set for application installed for cPanel.

  - `data.cpanel.acls` (array)
    The ACL(s) with permission to run the application.
    Example: ["any"]

  - `data.cpanel.displayname` (string)
    The application's WHM display label.

Note:

The function only returns this value for plugins that you register with [AppConfig](https://go.cpanel.net/appconfig).
    Example: "Roundcube"

  - `data.cpanel.entryurl` (string)
    The application's WHM entry URL.

Note:

The function only returns this value for plugins that you register with [AppConfig](https://go.cpanel.net/appconfig).
    Example: "roundcube/"

  - `data.cpanel.features` (array)
    The required features to run the application.
    Example: ["roundcube"]

  - `data.cpanel.group` (string)
    The application's group.
    Example: "mailman"

  - `data.cpanel.icon` (string)
    The application's icon file, relative to the /usr/local/cpanel/whostmgr/docroot/addon_plugins/ directory.

Note:

The function only returns this value for plugins that you register with [AppConfig](https://go.cpanel.net/appconfig).
    Example: "roundcube.ico"

  - `data.cpanel.name` (string)
    The application's name.
    Example: "roundcube"

  - `data.cpanel.origin` (string)
    The application's configuration file.

Note:

The function only returns this value for plugins that you register with [AppConfig](https://go.cpanel.net/appconfig).
    Example: "clamavconnector.conf"

  - `data.cpanel.phpConfig` (string)
    The application's php.ini file, relative to the /usr/local/cpanel/3rdparty/etc/ directory.
    Example: "php.ini"

  - `data.cpanel.target` (string)
    The action's target directory.

Note:

The function only returns this value for plugins that you register with [AppConfig](https://go.cpanel.net/appconfig).
    Example: "_self"

  - `data.cpanel.upgradecall` (string)
    The absolute file path to the application's upgrade script.

Note:

* The function only returns this value for plugins that you register with [AppConfig](https://go.cpanel.net/appconfig).
* The system passes upgrade information in the following format: /usr/local/youraddon/bin/upgrade 11.36.0.0 11.38.0.0, where:
  * 11.36.0.0 is the previous cPanel & WHM version.
  * 11.38.0.0 is the current cPanel & WHM version.
    Example: "/usr/local/roundcube/bin/upgrade"

  - `data.cpanel.url` (string)
    The application's URL path.
    Example: "/3rdparty/roundcube"

  - `data.cpanel.user` (string)
    The application's username.
    Example: "roundcube"

  - `data.webmail` (array)
    An array of objects representing the values set for application installed for Webmail.

  - `data.whostmgr` (array)
    An array of objects representing the values set for application installed for WHM.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_appconfig_application_list"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Got application list"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


