# Security

The Security module for WHM API 1.

## Return Security Advisor results

 - [GET /fetch_security_advice](https://api.docs.cpanel.net/specifications/whm.openapi/security/security-fetch_security_advice.md): This function returns the cPanel Security Advisor's security scan data. It advises you of how to resolve any security issues that it finds.

Note:

  For more information, read the cPanel Security Advisor documentation at the WebPros International, LLC GitHub® repository.

## Return minimum password strength

 - [GET /getminimumpasswordstrengths](https://api.docs.cpanel.net/specifications/whm.openapi/security/security-getminimumpasswordstrengths.md): This function retrieves the minimum password strength for cPanel & WHM accounts.

## Update minimum password strength

 - [GET /setminimumpasswordstrengths](https://api.docs.cpanel.net/specifications/whm.openapi/security/security-setminimumpasswordstrengths.md): This function sets the minimum password strength for cPanel & WHM
accounts.

Note

If you do not specify a value for a parameter, the system will retain the existing setting.

