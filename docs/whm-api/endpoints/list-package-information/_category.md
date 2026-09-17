# List Package Information

System Package Management / List Package Information

## Return available RPM packages

 - [GET /get_rpm_version_data](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/rpmversions-get_rpm_version_data.md): This function lists a key's available RPMs. For more information, read our
rpm.versions system
documentation.

## Return required but uninstalled server RPM package

 - [GET /list_rpms](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/rpmversions-list_rpms.md): This function lists RPMs that the server needs, but the server owner has not yet installed.
When you call this function, it performs the same actions as the following command:

/usr/local/cpanel/scripts/check_cpanel_pkgs --list-only --targets[target]

For more information, read our
rpm.versions system
documentation.

## Return available RPM packages information

 - [GET /package_manager_get_package_info](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_get_package_info.md): This function retrieves information about the system's available
RPM packages.

Note:

You must use either the ns or the package parameters.

## Return RPM package update status

 - [GET /package_manager_is_performing_actions](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_is_performing_actions.md): This function checks the activity of the process that you executed in the WHM API 1 package_manager_submit_actions function.

## Return available RPM packages

 - [GET /package_manager_list_packages](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_list_packages.md): This function lists information about the system's available RPM packages.

## Return possible RPM package changes

 - [GET /package_manager_resolve_actions](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_resolve_actions.md): This function determines the actions that would result from the provisioning of a specified RPM package or packages.

