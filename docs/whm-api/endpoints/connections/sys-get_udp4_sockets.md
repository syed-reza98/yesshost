# Return UDP IPv4 sockets data

This function returns data about the system's user datagram protocol (UDP) IPv4 sockets.

Endpoint: GET /get_udp4_sockets
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contains the status of the system's UDP IPv4 sockets.

  - `data.payload.dport` (integer)
    The source port that the Linux kernel reports for the socket.
    Example: 443

  - `data.payload.dst` (string)
    The destination IPv4 address.
    Example: "10.0.0.2"

  - `data.payload.inode` (integer)
    The inode number the Linux kernel assigned to the socket.
    Example: 27171

  - `data.payload.rqueue` (integer)
    The number of bytes in the socket's read buffer.

  - `data.payload.sport` (integer)
    The source port number.
    Example: 53

  - `data.payload.src` (string)
    The source IPv4 address.
    Example: "10.0.0.1"

  - `data.payload.state` (integer)
    The socket's current state, in the Linux kernel's numeric format.
    Example: 10

  - `data.payload.uid` (integer)
    The socket's user ID (UID).
    Example: 25

  - `data.payload.wqueue` (integer)
    The number of bytes that the system is waiting to send.
    Example: 45

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_udp4_sockets"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


