[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - Installation Scripts

## Introduction

You can include an installation script with your WHM plugins.

We do **not** require a specific programming language or other specific details for this script. However, we **strongly** recommend that you create one, and that it performs at least the following actions:

* Check for the appropriate installation directories and create any that do not already exist.
* Register the plugin with the AppConfig system.
* Copy the plugin files, templates, and icons into the correct locations.


div
Warning:

AppConfig registration does **not** automatically search for or run installation scripts. Whenever system administrators install plugins, they must decompress the files and run the installation script **manually**.

## Example installation script

div
Note:

In this example, `example_plugin` represents the plugin's name.

The following example BASH script performs all of the recommended actions to install a WHM plugin:


```
#/usr/bin/bash

# Check for and create the directory for plugin and AppConfig files.
if [ ! -d /var/cpanel/apps ]
    then
    mkdir /var/cpanel/apps
    chmod 755 /var/cpanel/apps
fi

# Check for and create the directory for plugin CGI files.
if [ ! -d /usr/local/cpanel/whostmgr/docroot/cgi/example_plugin ]
  then
    mkdir /usr/local/cpanel/whostmgr/docroot/cgi/example_plugin
    chmod 755 /usr/local/cpanel/whostmgr/docroot/cgi/example_plugin
fi

# Check for and create the directory for plugin template files.
if [ ! -d /usr/local/cpanel/whostmgr/docroot/templates/example_plugin ]
  then
    mkdir /usr/local/cpanel/whostmgr/docroot/templates/example_plugin
    chmod 755 /usr/local/cpanel/whostmgr/docroot/templates/example_plugin
fi

# Register the plugin with AppConfig.
/usr/local/cpanel/bin/register_appconfig ./plugin/example_plugin.conf

# Copy plugin files to their locations and update permissions.
/bin/cp ./plugin/example_plugin.cgi /usr/local/cpanel/whostmgr/docroot/cgi/example_plugin
chmod 755 /usr/local/cpanel/whostmgr/docroot/cgi/example_plugin/example_plugin.cgi
/bin/cp -R -f ./plugin/templates/* /usr/local/cpanel/whostmgr/docroot/templates/example_plugin
/bin/cp ./plugin/example_plugin.png /usr/local/cpanel/whostmgr/docroot/addon_plugins
```

### Check for and create plugin directories

Before you can install a WHM plugin, the required directories **must** exist. You **must** also ensure that the directories use `755` permissions.

* Lines 4 through 8 check for, create, and update permissions for the `/var/cpanel/apps` directory, which will contain the plugin's AppConfig configuration file and a subdirectory of plugin files.
* Lines 11 through 15 check for, create, and update permissions for the `/usr/local/cpanel/whostmgr/docroot/cgi/example_plugin/` directory, which will contain any CGI files for the plugin.
* Lines 18 through 22 check for, create, and update permissions for the `/usr/local/cpanel/whostmgr/docroot/templates/example_plugin/` directory, which will contain the plugin's interface template files.


div
Remember:

In this example, `example_plugin` represents the plugin's name.

### Register with AppConfig

Line 25 uses the `/usr/local/cpanel/bin/register_appconfig` script and the plugin's AppConfig configuration file to register the plugin with AppConfig.

div
Note:

For more information, read our [Guide to WHM Plugins - Add Plugins](/guides/guide-to-whm-plugins/guide-to-whm-plugins-add-plugins) and [Guide to WHM Plugins - AppConfig Configuration File](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file) documentation.

### Copy plugin files to their final locations

Lines 28 through 31 copy the plugin files to the appropriate locations and update them to use `755` permissions.

* Line 28 copies the plugin's CGI file to the CGI directory.
* Line 29 sets the copied CGI file to use `755` permissions.
* Line 30 copies the plugin's template files to the template directory.
* Line 31 copies the plugin's icon to the `/usr/local/cpanel/whostmgr/docroot/addon_plugins/` directory, which contains plugin icon files.