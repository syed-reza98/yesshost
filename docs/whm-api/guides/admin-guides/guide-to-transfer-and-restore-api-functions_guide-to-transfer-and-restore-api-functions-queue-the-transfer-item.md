[Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guides/guide-to-transfer-and-restore-api-functions)

# Guide to Transfer and Restore API Functions - Queue the Transfer Item

## Introduction

When you queue the transfer item, you add a package or account (transfer item) to the transfer list.

Note:
In this example, the following statements are true:

* `remote.example.com` and `local.example.com` represent the remote server and the local server.
* You logged in to the local server with the `cpsess##########` security token.
* The example account owns `example.com`, and you want to transfer it from the remote server to the local server.
* The `example.com` domain contains 123,456,789 bytes.
* You want to transfer the `package1` package from the remote server to the local server.
* `luggage12345` represents the `root` password for the remote server.


## Queue the transfer item

The function's structure depends on the transfer module into which that handles the transfer item. Use the WHM API 1  [`enqueue_transfer_item`](/openapi/whm/operation/enqueue_transfer_item/) function to add a transfer item to the transfer session.

Select the method by which you wish to call the function:

#### JSON API (root)


```
https://hostname.example.com:2087/cpsess##########/json-api/enqueue_transfer_item?api.version=1&transfer_session_id=remoteexamplecopya20140211211719FxjU&module=AccountRemoteRoot&user=user&size=1&localuser=username&detected_remote_user=user&domain=example.com&replaceip=all&reseller=0&force=0&ip=0&skiphomedir=0&shared_mysql_server=0&skipres=1&skipacctdb=0&skipaccount=0&xferpoint=1&overwrite_with_delete=1
```

#### PHP (root)


```
include_once '../xmlapi.php';

$ip = getenv('REMOTE_HOST');
$root_user = getenv('REMOTE_USER');
$root_pass = getenv('REMOTE_PASSWORD');

$xmlapi = new xmlapi($ip , $root_user , $root_pass);
$xmlapi->set_output('json');

$settings = array(
 'api.version'=>1,
 'transfer_session_id' => 'remoteexamplecomnoroo20140501194105g7qG',
 'module'=>'AccountRemoteRoot',
 'user' => 'transferme',
 'size' => '123456789',
 'localuser' => 'transferme',
 'detected_remote_user' => 'transferme',
 'domain' => 'transferme.com',
 'replaceip' => 'all',
 'reseller' => '0',
 'force' => '0',
 'ip' => '0',
 'skiphomedir' => '0',
 'shared_mysql_server' => '0',
 'skipres' => '1',
 'skipacctdb' => '0',
 'skipbwdata' => '0',
 'skipaccount' => '0',
 'live_transfer' => '1',
 'xferpoint' => '1'
);
$_result = $xmlapi->xmlapi_query('enqueue_transfer_item' , $settings);

print $_result;
```

#### JSON API (user)


```
https://hostname.example.com:2087/cpsess##########/json-api/enqueue_transfer_item?api.version=1&user=user&transfer_session_id=remoteexamplecomnoroo20140501194105g7qG&module=AccountRemoteUser&localuser=username&overwrite_with_delete=1
```

#### PHP (user)


```
include_once '../xmlapi.php';

$ip = getenv('REMOTE_HOST');
$root_user = getenv('REMOTE_USER');
$root_pass = getenv('REMOTE_PASSWORD');

$xmlapi = new xmlapi($ip , $root_user , $root_pass);
$xmlapi->set_output('json');

$settings = array(
 'api.version'=>1,
 'transfer_session_id' => 'remoteexamplecomnoroo20140501194105g7qG',
 'module'=>'AccountRemoteUser',
 'user' => 'transferme',
 'size' => '123456789',
 'localuser' => 'transferme',
 'detected_remote_user' => 'transferme',
 'domain' => 'transferme.com',
 'replaceip' => 'all',
 'reseller' => '0',
 'force' => '0',
 'ip' => '0',
 'skiphomedir' => '0',
 'shared_mysql_server' => '0',
 'skipres' => '1',
 'skipacctdb' => '0',
 'skipbwdata' => '0',
 'skipaccount' => '0',
);
$_result = $xmlapi->xmlapi_query('enqueue_transfer_item' , $settings);

print $_result;
```

This function only returns the following metadata:


```
{
  "metadata": {
    "version": 1,
    "reason": "OK",
    "result": "1",
    "command": "enqueue_transfer_item"
  }
}
```

For `root` transfers only, add the transfer of the  package1  package to the queue with the WHM API 1 [`enqueue_transfer_item`](/openapi/whm/operation/enqueue_transfer_item/) function.

Select the method by which you wish to call the function:

#### JSON API


```
https://hostname.example.com:2087/cpsess##########/json-api/enqueue_transfer_item?api.version=1&transfer_session_id=remoteexamplecopya20140211211719FxjU&module=PackageRemoteRoot&package=package1
```

#### PHP


```
include_once '../xmlapi.php';

$ip = getenv('REMOTE_HOST');
$root_user = getenv('REMOTE_USER');
$root_pass = getenv('REMOTE_PASSWORD');

$xmlapi = new xmlapi($ip , $root_user , $root_pass);
$xmlapi->set_output('json');

$settings = array(
 'api.version' => '1',
 'transfer_session_id' => "remoteexamplecopya20140211211719FxjU',
 'module' => 'PackageRemoteRoot',
 'package' => 'package1'
);
$_result = $xmlapi->xmlapi_query('enqueue_transfer_item' , $settings);

print $_result;
```