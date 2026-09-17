# Suspend cPanel account

This function suspends an account.

Endpoint: GET /suspendacct
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The account to suspend.
    Example: "username"

  - `disallowun` (integer)
    Whether to allow only the root user to unsuspend the account.
* 1 - Only the root user can unsuspend the account.
* 0 - The root user or the account's owner can unsuspend the account.
    Enum: 0, 1

  - `leave-ftp-accts-enabled` (integer)
    Whether to skip suspension of the account's FTP accounts.
* 1 - Do not suspend the FTP accounts.
* 0 - Suspend the FTP accounts.
    Enum: 0, 1

  - `reason` (string)
    The reason for suspension.

Important:

 We strongly recommend that you provide a reason for suspension whenever you suspend an account.
    Example: "Nonpayment"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "suspendacct"

  - `metadata.output` (object)
    System messages generated while suspending the account.

  - `metadata.output.raw` (string)
    The raw system message.
    Example: "Changing Shell to /bin/false...Changing shell for username. Warning: \"/bin/false\" is not listed in /etc/shells. Shell changed. Done Locking Password...Locking password for user username. passwd: Success Done Suspending mysql users Using Universal Quota Support (quota=0) Suspending websites... Using Universal Quota Support (quota=0) Suspending FTP accounts... Updating FTP passwords for username FTP password files updated. FTP vhost passwords synced username's account has been suspended\n"

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


