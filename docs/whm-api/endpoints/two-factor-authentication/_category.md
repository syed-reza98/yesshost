# Two-Factor Authentication

Authentication / Two-Factor Authentication

## Disable 2FA

 - [GET /twofactorauth_disable_policy](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_disable_policy.md): This function disables the Two-Factor Authentication (2FA) security policy on the server.

## Enable 2FA

 - [GET /twofactorauth_enable_policy](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_enable_policy.md): This function enables the Two-Factor Authentication (2FA) security policy on the server.

## Create a one-time authentication secret and code

 - [GET /twofactorauth_generate_tfa_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_generate_tfa_config.md): This function generates a random secret and a one-time password authentication (OTP auth) URL for the user. Use the secret that this function returns and a valid verification token with WHM API 1's twofactorauth_set_tfa_config function to configure Two-Factor Authentication (2FA) on an account.

## Return configured issuer for current user

 - [GET /twofactorauth_get_issuer](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_issuer.md): This function returns the currently configured issuer. The issuer appears within the authentication app.

## Return cPanel account 2FA data

 - [GET /twofactorauth_get_tfa_config_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_tfa_config_for_user.md): This function returns the Two-Factor Authentication (2FA) configuration for a cPanel account, its email accounts, and its team user accounts.

## Return cPanel accounts with 2FA enabled

 - [GET /twofactorauth_get_user_configs](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_user_configs.md): This function returns a list of user-controlled accounts and whether the accounts have Two-Factor Authentication (2FA) enabled.

## Return 2FA policy status

 - [GET /twofactorauth_policy_status](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_policy_status.md): This function displays the Two-Factor Authentication (2FA) policy status on the server.

## Remove 2FA settings

 - [GET /twofactorauth_remove_user_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_remove_user_config.md): This function removes the Two-Factor Authentication (2FA) settings for one or more specified user accounts.

Note:

If you remove the 2FA settings for an account, the user must perform the setup procedure again to re-configure 2FA on the account.

This function reports an account in the data.users_modified array
even if that account had no 2FA settings configured to begin with.
Check whether 2FA was actually configured beforehand (for example,
with the twofactorauth_get_tfa_config_for_user function) if your
integration needs to distinguish an actual removal from a no-op.

## Update 2FA issuer value

 - [GET /twofactorauth_set_issuer](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_issuer.md): This function sets the issuer value that the system uses to generate the secret and otpurls values for Two-Factor Authentication on your accounts.

## Update 2FA authentication secret and code

 - [GET /twofactorauth_set_tfa_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_tfa_config.md): This function sets the secret and the authentication code for Two-Factor Authentication (2FA) for the root or reseller account. You can generate a random secret and an OTP authentication URL with WHM API 1's twofactorauth_generate_tfa_configorauth_generate_tfa_config function.

## Update cPanel account's 2FA data

 - [POST /twofactorauth_set_tfa_config_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_tfa_config_for_user.md): This function updates the Two-Factor Authentication (2FA) configuration for the given cPanel user.

