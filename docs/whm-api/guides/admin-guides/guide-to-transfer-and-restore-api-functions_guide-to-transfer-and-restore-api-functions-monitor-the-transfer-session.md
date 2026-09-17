[Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guides/guide-to-transfer-and-restore-api-functions)

# Guide to Transfer and Restore API Functions - Monitor the Transfer Session

## Introduction

When you monitor the transfer session, you check the status of the transfer session. Use the same process for both the `root` and transfer sessions.

In this example, the following statements are true:

* `remote.example.com` and `local.example.com` represent the remote server and the local server.
* You logged in to the local server with the `cpsess##########` security token.
* The example account owns `example.com`, and you want to transfer it from the remote server to the local server.
* The `example.com` domain contains 123,456,789 bytes.
* You want to transfer the `package1` package from the remote server to the local server.
* `luggage12345` represents the root password for the remote server.


## Determine the state of the transfer session

To determine the state of a transfer session, use the WHM API 1 [`get_transfer_session_state`](/openapi/whm/operation/get_transfer_session_state/) function.

Select the method by which you wish to call the function:

### JSON API


```
https://hostname.example.com:2087/cpsess##########/json-api/get_transfer_session_state?api.version=1&transfer_session_id=exampleservercopya20140206192428NtyW
```

### PHP


```
include_once '../xmlapi.php';

$ip = getenv('REMOTE_HOST');
$root_user = getenv('REMOTE_USER');
$root_pass = getenv('REMOTE_PASSWORD');

$xmlapi = new xmlapi($ip , $root_user , $root_pass);
$xmlapi->set_output('json');

$settings = array('api.version'=>1, 'transfer_session_id'=>'remoteexamplecomnoroo20140501194105g7qG');
$_result = $xmlapi->xmlapi_query('get_transfer_session_state' , $settings);

print $_result;
```

The function will respond with one of the following states:

* TRANSFER_PENDING
* TRANSFER_INPROGRESS
* RESTORE_PENDING
* RESTORE_INPROGRESS
* PENDING
* COMPLETED
* FAILED


In the following example, the transfer session is in progress:


```
{
  "data": {
    "state_name": "TRANSFER_INPROGRESS"
  },
  "metadata": {
    "version": 1,
    "reason": "OK",
    "result": "1",
    "command": "get_transfer_session_state"
  }
}
```

## Review the master log

Review the master log for the transfer session with the WHM API 1 [`fetch_transfer_session_log`](/openapi/whm/operation/fetch_transfer_session_log/) function.

Select the method by which you wish to call the function:

### JSON API


```
https://hostname.example.com:2087/cpsess##########/json-api/fetch_transfer_session_log?api.version=1&transfer_session_id=vm5docscpanelcopya20140224163412sylG&logfile=master.log
```

### PHP


```
include_once '../xmlapi.php';

$ip = getenv('REMOTE_HOST');
$root_user = getenv('REMOTE_USER');
$root_pass = getenv('REMOTE_PASSWORD');

$xmlapi = new xmlapi($ip , $root_user , $root_pass);
$xmlapi->set_output('json');

$settings = array(
    'api.version'=>1,
    'transfer_session_id'=>'remoteexamplecomnoroo20140501194105g7qG' ,
    'logfile' => 'master.log'
);
$_result = $xmlapi->xmlapi_query('fetch_transfer_session_log' , $settings);

print $_result;
```

The following example shows the contents of a log file:


