# Return ModSecurity vendors

The function returns a list of configured ModSecurity™ vendors.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_get_vendors
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.vendors` (array)
    An array of objects that represent the list of configured vendors on the system.

  - `data.vendors.archive_url` (string)
    The URL to download the vendor rules.
    Example: "http://www.example.com/SAMPLE_1415038544.zip"

  - `data.vendors.configs` (array)
    A list of information about the configuration files that the vendor provides.
    Example: [{"active":1,"config":"modsec_vendor_configs/SAMPLE/modsecurity_crs_10_setup.conf","vendor_id":"SAMPLE"},{"active":0,"config":"modsec_vendor_configs/SAMPLE/optional_rules/modsecurity_crs_16_session_hijacking.conf","vendor_id":"SAMPLE"},{"active":1,"config":"modsec_vendor_configs/SAMPLE/optional_rules/modsecurity_crs_46_av_scanning.conf","vendor_id":"SAMPLE"}]

  - `data.vendors.configs.active` (integer)
    Whether the configuration is active.

* 1 — Active.
* 0 — Inactive.
    Enum: 1, 0

  - `data.vendors.configs.config` (string)
    The configuration file path, relative to the /usr/local/apache/conf directory.
    Example: "modsec_vendor_configs/SAMPLE/slr_rules/modsecurity_crs_46_slr_et_joomla_attacks.conf"

  - `data.vendors.configs.vendor_id` (string)
    The vendor's unique short name.
    Example: "SAMPLE"

  - `data.vendors.cpanel_provided` (integer)
    Whether cPanel & WHM installed the vendor rule set.

* 1 — Installed.
* 0 — Not installed.
    Enum: 1, 0

  - `data.vendors.description` (string)
    The ModSecurity vendor's description.
    Example: "A SAMPLE-curated ModSecurity rule set."

  - `data.vendors.dist_md5` (string)
    The download's [MD5](https://en.wikipedia.org/wiki/MD5)
checksum value.
    Example: "ffbaa3a7ead8dfaf0b661a729ce6ad3b"

  - `data.vendors.dist_sha512` (string)
    The download's [sha512](https://en.wikipedia.org/wiki/SHA-2) hash.
    Example: "b55c09bb1835ed4209f0f3ea4a70d099665363f23d3819c0369be429438d675ba2c749dcefdb85cee682ee0bf485558e67d0b0965fe4799865529d943e8e14cb"

  - `data.vendors.enabled` (integer)
    Whether the vendor is enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `data.vendors.in_use` (integer)
    The number of configuration files in the vendor rule set.
    Example: 32

  - `data.vendors.inst_dist` (string)
    The rule set version's unique identifier.
    Example: "SAMPLE_1415038544"

  - `data.vendors.installed` (integer)
    Whether the vendor is installed.

* 1 — Installed.
* 0 — Not installed.
    Enum: 1, 0

  - `data.vendors.installed_from` (string)
    The URL to the vendor's metadata file.
    Example: "http://www.example.com/meta_SAMPLE.yaml"

  - `data.vendors.name` (string)
    The vendor's name.
    Example: "SAMPLE ModSecurity Core Rule Set"

  - `data.vendors.path` (string)
    The full path to the vendor's ModSecurity configuration files.
    Example: "/usr/local/apache/conf/modsec_vendor_configs/SAMPLE"

  - `data.vendors.report_url` (string)
    The URL of the vendor's Report Receiver API endpoint that reports
problems with the vendor's rules.

Note:

The function may not always return this parameter.
    Example: "https://www.example.com/report"

  - `data.vendors.supported_versions` (array)
    A list of the ModSecurity versions that the vendor supports.
    Example: ["2.9.1","2.9.2","2.9.3"]

  - `data.vendors.update` (integer)
    Whether the vendor rule set can receive automatic updates.

* 1 — Can receive automatic updates.
* 0 — Cannot receive automatic updates.
    Enum: 1, 0

  - `data.vendors.vendor_id` (string)
    The vendor's unique short name.
    Example: "SAMPLE"

  - `data.vendors.vendor_url` (string)
    The URL of the vendor's website.
    Example: "https://www.example.com/index.php/Category:SAMPLE_ModSecurity_Core_Rule_Set_Project"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_get_vendors"

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


