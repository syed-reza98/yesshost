# Enable SSH key for server

This function authorizes a public SSH key to access the server.
When you call this function, it adds the key to the /root/.ssh/authorized_keys file.

Warning:

* Do not transfer private keys over insecure ports.
* Only root and root-enabled resellers can use this function, and it only affects
the root public SSH keys. To perform this function on a regular user account, call
the cPanel API 2 SSH::authkey function via the WHM API. For more information, read our
Use WHM API to Call cPanel API and UAPI
documentation.

Endpoint: GET /authorizesshkey
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `authorize` (integer, required)
    Whether to authorize the public SSH key to access the server.

* 1 — Authorize.
* 0 — Do not authorize.
    Enum: 1, 0

  - `file` (string, required)
    The public SSH key file's name.

Note:

* This file must exist in the /root/.ssh directory.
* If you call both the file and the text parameters, the function ignores
the file parameter.
    Example: "sshkey.pub"

  - `text` (string, required)
    The text of the SSH public key file.

Note:

* If you call both the file and the text parameters, the function ignores
the file parameter.
    Example: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCys7JbGhkAZ8E4Pmq8D4EBm1UedKK2oMhs3RVIEFRJX6S86Itw6Qmhds62LNGrxuVL11W6v25+maIiBhXnslyQpd838tHyAC7J/SJojDid8acovX/4xgJQaJHLAh9tLgyQXnNhIxIGJ4nVZ+8OqM2Vb1Cps+E5H17ivG07PXnVPEvwMaeWkm2DnGgSy5kmjVpNKlj9GWFCn/SJd7up7QnbGKoz87pxKDs3esp+ziuPEAJHLeXnKHWPVukQgtRUpUBdqkCvu5hUkhpaiWmBR8yxajkxbSObPw+ZkELhmm+fQseOfEbrwToMRJCO7gAKwBtNi7OhyFM7YFrvdo0xh6cn"

  - `options` (string)
    A comma-separated list of options to include with the public SSH key.
For a list of options, read the
OpenBSD manaual.

This parameter defaults to no options.
    Example: "agent-forwarding,cert-authority"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.authorized` (integer)
    Whether the public SSH key has authorization.
* 1 — Authorized.
* 0 — Not authorized.
    Enum: 1, 0

  - `data.file` (string)
    The public SSH key file's name.
    Example: "sshkey.pub"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "authorizesshkey"

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


