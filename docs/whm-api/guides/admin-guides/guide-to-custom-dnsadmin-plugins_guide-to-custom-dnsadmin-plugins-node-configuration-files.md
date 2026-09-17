[Development Guides Home](/guides) >> [Guide to Custom dnsadmin Plugins](/guides/guide-to-custom-dnsadmin-plugins/)

# Guide to Custom dnsadmin Plugins - Node Configuration Files

## Introduction

Use the node configuration file to add nodes to a DNS cluster. The `dnsadmin` system manages local DNS zones and communicates with remote systems (nodes) in your DNS cluster. Each node has a specific role that determines which commands it can send and receive.

To add a node to a DNS cluster, create a node configuration file in the `/var/cpanel/cluster/username/config/` directory, where `username` is the WHM account's username.

## Node configuration files

The following example is a typical node configuration file:


```
#version 2.0
user=root
host=node.example.com
pass=12345luggage
module=cPanel
debug=on
```

Warning:
Node configuration files **must** include the `#version 2.0` line at the beginning of the file. Without it, the system **cannot** read the file correctly.

### Node settings

Node configuration files may contain the following `key=value` pairs:

| Key | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | `string` | **Required**The account username. | A valid username on the server. | `root` |
| `host` | `string` | **Required**The node's hostname. | A valid hostname. | `node.example.com` |
| `pass` | `string` | **Required**The node password. | A secure password. | `Luggage123456` |
| `module` | `string` | **Required**The node module name. | A valid string. This value corresponds to the `Setup` module's name. | `cPanel` |
| `debug` | `string` | Whether the node is in debug mode.This value defaults to `off`. | `on``off` | `on` |


### Node roles

The `/var/cpanel/cluster/username/config/node-dnsrole/` directory, where `username` is the account username, contains files that define each node's role.

Each node has one of the following roles:

* `synchronize` — This node sends the actions that it receives to remote DNS servers in the DNS cluster.
* `write-only` — This node only receives actions from other nodes.
* `standalone` — This node does not send or receive actions.