# Return ModSecurity vendor rule metadata

This function returns the metadata for a ModSecurity™ vendor rule set.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_preview_vendor
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `url` (string, required)
    The YAML metadata's URL, which describes the vendor and how to obtain its rules.

Note:

* The file uses YAML format.
* The filename must use the meta_ prefix.
* The filename must match the vendor_id value for your vendor.
* The filename must end with the .yaml extension.
    Example: "https://www.example.com/vendor1rules/meta_vendor1.yaml"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.archive_url` (string)
    The URL to the vendor's rule set archive.
    Example: "https://www.example.com/vendor1.zip"

  - `data.cpanel_provided` (integer)
    Whether WebPros International, LLC provided the vendor.

* 1 — cPanel-provided.
* 0 — Not cPanel-provided.
    Enum: 1, 0

  - `data.description` (string)
    The vendor's description.
    Example: "This is the Vendor1 ModSecurity Core Rule Set."

  - `data.dist_md5` (string)
    The download's [MD5](https://en.wikipedia.org/wiki/Md5) checksum value.
    Example: "307cb5320441ebd712e5581d12100dc9"

  - `data.dist_sha512` (string)
    The download's [sha512](https://en.wikipedia.org/wiki/SHA-2) hash.
    Example: "b55c09bb1835ed4209f0f3ea4a70d099665363f23d3819c0369be429438d675ba2c749dcefdb85cee682ee0bf485558e67d0b0965fe4799865529d943e8e14cb"

  - `data.installed` (integer)
    Whether the vendor is installed.

* 1 — Installed.
* 0 — Not installed.
    Enum: 1, 0

  - `data.installed_from` (string)
    The vendor's metadata file URL.
    Example: "https://www.example.com/vendor1rules/meta_vendor1.yaml"

  - `data.name` (string)
    The vendor's name.
    Example: "Vendor1 ModSecurity Core Rule Set"

  - `data.path` (string)
    The absolute path to the directory that contains the vendor's configuration files.
    Example: "/usr/local/apache/conf/modsec_vendor_configs/vendor1"

  - `data.report_url` (string)
    The URL to which the system will send reports.
    Example: "https://waf.example.com/api/cpanel_feedback?source=1&rule_set=1.229"

  - `data.supported_versions` (array)
    A list of the ModSecurity versions that the vendor supports.
    Example: ["2.9.1","2.9.2","2.9.3"]

  - `data.vendor_id` (string)
    The vendor's unique short name.
    Example: "vendor1"

  - `data.vendor_url` (string)
    The vendor's website URL.
    Example: "http://www.example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_preview_vendor"

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


