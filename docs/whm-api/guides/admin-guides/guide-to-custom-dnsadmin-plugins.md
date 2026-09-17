[Development Guides Home](/guides)

# Guide to Custom dnsadmin Plugins

## Introduction

Custom `dnsadmin` plugins can update DNS records on external systems. To create a custom `dnsadmin` plugin, you **must** write both of the following modules:

* [The `Setup` module](/guides/guide-to-custom-dnsadmin-plugins/guide-to-custom-dnsadmin-plugins-the-setup-module) — The `Setup` module creates the [node configuration file](/guides/guide-to-custom-dnsadmin-plugins/guide-to-custom-dnsadmin-plugins-node-configuration-files/) for a new DNS node.
* [The `Remote` module](/guides/guide-to-custom-dnsadmin-plugins/guide-to-custom-dnsadmin-plugins-the-remote-module/) — The `Remote` module communicates with other servers in the DNS cluster.


div
Warning:

Servers that use custom `dnsadmin` plugins **must** disable the *dnsadmin* checkbox for the *Dormant services* setting in the *Software* section of WHM's [*Tweak Settings*](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#software) interface (*WHM >> Home >> Server Configuration >> Tweak Settings*).

## The dnsadmin system

The `dnsadmin` system manages local DNS zones and communicates with remote systems (nodes) in your DNS cluster.

When you call a DNS-related API function, the `dnsadmin` system can make a second call to an external API. The initial WHM API 1 function's result determines the response function that the `dnsadmin` system calls. The `dnsadmin` system **always** makes this call to every node in the DNS cluster.

* The `dnsadmin` system passes the action to the nodes for the account that made the request. Each node has a specific role that determines which commands it can send and receive.
* The system assigns each action a `dnsuniqid` identification value. This ID is a random string that prevents duplicate actions in complicated peering setups in which member servers may repeat a single request.


## Test your modules

After you create your custom `Setup` and `Remote` modules and store them in the appropriate directories, perform the following steps to test them:

1. On a development cPanel & WHM server, navigate to WHM's [*DNS Cluster*](https://docs.cpanel.net/whm/clusters/dns-cluster/) interface (*WHM >> Home >> Clusters >> DNS Cluster*).
2. The *Backend Type* menu should include your custom server type.
  * If the menu correctly includes your custom server type, select it.
  * If your custom server type does not appear in the menu, check to ensure that the file is in the `/usr/local/cpanel/Cpanel/NameServer/Setup/Remote/` directory.
3. Click *Configure*. A new interface will appear.
4. The interface should include your custom form.
  * If the interface appears as expected, enter the appropriate data and click *Submit*.
  * If the interface does **not** appear as expected, check for errors in the `get_config()` subroutine in your `Setup` module.
5. After you click *Submit*, the `Setup` module's `setup()` subroutine handles the data. A message of success or failure appears.