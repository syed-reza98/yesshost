# Change document root for cPanel account primary domain

This function changes the document root for a cPanel account's primary domain.

To change the document root for an addon domain or subdomain, use the cPanel
UAPI SubDomain::changedocroot function instead.

Important:

- The target directory must already exist before you call this function.
  The API function does not create it.
- This function does not move any files. You must ensure that the files
  exist in the new path when you call this function.
- Any parked domains (ServerAlias entries) on the affected domain will
  inherit the new document root.
- AutoSSL HTTP-01 renewals will fail if the new document root is empty
  or missing at renewal time.
- To revert a document root change, call this function again with the
  original path.

Endpoint: GET /set_primary_domain_docroot
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `docroot` (string, required)
    The new document root as a path relative to the account's home
directory. The path must begin with public_html/, and the target
directory must already exist.
    Example: "public_html/myapp/public"

  - `username` (string, required)
    The cPanel account username whose primary domain's document root you want to change.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.documentroot` (string)
    The absolute path of the new document root.
    Example: "/home/username/public_html/myapp/public"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_primary_domain_docroot"

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


