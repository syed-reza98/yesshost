[Development Guides Home](/guides)

# Guide to WHM Plugins

## Introduction

WHM plugins add new functionality to the WHM interface.

* cPanel plugin requirements and WHM plugin requirements are **not** identical. For information about cPanel plugins, read our [Guide to cPanel Plugins](/guides/guide-to-cpanel-plugins) documentation.
* For help to troubleshoot issues with WHM plugin development, read our [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code) documentation.


## Plugin development workflow

div
Note:

* For additional information, read our [Create a WHM Plugin](/guides/quickstart-development-guide/tutorial-create-a-whm-plugin) tutorial.
* Make certain that your applications respect user privacy. We **strongly** recommend that you anonymize any data that you collect for analysis. For more information about how WebPros International, LLC handles private data, read our [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/) documentation.


When you create a WHM plugin, we recommend the following workflow:

1. Create your custom application (the plugin's backend code).
2. Create the [plugin's interfaces and other files](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files).
3. [Create an installation script.](/guides/guide-to-whm-plugins/guide-to-whm-plugins-installation-scripts) This script should [register your plugin with AppConfig](/guides/guide-to-whm-plugins/guide-to-whm-plugins-add-plugins) and perform several other actions.
4. [Create your plugin's AppConfig configuration file.](/guides/guide-to-whm-plugins/guide-to-whm-plugins-appconfig-configuration-file)
5. Compress your plugin's files for distribution.
  * We recommend that you compress your plugin's files into a tarball (`.tar.gz`) file for ease of distribution.
  * For most plugins, the compressed file should contain the application source files, the AppConfig configuration file, an upgrade script, and an installation script.
6. Distribute your plugin. When you distribute this plugin across multiple servers, system administrators must perform the following actions manually:
  * Decompress the plugin's `.tar.gz` file.
  * Run the installation script.