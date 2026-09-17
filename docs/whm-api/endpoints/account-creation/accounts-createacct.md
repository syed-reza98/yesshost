# Create cPanel account

This function creates a cPanel account and sets up its domain information.

Note:

* On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
* This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
* Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Endpoint: GET /createacct
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The new account's username. cPanel usernames must adhere to the following criteria:
* The first eight characters of a username must be unique.
* A username cannot begin with a number or the test string.

Note:

* Use the Cpanel::Validate::Username Perl module to validate usernames before you call this function. For more information, read the /usr/local/cpanel/Cpanel/Validate/Username.pod file.
* The system will automatically convert this value to all lowercase letters.
* MySQL's unique character limitations do not exist on servers that use MariaDB.
    Example: "username"

  - `account_enhancements` (any)
    Assign Account Enhancements to the cPanel account. To view your server's Account Enhancements, run WHM API 1's list_account_enhancements function.

  - `bwlimit` (any)
    The account's maximum bandwidth.
* 0, unlimited, or null — The account possesses unlimited bandwidth.
    Example: "unlimited"

  - `cgi` (integer)
    Whether the account has Common Gateway Interface (CGI) access enabled.
* 1 — Enabled.
* 0 — Disabled.

Note:

 When a server profile disables the Web Server role, this parameter defaults to 0. On these servers, you cannot enable CGI access.
    Enum: 1, 0

  - `contactemail` (string)
    The account's contact email address.
    Example: "username@example.com"

  - `cpmod` (string)
    The account's cPanel theme.

Note:

This parameter defaults to the server's default cPanel theme.
    Example: "jupiter"

  - `customip` (string)
    The account's IP address.

Note:

If you do not specify this parameter, the system will determine the account's IP address.
    Example: "192.0.2.0"

  - `digestauth` (integer)
    Whether to enable Digest Authentication for the account. This is
an alias for the enabledigest parameter.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

  - `dkim` (integer)
    Whether DomainKeys Identified Mail (DKIM) is enabled for the account.
* 1 — Enabled.
* 0 — Disabled.

Note:

This parameter defaults to the Enable DKIM on domains for newly created accounts setting's value in WHM's Tweak Settings interface (WHM >> Home >> System Configuration >> Tweak Settings).
    Enum: 0, 1

  - `dmarc` (integer)
    Whether Domain-based Message Authentication, Reporting, and Conformance (DMARC) is enabled for the account.
* 1 — Enabled.
* 0 — Disabled.

Note:

This parameter defaults to the Enable DMARC on domains for newly created accounts setting's value in the _Domains_ section of WHM's Tweak Settings interface (WHM >> Home >> System Configuration >> Tweak Settings).
    Enum: 0, 1

  - `domain` (string)
    The account's main domain.

Note:

* If you do not provide a domain, the system will automatically create a temporary domain for the account.
* For more information about temporary domains, read our Temporary Domains documentation.
    Example: "example.com"

  - `enabledigest` (integer)
    Whether to enable Digest Authentication for the account.

* 1 — Enable.
* 0 — Disable.

Note:

This parameter defaults to 0 (disabled) unless the selected
package enables Digest Authentication. To set this parameter,
the function's caller must have the digest-auth ACL.
Otherwise, the system creates the account with Digest
Authentication disabled, regardless of this parameter's value
or the selected package's default.
    Enum: 0, 1

  - `featurelist` (string)
    The account's assigned feature list.
    Example: "feature_list"

  - `forcedns` (integer)
    Whether to overwrite an existing DNS zone with the new account's information. The system performs this action if a matching DNS zone currently exists.
* 1 — Overwrite.
* 0 — Do not overwrite.
    Enum: 0, 1

  - `gid` (integer)
    The account's group ID.

Note:

* To use this parameter, the function's caller must authenticate as the root user.
* If you do not specify this parameter, the system generates a group ID.
* This must be a unique value that is not currently associated with disk usage and does not exist on the server.
    Example: 123456789

  - `hasshell` (integer)
    Whether the account has shell (SSH) access enabled.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `hasuseregns` (integer)
    A legacy parameter.
