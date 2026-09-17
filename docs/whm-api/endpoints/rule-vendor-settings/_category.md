# Rule Vendor Settings

Web Server Security (ModSecurity) / Rule Vendor Settings

## Add ModSecurity vendor rules

 - [GET /modsec_add_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_add_vendor.md): This function adds a new ModSecurity™ vendor rule set to the server.

Important:

When you disable the
Web Server role,
the system disables this function.

## Disable ModSecurity vendor rules

 - [GET /modsec_disable_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor.md): This function disables a ModSecurity™ vendor rule set.

Note:

This function will not disable vendor configuration files that you have individually enabled.

Important:

When you disable the
Web Server role,
the system disables this function.

## Disable ModSecurity vendor configuration files

 - [GET /modsec_disable_vendor_configs](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor_configs.md): This function disables a ModSecurity™ vendor's configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

## Disable ModSecurity vendor updates

 - [GET /modsec_disable_vendor_updates](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor_updates.md): This function disables automatic updates for a ModSecurity™ vendor.

Important:

When you disable the
Web Server role,
the system disables this function.

## Enable ModSecurity vendor rules

 - [GET /modsec_enable_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor.md): This function enables a ModSecurity™ vendor rule set.

Note:

This function will not enable vendor configuration files that you individually
disable.

Important:

When you disable the
Web Server role,
the system disables this function.

## Enable ModSecurity vendor configuration files

 - [GET /modsec_enable_vendor_configs](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor_configs.md): This function enables a ModSecurity™ vendor's configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

## Enable ModSecurity vendor updates

 - [GET /modsec_enable_vendor_updates](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor_updates.md): This function enables automatic updates for a ModSecurity™ vendor.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return ModSecurity vendors

 - [GET /modsec_get_vendors](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_get_vendors.md): The function returns a list of configured ModSecurity™ vendors.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return ModSecurity vendor rule metadata

 - [GET /modsec_preview_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_preview_vendor.md): This function returns the metadata for a ModSecurity™ vendor rule set.

Important:

When you disable the
Web Server role,
the system disables this function.

## Remove ModSecurity vendor

 - [GET /modsec_remove_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_remove_vendor.md): This function removes a ModSecurity™ vendor. When you call this function, the system
removes the vendor's includes, disablement directives, configuration files, and
metadata file.

Important:

When you disable the
Web Server role,
the system disables this function.

## Update ModSecurity vendor ruleset

 - [GET /modsec_update_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_update_vendor.md): This function updates a vendor with the current version of the rule set.

Important:

When you disable the
Web Server role,
the system disables this function.

