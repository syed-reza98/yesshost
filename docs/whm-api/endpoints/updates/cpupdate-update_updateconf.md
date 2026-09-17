# Update software update behavior

This function modifies a server's /etc/cpupdate.conf file. This file controls how the server handles software updates and upgrades.

Important:

You must have the root level Access Control List (ACL) privilege to execute this function.

Endpoint: POST /update_updateconf
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `CPANEL` (any)
    The cPanel & WHM installation's release tier, or a valid version number.

If you do not use this parameter, the system retains the current setting.

* A valid cPanel & WHM version number.
* STABLE - This version has received considerable public exposure, testing, and verification.
* RELEASE - This version is feature-complete and well-tested. It contains all intended features and functionality.
* CURRENT - This version is tested and verified, but it may not contain all of the proposed functionality of a release. This tier is similar to the "release candidate" tier that other publication schemes use.
* EDGE - This version only has rudimentary testing. The features are subject to further modification. This version usually lacks official public documentation.
* LTS - Some hosting providers do not wish to upgrade cPanel & WHM to newer major versions. This is a single cPanel & WHM version for the year-long period in which WebPros International, LLC supports it.

  If you do not set this parameter, the system retains the current setting.

 New installations default to RELEASE.
    Example: "RELEASE"

  - `RPMUP` (any)
    The frequency with which the server updates the operating system distribution's packages each time that the /usr/local/cpanel/scripts/upcp script runs.

If you do not set this parameter, the system retains the current setting.

* daily - Update the system packages daily.
* manual - Update the system packages manually.
* never - If you specify never, the server administrator must run the /usr/local/cpanel/scripts/update-packages script when they update the server's packages.
    Example: "daily"

  - `SARULESUP` (any)
    The frequency with which the server updates Apache SpamAssassin's™ rules when the /usr/local/cpanel/scripts/upcp script runs.

If you do not set this parameter, the system retains the current setting.

* daily - Update Apache SpamAssassin rules daily.
* manual - Update Apache SpamAssassin rules manually.
* never - If you specify never, the server administrator must run the /usr/local/cpanel/scripts/update-packages script when they update Apache SpamAssassin's rules.
    Example: "daily"

  - `SECURITY_UPDATES` (any)
    Whether the system applies expedited security updates for the current major version.

This setting is independent of the UPDATES setting. It drives the hourly /usr/local/cpanel/scripts/upcp --security check, which applies a security release within the current major version as soon as it is available, even when UPDATES is set to manual or never.

If you do not set this parameter, the system retains the current setting.

* hourly - Check for and apply current-major security updates every hour. This is the default.
* never - Do not apply expedited security updates.
    Example: "hourly"

  - `STAGING_DIR` (string)
    The absolute directory path to the staging directory for updates.

If you do not set this parameter, the system retains the current setting.
    Example: "/usr/local/cpanel"

  - `UPDATES` (any)
    When the system will check for updates.

If you do not set this parameter, the system retains the current setting.

* daily - Update cPanel & WHM automatically through a cron job once every 24 hours.
* manual - Update cPanel & WHM manually.
* never - Do not update cPanel & WHM.
    Example: "daily"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "update_updateconf"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


