# Return available RPM packages information

This function retrieves information about the system's available
RPM packages.

Note:

You must use either the ns or the package parameters.

Endpoint: GET /package_manager_get_package_info
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ns` (string, required)
    An available RPM package namespace.

Note:

* ea and any from ea4_get_additional_pkg_prefixes API call are the only possible values.
* If you use this parameter, you cannot use the package parameter.
* To view more than one namespace, pass the parameter multiple times. For example,
ns=ea and ns=altea.
    Enum: "ea"

  - `package` (string, required)
    An RPM package name on the system.

Note:

* If you use this parameter, you cannot use the ns parameter.
* To view more than one package, pass the parameter multiple times. For example,
package=ea-php55 and package=ea-apr-util.

  - `disable-excludes` (integer)
    Whether the system will disable yum)'s
exclude behavior.

* 1 — Disable yum's exclude behavior.
* 0 — Do not disable yum's exclude behavior.
    Enum: 1, 0

## Response 200 fields (application/json):

  - `data` (object)

  - `data.packages` (array)
    An array of objects containing information about the RPM packages on the system.

  - `data.packages.architecture` (string)
    The required system architecture.
    Example: "x86_64"

  - `data.packages.license` (string)
    The RPM package's distribution license.
    Example: "ASL 2.0"

  - `data.packages.long_description` (string)
    A detailed description of the RPM package.
    Example: "The mission of the Apache Portable Runtime (APR) is to provide a\\nfree library of C data structures and routines."

  - `data.packages.more_info_url` (string,null)
    The RPM package developer's URL, if available.
    Example: "http://apr.apache.org"

  - `data.packages.package` (string)
    The RPM package name.
    Example: "ea-apr-util"

  - `data.packages.pkg_dep` (object)
    The RPM package's dependencies and conflicts.

  - `data.packages.pkg_dep.conflicts` (array)
    A list of the RPM package's conflicts, if any exist.
    Example: ["ea-php55-php-ioncube5"]

  - `data.packages.pkg_dep.requires` (array)
    A list of the RPM package's requirements, if any exist.
    Example: ["glibc","libuuid","expat","libdb","ea-apr"]

  - `data.packages.pkg_group` (string)
    The RPM package's group.
    Example: "System Environment/Libraries"

  - `data.packages.release` (string)
    The RPM package's cPanel release number.
    Example: "7.7.1.cpanel"

  - `data.packages.repo_name` (string)
    The repository where the RPM package resides.
    Example: "NYI"

  - `data.packages.short_description` (string)
    A short description of the RPM package.
    Example: "Apache Portable Runtime Utility library"

  - `data.packages.size` (integer)
    The RPM package's size.
    Example: 214647

  - `data.packages.state` (string)
    The install state of the RPM package.

* installed
* not_installed
* updatable
    Enum: "installed", "not_installed", "updatable"

  - `data.packages.version` (string)
    The version of the RPM package's software.
    Example: "1.6.1"

  - `data.packages.version_installed` (string)
    The currently installed version of an RPM package.
    Example: "1.6.1-4.4.8.cpanel"

  - `data.packages.version_latest` (string)
    The latest available version of an RPM package.
    Example: "1.6.1-7.7.1.cpanel"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "package_manager_get_package_info"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


