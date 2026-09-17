# API Token Management

API Development Tools / API Token Management

## Create WHM API token

 - [GET /api_token_create](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_create.md): This function creates an API token. You can use API tokens instead of a password
or access hash key to execute WHM API 1 functions over HTTPS. For more information
about API tokens, read our
Manage API Tokens in WHM
documentation.

Important:

You must call this function over an SSL connection.

## Look up API token details

 - [GET /api_token_get_details](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_get_details.md): This function looks up an API token’s details based on the token itself.

## Return WHM API tokens

 - [GET /api_token_list](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_list.md): This function lists a WHM account's API tokens.

## Disable WHM API token

 - [GET /api_token_revoke](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_revoke.md): This function revokes an API token from the WHM account.

## Update WHM API token's settings

 - [GET /api_token_update](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_update.md): This function updates an API token's settings.

## Create API token for Dashboard

 - [GET /wp_dashboard_create_api_token](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/wpdashboard-wp_dashboard_create_api_token.md): This function creates a WHM API token for WebPros Dashboard.