```
{
  "data": {
    "log":

"\“pid\“:\“14358\“,\“contents\“:{\“action\“:\“start\“,\“child_number\“:0},\“type\“:\“control\“}\n{\“pid\“:\“14358\“,\“contents\“:{\“msg\“:\“copyacct\“,\“action\“:\“initiator\“,\“child_number\“:0},\“type\“:\“control\“}\n{\“pid\“:\“14358\“,\“contents\“:{\“msg\“:\“1.6\“,\“action\“:\“version\“,\“child_number\“:0},\“type\“:\“control\“}\n{\“pid\“:\“14358\“,\“contents\“:{\“msg\“:\“3\“,\“action\“:\“queue_count\“,\“queue\“:\“TRANSFER\“,\“child_number\“:0},\“type\“:\“control\“}\n{\“pid\“:\“14358\“,\“contents\“:{\“msg\“:\“3\“,\“action\“:\“queue_count\“,\“queue\“:\“RESTORE\“,\“child_number\“:0},\“type\“:\“control\“}\n{\“pid\“:\“14358\“,\“contents\“:{\“msg\“:\“vm5.docs.cpanel.net\“,\“action\“:\“remotehost\“,\“child_number\“:0},\“type\“:\“control\“}\n{\“pid\“:\“14360\“,\“contents\“:{\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“fredfred\“,\“action\“:\“start\“,\“queue\“:\“TRANSFER\“,\“item_name\“:\“Account\“,\“child_number\“:1},\“type\“:\“control\“}\n{\“pid\“:\“14360\“,\“contents\“:{\“msg\“:\“item-TRANSFER_AccountRemoteRoot_fredfred\“,\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“fredfred\“,\“item_name\“:\“Account\“,\“action\“:\“process-item\“,\“queue\“:\“TRANSFER\“,\“child_number\“:1,\“logfile\“:\“item-TRANSFER_AccountRemoteRoot_fredfred\“},\“type\“:\“control\“}\n{\“pid\“:\“14361\“,\“contents\“:{\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“colin\“,\“action\“:\“start\“,\“queue\“:\“TRANSFER\“,\“item_name\“:\“Account\“,\“child_number\“:2},\“type\“:\“control\“}\n{\“pid\“:\“14361\“,\“contents\“:{\“msg\“:\“item-TRANSFER_AccountRemoteRoot_colin\“,\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“colin\“,\“item_name\“:\“Account\“,\“action\“:\“process-item\“,\“queue\“:\“TRANSFER\“,\“child_number\“:2,\“logfile\“:\“item-TRANSFER_AccountRemoteRoot_colin\“},\“type\“:\“control\“}\n{\“pid\“:\“14362\“,\“contents\“:{\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“stacy\“,\“action\“:\“start\“,\“queue\“:\“TRANSFER\“,\“item_name\“:\“Account\“,\“child_number\“:3},\“type\“:\“control\“}\n{\“pid\“:\“14362\“,\“contents\“:{\“msg\“:\“item-TRANSFER_AccountRemoteRoot_stacy\“,\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“stacy\“,\“item_name\“:\“Account\“,\“action\“:\“process-item\“,\“queue\“:\“TRANSFER\“,\“child_number\“:3,\“logfile\“:\“item-TRANSFER_AccountRemoteRoot_stacy\“},\“type\“:\“control\“}\n{\“pid\“:\“14362\“,\“contents\“:{\“msg\“:{\“warnings\“:0,\“dangerous_items\“:0,\“contents\“:{\“dangerous_items\“:null,\“altered_items\“:null},\“skipped_items\“:0,\“altered_items\“:0,\“message\“:null},\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“stacy\“,\“item_name\“:\“Account\“,\“action\“:\“success-item\“,\“queue\“:\“TRANSFER\“,\“child_number\“:3,\“logfile\“:\“item-TRANSFER_AccountRemoteRoot_stacy\“},\“type\“:\“control\“}\n{\“pid\“:\“14361\“,\“contents\“:{\“msg\“:{\“warnings\“:0,\“dangerous_items\“:0,\“contents\“:{\“dangerous_items\“:null,\“altered_items\“:null},\“skipped_items\“:0,\“altered_items\“:0,\“message\“:null},\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“colin\“,\“item_name\“:\“Account\“,\“action\“:\“success-item\“,\“queue\“:\“TRANSFER\“,\“child_number\“:2,\“logfile\“:\“item-TRANSFER_AccountRemoteRoot_colin\“},\“type\“:\“control\“}\n{\“pid\“:\“14363\“,\“contents\“:{\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“stacy\“,\“action\“:\“start\“,\“queue\“:\“RESTORE\“,\“item_name\“:\“Account\“,\“child_number\“:1},\“type\“:\“control\“}\n{\“pid\“:\“14363\“,\“contents\“:{\“msg\“:\“item-RESTORE_AccountRemoteRoot_stacy\“,\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“stacy\“,\“item_name\“:\“Account\“,\“action\“:\“process-item\“,\“queue\“:\“RESTORE\“,\“child_number\“:1,\“logfile\“:\“item-RESTORE_AccountRemoteRoot_stacy\“},\“type\“:\“control\“}\n{\“pid\“:\“14365\“,\“contents\“:{\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“colin\“,\“action\“:\“start\“,\“queue\“:\“RESTORE\“,\“item_name\“:\“Account\“,\“child_number\“:2},\“type\“:\“control\“}\n{\“pid\“:\“14365\“,\“contents\“:{\“msg\“:\“item-RESTORE_AccountRemoteRoot_colin\“,\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“colin\“,\“item_name\“:\“Account\“,\“action\“:\“process-item\“,\“queue\“:\“RESTORE\“,\“child_number\“:2,\“logfile\“:\“item-RESTORE_AccountRemoteRoot_colin\“},\“type\“:\“control\“}\n{\“pid\“:\“14360\“,\“contents\“:{\“msg\“:{\“warnings\“:0,\“dangerous_items\“:0,\“contents\“:{\“dangerous_items\“:null,\“altered_items\“:null},\“skipped_items\“:0,\“altered_items\“:0,\“message\“:null},\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“fredfred\“,\“item_name\“:\“Account\“,\“action\“:\“success-item\“,\“queue\“:\“TRANSFER\“,\“child_number\“:1,\“logfile\“:\“item-TRANSFER_AccountRemoteRoot_fredfred\“},\“type\“:\“control\“}\n{\“pid\“:\“14360\“,\“contents\“:{\“action\“:\“complete\“,\“queue\“:\“TRANSFER\“,\“child_number\“:1},\“type\“:\“control\“}\n{\“pid\“:\“14362\“,\“contents\“:{\“action\“:\“complete\“,\“queue\“:\“TRANSFER\“,\“child_number\“:3},\“type\“:\“control\“}\n{\“pid\“:\“14361\“,\“contents\“:{\“action\“:\“complete\“,\“queue\“:\“TRANSFER\“,\“child_number\“:2},\“type\“:\“control\“}\n{\“pid\“:\“14363\“,\“contents\“:{\“msg\“:{\“warnings\“:2,\“dangerous_items\“:0,\“contents\“:{\“dangerous_items\“:[],\“altered_items\“:[]},\“skipped_items\“:10,\“altered_items\“:0,\“message\“:null},\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“stacy\“,\“item_name\“:\“Account\“,\“action\“:\“success-item\“,\“queue\“:\“RESTORE\“,\“child_number\“:1,\“logfile\“:\“item-RESTORE_AccountRemoteRoot_stacy\“},\“type\“:\“control\“}\n{\“pid\“:\“14363\“,\“contents\“:{\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“fredfred\“,\“action\“:\“start\“,\“queue\“:\“RESTORE\“,\“item_name\“:\“Account\“,\“child_number\“:1},\“type\“:\“control\“}\n{\“pid\“:\“14363\“,\“contents\“:{\“msg\“:\“item-RESTORE_AccountRemoteRoot_fredfred\“,\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“fredfred\“,\“item_name\“:\“Account\“,\“action\“:\“process-item\“,\“queue\“:\“RESTORE\“,\“child_number\“:1,\“logfile\“:\“item-RESTORE_AccountRemoteRoot_fredfred\“},\“type\“:\“control\“}\n{\“pid\“:\“14365\“,\“contents\“:{\“msg\“:{\“warnings\“:4,\“dangerous_items\“:1,\“contents\“:{\“dangerous_items\“:[[[\“Mysql\“,\“_restore_mysql\“,104],\“MySQL:
 Skipping grants for these MySQL databases: colin_%. These databases
don't exist in the
archive.\“,null]],\“altered_items\“:[[[\“Mysql\“,\“_update_dbname\“,437],\“mySQL
 database \u201ccolin_testdatabase\u201d restored as
\u201ctestdatabase\u201d\“,[\“Rename\“,\“\/scripts5\/rename_mysql_db\“,{\“new\“:\“testdatabase\“,\“orig\“:\“colin_testdatabase\“}]],[[\“Mysql\“,\“_update_dbuser_name\“,348],\“mySQL
 user \u201ccolin\u201d restored as
\u201ccolin\u201d\“,[\“Rename\“,\“\/scripts5\/rename_mysql_user\“,{\“new\“:\“colin\“,\“orig\“:\“colin\“}]]]},\“skipped_items\“:10,\“altered_items\“:1,\“message\“:null},\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“colin\“,\“item_name\“:\“Account\“,\“action\“:\“success-item\“,\“queue\“:\“RESTORE\“,\“child_number\“:2,\“logfile\“:\“item-RESTORE_AccountRemoteRoot_colin\“},\“type\“:\“control\“}\n{\“pid\“:\“14363\“,\“contents\“:{\“msg\“:{\“warnings\“:2,\“dangerous_items\“:0,\“contents\“:{\“dangerous_items\“:[],\“altered_items\“:[]},\“skipped_items\“:11,\“altered_items\“:0,\“message\“:null},\“item_type\“:\“AccountRemoteRoot\“,\“item\“:\“fredfred\“,\“item_name\“:\“Account\“,\“action\“:\“success-item\“,\“queue\“:\“RESTORE\“,\“child_number\“:1,\“logfile\“:\“item-RESTORE_AccountRemoteRoot_fredfred\“},\“type\“:\“control\“}\n{\“pid\“:\“14363\“,\“contents\“:{\“action\“:\“complete\“,\“queue\“:\“RESTORE\“,\“child_number\“:1},\“type\“:\“control\“}\n{\“pid\“:\“14365\“,\“contents\“:{\“action\“:\“complete\“,\“queue\“:\“RESTORE\“,\“child_number\“:2},\“type\“:\“control\“}\n{\“pid\“:\“14358\“,\“contents\“:{\“action\“:\“complete\“,\“child_number\“:0},\“type\“:\“control\“}\n“
 },
  "metadata": {
    "version": 1,
    "reason": "OK",
    "result": "1",
    "command": "fetch_transfer_session_log"
  }
}
```

