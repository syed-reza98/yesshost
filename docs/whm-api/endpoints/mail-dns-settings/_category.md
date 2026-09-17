# Mail DNS Settings

Mail / Mail DNS Settings

## Apply a DMARC record to a domain

 - [GET /apply_dmarc](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-apply_dmarc.md): This function applies a DMARC record to the specified domain(s).

Note:

 You cannot modify DMARC records on temporary domains.

## Disable domain's DKIM records

 - [GET /disable_dkim](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-disable_dkim.md): This function removes the DomainKeys Identified Mail (DKIM) records on the DNS server for one or more domains.

## Enable domain's DKIM records

 - [GET /enable_dkim](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-enable_dkim.md): This function enables DomainKeys Identified Mail (DKIM) records on the DNS server for one or more domains.

## Validate domain's DKIM keys

 - [GET /ensure_dkim_keys_exist](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-ensure_dkim_keys_exist.md): This function confirms the validity of a DomainKeys Identified Mail (DKIM) key for one or more domains.

Note:

* If an existing DKIM key does not meet the server's security requirements, the system replaces the existing DKIM key.
* If no DKIM key exists, the system creates a new key for the domain.

## Return domain's DKIM private key

 - [GET /fetch_dkim_private_keys](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-fetch_dkim_private_keys.md): This function returns a domain's installed DKIM private key in Privacy-Enhanced Mail (PEM) format.

Warning:

  We strongly recommend that you protect your private key. If others obtain your private DKIM key, they could sign emails and impersonate you as a sender.

## Get the server's default DMARC record

 - [GET /get_default_dmarc_record](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-get_default_dmarc_record.md): This function retrieves the server's default DMARC record.

The system uses the default DMARC record when creating new accounts or applying DMARC policies that don't specify a custom record.

## Install existing private key to DKIM record

 - [GET /install_dkim_private_keys](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-install_dkim_private_keys.md): This function installs existing keys for use in a DomainKeys Identified Mail (DKIM) record. This is useful if you do not want the system to generate keys for DKIM records.

Notes:

* This function does not update the local DNS server's records.
* If the local DNS server is authoritative for the domain's DNS records, use the WHM API 1 enable_dkim function to update the local DNS server's DNS records.
* We recommend that you use the WHM API 1 install_dkim_private_keys and enable_dkim functions in a batch WHM API 1 call.

## Install domain SPF record

 - [GET /install_spf_records](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-install_spf_records.md): This function installs a Sender Policy Framework (SPF) record for a domain on the DNS server.

## Remove domains' DMARC records.

 - [GET /remove_dmarc](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-remove_dmarc.md): This function removes the DMARC DNS record from a domain.

Note:

You cannot remove DMARC records from temporary domains.

## Set the server's default DMARC record

 - [GET /set_default_dmarc_record](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-set_default_dmarc_record.md): This function sets the server's default DMARC record.

The system uses the default DMARC record when creating new accounts or applying DMARC policies that don't specify a custom record.

Note:

 You can pass an empty string to remove the custom default and revert to the built-in default record.

## Add manual mail exchanger redirect record

 - [GET /set_manual_mx_redirects](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/exim-set_manual_mx_redirects.md): This function lets you create a manual Exim mail exchanger (MX) redirect for a domain. An MX redirection lets you bypass the domain's MX lookup via the Domain Name System (DNS). This function adds the manual redirect entries to the /etc/manualmx file.

Note:

  To remove a domain's manual MX redirection, use the WHM API 1 unset_manual_mx_redirect function.

## Remove manual mail exchanger redirect record

 - [GET /unset_manual_mx_redirects](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/exim-unset_manual_mx_redirects.md): This function removes a domain's manual Exim mail exchanger (MX) redirect entry. The function also removes the manual MX redirect entry from the /etc/manualmx file.

Note:

  To set a domain's manual MX redirection, use the WHM API 1  set_manual_mx_redirects function.

## Validate DKIM records

 - [GET /validate_current_dkims](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_dkims.md): This function retrieves and checks the DomainKeys Identified Mail (DKIM) records for one or more domains.

## Validate DMARC records

 - [GET /validate_current_dmarcs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_dmarcs.md): This function retrieves and checks the DMARC record for one or more domains.

## Validate domain PTR records

 - [GET /validate_current_ptrs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_ptrs.md): This function validates the pointer records (PTR) for IPv4 and IPv6 addresses an account's domains send mail from. It retrieves the PTR records for each IP address and determines which of the domain's IP addresses send mail. It then validates the PTR records for each IP address and validates the A (IPv4) or AAAA (IPv6) records pointing to each domain. This function also ensures that at least one of that domain's A or AAAA records points back to the IP address.

## Validate domain SPF records

 - [GET /validate_current_spfs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_spfs.md): This function validates a Sender Policy Framework (SPF) record for one or more domains.

