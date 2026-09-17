# Return server's drive partition information

This function retrieves the server's drive partition information.

Endpoint: GET /getdiskusage
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.partition` (array)
    An array of objects that contain drive partition information.

  - `data.partition.available` (integer)
    The partition's unused disk space, measured in kilobytes.
    Example: 377856

  - `data.partition.device` (string)
    The partition's device name.
    Example: "/dev/vda1"

  - `data.partition.disk` (string)
    The partition's label.
    Example: "vda1"

  - `data.partition.filesystem` (string)
    The partition's absolute directory path.
    Example: "/"

  - `data.partition.inodes_available` (integer)
    The number of unused inodes on the partition.
    Example: 20575847

  - `data.partition.inodes_ipercentage` (integer)
    The percentage of the partition's total
    Example: 2

  - `data.partition.inodes_total` (integer)
    The total number of inodes that the partition will allow.
    Example: 20970944

  - `data.partition.inodes_used` (integer)
    The number of inodes used on the partition.
    Example: 395097

  - `data.partition.mount` (string)
    The partition's mount point.
    Example: "/boot"

  - `data.partition.percentage` (integer)
    The percentage of the partition's total disk space used.
    Example: 20

  - `data.partition.total` (integer)
    The partition's total allocated disk space, measured in kilobytes.
    Example: 495844

  - `data.partition.used` (integer)
    The partition's disk space used, measured in kilobytes.
    Example: 92388

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "getdiskusage"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Successfully retrieved disk usage"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


