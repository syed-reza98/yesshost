# Create integration link

This function creates an integration link in the cPanel interface.

Note:

The function creates the APP.adminconfig and APP.userconfig integration link files in the /var/cpanel/integration/links/USERNAME directory, where APP represents the application name and USERNAME represents the user for whom you create integration links.

Endpoint: GET /create_integration_link
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `app` (string, required)
    The application to link.

Note:
* If you create a link with an app value that already exists, the function will replace the existing link with the newly-created link.
* The value you assign to the app parameter is how you identify that integration link when listing or removing integration links.
* You may include underscore (_) characters.
    Example: "WHMCS_billing"

  - `implements` (string, required)
    The service for which to implement authentication.

Note:

This is a string from the get_users_links function. The function typically returns one of the following values.

* billing - This link appears in the user menu
* customer_service - This link appears in the user menu
* support - This link appears in the user menu
* upgrade - This link appears in the user menu and context-sensitive areas when the user may require more of a resource
    Example: "billing"

  - `label` (string, required)
    The label to display in the cPanel login interface.
    Example: "WHMCS Billing"

  - `subscriber_unique_id` (string, required)
    The subscriber's unique ID that the system will present to the URL in the autologin_token_url endpoint.
    Example: "1234"

  - `token` (string, required)
    The token that the system will present to the URL in the autologin_token_url endpoint.
    Example: "subway"

  - `user` (string, required)
    The cPanel account name.
    Example: "username"

  - `autologin_token_url` (string)
    The URL to which the server will send the app, token, user, and subscriber_unique_id values through an HTTP POST request. The destination server will respond with a JSON-encoded object with either a redirect_url key or the retry and attempt keys.

Note:

* You must include either the autologin_token_url parameter, the url parameter, or both.
* If you do not set the autologin_token_url parameter, or that server does not respond or exist, then the server will redirect the user to the location in the url parameter.
* If the response contains redirect_url, the system will redirect the user to that URL. (For example:, {"redirect_url":" http://www.whmcs.com/client_area/login/?one_time_user_token_that_expires_in_120_seconds=d41d8cd98f00 ”} will send the user to that unique URL.)
* If the response contains retry and attempt, the system will wait for the retry value in seconds for a maximum of 60 seconds and then attempt the call again. The attempt value indicates the number of attempts that your system has tried. The system will stop after three attempts. (For example, {"retry":30, "attempt":2} represents the second attempt to connect, and the system will pause the user for 30 seconds before it tries again.)
    Example: "http://www.example.com/login.cgi"

  - `base64_png_image` (string)
    The icon image.

Note:

If you do not specify a value, the interface uses a standard puzzle piece icon.
    Example: "iVBORw0KGgoAAAANSUhEUgAAAJgAAADYCAYAAA AXmipNAAAACXBIWXMAAALVAAAC1QHAwm8lAAAAGXRFWHRTb2Z0d2FyZQB 3d3cuaW5rc2NhcGUub3Jnm+48GgAAAUNJREFUeJztziFKg2EABuD3+ydz qGBwiGBZ385hstoMu4DNA8w7eIuBRUyWBYvJsC6CYWCwGGSy7bN6AOFn8 DwneJI/6mTYreNBryYl8A9KktTxoJfu0W66y3mSw6Q8pD+/LJNsWv6x5Z p6NbzJ/sF7uj/3Sf3OJqPUep6P0WnbObZfk1qu02zOks0spXylk+eUvOS 4v2g7x/bbSamPSecuqZ+p5TbN6inLvbcyma3azrH9Sr1IJyejQcq6yWL0 WqbTddspAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AANr0C5EmMYv5JZrpAAAAAElFTkSuQmCC"

  - `group_id` (string)
    The group ID in which to add the icon of the linked service.

* files
* databases
* domains
* email
* metrics
* security
* software
* advanced
* pref

Note:

If you do not specify a value, the function automatically creates an item under the username menu in the interface header.
    Enum: "files", "databases", "domains", "email", "metrics", "security", "software", "advanced", "pref"

  - `hide` (integer)
    Whether the cPanel interface will display the integration link.

 * 1 - Do not display the link.
 * 0 - Display the link.
    Enum: 0, 1

  - `order` (string)
    The order in which to display the icon in the cPanel interface inside the group_id group.
    Example: "999"

  - `url` (string)
    The URL to which to send the user if the autologin_token_url location does not respond or is not present.

Note:

* You must include either the autologin_token_url parameter, the url parameter, or both.
    Example: "http://www.example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_integration_link"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Ok"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


