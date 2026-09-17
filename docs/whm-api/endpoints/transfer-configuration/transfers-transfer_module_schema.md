# Return a transfer module's schema

This function retrieves a transfer module's key structure.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

Endpoint: GET /transfer_module_schema
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `module` (string, required)
    The transfer module's name.

* AccountLocal
* AccountRemoteRoot
* AccountRemoteUser
* FeaturesListRemoteRoot
* LegacyAccountBackup
* PackageRemoteRoot
    Enum: "AccountLocal", "AccountRemoteRoot", "AccountRemoteUser", "FeaturesListRemoteRoot", "LegacyAccountBackup", "PackageRemoteRoot"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.schema` (object)
    An object containing information about the schema's keys.

  - `data.schema.keys` (object)
    An object containing the schema's keys.
    Example: {"copypoint":{"def":"text"},"cpmovefile":{"def":"text"},"customip":{"def":"char(255) DEFAULT NULL"},"detected_remote_user":{"def":"char(255) DEFAULT NULL"},"disabled":{"def":"text"},"domain":{"def":"char(255) DEFAULT NULL"},"files":{"def":"BIGINT UNSIGNED DEFAULT 1"},"force":{"def":"int(1) DEFAULT 0"},"ip":{"def":"int(1) DEFAULT 0"},"live_transfer":{"def":"int(1) DEFAULT 0"},"localuser":{"def":"char(255) DEFAULT NULL"},"mail_location":{"def":"char(255) DEFAULT NULL"},"overwrite_all_dbs":{"def":"int(1) DEFAULT 0"},"overwrite_all_dbusers":{"def":"int(1) DEFAULT 0"},"overwrite_sameowner_dbs":{"def":"int(1) DEFAULT 0"},"overwrite_sameowner_dbusers":{"def":"int(1) DEFAULT 0"},"overwrite_with_delete":{"def":"int(1) DEFAULT 0"},"prerequisite_user":{"def":"char(255) DEFAULT NULL"},"priority":{"def":"int(1) DEFAULT 255"},"replaceip":{"def":"char(255) DEFAULT NULL"},"reseller":{"def":"int(1) DEFAULT 0"},"shared_mysql_server":{"def":"int(1) DEFAULT 0"},"size":{"def":"BIGINT UNSIGNED DEFAULT 1"},"skipaccount":{"def":"int(1) DEFAULT 0"},"skipacctdb":{"def":"int(1) DEFAULT 0"},"skipbwdata":{"def":"int(1) DEFAULT 0"},"skipemail":{"def":"int(1) DEFAULT 0"},"skiphomedir":{"def":"int(1) DEFAULT 0"},"skipres":{"def":"int(1) DEFAULT 0"},"skipsubdomains":{"def":"int(1) DEFAULT 0"},"user":{"def":"char(255) DEFAULT NULL"},"xferpoint":{"def":"int(1) DEFAULT 0"}}

  - `data.schema.primary` (array)
    The schema's primary key.
    Example: ["user"]

  - `data.schema.required` (array)
    A list of schema's required keys.
    Example: ["user","localuser"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "transfer_module_schema"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


