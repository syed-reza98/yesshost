# Return dynamicui file

This function returns the contents of a dynamicui file. For more
information, read our
Guide to WHM dynamicui Files
documentation.

Endpoint: GET /get_available_applications
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `applications_list` (string)
    A comma-separated list of the application entries to return.

To determine the application's name, find its
file value in the dynamicui.conf file,
and then remove the file extension.

If you do not specify this value, the function returns the entire dynamicui.conf
file.
    Example: "create_support_ticket"

  - `file` (string)
    The dynamicui configuration file to retrieve, relative to the /usr/local/cpanel/whostmgr/docroot/themes/x/ directory.
    Example: "dynamicui.conf"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.groups` (array)
    An array of objects containing the file's contents.

  - `data.groups.acl` (string,null, required)
    The group's Access Control Lists (ACLs).

Note:

* Only WHM users who possess the specified ACLs can view or use the item.
 System administrators can configure users' ACLs in WHM's [Edit Reseller Nameservers and Privileges](https://go.cpanel.net/whmdocsEditResellerNameserversandPrivileges) interface (WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges*).
* For a complete list of available ACLs, read our [Guide to WHM Plugins - ACL Reference Chart](https://go.cpanel.net/ACLReferenceChart) documentation.
    Example: "ACL=all"

  - `data.groups.dnsonly_ok` (string,null, required)
    The group's status for [cPanel DNSOnly](https://go.cpanel.net/cpanel-dnsonly)™ servers.

* dns - The group appears on cPanel DNSOnly servers.
* `` - The group does not appear on cPanel DNSOnly servers.
    Enum: "dns"

  - `data.groups.file` (string, required)
    The icon file to display for the group.

Note:

* Icons for any WHM plugins exist separately from the server's theme. For more information, read our [Guide to WHM Plugins - Plugin Files](https://go.cpanel.net/whmpluginfiles) documentation.
* A valid .png or .svg image file, relative to the theme's icon directory.
    Example: "feature_name.png"

  - `data.groups.group` (string, required)
    The group name.
    Example: "group_name"

  - `data.groups.groupdesc` (string, required)
    The group's display name.

Note:

You can localize this string to display it in the user's preferred language in the WHM interface. For more information, read our [Guide to Locales](https://go.cpanel.net/guide-to-locales) documentation
    Example: "$LANG{'Group Name'}"

  - `data.groups.grouporder` (integer, required)
    The group's display order in the WHM interface.

Note:

Lower values appear at the top of the interface
    Example: 1

  - `data.groups.imgtype` (string)
    The group's image type.

* icon - The only possible value.
    Enum: "icon"

  - `data.groups.items` (array)

  - `data.groups.items.acl` (string,null, required)
    The feature's Access Control Lists (ACLs).

Note:

* Only WHM users who possess the specified ACLs can view or use the item.
 System administrators can configure users' ACLs in WHM's [Edit Reseller Nameservers and Privileges](https://go.cpanel.net/whmdocsEditResellerNameserversandPrivileges) interface (WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges*).
* For a complete list of available ACLs, read our [Guide to WHM Plugins - ACL Reference Chart](https://go.cpanel.net/ACLReferenceChart) documentation.
    Example: "ACL=all"

  - `data.groups.items.description` (string, required)
    The feature's description that displays when the feature appears on the WHM Home interface.

Note:

You can localize this string to display it in the user's preferred language in the WHM interface. For more information, read our [Guide to Locales](https://go.cpanel.net/guide-to-locales) documentation.
    Example: "View and manage reseller accounts on your server. Resellers manage other [asis,cPanel] accounts and can access [asis,cPanel]."

  - `data.groups.items.dnsonly_ok` (string,null, required)
    The group's status for [cPanel DNSOnly](https://go.cpanel.net/cpanel-dnsonly)™ servers.

* dns - The group appears on cPanel DNSOnly servers.
* `` - The group does not appear on cPanel DNSOnly servers.
    Enum: "dns"

  - `data.groups.items.file` (string, required)
    The icon file to display for the group.

Note:

* Icons for any WHM plugins exist separately from the server's theme. For more information, read our [Guide to WHM Plugins - Plugin Files](https://go.cpanel.net/whmpluginfiles) documentation.
* A valid .png or .svg image file, relative to the theme's icon directory.
    Example: "feature_name.png"

  - `data.groups.items.group` (string, required)
    The group in which the item appears. This is a value of an existing group object.
    Example: "group_name"

  - `data.groups.items.imgtype` (string)
    The feature's image type.

* icon - The only possible value.
    Enum: "icon"

  - `data.groups.items.itemdesc` (string)
    The feature's display name.

Note:

* You can localize this string to display it in the user's preferred language in the WHM interface. For more information, read our [Guide to Locales](https://go.cpanel.net/guide-to-locales) documentation.
* This should be a [Template Toolkit](https://go.cpanel.net/tmpltoolkit) directive.
    Example: "$LANG{'Feature Name'}"

  - `data.groups.items.itemorder` (integer, required)
    The feature's display order within its group.

Note:

Lower values appear earlier in the group.
    Example: 1

  - `data.groups.items.key` (string)
    A key to uniquely identify WHM interfaces and their associated assets for the [cPanel Analytics](https://go.cpanel.net/analytics) program.

Note:

Generally, this value matches the file parameter's value without the file's extension.
    Example: "feature_name"

  - `data.groups.items.minimum_accounts_needed` (integer)
    The minimum number of accounts required to display the feature icon.
    Example: 2

  - `data.groups.items.multiuser_required` (integer)
    Whether the server allows for the creation of more than a single user.

* 1 — Display the feature icon.
* 0 — Do not display the feature icon.

Note:

You cannot use this parameter on servers with a [cPanel Solo License](https://go.cpanel.net/cpanel-solo-license).
    Enum: 1

  - `data.groups.items.role` (any)
    The feature's server role.

Warning:

The server creates this parameter automatically. Do not edit this parameter's value. We do not support customizations to this parameter.

Note:

* The icon only appears in the interface if the server configuration uses this role.
* For more information about roles and server configurations, read our [How to Use Server Profiles](https://go.cpanel.net/howtouseserverprofiles) documentation.

  - `data.groups.items.searchtext` (string)
    A list search terms for the feature, space delimited.
    Example: "search keywords"

  - `data.groups.items.service` (any)
    The [cPanel Service Daemon](https://go.cpanel.net/ThecPanelWHMServiceDaemons) that monitors the feature.

Warning:

The server creates this parameter automatically. Do not edit this parameter's value. We do not support customizations to this parameter.

Note:

* This icon only appears on servers with the service enabled.
* For a complete list of service daemons, read our [cPanel Service Daemons](https://go.cpanel.net/ThecPanelWHMServiceDaemons) documentation.
    Example: "mysql"

  - `data.groups.items.subitems` (array)

  - `data.groups.items.subitems.acl` (string,null, required)
    The subitem's Access Control Lists (ACLs).

Note:

* Only WHM users who possess the specified ACLs can view or use the item.
 System administrators can configure users' ACLs in WHM's [Edit Reseller Nameservers and Privileges](https://go.cpanel.net/whmdocsEditResellerNameserversandPrivileges) interface (WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges*).
* For a complete list of available ACLs, read our [Guide to WHM Plugins - ACL Reference Chart](https://go.cpanel.net/ACLReferenceChart) documentation.
    Example: "ACL=all"

  - `data.groups.items.subitems.breadcrumb` (string, required)
    A subitem's parent feature's location.

* The system uses this value to generate breadcrumbs at the top of each WHM interface.
* The subitem's parent feature's url value.
    Example: "/example_plugin/feature_name"

  - `data.groups.items.subitems.dnsonly_ok` (string,null, required)
    The subitem's status for [cPanel DNSOnly](https://go.cpanel.net/cpanel-dnsonly)™ servers.

* dns - The subitem appears on cPanel DNSOnly servers.
* `` - The subitem does not appear on cPanel DNSOnly servers.
    Enum: "dns"

  - `data.groups.items.subitems.file` (string, required)
    The icon file to display for the subitem.

Note:

* Icons for any WHM plugins exist separately from the server's theme. For more information, read our [Guide to WHM Plugins - Plugin Files](https://go.cpanel.net/whmpluginfiles) documentation.
* A valid .png or .svg image file, relative to the theme's icon directory.
    Example: "feature_name.png"

  - `data.groups.items.subitems.group` (string, required)
    The group in which the subitem appears. This is a value of an existing group object.
    Example: "group_name"

  - `data.groups.items.subitems.itemdesc` (string)
    The subitem's display name.

Note:

* You can localize this string to display it in the user's preferred language in the WHM interface. For more information, read our [Guide to Locales](https://go.cpanel.net/guide-to-locales) documentation.
    Example: "$LANG{'Feature Name'}"

  - `data.groups.items.subitems.key` (string)
    A key to uniquely identify WHM interfaces and their associated assets for the [cPanel Analytics](https://go.cpanel.net/analytics) program.

Note:

Generally, this value matches the file parameter's value without the file's extension.
    Example: "feature_name"

  - `data.groups.items.subitems.parent` (integer, required)
    The subitem's parent feature's display order in the WHM interface. This is the parent feature's itemorder value.
    Example: 1

  - `data.groups.items.subitems.searchtext` (string)
    A list search terms for the subitem, space delimited.
    Example: "search keywords"

  - `data.groups.items.subitems.target` (string)
    The area of the interface in which the subitem displays.

A valid HTML `` target attribute.
    Example: "_blank"

  - `data.groups.items.subitems.type` (string, required)
    The object's type.

* subitem - The only possible value.
    Enum: "subitem"

  - `data.groups.items.subitems.url` (string, required)
    The subitem's interface location. This path is relative to the /usr/local/cpanel/ directory.
    Example: "/example_plugin/feature_name"

  - `data.groups.items.subtype` (string)
    The icon type to use.

* img - The only possible value.
    Enum: "img"

  - `data.groups.items.target` (string)
    The area of the interface in which the feature appears.

A valid HTML `` target attribute.
    Example: "_blank"

  - `data.groups.items.type` (string, required)
    The object's type.

* image - The only possible value.
    Enum: "image"

  - `data.groups.items.url` (string, required)
    The feature's interface location. This path is relative to the /usr/local/cpanel/ directory.
    Example: "/example_plugin/feature_name"

  - `data.groups.key` (string)
    A key to uniquely identify WHM interfaces and their associated assets for the [cPanel Analytics](https://go.cpanel.net/analytics) program.

Note:

Generally, this value matches the file parameter's value without the file's extension.
    Example: "feature_name"

  - `data.groups.searchtext` (string)
    A list of the group's search terms, space delimited.
    Example: "search keywords"

  - `data.groups.subtype` (string)
    The icon type to use.

* img - The only possible value.
    Enum: "img"

  - `data.groups.target` (string)
    The area of the interface in which the feature appears.

A valid HTML `` target attribute.
    Example: "_blank"

  - `data.groups.type` (string, required)
    The object's type.
    Example: "group"

  - `data.raw` (array)
    An array of objects containing the file's raw data for template directives.

  - `data.raw.itemdesc` (string, required)
    A valid [Template Toolkit](https://go.cpanel.net/tmpltoolkit) directive.
    Example: "[% PROCESS 'menu/plugins_list.tmpl' target='mainFrame' -%]"

  - `data.raw.type` (string, required)
    The object's type.

* raw - The only possible value. Raw data for template directives.
    Enum: "raw"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_available_applications"

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


