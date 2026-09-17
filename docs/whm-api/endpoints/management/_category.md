# Management

Login Security (cPHulk) / Management

## Add login security record to list with comment

 - [POST /batch_create_cphulk_records](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-batch_create_cphulk_records.md): This function adds one or more records to cPHulk's whitelist or blacklist. The function includes the option to add unique comments for each IP address that you add.

## Return login security status

 - [GET /cphulk_status](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-cphulk_status.md): This function returns the status of the cPHulk service.

## Add login security record to list

 - [GET /create_cphulk_record](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-create_cphulk_record.md): This function adds a new record or records to cPHulk's whitelist or blacklist.

## Remove login security record from list

 - [GET /delete_cphulk_record](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-delete_cphulk_record.md): This function deletes a record or records from cPHulk's whitelist or blacklist.

## Remove all login security records

 - [GET /flush_cphulk_login_history](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-flush_cphulk_login_history.md): This function removes the login history entries from the cPHulk
database.

## Remove login security IP address block

 - [GET /flush_cphulk_login_history_for_ips](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-flush_cphulk_login_history_for_ips.md): This function removes specific login history entries from the cPHulk database. Use this function to unblock one or more IP addresses.

## Return login security list records

 - [GET /read_cphulk_records](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-read_cphulk_records.md): This function displays a cPHulk list's records.

