# Return identity provider login interface appearance

This function retrieves the display configuration for the login button of an external authentication identity provider.

Endpoint: GET /get_provider_display_configurations
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `provider_id` (string, required)
    The identity provider's key.
    Example: "google"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.configurations` (array)
    An array of objects containing information about each service's external authentication display information.
    Example: [{"color":"dd4b39","display_name":"Google","documentation_url":"https://developers.google.com/identity/protocols/OpenIDConnect","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIyIDE0Ij48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik03IDZ2Mi40aDMuOTdjLS4xNiAxLjAzLTEuMiAzLjAyLTMuOTcgMy4wMi0yLjM5IDAtNC4zNC0xLjk4LTQuMzQtNC40MlM0LjYxIDIuNTggNyAyLjU4YzEuMzYgMCAyLjI3LjU4IDIuNzkgMS4wOGwxLjktMS44M0MxMC40Ny42OSA4Ljg5IDAgNyAwIDMuMTMgMCAwIDMuMTMgMCA3czMuMTMgNyA3IDdjNC4wNCAwIDYuNzItMi44NCA2LjcyLTYuODQgMC0uNDYtLjA1LS44MS0uMTEtMS4xNkg3ek0yMiA2aC0yVjRoLTJ2MmgtMnYyaDJ2MmgyVjhoMiIvPjwvZz48L3N2Zz4=","icon_type":"image/svg+xml","label":"Log in via Google","link":"/openid_connect/google","provider_name":"google","service":"cpaneld","textcolor":"FFFFFF"},{"color":"dd4b39","display_name":"Google","documentation_url":"https://developers.google.com/identity/protocols/OpenIDConnect","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIyIDE0Ij48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik03IDZ2Mi40aDMuOTdjLS4xNiAxLjAzLTEuMiAzLjAyLTMuOTcgMy4wMi0yLjM5IDAtNC4zNC0xLjk4LTQuMzQtNC40MlM0LjYxIDIuNTggNyAyLjU4YzEuMzYgMCAyLjI3LjU4IDIuNzkgMS4wOGwxLjktMS44M0MxMC40Ny42OSA4Ljg5IDAgNyAwIDMuMTMgMCAwIDMuMTMgMCA3czMuMTMgNyA3IDdjNC4wNCAwIDYuNzItMi44NCA2LjcyLTYuODQgMC0uNDYtLjA1LS44MS0uMTEtMS4xNkg3ek0yMiA2aC0yVjRoLTJ2MmgtMnYyaDJ2MmgyVjhoMiIvPjwvZz48L3N2Zz4=","icon_type":"image/svg+xml","label":"Log in via Google","link":"/openid_connect/google","provider_name":"google","service":"webmaild","textcolor":"FFFFFF"},{"color":"dd4b39","display_name":"Google","documentation_url":"https://developers.google.com/identity/protocols/OpenIDConnect","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIyIDE0Ij48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik03IDZ2Mi40aDMuOTdjLS4xNiAxLjAzLTEuMiAzLjAyLTMuOTcgMy4wMi0yLjM5IDAtNC4zNC0xLjk4LTQuMzQtNC40MlM0LjYxIDIuNTggNyAyLjU4YzEuMzYgMCAyLjI3LjU4IDIuNzkgMS4wOGwxLjktMS44M0MxMC40Ny42OSA4Ljg5IDAgNyAwIDMuMTMgMCAwIDMuMTMgMCA3czMuMTMgNyA3IDdjNC4wNCAwIDYuNzItMi44NCA2LjcyLTYuODQgMC0uNDYtLjA1LS44MS0uMTEtMS4xNkg3ek0yMiA2aC0yVjRoLTJ2MmgtMnYyaDJ2MmgyVjhoMiIvPjwvZz48L3N2Zz4=","icon_type":"image/svg+xml","label":"Log in via Google","link":"/openid_connect/google","provider_name":"google","service":"whostmgrd","textcolor":"FFFFFF"}]

  - `data.configurations.color` (string)
    The background color of the button in the cPanel interface.

  - `data.configurations.display_name` (string)
    The display name of the identity provider.

  - `data.configurations.documentation_url` (string)
    The URL to the identity provider's documentation.

  - `data.configurations.icon` (string)
    The icon file in the button that the cPanel login interface displays.

  - `data.configurations.icon_type` (string)
    The icon file's MIME type.

  - `data.configurations.label` (string)
    The text label in the button that the cPanel login interface displays.

  - `data.configurations.link` (string)
    A reference URL to the identity provider's configuration for the system.

  - `data.configurations.provider_name` (string)
    The name of the identity provider.

  - `data.configurations.service` (string)
    The service's name.

* cpaneld
* whostmgrd
* webmaild
    Enum: "cpaneld", "whostmgrd", "webmaild"

  - `data.configurations.textcolor` (string)
    The color of the text label in the button that the cPanel login interface displays.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_provider_display_configurations"

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


