# Return home directories list

This function returns all the directories where the system stores
users' home directories. It returns them in descending order, based on the
current amount of available free disk space for each directory. For example,
the first directory the function lists has the most available free disk space.

Note:

Use WHM's Basic WebHost Manager Setup (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup) to configure where the system will create a new user's home directory.

Endpoint: GET /get_homedir_roots
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array containing data for each home parent directory. This array contains the path return.

  - `data.payload.path` (string)
    directory where the system can store users' home directories. A valid directory path.
    Example: "/home"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_homedir_roots"

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


