[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - Uninstall Plugins

## Introduction

WHM plugins can include uninstallation scripts, or system administrators can remove them manually. Uninstallation scripts should perform all of the same actions as manual uninstallation.

div
Note:

cPanel plugin requirements and WHM plugin requirements are **not** identical. For information about cPanel plugins, read our [Guide to cPanel Plugins](/guides/guide-to-cpanel-plugins) documentation.

## Uninstall a plugin manually

To uninstall or remove a plugin from a cPanel & WHM server, perform the following steps:

1. Manually remove all of the plugin's files **except** for the AppConfig configuration file.
  * We recommend that plugin developers store most plugin files in subdirectories within the `/usr/local/cpanel/3rdparty/` directory. However, many plugins also use or create files outside of this directory.
  * For help to find and remove plugin files, system administrators should contact the plugin's developers. If you do not remove the plugin's files, the plugin will continue to appear in WHM's interface.
2. Run the following command, where `app` represents either the absolute path to the application's AppConfig configuration file, or the application's internal name:
`/usr/local/cpanel/bin/unregister_appconfig app`
  * This script unregisters applications with AppConfig and removes the application's configuration file from the `/var/cpanel/apps/` directory.
  * This script **only** removes third-party applications. It **cannot** remove applications that ship with cPanel & WHM.


## Example uninstallation script

The following example BASH uninstallation script performs the necessary actions to uninstall a WHM plugin:


```
#/usr/bin/bash

# Remove plugin icons.
/bin/rm -f /usr/local/cpanel/whostmgr/docroot/addon_plugins/whm_plugin_example.png

# Removing plugin directories
/bin/rm -rf /usr/local/cpanel/whostmgr/docroot/cgi/whm_example_plugin
/bin/rm -rf /usr/local/cpanel/whostmgr/docroot/templates/whm_example_plugin

# Unregister the plugin with AppConfig
/usr/local/cpanel/bin/unregister_appconfig /var/cpanel/apps/whm_example_plugin.conf
```

* Line 4 removes the plugin's icons.
* Lines 7 and 8 remove the plugin's directories.
* Line 11 unregisters the plugin with AppConfig.


div
Important:

Make **certain** that your script removes **all** of the files for your plugin **except** for the AppConfig configuration file before it unregisters the plugin.