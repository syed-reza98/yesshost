[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - Add Plugins

## Introduction

Your installation script should use AppConfig to register plugins with the WHM interface. The `/usr/local/cpanel/bin/register_appconfig` script adds plugin icons to the WHM interface automatically. It also configures the plugin's ACL requirements and other plugin variables.

div
Warning:

**Do not** manually save the AppConfig configuration file to the `/var/cpanel/apps/` directory.

* Your installation script should use the AppConfig system to register plugins. For more information, read our [Guide to WHM Plugins - Installation Scripts](/guides/guide-to-whm-plugins/guide-to-whm-plugins-installation-scripts) documentation.
* You can also run the AppConfig system to register plugins in WHM manually.


## Add plugins to WHM

To register your WHM plugin with AppConfig manually, perform the following steps as the `root` user:

1. If it does not already exist, create the `/var/cpanel/apps/` directory.
2. Run the following command to set the correct directory permissions:



```
chmod 755 /var/cpanel/apps
```

1. [Create an AppConfig configuration file for the plugin.](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file)
2. Run the following command to register the configuration file, where `./example.conf` represents the configuration file:



```
/usr/local/cpanel/bin/register_appconfig ./example.conf
```

1. If the AppConfig registration succeeds, the system returns an `example registered` message and the system copies the file to the `/var/cpanel/apps/` directory.