* 1 — Enabled.
* 0 — Disabled.

Important:

 Only include this parameter if you set a useregns value of 1.
    Enum: 0, 1

  - `homedir` (string)
    The absolute path to the account's home directory.

Note:

* To use this parameter, the function's caller must authenticate as the root user.
* If you do not specify a value, the system uses the /home/user directory, where user is the account's username.
    Example: "/home/user"

  - `ip` (string)
    Whether the account has a dedicated IP address.
* y — The account possesses a dedicated IP address.
* n — The account does not possess a dedicated IP address.
    Enum: "y", "n"

  - `language` (string)
    The account's default locale.

Note:

* This value is case-sensitive.
* For region-specific locales, use the ISO 639-1 code, an underscore (_), and the ISO 3166-1 code.
    Example: "en"

  - `mail_node_alias` (string)
    A linked cPanel mail server on which to also create the account. This is the server's alias (friendly name) defined when creating the link to a cPanel mail server.

Note:

 This function requires a linked cPanel mail server.
    Example: "mailnode"

  - `mailbox_format` (string)
    A mailbox format to use, if you do not wish to use the system's default mailbox format.

Note:

* Use this parameter when you transfer between servers with different mailbox formats.
 This parameter defaults to the The mailbox storage format for new accounts setting in the Mail section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings*).
    Enum: "mdbox", "maildir"

  - `max_defer_fail_percentage` (any)
    The percentage of failed or deferred email messages that the account can send per hour. If the account exceeds this value its outgoing mail is rate-limited.
* 0 or unlimited — The account can send an unlimited number of failed or deferred messages.
    Example: "unlimited"

  - `max_email_per_hour` (any)
    The maximum number of emails that the account can send in one hour.
* 0 or unlimited — The account can send an unlimited number of emails.
    Example: "unlimited"

  - `max_emailacct_quota` (any)
    The maximum size that the account can define when it creates an email account.
* 0 or unlimited — The account possesses an unlimited quota.

Important:

 * This value applies to each email account, not each cPanel account.
 * If you define this parameter it overwrites the hosting plan's defined value for the account.
 * We recommend that you allow the account's plan to determine this value.
    Example: 1024

  - `max_team_users` (integer)
    The maximum number of Team users for this account.
This parameter should be a number between 0 and the server's default value, inclusively.
This parameter can not be a number greater than the server's default value.
    Example: 7

  - `maxaddon` (any)
    The account's maximum number of addon domains.
* unlimited, or null — The account possesses unlimited addon domains.
    Example: "unlimited"

  - `maxftp` (any)
    The account's maximum number of FTP accounts.
* 0, unlimited, or null — The account possesses unlimited FTP accounts.
    Example: "unlimited"

  - `maxlst` (any)
    The account's maximum number of mailing lists.
* 0, unlimited, or null — The account possesses unlimited mailing lists.
    Example: "unlimited"

  - `maxpark` (any)
    The account's maximum number of parked domains (aliases).
* unlimited or null — The account possesses unlimited parked domains.
    Example: "unlimited"

  - `maxpop` (any)
    The account's maximum number of email accounts.
* 0, unlimited, or null — The account possesses unlimited email accounts.
    Example: "unlimited"

  - `maxsql` (any)
    The account's maximum number of each available type of SQL database.
For example, this parameter has a 5 value and the system administrator allows
MySQL® and PostgreSQL® databases. Users can create up to five MySQL databases
and up to five PostgreSQL databases.
* 0, unlimited, or null — The account possesses unlimited databases.
    Example: "unlimited"

  - `maxsub` (any)
    The account's maximum number of subdomains.
unlimited or null — The account possesses unlimited subdomains.
    Example: "unlimited"

  - `mxcheck` (string)
    The account's main mail exchanger's type.
* local - Local Mail Exchanger.
* secondary - Backup Mail Exchanger.
* remote - Remote Mail Exchanger.
* auto - Automatically Detect Configuration.

Note:

