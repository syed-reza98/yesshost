[Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guides/guide-to-transfer-and-restore-api-functions)

# Guide to Transfer and Restore API Functions - Create the Transfer Session

## Introduction

The creation process creates the transfer session.

In this example, the following statements are true:

* `remote.example.com` and `local.example.com` represent the remote server and the local server.
* You logged in to the local server with the `cpsess##########` security token.
* The example account owns `example.com`, and you want to transfer it from the remote server to the local server.
* The `example.com` domain contains 123,456,789 bytes.
* You want to transfer the `package1` package from the remote server to the local server.
* `luggage12345` represents the root password for the remote server.


## Create the transfer session

To create the transfer session, use one of the following functions:

* For a `root` transfer session, use the WHM API 1 [`create_remote_root_transfer_session`](/openapi/whm/operation/create_remote_root_transfer_session/) function.
* For a user transfer session, use the WHM API 1 [`create_remote_user_transfer_session`](/openapi/whm/operation/create_remote_user_transfer_session/) function.


Select the method by which you wish to call the function:

#### JSON API (root)


```
https://hostname.example.com:2087/cpsess##########/json-api/create_remote_root_transfer_session?api.version=1&remote_server_type=cpanel&host=remote.example.com&port=22&user=root&password=12345luggage&transfer_threads=1&restore_threads=1&unrestricted_restore=1&copy_reseller_privs=0&compressed=0&unencrypted=0&low_priority=0
```

#### PHP (root)


```
include_once '../xmlapi.php';

$ip = getenv('REMOTE_HOST');
$root_user = getenv('REMOTE_USER');
$root_pass = getenv('REMOTE_PASSWORD');

$xmlapi = new xmlapi($ip , $root_user , $root_pass);
$xmlapi->set_debug(1);
$xmlapi->set_output('json');

$settings = array(
    'api.version'=>1,
    'remote_server_type' => 'cpanel',
    'host' => 'remote.example.com',
    'port' => '22',
    'user' => 'root',
    'password' => 'luggage12345',
    'transfer_threads' => '1',
    'restore_threads' => '1',
    'enable_custom_pkgacct' => '1',
    'unrestricted_restore' => '1',
    'copy_reseller_privs' => '0',
    'compressed' => '0',
    'unencrypted' => '0',
    'low_priority' => '0'
);

$_result = $xmlapi->xmlapi_query('create_remote_root_transfer_session' , $settings);

print $_result;
```

### JSON API (user)


```
https://hostname.example.com:2087/cpsess##########/json-api/create_remote_user_transfer_session?api.version=1&unrestricted_restore=1&host=hostname.example.com&password=12345luggage
```

### PHP (user)


```
include_once '../xmlapi.php';

$ip = getenv('REMOTE_HOST');
$root_user = getenv('REMOTE_USER');
$root_pass = getenv('REMOTE_PASSWORD');

$xmlapi = new xmlapi($ip , $root_user , $root_pass);
$xmlapi->set_debug(1);
$xmlapi->set_output('json');

$settings = array(
    'api.version'=>1,
    'host' => 'remote.example.com',
    'password' => 'luggage12345',
);

$_result = $xmlapi->xmlapi_query('create_remote_user_transfer_session' , $settings);

print $_result;
```

This function generates the following transfer session ID in the  `transfer_session_id`  return value:


```
{
  "data": {
    "analyze_rawout":"Fetching information from remote host: \u201c10.1.100.35\u201d \u2026 \u2026\nDone\nFetching information from remote host: \u201c10.1.100.35\u201d \u2026 \u2026\nDone\n",
    "create_rawout":"Basic credential check \u2026 \u2026\nDone\nFetching information from remote host: \u201c10.1.100.35\u201d \u2026 \u2026\nDone\nFetching WHM Version \u2026\nDone\nTesting \u201cvm5.docs.cpanel.net\u201d for transfer streaming support with password authentication....<strong>Streaming Supported</strong>\nRemote Server Type: \u201cWHM1130\u201d\n",
    "transfer_session_id": "vm5docscpanelcopya20140430200447f69g"
  },
  "metadata": {
    "version": 1,
    "reason": "OK",
    "result": "1",
    "command": "create_remote_root_transfer_session"
  }
}
```

In this example, `vm5docscpanelcopya20140430200447f69g` represents the transfer session ID.