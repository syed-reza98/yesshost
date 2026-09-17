# Return cparchive files list

This function lists all available cparchive files.

Note:

* MM.DD.YYYY represents the file's date in month, date, and year format.
* HH-MM-SS represents the file's timestamp in hour, minute, and second format.

The function checks the following filenames, where USER represents the cPanel account's filusername::
* cpmove-USER
* cpmove-USER.tar
* cpmove-USER.tar.gz
* USER.tar
* USER.tar.gz
* backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar
* backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar.gz

The function checks for these filenames in the following locations:
* /home
* /home2
* /home3
* /root
* /usr
* /usr/home
* /web

Endpoint: GET /list_cparchive_files
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.quickrestore_files` (array)
    An array of objects that contains information about each cparchive file.

  - `data.quickrestore_files.file` (string)
    The backup file's name in one of the formats listed above.
    Example: "cpmove-username1.tar.gz"

  - `data.quickrestore_files.path` (string)
    The backup file's directory in one of the locations listed above.
    Example: "/home"

  - `data.quickrestore_files.user` (string)
    The backup file's account.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_cparchive_files"

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