The function does not configure the primary MX entry to point to the appropriate exchanger. You must perform this function separately.
    Enum: "local", "secondary", "remote", "auto"

  - `owner` (string)
    The name of the account owner.
* root
*  A valid reseller account username on the server.
    Example: "root"

  - `ownerself` (integer)
    Set the account to own itself. Ignored if owner is set.
* 1 — Set account to own itself.
* 0 — Do nothing.
    Enum: 0, 1

  - `pass` (string)
    The account's password.

Note:

 * You can use either the pass or the password parameter, but not both.
 * If you don't specify this value, the system generates a secure password.
    Example: "123456luggage"

  - `password` (string)
    The account's password.

Note:

 * You can use either the pass or the password parameter, but not both.
 * If you don't specify this value, the system generates a secure password.
    Example: "123456luggage"

  - `pkgname` (string)
    A new plan name. Use this parameter to save unique account settings as a new plan.

Note:

 * If you do not use this parameter but specify 1 for the savepkg value, the system will generate a plan name.
 * If you do not use this parameter and specify 0 or do not use the savepkg parameter, the function does not save a new plan.
 * If you do not use this parameter, the function will not save the new account settings.
    Example: "my_new_package"

  - `plan` (string)
    The account's hosting plan (package).

Important:

 If you provide this value, do not use the optional quota-related parameters below. Instead, we recommend that you allow the account's plan to determine these values.
    Example: "default"

  - `quota` (integer)
    The account's disk space quota.
* 0 — The account's disk space is unlimited.
    Example: 500

  - `reseller` (integer)
    Whether to grant reseller privileges to the account.
* 1 — Grant reseller privileges.
* 0 — Do not grant reseller privileges.
    Enum: 0, 1

  - `reseller_without_domain` (integer)
    Create the user as a reseller without an associated domain.
* 1 - Create the account as a reseller without an associated domain.
* 0 - Do not create the account as a reseller without an associated domain.

Warning:

If you create a reseller without a domain, certain parts of WHM will not function
for that user. These limitations exist both when logged in as that user and
when you attempt to perform actions which affect that user.
    Enum: 0, 1

  - `savepkg` (integer)
    Whether to save the account's settings as a new plan.
* 1 — Save.
* 0 — Do not save.
    Enum: 0, 1

  - `showpass` (string)
    Whether to display the account password in the output.
* y — Display the account password in the output.
* n — Do NOT display the account password in the output.
    Enum: "y", "n"

  - `spamassassin` (integer)
    Whether the account has Apache SpamAssassin™ enabled.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `spambox` (string)
    Whether to enable spam box filtering for the account.
* y - Enable spam box filtering.
* n - Disable spam box filtering.
Note:

 You must enable Apache SpamAssassin™ to use the Spam Box feature.
    Enum: "y", "n"

  - `spf` (integer)
    Whether Sender Policy Framework (SPF) is enabled for the account.
* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the Enable SPF on domains for newly created accounts
setting's value in WHM's Tweak Settings interface (WHM >> Home >> System Configuration >> Tweak Settings).
    Enum: 0, 1

  - `uid` (integer)
    The account's user ID.

Note:

 * To use this parameter, the function's caller must authenticate as the root user.
 * If you do not specify this parameter, the system generates a user ID.
 * This must be a unique value that is not currently associated with disk usage and does not exist on the server.
    Example: 123456789

  - `useregns` (integer)
    Whether to use registered nameservers for the domain.
* 1 - Use registered nameservers.
* 0 - Use the server's default nameservers.

Important:

 If you set this parameter to 1, you must also include the hasuseregns parameter with a value of 1.
    Enum: 0, 1

  - `frontpage` (integer,null)
    Whether the account has Microsoft® FrontPage Extensions enabled.

