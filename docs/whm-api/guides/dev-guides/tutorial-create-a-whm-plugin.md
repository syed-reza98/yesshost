[Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-development-guide)

# Tutorial - Create a WHM Plugin

## Introduction

WHM plugins add custom system administrator-level functionality to cPanel & WHM servers.

## Create your plugin's backend code

Use your preferred programming language to write your plugin's backend code.

If your plugin's functionality requires specific permissions, you **must** add appropriate [Access Control List (ACL) checks](/guides/guide-to-whm-plugins/guide-to-whm-plugins-access-control-lists).

## Create your plugin's interfaces

To allow WHM users to access your plugin within the WHM interface, provide one or more interfaces.

* For more information, read our [Guide to WHM Plugins - Interfaces](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/guide-to-whm-plugins-interfaces) documentation.
* For steps to create a basic WHM interface, read our [Create a New WHM Interface in Template Toolkit](/guides/quickstart-development-guide/tutorial-create-a-new-whm-interface-in-template-toolkit) and [Create a New WHM Interface in PHP](/guides/quickstart-development-guide/tutorial-create-a-new-whm-interface-in-php) tutorials.


## Add an installation script

You can include an installation script with your WHM plugins. We do **not** require a specific programming language or other specific details for this script. However, we **strongly** recommend that you create one, and that it performs at least the following actions:

* Check for the appropriate installation directories and create any that do not already exist.
* Register the plugin with the AppConfig system.
* Copy the plugin files, templates, and icons into the correct locations.


Important:
AppConfig registration does **not** automatically search for or run installation scripts. Whenever system administrators install plugins, they must decompress the files and run the installation script **manually**.

For more information or to view an example BASH installation script, read our [Guide to WHM Plugins - Installation Scripts](/guides/guide-to-whm-plugins/guide-to-whm-plugins-installation-scripts) documentation.

## Add an optional uninstallation script

When you provide an uninstallation script, make certain that it removes the plugin's icon, files, and directories, and then unregisters the plugin with AppConfig.

* Do **not** delete the plugin's AppConfig configuration file before you unregister the plugin.
* For more information and an example uninstallation script, read our [Guide to WHM Plugins - Uninstall Plugins](/guides/guide-to-whm-plugins/guide-to-whm-plugins-uninstall-plugins) documentation.


## Add an icon

Your installation script should store your plugin's icon in the `/usr/local/cpanel/whostmgr/docroot/addon_plugins/` directory.

* We **strongly** recommend that you use 48x48 `.png` images with a transparent background.
* Image files **must** use a supported image file type (`.gif`, `.jpeg`, or `.png`).


## Add other assets

Add any other files or assets to your plugin files. Many WHM plugins include the following additional files:

* A `LICENSE` file provides license information for a plugin.
* A `README` file can provide installation instructions, copyright and license information, and links to documentation and other external resources.


## Register your plugin with AppConfig

To use WHM plugins, you must register them with the AppConfig system. AppConfig registration adds plugin icons to the WHM interface automatically. It also configures the plugin's ACL requirements, upgrade script information, and other plugin variables.

* To register with AppConfig, you **must** create an [AppConfig configuration file](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file) and [register the plugin with AppConfig](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-registration).
* For steps to register a plugin, read our [Register a WHM Plugin with AppConfig](/guides/quickstart-development-guide/tutorial-register-a-whm-plugin-with-appconfig) tutorial.


## Test your plugin

Run your plugin's installation script and ensure that your plugin functions correctly.

For help to troubleshoot common WHM plugin development issues, read our [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code) documentation.