# Add a backup destination

This function adds a backup destination.

Endpoint: GET /backup_destination_add
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `application_key` (string, required)
    The application key's name.

Note:

This parameter is only valid for the Backblaze backup type.
    Example: "A123b45CD678e9"

  - `application_key_id` (string, required)
    The application key ID that authenticates the Backblaze B2 account.

Note:

This parameter is only valid for the Backblaze backup type.
    Example: "12a345B678c9"

  - `authtype` (string, required)
    The authorization type.

* password
* key

Note:

This parameter is only valid for the following backup types:
* SFTP
* Rsync
    Enum: "password", "key"

  - `aws_access_key_id` (string, required)
    The Amazon S3™ Access Key ID.

Note:

This parameter is only valid for the following backup types:
* AmazonS3
* S3Compatible
    Example: "AKIAYLWMPOZZJCERC28Q"

  - `bucket` (string, required)
    The Amazon S3™ bucket.

Note:

This parameter is only valid for the following backup types:
* AmazonS3
* S3Compatible
    Example: "ChockFullOfNuts"

  - `bucket_id` (string, required)
    The bucket's ID string.

Note:

This parameter is only valid for the Backblaze backup type.
    Example: "a12b34cd5678e9f"

  - `bucket_name` (string, required)
    The bucket's name.

Note:

This parameter is only valid for the Backblaze backup type.
    Example: "ChockFullOfNuts"

  - `client_id` (string, required)
    The Google Drive client ID.

Note:

This parameter is only valid for the GoogleDrive backup type.
    Example: "aBcdeFgHIjK123"

  - `client_secret` (string, required)
    The Google Drive client secret.

Note:

This parameter is only valid for the GoogleDrive backup type.
    Example: "aBcde123FgHIjK456"

  - `disabled` (integer, required)
    Whether to disable the backup destination.

* 1 — Disable the backup destination.
* 0 — Enable the backup destination.
    Enum: 0, 1

  - `host` (string, required)
    The remote server's hostname.

Note:

This parameter is only valid for the following backup types:
* Custom
* FTP
* SFTP
* Rsync
* WebDAV
* S3Compatible
    Example: "backups.example.com"

  - `name` (string, required)
    The backup destination's name.
    Example: "destination_name"

  - `password` (string, required)
    The remote server account's password or secret
access key.

Note:

This parameter is only valid for the following backup types:
* AmazonS3
* Custom
* FTP
* SFTP
* Rsync
* WebDAV
* S3Compatible
    Example: "123456luggage"

  - `script` (string, required)
    The absolute file path to the user-supplied transport solution script.

Note:

This parameter is only valid for the Custom backup type.
    Example: "/home/backups/beammeupscotty.pl"

  - `type` (string, required)
    The type of backup destination.

* Custom
* FTP
* Local
* SFTP
* WebDAV
* AmazonS3
* Rsync
* GoogleDrive
* S3Compatible
* Backblaze

Note:

This value determines which parameters you can use with the function.

Warning:

Use any of these encrypted connections to transfer system backup files:

* Amazon S3™
* Backblaze
* GoogleDrive
* Rsync
* S3 Compatible
* SFTP
* WebDAV with SSL enabled
    Enum: "Custom", "FTP", "Local", "SFTP", "WebDAV", "AmazonS3", "Rsync", "GoogleDrive", "S3Compatible", "Backblaze"

  - `username` (string, required)
    The remote server account's username.

Note:

This parameter is only valid for the following backup types:
* Custom
* FTP
* SFTP
* Rsync
* WebDAV
    Example: "username"

  - `folder` (string)
    The path to the backups directory on the remote server.

Note:

This parameter is only valid for the following backup types:
* AmazonS3
* GoogleDrive
* S3Compatible
    Example: "subfolder"

  - `mount` (integer)
    Whether the path is mounted.

* 1 — The path is mounted.
* 0 — The path is not mounted.

Note:

This parameter is only valid for the Local backup type.
    Enum: 0, 1

  - `no_mount_fail` (integer)
    Whether to fail the backup attempt if the mount fails.

* 1 — Fail the backup attempt.
* 0 — Do not fail the backup attempt.

Note:

This parameter is only valid for the Local backup type.
    Enum: 0, 1

  - `only_used_for_logs` (integer)
    Whether to use this transport only for logs.

* 1 — This destination will be skipped for regular backups.
* 0 — Both log and regular backups will be uploaded.

This setting defaults to 0.
The only time log files get their own backup is via scripts/remote_log_transfer
    Enum: 0, 1

  - `passive` (integer)
    Whether to use passive FTP.

* 1 — Use passive FTP.
* 0 — Use active FTP.

Note:

This parameter is only valid for the FTP backup type.
    Enum: 0, 1

  - `passphrase` (string)
    The private key file's passphrase, if the authtype parameter is the key value.

Note:

This parameter is only valid for the following backup types:
* SFTP
* Rsync
    Example: "123456luggage"

  - `path` (string)
    The path to the backups directory on the remote server.

* This parameter is required for the Local backup type.
* If you do not use this parameter, the system will not set a value.

Note:

This parameter is only valid for the following backup types:
* Backblaze
* Custom
* Local
* FTP
* SFTP
* Rsync
* WebDAV
    Example: "backups"

  - `port` (integer)
    The TCP port to use.

Note:

* This parameter defaults to the standard port used by the queried backup type parameter.
* This parameter is only valid for the following backup types:
  * FTP
  * SFTP
  * Rsync
  * WebDAV
    Example: 21

  - `privatekey` (string)
    The file path to the private key file, if the authtype parameter is the key value.

Note:

This parameter is only valid for the following backup types:
* SFTP
* Rsync
    Example: "/home/backups/key"

  - `ssl` (integer)
    Whether to use SSL.

* 1 — Use SSL.
* 0 — Do not use SSL.

Note:

This parameter is only valid for the WebDAV backup type.
    Enum: 0, 1

  - `timeout` (integer)
    The session timeout, measured in seconds.

Note:

* This parameter is not valid for the Local backup type parameter.
* The default value depends on the type parameter's value.
    Example: 30

  - `upload_system_backup` (integer)
    Whether to upload system backups.

* 1 — Upload system backups.
* 0 — Do not upload system backups.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.id` (string)
    The backup destination's ID.
    Example: "PhAxIoLSdIkCI40q9vWS4BYy"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_destination_add"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


