[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - AppConfig Registration

## Introduction

Use AppConfig to register plugins with the WHM interface. AppConfig registration adds plugin icons to the WHM interface automatically. It also configures the plugin's ACL requirements, upgrade script information, and other plugin variables.

div
Note:

For more information about AppConfig, read our [Guide to WHM Plugins - The AppConfig System](/guides/guide-to-whm-plugins/guide-to-whm-plugins-the-appconfig-system) documentation.

## AppConfig registration

To register your WHM plugin with AppConfig, perform the following steps as the `root` user:

1. If it does not already exist, create the `/var/cpanel/apps` directory.
2. Run the following command to set the correct directory permissions:



```
chmod 755 /var/cpanel/apps
```

1. [Create an AppConfig configuration file for the plugin.](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file)
2. Run the following command to register the configuration file, where `example.conf` is the configuration file:



```
/usr/local/cpanel/bin/register_appconfig ~/example.conf
```

1. Run the following command to confirm that the plugin created its own `.conf` file in the `/var/cpanel/apps/` directory:



```
ls -al /var/cpanel/apps
```

1. The previous command's output should resemble the following example:



```
total 12
drwxr-xr-x  2 root root 4096 Aug  6 22:41 ./
drwxr-xr-x 83 root root 4096 Aug  7 18:00 ../
-rw-------  1 root root  259 Aug  6 22:41 example.conf
```

Guide to WHM Plugins - AppConfig Registration

* [Guide to WHM Plugins - Add Plugins](/guides/guide-to-whm-plugins/guide-to-whm-plugins-add-plugins)
* [Guide to WHM Plugins - Checks](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-checks)
* [Guide to WHM Plugins - Configuration File](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file)
* [Guide to WHM Plugins - Uninstall Plugins](/guides/guide-to-whm-plugins/guide-to-whm-plugins-uninstall-plugins)