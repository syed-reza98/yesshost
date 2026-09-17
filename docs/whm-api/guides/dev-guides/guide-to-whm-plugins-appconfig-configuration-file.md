[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - AppConfig Configuration File

## Introduction

AppConfig configuration files store each plugin's or application's AppConfig settings.

div
Warning:

* The system will **not** apply changes to AppConfig configuration files until the `cpsrvd` service restarts. For more information, read our [How to Restart Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/) documentation.
* Configuration files **must** exist in the `/var/cpanel/apps/` directory and **must** use the `.conf` file extension.


## File contents

When you create an AppConfig file, use the `key=value` pairs from the tables below.

div
Note:

The AppConfig configuration file supports comments.

### All applications

| Key | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `service` | *string* | **Required**The service that will serve the application. | `cpanel` — cPanel.`whostmgr` — WHM.`webmail`— Webmail.Supply multiple values as a pipe-separated list (for example, `cpanel | whostmgr |
| `user` | *string* | The system account that runs the application. For WHM applications, this value defaults to `root`. | A valid WHM username on the server.`$authuser` — Use this value to run the application as the authenticated user. | `username` |
| `phpConfig` | *string* | The directory that contains the application's `php.ini` file. | A valid directory name, relative to the `/usr/local/cpanel/3rdparty/` directory. | `Example` |
| `url*` | *string* | Additional URLs through which the system can access your application.Increment the parameter name to specify multiple URLs (for example, `url2` and `url3` ). | A valid application location. | `http://www.example.com/application.php` |


### WHM applications

| Key | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `url` | *string* | **Required**The application's location. | A valid location, relative to the `/usr/local/cpanel/whostmgr/docroot/`  directory. You **must** prefix the URL with a slash (/), or your WHM plugin will not function. | `/cgi/example.cgi` |
| `acls` | *string* | **Required**A list of [ACLs](/guides/guide-to-whm-plugins/guide-to-whm-plugins-access-control-lists). The authenticated user **must** possess at least one of these ACLs to access the application. | A comma-separated list of one or more [ACLs](/guides/guide-to-whm-plugins/guide-to-whm-plugins-acl-reference-chart).`any` — Allow all authenticated users to use the application. | `any` |
| `entryurl` | *string* | The URL to access the application through the WHM interface.If you use this key, WHM creates a link to the application from the WHM interface.If you do **not** use this key, no menu entry for the item will appear. We **strongly** recommend that you include this key. | A valid location, relative to the `/usr/local/cpanel/whostmgr/docroot/` directory. | `addons/example/index.cgi` |
| `displayname` | *string* | The application's display name in the WHM interface. | A valid string. | `My Application` |
| `icon` | *string* | The application's icon's filename. | A valid WHM icon filename. For more information, read our [Guide to WHM Plugins - Plugin Files](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files) documentation. | `example_icon.png` |
| `searchtext` | *string* | Custom keywords for searching and locating your plugin in the WHM interface.Available in cPanel & WHM version 132 (132.0.0) and later. | A space-separated list of keywords. | `MyPlugin Keyword1 Keyword2` |
| `target` | *string* | The targeted browser window in which to open the application link.This value defaults to `_blank`. | A valid [`target` attribute](https://www.w3schools.com/tags/att_a_target.asp). Specify `_self` to open in the current browser tab. | `_blank` |


### cPanel and Webmail applications

| Key | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `url` | *string* | **Required**The URL to access the application through the cPanel or WHM interface. | A valid script location that exists in the `/usr/local/cpanel/base/3rdparty/` directory, relative to the `/usr/local/cpanel/base/` directory.You **must** prefix the URL with a slash (/), or your WHM plugin will not function. | `3rdparty/example.php` |
| `features` | *string* | **Required**A list of features.The authenticated user must possess at least one of these features to access the application. | A comma-separated list of one or more feature names.`any` — Allow all authenticated users to use the application. | `any` |


### Example


```
# The application's service.
service=cpanel

# Physical path: /usr/local/cpanel/3rdparty/Example.php
# Literal URL path: $server:$port/$cpsession/3rdparty/Example.php
url=/3rdparty/Example.php

# System user to run process as
user=cpaneluser

# Directory that contains the php.ini file.
# (in the /usr/local/cpanel/3rdparty/ directory)
phpHandler=Example

# Features required
features=any
```