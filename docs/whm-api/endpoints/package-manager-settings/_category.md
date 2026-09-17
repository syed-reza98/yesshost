# Package Manager Settings

System Package Management / Package Manager Settings

## Remove rpm.versions system configuration

 - [GET /delete_rpm_version](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/rpmversions-delete_rpm_version.md): This function removes RPM data. When you call this function, it performs the same
actions as the following command:

/usr/local/cpanel/scripts/update_local_rpm_versions --del section.key value

For more information, read our
rpm.versions system
documentation.

Note:

After you call this function, we strongly recommend that you run the
/usr/local/cpanel/scripts/check_cpanel_pkgs script.

## Update rpm.versions system configuration

 - [GET /edit_rpm_version](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/rpmversions-edit_rpm_version.md): This function edits RPM data. When you call this function, it performs the same actions
as the following command:

/usr/local/cpanel/scripts/update_local_rpm_versions --edit section.key value

For more information, read our
rpm.versions system
documentation.

Note:

After you call this function, we strongly recommend that you run the
/usr/local/cpanel/scripts/check_cpanel_pkgs script.

## Repair RPM management yum cache issues

 - [GET /package_manager_fixcache](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/packagemanager-package_manager_fixcache.md): This function attempts to repair yum cache issues.

## Return RPM management build log

 - [GET /package_manager_get_build_log](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/packagemanager-package_manager_get_build_log.md): This function returns build log content.

