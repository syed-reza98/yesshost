# Install or Uninstall Package

System Package Management / Install or Uninstall Package

## Install WHM plugin RPM package

 - [GET /install_rpm_plugin](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/plugins-install_rpm_plugin.md): This function starts a plugin installation. The installation runs as a background process.

## Start RPM package installation, update, or removal

 - [GET /package_manager_submit_actions](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/packagemanager-package_manager_submit_actions.md): This function installs, upgrades, or uninstalls RPM packages.

Note:

The system queues this function's actions to run as background tasks. The actions may
require additional time to finish.

## Start RPM package upgrade

 - [GET /package_manager_upgrade](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/packagemanager-package_manager_upgrade.md): This function downloads and installs package updates on the server.

## Uninstall WHM plugin RPM package

 - [GET /uninstall_rpm_plugin](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/plugins-uninstall_rpm_plugin.md): This function starts the uninstall process for a plugin. The uninstall process runs as a background process.

