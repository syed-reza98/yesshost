# DNS Security

DNS / DNS Security

## Enable domain's DNSSEC key

 - [GET /activate_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-activate_zone_key.md): This function activates a domain's DNSSEC security key.

## Create domain's DNSSEC zone key

 - [GET /add_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-add_zone_key.md): This function generates a DNSSEC zone key for a domain.

Note:

* Only servers that run PowerDNS can use DNSSEC. If you call this function on
a server that doesn't use PowerDNS, you will receive an error.
* After you enable DNSSEC on the domain, you must add the Delegation of Signing (DS)
records to your zone record and your registrar.
* You cannot modify the DNSSEC security key. To make any changes, you must disable,
delete, and re-create the DNSSEC security key.

## Disable domain's DNSSEC key

 - [GET /deactivate_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-deactivate_zone_key.md): This function deactivates a domain's DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

## Disable DNSSEC on domain

 - [GET /disable_dnssec_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-disable_dnssec_for_domains.md): This function disables DNSSEC on the domain.

Note:

  Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

Warning:

 - This action is irreversible. If you disable DNSSEC on the domain, you will lose the associated keys. You can only retrieve the keys by restoring them from a full back up of the account.
 - If you disable DNSSEC, you must remove the Delegation of Signing (DS) records on your DNS server and with your registrar.

## Enable DNSSEC on domain

 - [GET /enable_dnssec_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-enable_dnssec_for_domains.md): This function enables DNSSEC on the domain.

Note:

* Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.
* After you enable DNSSEC on the domain, you must add the Delegation of Signing (DS) records on your DNS server and with your registrar.
* You cannot modify the DNSSEC security key. To make any changes, you must disable, delete, and re-create the DNSSEC security key.

## Export domain's DNSSEC key

 - [GET /export_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-export_zone_key.md): This function exports a DNSSEC security key to a domain.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

## Import DNSSEC key

 - [GET /import_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-import_zone_key.md): This function imports a DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

## Remove DNSSEC key

 - [GET /remove_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-remove_zone_key.md): This function removes a DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

