# Updates

Server Administration / Updates

## Save EULA acceptance

 - [GET /accept_eula](https://api.docs.cpanel.net/specifications/whm.openapi/updates/eula-accept_eula.md): This function records acceptance of cPanel & WHM's legal terms. To do this, the function creates a touchfile in the /var/cpanel/activate/ directory and writes an acceptance audit record to /var/cpanel/activate/eula_acceptance.json. The audit record captures the accepting user, timestamp, remote IP address, agreement version, and agreement URLs.

Important:

  Server owners must accept these agreements before they use cPanel & WHM.

## Return cPanel & WHM available versions

 - [GET /get_available_tiers](https://api.docs.cpanel.net/specifications/whm.openapi/updates/sys-get_available_tiers.md): This function lists of each available version of cPanel & WHM, and each
version's latest maintenance release. This function also lists the cPanel & WHM
version for each
release tier.

## Return Long Term Support expiration status

 - [GET /get_current_lts_expiration_status](https://api.docs.cpanel.net/specifications/whm.openapi/updates/update-get_current_lts_expiration_status.md): This function determines whether a branch's Long-Term Support (LTS) version expires within three months. For more information about LTS, read our cPanel Long-Term Support documentation.

## Return Long Term Support status for all versions

 - [GET /get_lts_wexpire](https://api.docs.cpanel.net/specifications/whm.openapi/updates/update-get_lts_wexpire.md): This function parses the /etc/cpanel/TIERS.json file and returns whether a branch qualifies for Long-Term Support (LTS). For more information about LTS, read our cPanel Long-Term Support documentation.

## Return if server uses the default update version

 - [GET /get_update_availability](https://api.docs.cpanel.net/specifications/whm.openapi/updates/update-get_update_availability.md): This function checks whether your server uses the
latest version of cPanel & WHM for your release tier.

## Return third-party software versions

 - [GET /installed_versions](https://api.docs.cpanel.net/specifications/whm.openapi/updates/applicationversions-installed_versions.md): This function lists the versions of third-party software that ship with cPanel & WHM.

## Update Feature Showcase

 - [GET /manage_features](https://api.docs.cpanel.net/specifications/whm.openapi/updates/managefeatures-manage_features.md): This function lists and manages items in the
Feature Showcase.

Note:

* This function's output changes, depending on which value you pass to the action parameter.
* The example in this document displays the function's return when the action
parameter value is info.

## Update cPanel & WHM update frequency

 - [GET /set_cpanel_updates](https://api.docs.cpanel.net/specifications/whm.openapi/updates/sys-set_cpanel_updates.md): This function sets the frequency of cPanel & WHM updates.

## Update cPanel & WHM release tier

 - [GET /set_tier](https://api.docs.cpanel.net/specifications/whm.openapi/updates/sys-set_tier.md): This function sets a cPanel & WHM server to a specified support tier.

## Start cPanel & WHM update

 - [GET /start_cpanel_update](https://api.docs.cpanel.net/specifications/whm.openapi/updates/cpanel-start_cpanel_update.md): This function starts an update of cPanel & WHM.

## Update software update behavior

 - [POST /update_updateconf](https://api.docs.cpanel.net/specifications/whm.openapi/updates/cpupdate-update_updateconf.md): This function modifies a server's /etc/cpupdate.conf file. This file controls how the server handles software updates and upgrades.

Important:

You must have the root level Access Control List (ACL) privilege to execute this function.

## Return cPanel & WHM version

 - [GET /version](https://api.docs.cpanel.net/specifications/whm.openapi/updates/cpanel-version.md): This function returns the cPanel & WHM version that a server runs.

