# Return SSH keys list

This function lists the server's SSH keys.

Warning:

Only the root account can use this function, and it only affects the root
keys. To perform this function on a regular user account, call the cPanel API
2 SSH::listkeys function through the WHM API.

Endpoint: GET /listsshkeys
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `files` (string)
    A filename, to limit the results to keys that have that filename.
    Example: "TestKey"

  - `private` (integer)
    Whether to display only private keys.

* 1 — Display only private keys.
* 0 — Display all keys.
    Enum: 0, 1

  - `private_texts` (integer)
    Whether to include private key text.

* 1 — Include private key text.
* 0 — Do not include private key text.
    Enum: 0, 1

  - `public` (integer)
    Whether to display only public keys.

* 1 — Display only public keys.
* 0 — Display all keys.
    Enum: 0, 1

  - `public_texts` (integer)
    Whether to include public key text.

* 1 — Include public key text.
* 0 — Do not include public key text.
    Enum: 0, 1

  - `sync_authorized` (integer)
    Whether to synchronize the keys that can access the server.

* 1 — Synchronize the keys.
* 0 — Do not synchronize the keys.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.keys` (array)
    An array of objects of each key's information.

  - `data.keys.authorized` (integer)
    Whether the key is authorized to access the server.

* 1 — Authorized.
* 0 — Not authorized.
    Enum: 0, 1

  - `data.keys.comment` (string)
    The key's comment.
    Example: "REPO username@example.com"

  - `data.keys.ctime` (integer)
    The date that the key was created, in
[Unix time format](http://en.wikipedia.org/wiki/Unix_time).
    Example: 1416596824

  - `data.keys.file` (string)
    The key's filename.
    Example: "TestKey"

  - `data.keys.mtime` (integer)
    The date that the key will expire, in Unix time format.
    Example: 1416596824

  - `data.keys.private` (integer)
    Whether the private key is stored on the server.

* 1 — The private key is on the server.
* 0 — The private key is not on the server.
    Enum: 0, 1

  - `data.keys.text` (string)
    The key's text.
    Example: "ssh-rsaXXXXX3XXXX1XX2XXXXXXXXXXXXXXxXXXX6XXXXX90X41X7XXXXX02XXXXX8XXXX54XXXXXXXXXXX2X07XXXXXXXXXXX7XXXX4XXX2X98XXXX98X80XXXXXXX7X/X4XXXXxX1XXXXXXXXXXXxXXXXXXXXX6+4XXXX36XXXXX3XXXXXX1XXXXXXX/X7+XX1XX6XXXX0XXXXXXX0XXXXXXXX+XxX99X7X2XXXXXX03xXXXXX0XXXXXXXXXX9XXXXXXX9XXXXXXXXXXXX/XXXXX07XXXXX3XXXXXX5XXX+/XXXXXXXXXXXXX3XxXXXXXXXXXXXX6XXXXXXXXXXXX2XXXXXXXXXXXXXXXXX3XX+XXXX3XXXXXXX== REPO username@example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listsshkeys"

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


