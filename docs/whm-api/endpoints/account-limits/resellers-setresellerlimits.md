# Update reseller's bandwidth and disk quotas

This function sets a reseller's bandwidth and disk quotas.

Endpoint: GET /setresellerlimits
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The reseller's username.
    Example: "username"

  - `account_limit` (integer)
    The reseller's maximum total number of accounts.

Important:

The system only enforces this maximum if you set the enable_account_limit
value to 1.
    Example: 10

  - `bandwidth_limit` (integer)
    The reseller's total bandwidth limit.

Important:

The system only enforces this limit if you set the enable_resource_limits
value to 1.
    Example: 1073741824

  - `diskspace_limit` (integer)
    The reseller's total disk space usage limit.

Important:

The system only enforces this limit if you set the enable_resource_limits
value to 1.
    Example: 1073741824

  - `enable_account_limit` (integer)
    Whether to limit the reseller's total number of accounts.

* 1 — Limit.
* 0 — Do not limit.

Note:

Use this parameter with the account_limit parameter.
    Enum: 1, 0

  - `enable_overselling` (integer)
    Whether the reseller can oversell accounts.

* 1 — The reseller can oversell accounts.
* 0 — The reseller cannot oversell accounts.

Important:

The system only enforces this limit if you set the enable_resource_limits
value to 1.
    Enum: 1, 0

  - `enable_overselling_bandwidth` (integer)
    Whether the reseller can oversell bandwidth.

* 1 — The reseller can oversell bandwidth.
* 0 — The reseller cannot oversell bandwidth.

Important:

The system only enforces this limit if you set the enable_resource_limits and
the enable_overselling values to 1.
    Enum: 1, 0

  - `enable_overselling_diskspace` (integer)
    Whether the reseller can oversell disk space.

* 1 — The reseller can oversell disk space.
* 0 — The reseller cannot oversell disk space.

Important:

The system only enforces this limit if you set the enable_resource_limits
and the enable_oversellng values to 1.
    Enum: 1, 0

  - `enable_package_limit_numbers` (integer)
    Whether to apply package limit numbers to the reseller.

* 1 — Enable package limit numbers.
* 0 — Disable package limit numbers.
    Enum: 1, 0

  - `enable_package_limits` (integer)
    Whether to apply package limits to the reseller.

* 1 — Enable package limits.
* 0 — Disable package limits.
    Enum: 1, 0

  - `enable_resource_limits` (integer)
    Whether to limit the reseller's resources.

* 1 — Limit resources.
* 0 — Do not limit resources.

Note:

Use this parameter with the bandwidthlimit, diskspace_limit,
enable_overselling, enable_overselling_bandwidth, enable_overselling_diskspace,
enable_overselling, enable_package_limits, and enable_package_limit_numbers
parameters.
    Enum: 1, 0

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setresellerlimits"

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


