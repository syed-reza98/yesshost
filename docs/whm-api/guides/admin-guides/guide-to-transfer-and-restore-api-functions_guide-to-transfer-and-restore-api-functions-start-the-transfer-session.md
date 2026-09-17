[Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guides/guide-to-transfer-and-restore-api-functions)

# Guide to Transfer and Restore API Functions - Start the Transfer Session

## Introduction

The start process begins the transfer session. Use the same process for both the `root` and transfer sessions.

Note:
In this example, the following statements are true:

* `remote.example.com` and `local.example.com` represent the remote server and the local server.
* You logged in to the local server with the `cpsess##########` security token.
* The example account owns `example.com`, and you want to transfer it from the remote server to the local server.
* The `example.com` domain contains 123,456,789 bytes.
* You want to transfer the `package1` package from the remote server to the local server.
* `luggage12345` represents the `root` password for the remote server.


## Start the transfer session

After you add all of the transfer items to the transfer session, start the transfer session with the WHM API 1 [`start_transfer_session`](/openapi/whm/operation/start_transfer_session/) function.

Select the method by which you wish to call the function:

#### JSON API


```
https://hostname.example.com:2087/cpsess##########/json-api/start_transfer_session?api.version=1&transfer_session_id=exampleservercopya20140206192428NtyW
```

#### PHP


```
include_once '../xmlapi.php';

$ip = getenv('REMOTE_HOST');
$root_user = getenv('REMOTE_USER');
$root_pass = getenv('REMOTE_PASSWORD');

$xmlapi = new xmlapi($ip , $root_user , $root_pass);
$xmlapi->set_output('json');

$settings = array('api.version'=>1, 'transfer_session_id'=>'remoteexamplecomnoroo20140501194105g7qG');
$_result = $xmlapi->xmlapi_query('start_transfer_session' , $settings);

print $_result;
```