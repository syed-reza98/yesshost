# Return whether system needs reboot

This function determines if your system requires a reboot to apply quotas, software package updates, or kernel updates.

Important:

This function cannot detect whether your system needs a reboot if you use cPanel & WHM inside of a Linux Container (LXC).

Endpoint: GET /system_needs_reboot
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `details` (object)
    An object that contains reasons why the system requires a reboot.

  - `details.kernel` (object)
    An object of kernel versions.

Note:

The function only returns this object if the kernel updates and requires a reboot.

  - `details.kernel.boot_version` (string)
    The version that the system's kernel updated to.
    Example: "3.10.0-514.10.2.e17.x86_64"

  - `details.kernel.running_version` (string)
    The kernel version that the server currently runs.
    Example: "3.10.0-514.10.2.e17.x86_64"

  - `details.quota` (integer)
    Whether the system requires a reboot to enable quotas.

* 1 — System requires a reboot to enable quotas.

Note:

The function only returns this value if the kernel updates and requires a reboot.
    Enum: 1

  - `details.updates` (object)
    A list of software packages that require an update and their most recent versions.

Note:

The function only returns this object if software packages on your server require updates.
    Example: {"glibc":"2.17-157.el7_3.1"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "system_needs_reboot"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1

  - `needs_reboot` (integer)
    Whether the system requires a reboot.

* 1 — System requires a reboot.
* 0 — System does not require a reboot.
    Enum: 0, 1