Note:

 cPanel & WHM ignores all FrontPage settings and parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ip` (string)
    The account's primary nameserver's IP address.
    Example: "192.0.2.0"

  - `data.nameserver` (string)
    The account's primary nameserver.
    Example: "ns1.example.com"

  - `data.nameserver2` (string)
    The account's secondary nameserver.
    Example: "ns2.example.com"

  - `data.nameserver3` (string)
    The account's tertiary nameserver.
    Example: "ns3.example.com"

  - `data.nameserver4` (string)
    The account's quaternary nameserver.
    Example: "ns4.example.com"

  - `data.nameservera` (string,null)
    The account's primary nameservers' IP address.
    Example: "192.0.2.1"

  - `data.nameservera2` (string,null)
    The account's secondary nameservers' IP address.
    Example: "192.0.2.2"

  - `data.nameservera3` (string,null)
    The account's tertiary nameservers' IP address.
    Example: "192.0.2.3"

  - `data.nameservera4` (string,null)
    The account's quaternary nameservers' IP address.
    Example: "192.0.2.4"

  - `data.nameserverentry` (string,null)
    The primary nameserver's DNS name.
    Example: "dnsentry1"

  - `data.nameserverentry2` (string,null)
    The secondary nameserver's DNS name.
    Example: "dnsentry2"

  - `data.nameserverentry3` (string,null)
    The tertiary nameserver's DNS name.
    Example: "dnsentry3"

  - `data.nameserverentry4` (string,null)
    The quaternary nameserver's DNS name.
    Example: "dnsentry4"

  - `data.package` (string)
    The account's plan (package) name.
    Example: "my_new_package"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "createacct"

  - `metadata.output` (object)
    An object that contains the function's raw output information.

  - `metadata.output.raw` (string)
    The raw output from the account creation operation. This return may contain HTML code.
    Example: "Checking input data...Forced Dns is enabled.\\nValidating Username......Done\\nValidating IP......Done\\nValidating Contact Email......Done\\n...Done\\nValidating system setup......Done\\nChecking for database conflicts......Done\\nWWWAcct 12.6.0 (c) 2024 WebPros International, LLC...\\n\\n+===================================+\\n| New Account Info |\\n+===================================+\\n| Domain: example.com\\n| Ip: 192.0.2.0 (n)\\n| HasCgi: y\\n| UserName: username\\n| PassWord: 123456luggage\\n| CpanelMod: jupiter\\n| HomeRoot: /home\\n| Quota: 1 GB\\n| NameServer1: ns1.example.com\\n| NameServer2: ns2.example.com\\n| NameServer3:\\n| NameServer4:\\n| Contact Email: username@example.com\\n| Package: my_new_package\\n| Feature List: feature_list\\n| Language: en\\n+===================================+\\n...Done\\nCustom Account Data Provided: no\\nRunning pre creation script (/usr/local/cpanel/scripts/prewwwacct)......Done\\nAdding User...Removing Shell Access (n)\\nSuccess...Done\\nAdding Entries to userdata......Done\\nSetting up Mail & Local Domains...localdomains...valiases ...vdomainaliases ...vfilters ......Done\\nConfiguring DNS...Zone example.com has been successfully added\\n...Done\\nVerifying MX Records and Setting up Databases...Reconfiguring Mail Routing:\\nLOCAL MAIL EXCHANGER: This server will serve as a primary mail exchanger for example.com's mail.:\\n This configuration has been automatically detected based on your mx entries.\\n\\n...Done\\nSetting up Service Subdomains......Done\\nUpdating Authentication Databases......Done\\nSetting passwords......Done\\nUpdating the userdata cache......Done\\n\\nCreating bandwidth datastore......Done\\nUpdating the dedicated IP address usage cache......Done\\nGenerating and installing DKIM keys......Done\\nEnabling Apache SpamAssassin......Done\\nEnabling Apache SpamAssassin Spam Box......Done\\nSending Account Information......Done\\nRunning post creation scripts (/usr/local/cpanel/scripts/legacypostwwwacct, /usr/local/cpanel/scripts/postwwwacct, /usr/local/cpanel/scripts/postwwwacctuser)......Done\\nwwwacct creation finished\\nAccount Creation Complete!!!...Account Creation Ok...Done\\n"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Account Creation Ok"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


