# Account Permissions

Resellers / Account Permissions

## Return all privilege lists and settings

 - [GET /listacls](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/acls-listacls.md): This function lists the server's
Access Control Lists (ACLs)
and each list's privileges.

## Create or update privilege list and settings

 - [GET /saveacllist](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/acls-saveacllist.md): This function creates or modifies an Access Control List (ACL).

Note:

  For each acl-* parameter, a value of 1 adds that privilege to the ACL list and a value of 0 removes that privilege from the ACL list.

Warning:

  We strongly recommend that WHM users create and edit ACLs and ACL privileges through WHM's Edit Reseller Nameservers and Privileges interface ( WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges ).

## Create or update reseller privilege settings

 - [GET /setacls](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/resellers-setacls.md): This function creates or modifies an Access Control List (ACL).

Note:

  For each acl-* parameter, any value adds that privilege to the ACL list and no value removes that privilege from the ACL list.

Warning:

  We strongly recommend that WHM users create and edit ACLs and ACL privileges through WHM's Edit Reseller Nameservers and Privileges interface ( WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges ).

