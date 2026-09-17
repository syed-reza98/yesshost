[Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-development-guide)

# Tutorial - Register a WHM Plugin with AppConfig

## Introduction

To use WHM plugins, you **must** register them with the AppConfig system. AppConfig registration adds plugin icons to the WHM interface automatically. It also configures the plugin's ACL requirements and other plugin variables.

* This method is  **required**.
* To register plugins with AppConfig, you **must** log in as the `root` user.
* For more information about AppConfig, read our [Guide to WHM Plugins - The AppConfig System](/guides/guide-to-whm-plugins/guide-to-whm-plugins-the-appconfig-system) documentation.


## Configure the AppConfig directory

If it does not already exist, you **must** create the `/var/cpanel/apps/` directory. Use the `chmod` command to set it to `755` permissions.

## Create the AppConfig configuration file

Create an AppConfig configuration file. AppConfig configuration files store each plugin's or application's AppConfig settings. For more information, read our [Guide to WHM Plugins - AppConfig Configuration File](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file) documentation.

Warning:
Configuration files **must** exist in the `/var/cpanel/apps/` directory and **must** use the `.conf` file extension.

## Register the plugin in AppConfig

To register the plugin with AppConfig, run the following command, where `example.conf` represents the configuration file's name:


```
/usr/local/cpanel/bin/register_appconfig ~/example.conf
```

When you run this command, the AppConfig system performs the following actions:

* Validates the configuration file and stores a version of it in the `/var/cpanel/apps/` directory.
* Regenerates the WHM plugin cache.
* Restarts the `cpsrvd` daemon.


Warning:
The system will **not** apply changes to AppConfig configuration files until the `cpsrvd` daemon restarts.

## Check plugin registration

If the plugin registered correctly, the system adds the configuration file to the `/var/cpanel/apps/` directory. To check whether a plugin registered with AppConfig correctly, run the following command:


```
ls -al /var/cpanel/apps
```

The command's output should resemble the following example:


```
total 12
drwxr-xr-x  2 root root 4096 Aug  6 22:41 ./
drwxr-xr-x 83 root root 4096 Aug  7 18:00 ../
-rw-------  1 root root  259 Aug  6 22:41 example.conf
```