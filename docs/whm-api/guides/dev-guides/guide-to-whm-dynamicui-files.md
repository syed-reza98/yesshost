[Development Guides Home](/guides)

# Guide to WHM dynamicui Files

## Introduction

WHM themes use `dynamicui` files to display icons and groups. This system controls the items that appear in the WHM interface. The `dynamicui` file for WHM's default theme resides in the `/usr/local/cpanel/whostmgr/docroot/themes/x/dynamicui.conf` file.

The WHM dynamicui system **only** controls items in the WHM interface. The [cPanel dynamicui system](/guides/guide-to-cpanel-plugins/guide-to-cpanel-plugins-the-dynamicui-files) controls items in the cPanel interface.

To best match the WHM interface, include the provided headers and footers in your custom interfaces. For more information, read our [Guide to WHM Plugins - Interfaces](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/guide-to-whm-plugins-interfaces/) documentation and our **experimental** [User Interface Style Guide](http://styleguide.cpanel.net/).

## The dynamicui files

The `dynamicui` files contain data that the system uses to generate groups of feature icons. The files store this data as hashes within a JSON-formatted file. Each hash requires the type parameter. This parameter determines if that hash describes a group, a feature's icon image, a subsection, or raw data. The type parameter defaults to `image`.

For example, the *Tweak Settings* icon resides in the [*Server Configuration*](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) group. It displays as a text link within that group in the [WHM interface's](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/#side-navigation-menu) side navigation menu. The `dynamicui.conf` file contains a group hash for the [*Server Configuration*](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) group, an image hash for the [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) feature, and could contain `subitem` hashes or `raw` hashes for associated content.

The `dynamicui` files contain the following hash types:

* group — A group of features.
* image — An individual WHM feature.
* subitem — A subsection of an individual WHM feature.
* raw — Raw data for template directives.


### Hash type parameters

Each hash type can contain additional parameters. For more information about each hash type's parameters, click the hash's tab.

#### Group

A `dynamicui` file group hash contains the following parameters:

| Parameter | Type | Description | Possible Values | Example |
|  --- | --- | --- | --- | --- |
| `type` | *string* | **Required**  The hash's type. | `group` | `group` |
| `acl` | *string* | **Required**  The group's Access Control Lists (ACLs).  Only WHM users who possess the specified ACLs can view or use the item.System administrators can configure users' ACLs in WHM's [*Edit Reseller Nameservers and Privileges*](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface (*WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges*). | `ACL=` and a comma-separated list of one or more valid ACLs, to restrict access to the group.  For a complete list of available ACLs, read our [Guide to WHM Plugins - ACL Reference Chart](/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart) documentation.A blank value — Allow all WHM users access to the group. | `ACL=all` |
| `dnsonly_ok` | *string* | **Required**  The group's status for [cPanel DNSOnly™](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/) servers. | `dns` — The group appears on cPanel DNSOnly servers.A blank value — The group does **not** appear on cPanel DNSOnly servers. | `dns` |
| `file` | *string* | **Required**  The icon file to display for the group. | A valid `.png` or `.svg` image file, relative to the theme's icon directory.  Icons for any WHM plugins exist separately from the server's theme. For more information, read our [Guide to WHM Plugins - Plugin Files](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files) documentation. | `feature_name.png` |
| `group` | *string* | **Required**  The group name. | A string value. | `group_name` |
| `groupdesc` | *string* | **Required**  The group's display name. | A string value.  You can localize this string to display it in the user's preferred language in the WHM interface. For more information, read our [Guide to Locales](/guides/guide-to-locales) documentation. | `$LANG{'Group Name'}` |
| `grouporder` | *integer* | **Required**  The group's display order in the WHM interface. | A positive integer that indicates the group's display order in the WHM interface.  Lower values appear at the top of the interface. | `1` |
| `imgtype` | *string* | The group or feature's image type. | `icon` is the only possible value. | `icon` |
| `searchtext` | *string* | A list of the group's search terms. | A space-separated list of strings. | `search keywords` |
| `subtype` | *string* | The icon type to use. | `img` is the only possible value. | `img` |
| `target` | *string* | The area of the interface in which the feature appears. | A valid HTML `<a>` target attribute. | `_blank` |
| `key` | *string* | A key to uniquely identify WHM interfaces and their associated assets for the [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/) program.  | A string value.  Generally, this value matches the file parameter's value without the file's extension. | `feature_name` |


#### Image

| Parameter | Type | Description | Possible Values | Example |
|  --- | --- | --- | --- | --- |
| `type` | *string* | **Required**  The hash's type. | `image` | `image` |
| `acl` | *string* | **Required**  The group, feature, or subitem's ACLs.   Only WHM users who possess the specified ACLs can view or use the item.System administrators can configure users' ACLs in WHM's [*Edit Reseller Nameservers and Privileges*](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface (*WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges*). | 1ACL=1 and a comma-separated list of one or more valid ACLs, to restrict access to the feature. For a complete list of available ACLs, read our [Guide to WHM Plugins - ACL Reference Chart](/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart) documentation.A blank value — Allow all WHM users access to the feature. | `ACL=all` |
| `description` | *string* | **Required**  The feature's description that displays when the feature appears on the WHM Home interface.  | A string value.  You can localize this string to display it in the user's preferred language in the WHM interface. For more information, read our [Guide to Locales](/guides/guide-to-locales) documentation. | `View and manage reseller accounts on your server. Resellers manage other [asis,cPanel] accounts and can access [asis,cPanel].` |
| `dnsonly_ok` | *string* | **Required**  The feature's status for [cPanel DNSOnly](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/) servers. | `dns` — The feature appears on cPanel DNSOnly servers.A blank value — The feature does not appear on cPanel DNSOnly servers. | `dns` |
| `file` | *string* | **Required**  The icon file to display for the feature. | A `.png` or `.svg` image file, relative to the theme's icon directory.  Icons for any WHM plugins exist separately from the server's theme. For more information, read our [Guide to WHM Plugins - Plugin Files](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files) documentation. | `feature_name.png` |
| `group` | *string* | **Required**  The group in which the item appears. | The `group` value from an existing `group` hash. | `group_name` |
| `imgtype` | *string* | The feature's image type. | `icon` is the only possible value. | `icon` |
| `itemdesc` | *string* | The feature's display name. | A string value.  You can localize this string to display it in the user's preferred language in the WHM interface. For more information, read our [Guide to Locales](/guides/guide-to-locales) documentation.A valid [Template Toolkit](/guides/guide-to-template-toolkit) directive. | `$LANG{'Feature Name'}` |
| `itemorder` | *integer* | **Required**  The feature's display order within its group. | A positive integer that indicates the order in which the feature appears in its group.  Lower values appear earlier in the group. | `1` |
| `minimum_accounts_needed` | *integer* | The minimum number of accounts required to display the feature icon. | A positive integer. | `2` |
| `multiuser_required` | *Boolean* | Whether the server allows for the creation of more than a single user.  Note: You cannot use this parameter on servers with a [cPanel Solo® License](https://docs.cpanel.net/knowledge-base/accounts/cpanel-solo-license/). | `1` — Display the feature icon.`0` — Do **not** display the feature icon. | `1` |
| `role` | *string* or *hash* | **Required**  The feature's server role. The server creates this parameter automatically. Do not edit this parameter's value. We do not support customizations to this parameter.The icon only appears in the interface if the server configuration uses this role.For more information about roles and server configurations, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/) documentation. | A valid server profile role.A JSON hash that contains the `match` parameter and the `roles` array. | {"match" : "any" , "roles" : ["MailSend", "MailLocal"]} |
|      `match` | *string* | Whether to require all roles in the roles parameter to match the server's roles.  The `role` hash contains this parameter. | `any` — Require the server to match any role in the `roles` parameter to display the feature. (OR condition)`all` — Require the server to match all roles in the `roles` parameter to display the feature. (AND condition) | `any` |
|       `roles` | *array* | An array of roles.  The role hash contains this parameter. | An array that contains one or more roles. | `"MailSend" "MailLocal"` |
| `searchtext` | *string* | A list of search terms for the feature. | A space-separated list of strings. | `search keywords` |
| `service` | *string* or *hash* | **Required**  The [cPanel Service Daemon](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/) that monitors the feature.  The server creates this parameter automatically. Do **not** edit this parameter's value. We do **not** support customizations to this parameter.This icon only appears on servers with the service enabled.  | A valid cPanel Service Daemon. For a complete list of service daemons, read our [cPanel Service Daemons](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/) documentation.A hash that contains the `match` parameter and `services` array. | `mysql` |
|       `match` | *string* | Whether to require all services in the services parameter to match enabled services on the server.  The `service` hash contains this parameter. | `any` — Require the server to match any service in the services parameter to display the feature. (OR condition)`all` — Require the server to match all services in the services parameter to display the feature. (AND condition) | `any` |
|       `services` | *string* | An array of services.  The `service` hash contains this parameter. | An array that contains one or more service names. | `"mysql" "ftp"` |
| `subtype` | *string* | The icon type to use. | `img` is the only possible value. | `img` |
| `target` | *string* | The area of the interface in which the feature appears. | A valid HTML `<a>` target attribute. | `_blank` |
| `url` | *string* | **Required**  The feature's interface location. | A valid path, relative to the `/usr/local/cpanel/` directory. | `/example_plugin/feature_name` |
| `key` | *string* | A key to uniquely identify WHM interfaces and their associated assets for the [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/) program. | A string value.  Generally, this value matches the `file` parameter's value without the file's extension. | `feature_name` |


#### Subitem

| Parameter | Type | Description | Possible Values | Example |
|  --- | --- | --- | --- | --- |
| `type` | *string* | **Required**  The hash's type. | `subitem` | `subitem` |
| `acl` | *string* | **Required**  The subitem's ACLs.  Only WHM users who possess the specified ACLs can view or use the item.System administrators can configure users' ACLs in WHM's [*Edit Reseller Nameservers and Privileges*](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface (*WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges*). | `ACL=` and a comma-separated list of one or more valid ACLs, to restrict access to the subitem.  For a complete list of available ACLs, read our [Guide to WHM Plugins - ACL Reference Chart](/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart) documentation.A blank value — Allow all WHM users access to the subitem. | `ACL=all` |
| `breadcrumb` | *string* | **Required**  A subitem's parent feature's location. The system uses this value to generate breadcrumbs at the top of each WHM interface. | The subitem's parent feature's url value. | `/example_plugin/feature_name` |
| `dnsonly_ok` | *string* | **Required**  The subitem's status for [cPanel DNSOnly](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly/) servers. | `dns` — The subitem appears on cPanel DNSOnly servers.A blank value — The subitem does **not** appear on cPanel DNSOnly servers. | `dns` |
| `file` | *string* | **Required**  The icon file to display for the subitem. | A valid `.png` or `.svg` image file, relative to the theme's icon directory.  Icons for any WHM plugins exist separately from the server's theme. For more information, read our [Guide to WHM Plugins - Plugin Files](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/) documentation. | `feature_name.png` |
| `group` | *string* | **Required**  The group in which the item appears. | The `group` value from an existing `group` hash. | `group_name` |
| `itemdesc` | *string* | The subitem's display name. | A string value.  You can localize this string to display it in the user's preferred language in the WHM interface. For more information, read our [Guide to Locales](/guides/guide-to-locales) documentation. | `$LANG{'Feature Name'}` |
| `parent` | *integer* | **Required**  The subitem's parent feature's display order in the WHM interface. | The subitem's parent feature's `itemorder` value. | `1` |
| `searchtext` | *string* | A list of search terms for the subitem. | A space-separated list of strings. | `search keywords` |
| `target` | *string* | The area of the interface in which the subitem displays. | A valid HTML `<a>` target attribute. | `_blank` |
| `url` | *string* | **Required**  The subitem's interface location. | A valid path, relative to the `/usr/local/cpanel/` directory. | `/example_plugin/feature_name` |
| `key` | *string* | A key to uniquely identify WHM interfaces and their associated assets for the [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/) program. | A string value.  Generally, this value matches the `file` parameter's value without the file's extension. | `feature_name` |


#### Raw

| Parameter | Type | Description | Possible Values | Example |
|  --- | --- | --- | --- | --- |
| `type` | *string* | **Required** The hash's type. | `raw` — Raw data for template directives. | `raw` |
| `itemdesc` | *string* | **Required** The template directive. | A valid [Template Toolkit](/guides/guide-to-template-toolkit) directive. | `[% PROCESS 'menu/plugins_list.tmpl' target='mainFrame' -%]` |


### Hash examples

To view an example dynamicui file for each hash, select that hash's tab:

#### Group

A `dynamicui` file `group` hash will resemble the following example:


```perl
{
   "type" : "group",
   "acl" : "",
   "dnsonly_ok" : "dns",
   "file" : "group_icon.png",
   "group" : "group_name",
   "groupdesc" : "$LANG{'Group Name'}",
   "grouporder" : 1,
   "imgtype" : "icon",
   "searchtext" : "search keywords",
   "subtype" : "img",
   "target" : "mainFrame",
   "key" : "group_name"
 }
```

#### Image

A `dynamicui` file `image` hash will resemble the following example:


```perl
{
   "type" : "image",
   "acl" : "ACL=all",
   "description" : "$LANG{'This is my interface. There are many like it, but this is mine.'}"
   "dnsonly_ok" : "",
   "file" : "feature_name.png",
   "group" : "group_name",
   "imgtype" : "icon",
   "itemorder" : 2,
   "key" : "feature_name",
   "itemdesc" : "$LANG{'Feature Name'}",
   "searchtext" : "search keywords",
   "subtype" : "img",
   "target" : "mainFrame",
   "url" : "/example_plugin/feature_name",
   "minimum_accounts_needed": 2,
   "multiuser_required": 1,    
   "role" : {
       "match":"any",
       "roles":[
          "MailSend",
          "MailLocal"
       ]
   },
   "service" : "mysql"
}
```

#### Subitem

A `dynamicui` file `subitem` hash will resemble the following example:


```perl
{
   "type" : "subitem",
   "acl" : "ACL=all",
   "breadcrumb" : "/example_plugin/feature_name",
   "dnsonly_ok" : "",
   "file" : "subitem_name.png",
   "group" : "group_name",
   "itemdesc" : "$LANG{'Subitem Name'}",
   "parent" : "2",
   "searchtext" : "search keywords",
   "key" : "subitem_name",
   "target" : "mainFrame",
   "url" : "/example_plugin/feature_name/sub_item"
}
```

#### Raw

A `dynamicui` file `raw` hash will resemble the following example:


```perl
{
   "type" : "raw",
   "itemdesc" : "[% PROCESS 'menu/plugins_list.tmpl' target='mainFrame' -%]" }
```

## API control

You can use [WHM API 1's `get_available_applications`](/openapi/whm/operation/get_available_applications/) function to retrieve the contents of `dynamicui` files.