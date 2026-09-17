[Development Guides Home](/guides) >> [Guide to Package Extensions](/guides/guide-to-package-extensions)

# Guide to Package Extensions - Data Behavior and Changes

## Introduction

WHM API 1 calls can modify package extension data in ways that the WHM interface cannot. You cannot use the WHM interface to add or remove installed extensions from an existing package or account. However, you can use [WHM API](https://api.docs.cpanel.net/whm/introduction/) calls to perform the following actions:

* Use the [`editpkg`](https://api.docs.cpanel.net/openapi/whm/operation/editpkg/) WHM API 1 call to add new extensions to existing packages.
* Use the [`editpkg`](https://api.docs.cpanel.net/openapi/whm/operation/editpkg/) WHM API 1 call to remove installed or uninstalled extensions from a package.
* Use the [`editpkg`](https://api.docs.cpanel.net/openapi/whm/operation/editpkg/) WHM API 1 call to modify the extensions variables for a package.
* Use the [`modifyacct`](https://api.docs.cpanel.net/openapi/whm/operation/modifyacct/) WHM API 1 call to modify the extension variables for a specific account.


Important:
To modify the list of package extensions for a specific account, you **must** [create a new package](https://docs.cpanel.net/whm/account-functions/create-a-new-account/#package-extensions) with the desired package extensions and assign it to that account. You can then modify the package extension's variables with the [`modifyacct`](https://api.docs.cpanel.net/openapi/whm/operation/modifyacct/) or [`editpkg`](https://api.docs.cpanel.net/openapi/whm/operation/editpkg/) WHM API 1 calls.

## Extension data behavior

The `_PACKAGE_EXTENSIONS` variable in package or account data files contains a space-delimited list of the package or account's package extensions. Any package extension variables appear in the `key=value` format.

When you add a package extension to a package, the system performs the following actions:

1. The system adds all of the associated variables for the package extension to the package data file.
2. The system sets all of the package extension's variables to the default value in the default settings file, unless the user specifies another value.
3. The system adds the new `_PACKAGE_EXTENSIONS` value and all associated variables to the data files for all of the accounts that use that package.


When you remove a package extension from a package, the system performs the following actions:

1. The system removes all of the package extension's variables from the package data file.
2. The new `_PACKAGE_EXTENSIONS` value replaces the existing value in the data files for all of the accounts that use that package.
3. The system removes all of the package extension's variables from the data files for all of the accounts that use that package.


When you modify a package extension variable in a package, the system performs the following actions:

1. The system updates the value in the package data file.
2. The system updates the value in the data files for all of the accounts that use that package.


When you modify a package extension variable for a specific account, that value will **only** change in the data file for that account.

* We recommend that users **never** modify the variables in a single account's data file if the account is associated with a package. The next time that the package changes, the system will overwrite the account data file's settings with the package's values.


### Extension removal

We **strongly** recommend that you remove extensions from packages and accounts before you remove the template and default settings files from the `/var/cpanel/packages/extensions` directory.

* Use the `remove_missing_extensions` parameter when you call the `modifyacct` or `editpkg` functions to remove missing or uninstalled extensions from the `_PACKAGE_EXTENSIONS` parameter **only**.
* Without the default settings file, the WHM API 1 cannot remove the missing extension's variables. The variables will remain in the package and account data files indefinitely.
* If you reinstall the extension and old variables remain in the package and account files, the system will **not** replace the old variables with the extension's default settings. Instead, the packages and accounts will retain the old settings until the user changes them.


### Package data modification

To change the list of package extensions for an existing package, use the [`editpkg`](https://api.docs.cpanel.net/openapi/whm/operation/editpkg/) API call.

* To remove missing or uninstalled extensions, pass a space-separated list of those extensions in the `remove_missing_extensions` parameter.

This parameter only removes the extension from the `_PACKAGE_EXTENSIONS` list. All of the extension's variables will remain in the package file and all associated account files.
  * To modify the package's extensions, pass the full space-separated list of all desired package extensions to the ` _PACKAGE_EXTENSIONS` parameter.

You **must** include **all** of the desired package extensions if you use this parameter. The system will remove any package extensions that you do not include from the package and any associated accounts.
    * To modify the variables for an extension that is already in the package, **do not** include the `_PACKAGE_EXTENSIONS` parameter. Instead, pass the desired settings for those variables as function parameters.
      * If you do not pass a value for a package extension variable, and a value does not already exist in the package file, the system will set that value to the default settings file's value.
      * If you do not enter a new value for a variable, and that variable already exists in the package data file, the value will not change.
For more information about how to call the [`editpkg`](https://api.docs.cpanel.net/openapi/whm/operation/editpkg/) function, read our [Guide to WHM API 1](https://api.docs.cpanel.net/whm/introduction/) documentation.
### Account data modification
We recommend that users **never** modify the variables for a single account if it is also associated with a package. The next time that the package changes, the system will overwrite the account data file's settings with the package's values.
To modify package extension variables for an account, use the [`modifyacct`](https://api.docs.cpanel.net/openapi/whm/operation/modifyacct/) API call. Pass the desired settings to the function as input parameters.