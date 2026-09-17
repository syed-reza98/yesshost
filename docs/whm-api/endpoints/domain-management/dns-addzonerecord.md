# Create DNS zone record

This function adds a DNS zone record.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* When you disable the DNS role, the system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Endpoint: POST /addzonerecord
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "addzonerecord"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Bind reloading on hostname using rndc zone: [example.com]\n"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


