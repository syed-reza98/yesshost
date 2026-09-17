# Delete reseller and reseller's cPanel accounts

This function deletes a reseller and all of the reseller's cPanel accounts.

Warning:

* You cannot recover deleted accounts. Use this function with extreme caution.
* This function deletes the reseller account and all of the accounts that the reseller
owns.
* To remove reseller privileges from an account but not delete the reseller's account
or any accounts that the reseller owns, use the WHM API 1 unsetupreseller function.

Endpoint: GET /terminatereseller
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `terminatereseller` (integer, required)
    Whether to terminate the reseller's main account.

* 1 — Terminate.
* 0 — Do not terminate.
    Enum: 1, 0

  - `user` (string, required)
    The reseller account's username.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acct` (array)
    An array of objects containing the function's output.

  - `data.acct.output` (object)
    An object containing the termination data for the reseller's accounts.

  - `data.acct.output.raw` (string)
    Output from the account's removal.

Note:

This output may contain HTML.
    Example: "Running pre removal script (/usr/local/cpanel/scripts/prekillacct)......DoneCollecting\nDomain Name and IP...User: example Domain: example.com\n...DoneLocking account and setting shell to nologin...Locking\npassword for user example. passwd: Success ...DoneKilling\nall processes owned by user......DoneRemoving\nSessions.........DoneRemoving Suspended Info.........DoneCleaning\nVirtfs.........DoneRemoving Web Logs......DoneRemoving\nBandwidth Files......DoneRemoving Email Sending\nLimits Cache......DoneRemoving DKIM keys......DoneRemoving\nCrontab......DoneRemoving HTTP Virtual Hosts...Removed\nthe following non-SSL virtual hosts: example.com\nRemoved the following SSL virtual hosts: ...DoneRemoving\nftp Virtual Hosts......Done Removing user''''s\nweb content directory symlinks......DoneRemoving\nMySQL databases and users......DoneRemoving PostgreSQL\ndatabases and users......DoneRemoving User & Group.......Success...Done\nRemoving DNS Entries...example.com => deleted\nfrom hostname. ...Done Removing Email Setup...Removing\n/etc/valiases/example.com ...Done Removing mailman\nlists......Done Updating Databases......Done Removing\nbandwidth limits......Done Removing Counter Data......Done\nAdding IP back to the IP address pool...System\nhas 3 free ips. ...Done Removing user''''s cPanel\nDatabases & Updating......Done Reloading Services......Done\nRemoving mail and service configs... ...Done Removing\nLogaholic Webstats...Id: TQ:TaskQueue:129 ...Done\nSending Contacts......Done Updating internal databases...Updating\nftp passwords for example Purging ftp user example\nFtp password files updated. Ftp vhost passwords\nsynced ...Done Running post removal scripts (/usr/local/cpanel/scripts/legacypostkillacct,\n/usr/local/cpanel/scripts/postkillacct)......Done\nAccount Removal Complete!!!...example account\nremoved...Done\n"

  - `data.acct.reason` (string)
    A message of success or the reason for a failure.
    Example: "username account removed"

  - `data.acct.result` (integer)
    Whether the function succeeded.

* 1 — Success.
* 0 — Failure.
    Enum: 1, 0

  - `data.acct.user` (string)
    The account username.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "terminatereseller"

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


