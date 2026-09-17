# Restrict Access to WHM by CIDR list.

This function restricts root login to cPanel & WHM based on a list of CIDR addresses.

Note:

This API manipulates /var/cpanel/authorized_whm_root_ips. We HIGHLY recommend
you not modify this file directly. Improper formatting of the file can lead to loss of all
access to cPanel & WHM using the root password.

Use of this API replaces any previous restrictions so be sure to include previous CIDR patterns
when adding new ones.

As this API only restricts logins, please be aware that existing root logins are not terminated
when these restrictions are asserted.

This API DOES NOT restrict root resellers.

Endpoint: GET /restrict_whm_root_access
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `cidr` (string, required)
    The IPs you wish to restrict in CIDR format.

Note:

You can pass this parameter multiple times.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cidr` (array)
    A reduced list of what CIDR addresses root access will be restricted to.
    Example: ["10.2.0.0/16","10.6.5.0/24","10.1.6.7"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restrict_whm_root_access"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


