[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - Plugin Files

## Introduction

WHM includes specific requirements for plugin interfaces and other files.

div
Note:

* cPanel plugin requirements and WHM plugin requirements are **not** identical. For information about cPanel plugins, read our [Guide to cPanel Plugins](/guides/guide-to-cpanel-plugins) documentation.
* [AppConfig configuration files](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file) exist in the `/var/cpanel/apps/` directory. However, we **strongly** recommend that you **only** modify AppConfig files and settings via [AppConfig utilities](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-checks).


## Files

WHM plugins can include many different types of files. Your installation script should use the following locations to store your plugins' files:

### Interface files

Your installation script should store interface files in a subdirectory of the `/usr/local/cpanel/whostmgr/docroot/templates/` directory.

* WHM plugin interfaces that perform ACL checks **must** include an additional module. For more information, read our Guide to [WHM Plugins - ACL Reference Chart](/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart) documentation.
* cPanel & WHM uses a wrapper system that plugin developers can access in their custom interfaces.
  * We **strongly** recommend that you use WHM's master template and wrappers to match the look and feel of WHM's existing interfaces. For more information about WHM's master template, header, and footer, read our [Guide to WHM Plugins - Interfaces](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/guide-to-whm-plugins-interfaces) documentation.
  * We **strongly** recommend that you use [Template Toolkit](/guides/guide-to-template-toolkit) to create your plugin's interfaces.
  * For steps to create a custom WHM interface in Template Toolkit, read our [Create a New WHM Interface in Template Toolkit](/guides/quickstart-development-guide/tutorial-create-a-new-whm-interface-in-template-toolkit) tutorial.
* cPanel plugin requirements and WHM plugin requirements are **not** identical. For information about cPanel plugins, read our [Guide to cPanel Plugins](/guides/guide-to-cpanel-plugins) documentation.
* For resources that help you match custom interfaces to the WHM interface, read our **experimental** [User Interface Style Guide](http://styleguide.cpanel.net/).


### Icons

Your installation script should store icons in the `/usr/local/cpanel/whostmgr/docroot/addon_plugins/` directory.

* When you register your plugin, the AppConfig configuration file automatically adds your plugin's icon to the WHM interface.
* We **strongly** recommend that you use 48x48 pixel `.png` images with a transparent background.
* Image files **must** use a supported image file type (`.gif`, `.jpeg`, or `.png`).


### CGI scripts

Your installation script should store CGI scripts in the  `/usr/local/cpanel/whostmgr/docroot/cgi/` directory.

* For plugins with a single CGI file, use the `addon_name.cgi` naming convention for CGI scripts, where `name` represents your plugin's name.
* For plugins with multiple CGI files, store them in a subdirectory within the /`usr/local/cpanel/whostmgr/docroot/cgi` directory.


#### `WHMADDON` and `ACLS` comments

CGI scripts can include two special comment lines that provide additional plugin information to WHM.

* The `WHMADDON` comment creates an entry for the plugin in WHM's left navigation menu. This comment line **must** use the following format:
`#WHMADDON:plugin_name:Display Name:icon.png`
In this example, `plugin_name` represents the plugin's name, `Display Name` represents the plugin's display name, and `icon.png` represents the plugin's icon file.
* The `ACLS` comment determines the Access Control Lists (ACLs) that the plugin requires in order to display in WHM's left navigation menu. This comment line **must** use the following format:
`#ACLS:all`
In this example, `all` represents a list of ACLs that the plugin requires. For a complete list of ACLs, read our Guide to [WHM Plugins - ACL Reference Chart](/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart) documentation.


#### Example


```
#!/usr/local/cpanel/3rdparty/bin/perl
#WHMADDON:example:Example WHM Plugin:example.png
#ACLS:all

use strict;
 package cgi::examplePlugin;
 use warnings;
 use Cpanel::Template                  ();

 # Make the script into a modulino, to facilitate testing.
 run() unless caller();

 sub run {
     print "Content-type: text/html\r\n\r\n";
     Cpanel::Template::process_template(
         'whostmgr',
         {
             'template_file' => 'whm_example_plugin/index.tmpl',
             'print'         => 1,
         }
     );
     exit;
 }
```

### Other files

Your installation script should store other plugin files in a subdirectory of the `/usr/local/cpanel/3rdparty/` directory.

When files exist in this directory, WHM users with the correct permissions can access them via a URL. For example, WHM users on the `example.com` server could access the `/usr/local/cpanel/3rdparty/myplugin/index.html` file via the following URL:


```
https://example.com:2087/cpsess##########/myplugin/index.html
```