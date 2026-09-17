# SSH Keys and Connections

Authentication / SSH Keys and Connections

## Enable SSH key for server

 - [GET /authorizesshkey](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-authorizesshkey.md): This function authorizes a public SSH key to access the server.
When you call this function, it adds the key to the /root/.ssh/authorized_keys file.

Warning:

* Do not transfer private keys over insecure ports.
* Only root and root-enabled resellers can use this function, and it only affects
the root public SSH keys. To perform this function on a regular user account, call
the cPanel API 2 SSH::authkey function via the WHM API. For more information, read our
Use WHM API to Call cPanel API and UAPI
documentation.

## Validate SSH connection to another server

 - [GET /check_remote_ssh_connection](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-check_remote_ssh_connection.md): This function tests an SSH connection to another server.

## Migrate OpenSSH key to PuTTY format

 - [GET /convertopensshtoputty](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-convertopensshtoputty.md): This function converts an OpenSSH private key to a PuTTY key.

Warning:

Do not transfer private keys over insecure ports.

## Delete SSH key

 - [GET /deletesshkey](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-deletesshkey.md): This function function deletes an SSH key from the server.

Warning:

Only the root account can use this function, and it only affects
the root keys. To perform this function on a cPanel user account, call the
cPanel API 2 SSH::authkey function through the WHM API.

## Create SSH key pair

 - [GET /generatesshkeypair](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-generatesshkeypair.md): This function generates an SSH key pair.

## Import SSH key

 - [GET /importsshkey](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-importsshkey.md): This function imports an SSH key.

## Return SSH keys list

 - [GET /listsshkeys](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-listsshkeys.md): This function lists the server's SSH keys.

Warning:

Only the root account can use this function, and it only affects the root
keys. To perform this function on a regular user account, call the cPanel API
2 SSH::listkeys function through the WHM API.

## Return cPanel account access hash (deprecated)

 - [GET /accesshash](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/resellers-accesshash.md): This function regenerates or retrieves a user's access hash. For more information about access hashes, read our Remote Access Key documentation.

Warning:

We deprecated this function. We strongly suggest that you use the WHM API 1 api_token_create function.

