# Run cPanel API or UAPI function

You can call cPanel API and UAPI functions through the WHM API.

This method is useful, for example, when you develop plugins for WHM users, particularly resellers, but need to access cPanel functions. You can make these calls from within either the WHM or cPanel interfaces.

Important:

We recommend that you use the WHM API 1 uapi_cpanel function. The uapi_cpanel function is a more flexible way to call cPanel API functions from WHM. For example, you can use the uapi_cpanel function with the WHM API 1 batch function.

Before calling a cPanel API function via this method, read its documentation. The cPanel API function may require other parameters not listed in this document.

Endpoint: GET /cpanel
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `cpanel_jsonapi_func` (string, required)
    The UAPI function name.

Important:

Function names are case-sensitive.
    Example: "listpopswithdisk"

  - `cpanel_jsonapi_module` (string, required)
    The UAPI module name.

Important:

Module names are case-sensitive.
    Example: "Email"

  - `cpanel_jsonapi_user` (string, required)
    The cPanel username for the account through which to call the function.

Make certain that you specify the username in lowercase characters only. cPanel & WHM automatically converts usernames to lowercase when you create a cPanel account. For this reason, if you supply a username that includes some or all capital letters, the call will fail.
    Example: "user"

  - `cpanel_jsonapi_apiversion` (integer)
    The cPanel API version to use.
* 1 — Use cPanel API 1.
* 2 — Use cPanel API 2.
* 3 — Use UAPI.
    Enum: 1, 2, 3

  - `Variable Names and Values` (string)
    The function's input parameters and their values. You can add any additional parameters supported by the underlying cPanel API function.

Example: domain=example.com

Note:
* Separate multiple parameter=value pairs with the ampersand character (&).
* You must URI-encode these values.

## Response 200 fields (application/json):

  - `data` (any)
    Information returned by the cPanel API function passed in cpanel_jsonapi_module and cpanel_jsonapi_func.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cpanel"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


