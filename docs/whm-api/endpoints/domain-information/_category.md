# Domain Information

Accounts / Domain Domain Information

## Return additional domain conversion details

 - [GET /convert_addon_fetch_conversion_details](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_fetch_conversion_details.md): This function returns the details of a conversion from an addon
domain to an account. Use WHM API 1's convert_addon_domain_to_account
to start a conversion.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return additional domain data

 - [GET /convert_addon_fetch_domain_details](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_fetch_domain_details.md): This function retrieves domain data for an addon domain.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return conversion status for additional domain

 - [GET /convert_addon_get_conversion_status](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_get_conversion_status.md): This function returns the status of the convert addon domain to
account process for specified conversion jobs. For data about the conversion
status of all jobs, use the WHM API 1 convert_addon_fetch_conversion_details
function.

Important:

When you disable the
Web Server role,
the system disables this function.

## Start additional domain conversion

 - [GET /convert_addon_initiate_conversion](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_initiate_conversion.md): This function initiates the conversion process for an addon domain
into a cPanel account.

Note:

For information about the data that the system migrates when you convert an
addon domain, read our
Addon Domain Conversion List documentation.

Important:

When you disable the Web Server role,
the system disables this function.

## Return current user's additional domains

 - [GET /convert_addon_list_addon_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_list_addon_domains.md): This function returns a list of addon domains that belong to the current user.

Important:
When you disable the Web Server role, the system disables this function.

## Return additional domains conversion queue

 - [GET /convert_addon_list_conversions](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_list_conversions.md): This function returns a list of addon domains undergoing conversion
into cPanel accounts.

Important:

When you disable the Web Server role, the system disables this function.

## Return domain user information

 - [GET /domainuserdata](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/accounts-domainuserdata.md): This function retrieves domain data.

## Return all domains information

 - [GET /get_domain_info](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/accounts-get_domain_info.md): This function returns information about each domain on the server.

## Return domain owner

 - [GET /getdomainowner](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/accounts-getdomainowner.md): This function lists the owner of a domain.

