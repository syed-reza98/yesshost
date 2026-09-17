# Return possible RPM package changes

This function determines the actions that would result from the provisioning of a specified RPM package or packages.

Endpoint: GET /package_manager_resolve_actions
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `package` (string, required)
    The name of an RPM package.

Note:

* To submit more than one package, pass the parameter multiple times. For example,
package=ea-php55 and package=ea-apr-util.

  - `ns` (string)
    The RPM namespace that represents a set of packages.
Note:
 ea and any from ea4_get_additional_pkg_prefixes API call are the only possible values.  When more than one namespace is involved, pass the parameter multiple times. For example, ns=ea and ns=altea.
    Enum: "ea"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.install` (array)
    A list of RPM packages that the system would install if you provisioned them as currently selected.
    Example: ["ea-apache24-mod_mpm_event","ea-apache24-mod_cgid"]

  - `data.unaffected` (array)
    A list of unaffected RPM packages.
    Example: ["ea-php70-php-devel","ea-php56-runtime","ea-php55-php-common","ea-apache24-mod_headers","ea-php56-php-bcmath","ea-php70-php-curl","ea-php70-php-xml"]

  - `data.uninstall` (array)
    A list of RPM packages that the system would uninstall if you provisioned them as currently selected.
    Example: ["ea-apache24-mod_cgi","ea-apache24-mod_mpm_prefork"]

  - `data.upgrade` (array)
    A list of RPM packages that the system would upgrade if you provisioned them as currently selected.
    Example: ["ea-php56"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "package_manager_resolve_actions"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


