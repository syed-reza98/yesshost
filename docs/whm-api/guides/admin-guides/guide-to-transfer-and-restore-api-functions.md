[Development Guides Home](/guides)

# Guide to Transfer and Restore API Functions

## Introduction

The system uses several WHM API 1 functions during the transfer and restore process. This guide explains the relationship between these API functions and the order in which to call them.

* The source and target servers **must** be able to communicate over port 2087 to use this feature. They **must** also be able to communicate over the port that your servers use for SSH connections. For more information about the ports that cPanel & WHM uses, read our [How to Configure Your Firewall for cPanel Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.
* Do **not** shut down or restart any processes on either server during the transfer and restoration process.
* Do **not** start a transfer during a system update (`upcp`) or start a system update during a transfer. The system update will fail.


To transfer accounts, you **must** obtain the following:

* SSH access to the remote server.
* `root`-level privileges with the `su` or `sudo` commands.


To bypass the need for SSH, you **must** use either the [`AccountRemoteRoot` module](/openapi/whm/operation/enqueue_transfer_item/) or the [`root` user login authentication method](https://docs.cpanel.net/whm/transfers/transfer-tool/#authentication).

## Transfer and restore process

We recommend the following workflow during the transfer and restore process:

1. [Plan the transfer session](/guides/guide-to-transfer-and-restore-api-functions/guide-to-transfer-and-restore-api-functions-plan-the-transfer-session) — The planning process sets up the transfer session.
2. [Create the transfer session](/guides/guide-to-transfer-and-restore-api-functions/guide-to-transfer-and-restore-api-functions-create-the-transfer-session) — The creation process creates the transfer session.
3. [Check the transfer session](/guides/guide-to-transfer-and-restore-api-functions/guide-to-transfer-and-restore-api-functions-check-the-transfer-session) — A transfer session check ensures that you can create a system account on the remote server.
4. [Queue the transfer item](/guides/guide-to-transfer-and-restore-api-functions/guide-to-transfer-and-restore-api-functions-queue-the-transfer-item) — When you queue the transfer item, you add a package or account (transfer item) to the transfer list.
5. [Start the transfer session](/guides/guide-to-transfer-and-restore-api-functions/guide-to-transfer-and-restore-api-functions-start-the-transfer-session) — The start process begins the transfer session.
6. [Monitor the transfer session](/guides/guide-to-transfer-and-restore-api-functions/guide-to-transfer-and-restore-api-functions-monitor-the-transfer-session) — When you monitor the transfer session, you check the status of the transfer session.


You can [pause and restart an active transfer session](/guides/guide-to-transfer-and-restore-api-functions/guide-to-transfer-and-restore-api-functions-pause-and-restart-the-transfer-session) throughout the transfer process.