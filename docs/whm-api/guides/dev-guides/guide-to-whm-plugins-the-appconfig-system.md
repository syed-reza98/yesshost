[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - The AppConfig System

## Introduction

The AppConfig system configures cPanel & WHM attributes and registers WHM plugins. Use AppConfig in your WHM plugin installation scripts to register [WHM plugins](/guides/guide-to-whm-plugins). You can also use the AppConfig system to add application attributes in cPanel, WHM, or Webmail. [AppConfig configuration files](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file) store each application's configuration settings.

## Test application

A test application is available on Github here:

* https://github.com/CpanelInc/addon_securityadvisor
* https://github.com/CpanelInc/addon_securityadvisor/blob/master/pkg/appconfig/securityadvisor.conf
* https://github.com/CpanelInc/addon_securityadvisor/blob/master/pkg/install
* https://github.com/CpanelInc/addon_securityadvisor/blob/master/pkg/bin/upgrade