# Delete cPanel account

This function deletes a cPanel or WHM account.

Endpoint: GET /removeacct
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The account's username.
    Example: "username"

  - `keepdns` (integer)
    Whether to retain the account's DNS entries.
- 1 — Retain DNS entries.
- 0 — Delete DNS entries.
    Enum: 0, 1

  - `user` (string)
    The account's username.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "removeacct"

  - `metadata.output` (object)

  - `metadata.output.raw` (string)
    The function's raw output.
    Example: "\"raw\":\"Running pre removal script (/usr/local/cpanel/scripts/prekillacct)......Done\\nCollecting Domain Name and IP...User: example\\nDomain: example.com\\n...Done\\nLocking account and setting shell to nologin...Locking password for user example.\\npasswd: Success\\n...Done\\nKilling all processes owned by user......Done\\nRemoving Sessions.........Done\\nRemoving Suspended Info.........Done\\nCleaning Virtfs.........Done\\nRemoving Web Logs......Done\\nRemoving Bandwidth Files......Done\\nRemoving Email Sending Limits Cache......Done\\nRemoving DKIM keys......Done\\nRemoving Crontab......Done\\nRemoving HTTP Virtual Hosts...Removed the following non-SSL virtual hosts: example.com\\nRemoved the following SSL virtual hosts:\\n...Done\\nRemoving ftp Virtual Hosts......Done\\nRemoving user's web content directory symlinks......Done\\nRemoving MySQL databases and users......Done\\nRemoving PostgreSQL databases and users......Done\\nRemoving User & Group.......Success...Done\\nRemoving DNS Entries...example.com => deleted from hostname. \\n...Done\\nRemoving Email Setup...Removing /etc/valiases/example.com\\n...Done\\nRemoving mailman lists......Done\\nUpdating Databases......Done\\nRemoving bandwidth limits......Done\\nRemoving Counter Data......Done\\nAdding IP back to the IP address pool...System has 2 free ips.\\n...Done\\nRemoving user's cPanel Databases & Updating......Done\\nReloading Services......Done\\nRemoving mail and service configs...\\n...Done\\nSending Contacts......Done\\nUpdating internal databases...Updating ftp passwords for example\\nPurging ftp user example\\nFtp password files updated.\\nFtp vhost passwords synced\\n...Done\\nRunning post removal scripts (/usr/local/cpanel/scripts/legacypostkillacct, /usr/local/cpanel/scripts/postkillacct)......Done\\nAccount Removal Complete!!!...example account removed...Done\\n\""

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "example account removed"

  - `metadata.result` (integer)
    - 1 — Success
- 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


