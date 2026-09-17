# Bandwidth and Disk Quotas

Accounts / Bandwidth and Disk Quotas

## Update cPanel account disk quota

 - [GET /editquota](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/accounts-editquota.md): This function modifies a user's disk quota.

## Return all cPanel accounts disk usage

 - [GET /get_disk_usage](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/diskusage-get_disk_usage.md): This function lists the disk usage status of the system's user accounts. This also lists information about file system object (inode) usage.

## Update cPanel account bandwidth quota

 - [GET /limitbw](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/bandwidth-limitbw.md): This function modifies a cPanel account's bandwidth quota.

## Validate cPanel account quotas

 - [GET /quota_enabled](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/quota-quota_enabled.md): This function checks if quotas are enabled on at least one of a user's /home directory mounts.

## Return cPanel account bandwidth information

 - [GET /showbw](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/bandwidth-showbw.md): This function retrieves account bandwidth information.

