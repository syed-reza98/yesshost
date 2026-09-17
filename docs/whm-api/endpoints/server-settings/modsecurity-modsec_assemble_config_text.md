# Add ModSecurity configuration file text

This function adds text to a ModSecurity™ configuration file.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_assemble_config_text
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string, required)
    The ModSecurity™ configuration filename and file path, relative to the /etc/apache2/conf/ directory.
    Example: "modsec_vendor_configs/example.conf"

  - `deploy` (integer)
    Whether to deploy the new text to the system.

* 1 — Deploy.
* 0 — Do not deploy.
    Enum: 1, 0

  - `final` (integer)
    Whether to add the text as the final upload to the configuration file.

* 1 — Final upload.
* 0 — Not the final upload.

Note:

* You must use this parameter if you wish to add the text as the final
change to the configuration file.
* You must use the init parameter with this parameter if you wish to
only make one change to the configuration file.
    Enum: 1, 0

  - `init` (integer)
    Whether to add the text as the initial upload to the configuration file.

* 1 — Initial upload.
* 0 — Not the initial upload.

Note:

* You must use this parameter if you wish to add the text as the initial
change to the configuration file.
* You must use the final parameter with this parameter if you wish to
only make one change to the configuration file.
    Enum: 1, 0

  - `text` (string)
    The text to add to the configuration file.
    Example: "newtext"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_assemble_config_text"

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


