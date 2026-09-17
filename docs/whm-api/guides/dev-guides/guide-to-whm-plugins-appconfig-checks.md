[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - AppConfig Checks

## Introduction

The AppConfig system's utilities automate several AppConfig functions. This document describes how to perform the following actions via AppConfig utilities:

* Check a WHM plugin's AppConfig registration.
* List the registered WHM plugins on the server and their configuration settings.


You can also perform the following other actions via AppConfig utilities:

* [Register a new WHM plugin on a server.](/guides/guide-to-whm-plugins/guide-to-whm-plugins-add-plugins)
* [Uninstall a WHM plugin from a server.](/guides/guide-to-whm-plugins/guide-to-whm-plugins-uninstall-plugins)


div
Important:

AppConfig utilities also return information about specific applications in cPanel and Webmail. However, you **cannot** use the AppConfig system to register cPanel plugins. To register cPanel plugins, read our [Guide to cPanel Plugins - Add Plugins](/guides/guide-to-cpanel-plugins/guide-to-cpanel-plugins-add-plugins) documentation.

div
Note:

The system retrieves the majority of this data from each application's AppConfig configuration file.

## Check plugin registration

The `/usr/local/cpanel/bin/is_registered_with_appconfig` script checks whether an application registered with a specific service in AppConfig.

To use this script, run the following command:


```
/usr/local/cpanel/bin/is_registered_with_appconfig service appname
```

* Replace `service` with the desired cPanel & WHM service:
  * `cpanel` — Check for specific cPanel applications.
  * `whostmgr` — Check for [WHM plugins](/guides/guide-to-whm-plugins).
  * `webmail` — Check for specific Webmail applications.
* Replace `appname` with the desired application's internal name.


For example, to check whether the myplugin plugin exists in WHM, run the following command:


```
/usr/local/cpanel/bin/is_registered_with_appconfig whostmgr myplugin
```

The script returns the following output:

* `1` — The application registered in AppConfig with the specified service.
* `0` — The application did **not** register in AppConfig with the specified service.


## List registered plugins

The `/usr/local/cpanel/bin/show_appconfig` script prints a YAML-formatted list of AppConfig applications and their configuration settings.

To use this script, run the following command:


```
/usr/local/cpanel/bin/show_appconfig
```

### Example output


```
---
cpanel:
  -
    features:
      - webmail
    name: roundcube
    phpConfig: roundcube
    url: /3rdparty/roundcube/
    user: cpanelroundcube
  -
    features:
      - logaholic
    name: logaholic
    url: /3rdparty/Logaholic
    user: cpanellogaholic
webmail:
  -
    features:
      - webmail
    name: roundcube
    phpConfig: roundcube
    url: /3rdparty/roundcube/
    user: cpanelroundcube
whostmgr:
  -
    acls:
      - all
    name: internal_dnsclustering_root
    url:
      - /cgi/adjustclusterdns.cgi
      - /cgi/adjustclusteroptions.cgi
    user: root
```