Each log file contains the following information in a [line-delimited JSON](https://jsonlines.org/) format:

| Key | Type | Description | Possible Values | Example |
|  --- | --- | --- | --- | --- |
| `pid` | *integer* | The process ID under which the command in the log entry ran. | An integer value. | `14538` |
| `indent` | *integer* | The level of indentation to display. | A valid positive integer. | `1` |
| `type` | *string* | The type of log file entry. | `out``warn``success``failure``control` | `control` |
| `partial` | *Boolean* | We do not currently use this key. | `0` is the **only** possible value. | `0` |
| `contents` | *hash* | A hash of transfer or restore session information. | This hash contains the action, `child_number`, `dangerous_items`, `item`, `item_name`, `item_type`, `local_item`, `logfile`, `message`, `msg`, `queue`, `skipped_items`, and `warnings` keys. |  |
| `action` | *string* | The action for the system to execute. The log file contains this key in the `content` hash. | A valid string. | `start-item` |
| `child_number` | *integer* | The number of child processes in the transfer or restore process. The log file contains this key in the `content` hash. | A positive integer. | `1` |
| `dangerous_items` | *integer* | The number of items in the transferred or restored account that the system flagged as potentially dangerous. The log file contains this key in the `content` hash. | A positive integer. | `1` |
| `item` | *string* | The name of the account to restore or transfer. The log file contains this key in the `content` hash. | A valid string. | `cptech` |
| `item_name` | *string* | The name of the item to transfer or restore. The log file contains this key in the `content hash`. | A valid string. | `Account` |
| `item_type` | *string* | The specific item to transfer or restore. The log file contains this key in the `content hash`. | A valid string. | `cptech` |
| `local_item` | *string* | The item to restore locally. The log file contains this key in the `content` hash. | A valid string. | `AccountLocal` |
| `logfile` | *string* | The absolute filepath for the log file. The log file contains this key in the `content` hash. | A valid string. | item-`RESTORE_AccountLocal_cptech` |
| `message` | *string* | A message about the transfer or restore process. The log file contains this key in the `content` hash. | A valid string. | `null` |
| `msg` | *string* | Additional information about the transfer or restore process. The log file contains this key in the `content hash`. | A valid string. | `null` |
| `queue` | *string* | The process that the system performed on the account. The log file contains this key in the `content` hash. | `TRANSFER``RESTORE` | `RESTORE` |
| `skipped_items` | *integer* | The items in the account that the transfer or restore process skipped. The log file contains this key in the `content hash`. | A positive integer. | `1` |
| `warnings` | *integer* | The number of warnings that the system returned during the transfer or restore process. The log file contains this key in the `content` hash. | A positive integer. | `2` |


Create a script to parse this log file to determine the progress of the transfer or restore operation.