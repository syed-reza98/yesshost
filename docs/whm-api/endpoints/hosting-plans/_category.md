# Hosting Plans

Hosting Plans / Hosting Plans

## Create hosting plan

 - [GET /addpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-addpkg.md): This function creates a hosting plan (package).

Note:

The Access Control Lists
restricts some of this function's parameters, which limit the features that
WHM users can access.

## Update hosting plan

 - [GET /editpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-editpkg.md): This function edits a hosting plan (package).

Note:

* The
Access Control List (ACL)
restricts some of the function's parameters, which limit the features that WHM
users can access.
* This function applies any changes you make to all accounts that exist on
the hosting plan.
* This function cannot modify hosting plan names.

## Return hosting plan configuration

 - [GET /getpkginfo](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-getpkginfo.md): This function lists a hosting plan's (package's) settings.

## Delete hosting plan

 - [GET /killpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-killpkg.md): This function deletes a hosting plan (package).

## Return current user's available hosting plans

 - [GET /listpkgs](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-listpkgs.md): This function lists the authenticated user's available hosting plans (packages).

Important:

This function only returns packages that the authenticated user can access and
use during account creation.

## Return filtered hosting plans

 - [GET /matchpkgs](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-matchpkgs.md): This function matches the server's hosting plans (packages) against
your criteria.

Note:

If you do not include any input parameters, the function lists all of
the server's packages.

