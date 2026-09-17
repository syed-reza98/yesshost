# Return EasyApache 4 recommendations

This function returns any recommendations attached to your installed
EasyApache 4 packages. For more information about the recommendation system,
read our EasyApache 4 Recommendations documentation.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ea4_recommendations
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"ea-php55-php":[{"desc":"PHP DSO runs as the user by default. In a shared hosting environment, this is a security issue.","level":"danger","name":"PHP DSO","on":"add","options":[{"items":["ruid2","mpm-itk"],"level":"success","recommended":true,"text":"We strongly recommend that you install one of the following packages unless this is a single-user system:"},{"level":"warning","recommended":false,"text":"If you use suPHP, you will add some security, but may experience performance issues on your server."}],"url":"https://www.example.com"}]}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ea4_recommendations"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success.
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


