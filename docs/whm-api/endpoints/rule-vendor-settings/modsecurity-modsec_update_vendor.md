# Update ModSecurity vendor ruleset

This function updates a vendor with the current version of the rule set.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_update_vendor
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `url` (string, required)
    The vendor metadata file's URL.
    Example: "http://example.com/update/meta_MyVendor.yaml"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.diagnostics` (object)
    A list of diagnostic information about the update.

  - `data.diagnostics.added_configs` (array)
    A list of the ModSecurity configuration files that the update added.
    Example: ["modsec_vendor_configs/MyVendor/three.conf"]

  - `data.diagnostics.deleted_configs` (array)
    An array of objects containing the ModSecurity configuration files that the update removed.
    Example: ["modsec_vendor_configs/MyVendor/one.conf"]

  - `data.diagnostics.new_configs` (array)
    A complete list of configuration files that the update modified.

  - `data.diagnostics.new_configs.active` (integer)
    Whether the configuration file is active.

* 1 — Active.
* 0 — Not active.
    Enum: 1, 0

  - `data.diagnostics.new_configs.config` (string)
    The file path to the configuration file, relative to the /usr/local/apache/conf/ Apache configuration directory.
    Example: "modsec_vendor_configs/MyVendor/two.conf"

  - `data.diagnostics.new_configs.vendor_id` (string)
    The vendor's unique name.
    Example: "MyVendor"

  - `data.diagnostics.prev_configs` (array)
    A list of configuration files in the old version.

  - `data.diagnostics.prev_configs.config` (string)
    The file path of the configuration file, relative to the /usr/local/apache/conf/ Apache configuration directory.
    Example: "modsec_vendor_configs/MyVendor/two.conf"

  - `data.vendor` (object)
    A list of updated vendor information.

  - `data.vendor.archive_url` (string)
    The URL to download the vendor rules.
    Example: "http://example.com/update/MyVendor.zip"

  - `data.vendor.cpanel_provided` (integer)
    Whether WebPros International, LLC provided the rule set.

* 1 — Provided by WebPros International, LLC.
* 0 — Not provided WebPros International, LLC.
    Enum: 1, 0

  - `data.vendor.description` (string)
    The vendor's description.
    Example: "This is an example of a custom vendor set (updated)."

  - `data.vendor.dist_md5` (string)
    The download's [MD5](https://en.wikipedia.org/wiki/MD5) checksum value.
    Example: "ecafce1bf148532250a8d4743a8374d1"

  - `data.vendor.enabled` (integer)
    Whether the vendor is enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `data.vendor.inst_dist` (string)
    The unique identifier for the rule set version.
    Example: "MyVendor-2"

  - `data.vendor.installed` (integer)
    Whether the vendor is installed.

* 1 — Installed.
* 0 — Not installed.
    Enum: 1, 0

  - `data.vendor.installed_from` (string)
    The URL to the vendor's metadata file.
    Example: "http://example.com/update/meta_MyVendor.yaml"

  - `data.vendor.name` (string)
    The vendor's name.
    Example: "My Vendor"

  - `data.vendor.path` (string)
    The file path to the vendor's ModSecurity configuration files.
    Example: "/usr/local/apache/conf/modsec_vendor_configs/MyVendor"

  - `data.vendor.report_url` (string)
    The URL that the vendor uses to receive problem reports.
    Example: "http://example.com/report/"

  - `data.vendor.vendor_id` (string)
    The vendor's unique short name.
    Example: "MyVendor"

  - `data.vendor.vendor_url` (string)
    The URL to the vendor's website.
    Example: "http://example.com/"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_update_vendor"

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


