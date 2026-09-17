# Install domain SPF record

This function installs a Sender Policy Framework (SPF) record for a domain on the DNS server.

Endpoint: GET /install_spf_records
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to install an SPF record on the DNS server.

Note:

To install multiple SPF records, increment the parameter name. For example, use the domain-1=example-1.com, domain-2=example-2.com, and domain-3=example3.com parameters.
    Example: "example.com"

  - `record` (string, required)
    An SPF record.

You must provide this parameter for every domain parameter.
    Example: "v%3Dspf1%20%2Bip4%3A1192.0.2.0%20-all"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about the domain's SPF record installation to the DNS server.

  - `data.payload.domain` (string)
    The SPF record's associated domain on the DNS server.
    Example: "example.com"

  - `data.payload.msg` (string)
    The SPF record's installation status to the DNS server.
    Example: "[REPLACE:TXT@example.com.:v=spf1 ip4:192.0.2.0 -all]"

  - `data.payload.status` (integer)
    Whether the system installed the SPF record to the DNS server.
* 1 — The system installed the SPF record on the DNS server.
* 0 — The system cannot install the SPF record on the DNS server.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "install_spf_records"

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


