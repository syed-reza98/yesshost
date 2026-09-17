# Return transfer session's log file

This function returns a transfer session's log file.

Note:

 For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

Endpoint: GET /fetch_transfer_session_log
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `logfile` (any, required)
    The log file's name.
    Example: "master.log"

  - `transfer_session_id` (string, required)
    The transfer session's ID.
    Example: "vm5docscpanelcopya20140224163412sylG"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.log` (string)
    The logfile's contents.
    Example: "{\"contents\":{\"action\":\"start\",\"time\":1598991042,\"child_number\":0},\"pid\":12789,\"type\":\"control\",\"indent\":0,\"partial\":0}\n{\"partial\":0,\"indent\":0,\"type\":\"control\",\"pid\":12789,\"contents\":{\"time\":1598991042,\"action\":\"initiator\",\"child_number\":0,\"msg\":\"norootcopy\"}}\n{\"partial\":0,\"indent\":0,\"pid\":12789,\"type\":\"control\",\"contents\":{\"msg\":2.3,\"child_number\":0,\"time\":1598991042,\"action\":\"version\"}}\n{\"type\":\"control\",\"pid\":12789,\"contents\":{\"time\":1598991042,\"queue\":\"TRANSFER\",\"action\":\"queue_count\",\"msg\":1,\"child_number\":0},\"partial\":0,\"indent\":0}\n{\"contents\":{\"time\":1598991042,\"action\":\"queue_size\",\"queue\":\"TRANSFER\",\"child_number\":0,\"msg\":1},\"type\":\"control\",\"pid\":12789,\"indent\":0,\"partial\":0}\n{\"type\":\"control\",\"pid\":12789,\"contents\":{\"time\":1598991042,\"queue\":\"RESTORE\",\"action\":\"queue_count\",\"child_number\":0,\"msg\":1},\"partial\":0,\"indent\":0}\n{\"partial\":0,\"indent\":0,\"pid\":12789,\"type\":\"control\",\"contents\":{\"child_number\":0,\"msg\":1,\"time\":1598991042,\"action\":\"queue_size\",\"queue\":\"RESTORE\"}}\n{\"partial\":0,\"indent\":0,\"pid\":12789,\"type\":\"control\",\"contents\":{\"action\":\"remotehost\",\"time\":1598991042,\"msg\":\"10.1.32.200\",\"child_number\":0}}\n{\"partial\":0,\"indent\":0,\"type\":\"control\",\"pid\":12790,\"contents\":{\"item\":\"root\",\"time\":1598991042,\"child_number\":1,\"action\":\"start\",\"queue\":\"TRANSFER\",\"logfile\":\"item-TRANSFER_AccountRemoteUser_root\",\"local_item\":\"root\",\"item_name\":\"Account\",\"item_type\":\"AccountRemoteUser\"}}\n{\"indent\":0,\"partial\":0,\"contents\":{\"action\":\"process-item\",\"queue\":\"TRANSFER\",\"logfile\":\"item-TRANSFER_AccountRemoteUser_root\",\"item_type\":\"AccountRemoteUser\",\"item_name\":\"Account\",\"local_item\":\"root\",\"msg\":\"item-TRANSFER_AccountRemoteUser_root\",\"item\":\"root\",\"time\":1598991042,\"child_number\":1},\"pid\":12790,\"type\":\"control\"}\n{\"indent\":0,\"partial\":0,\"contents\":{\"logfile\":\"item-TRANSFER_AccountRemoteUser_root\",\"item_name\":\"Account\",\"item_type\":\"AccountRemoteUser\",\"local_item\":\"root\",\"msg\":{\"size\":1},\"queue\":\"TRANSFER\",\"action\":\"start-item\",\"child_number\":1,\"item\":\"root\",\"time\":1598991042},\"pid\":12790,\"type\":\"control\"}\n{\"contents\":{\"child_number\":1,\"item\":\"root\",\"time\":1598991042,\"logfile\":\"item-TRANSFER_AccountRemoteUser_root\",\"local_item\":\"root\",\"msg\":{\"dangerous_items\":0,\"skipped_items\":0,\"altered_items\":0,\"failure\":\"The account “root” already exists on “control.box.new”.\",\"size\":1,\"warnings\":0,\"contents\":{\"warnings\":null,\"skipped_items\":null,\"dangerous_items\":null,\"altered_items\":null}},\"item_name\":\"Account\",\"item_type\":\"AccountRemoteUser\",\"queue\":\"TRANSFER\",\"action\":\"failed-item\"},\"type\":\"control\",\"pid\":12790,\"indent\":0,\"partial\":0}\n{\"indent\":0,\"partial\":0,\"contents\":{\"item_type\":\"AccountRemoteUser\",\"item_name\":\"Account\",\"msg\":{\"size\":1},\"local_item\":\"root\",\"logfile\":\"item-RESTORE_AccountRemoteUser_root\",\"action\":\"start-item\",\"queue\":\"RESTORE\",\"child_number\":1,\"time\":1598991042,\"item\":\"root\"},\"type\":\"control\",\"pid\":12790}\n{\"pid\":12790,\"type\":\"control\",\"contents\":{\"item_type\":\"AccountRemoteUser\",\"item_name\":\"Account\",\"msg\":{\"size\":1,\"failure\":\"The account “root” already exists on “control.box.new”.\"},\"local_item\":\"root\",\"logfile\":\"item-RESTORE_AccountRemoteUser_root\",\"action\":\"failed-item\",\"queue\":\"RESTORE\",\"child_number\":1,\"time\":1598991042,\"item\":\"root\"},\"partial\":0,\"indent\":0}\n{\"contents\":{\"time\":1598991042,\"action\":\"complete\",\"queue\":\"TRANSFER\",\"child_number\":1},\"pid\":12790,\"type\":\"control\",\"indent\":0,\"partial\":0}\n{\"type\":\"control\",\"pid\":12791,\"contents\":{\"queue\":\"RESTORE\",\"action\":\"complete\",\"time\":1598991043,\"child_number\":1},\"partial\":0,\"indent\":0}\n{\"pid\":12789,\"type\":\"control\",\"contents\":{\"child_number\":0,\"action\":\"complete\",\"time\":1598991043},\"partial\":0,\"indent\":0}\n"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_transfer_session_log"

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


