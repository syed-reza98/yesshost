# Hosting Plan Extensions

Hosting Plans / Hosting Plan Extensions

## Return hosting plan extension templates

 - [GET /_getpkgextensionform](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/accounts-_getpkgextensionform.md): This function retrieves a hosting plan's package extension templates. When you call this
function, the system checks the hosting plan's _PACKAGE_EXTENSIONS value.  The function
returns the contents of the /var/cpanel/packages/extensions/name.tt2 file for each package
extension in the list, where name represents the package extension's name.

For more information, read our
Guide to Package Extensions.

Note:

This function returns only metadata if the hosting plan does not use package extensions, or
if the extensions' template files are empty.

## Add hosting plan extension

 - [GET /addpkgext](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/packages-addpkgext.md): This function adds a package extension to a hosting plan (package).

Notes:

* If you need to edit a package extension's parameters, call this function again
with the same package extension name and the updated package extension variables.

* You can include the extension's variables in your function call, in key=value format.
  Consult the extension's documentation for a list of possible variables. Extension variables
  are case-sensitive.

## Remove hosting plan extension

 - [GET /delpkgext](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/packages-delpkgext.md): This function deletes a package extension from a hosting plan (package).

Note:

* You can additionally include extension's variables in your function call, in key=value format.
  Consult the extension's documentation for a list of possible variables. Extension variable names are case-sensitive.

