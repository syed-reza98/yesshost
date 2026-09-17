[Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code)

# Guide to Testing Custom Code - cPanel Plugin Registration

## Introduction

This guide explains the basics of how to troubleshoot registration issues for cPanel plugins.

This document lists appropriate test steps for most custom code, and helpful information to [troubleshoot common problems](#troubleshoot-common-issues). Make certain that you evaluate the testing requirements of your own code, and allow its functionality to determine the appropriate steps.

Warning:
cPanel Technical Support cannot always assist third-party developers with problems that relate to custom code. For this reason, **always** test your projects **thoroughly** before you attempt to use them on production servers.

## Testing steps

Note:
Because the testing requirements of custom code differ, this document begins with the assumption that you have already discovered problems.

### Check to ensure that you used the correct method for the desired theme and version

Each cPanel theme requires different methods of registration, and these methods vary between different cPanel & WHM versions. For more information, read our [Guide to cPanel Plugins](/guides/guide-to-cpanel-plugins) documentation.

### Check to ensure that you formatted the install.json file correctly

cPanel plugins use the `install.json` file to interface with the `dynamicui` system, which adds icons to the cPanel interface.

Your `install.json` file should resemble the following example:


```
[
   {
      "name" : "Support",
      "order" : 11,
      "type" : "group",
      "id" : "custom_support_group"
   },
   {
      "icon" : "supportcontact.png",
      "group_id" : "custom_support_group",
      "order" : 10000,
      "name" : "Contact Support",
      "type" : "link",
      "id" : "contact_support",
      "uri" : "http://support.example.com"
   }
]
```

## Troubleshoot common issues

### error: No file found at example.tar.gz

**Problem:**

You receive the following error when you attempt to use the `/usr/local/cpanel/scripts/install_plugin` script to install your plugin:


```
error: No file found at example.tar.gz
```

**Solution:**

This error occurs because the `/usr/local/cpanel/scripts/install_plugin` script could not locate the plugin file that you specified.

To resolve this issue, make certain that the plugin file exists in the specified location on your server.

### error: No archive given!

**Problem:**

You receive the following error when you attempt to use the `/usr/local/cpanel/scripts/install_plugin` script to install your plugin:


```
error: No archive given!
```

**Solution:**

This error occurs because you did not pass a file location to the `/usr/local/cpanel/scripts/install_plugin` script.

To resolve this issue, make certain that you include the file location when you run the script. For more information, read our [Guide to cPanel Plugins](/guides/guide-to-cpanel-plugins) documentation.

### error: install.json is missing from the plugin archive, cannot process

**Problem:**

You receive the following error when you attempt to use the `/usr/local/cpanel/scripts/install_plugin` script to install your plugin :


```
error: install.json is missing from the plugin archive, cannot process
```

**Solution:**

This error occurs when the `/usr/local/cpanel/scripts/install_plugin` script cannot find the `install.json` file in the specified plugin file. Plugin registrations require this file.

For more information, read our [Add Plugins](/guides/guide-to-cpanel-plugins/guide-to-cpanel-plugins-add-plugins) documentation.

### Permission denied

**Problem:**

You receive one or more `Permission denied` errors when you attempt to use the `/usr/local/cpanel/scripts/install_plugin` script to install your plugin.

**Solution:**

These errors occur when you attempt to run the `/usr/local/cpanel/scripts/install_plugin` script as any user other than the `root` user. Due to the permissions that this script requires in order to access the necessary files, **only** the `root` user can run this script successfully.