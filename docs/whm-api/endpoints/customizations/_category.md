# Customizations

The Customizations module for WHM API 1.

## Delete customization data

 - [GET /delete_customizations](https://api.docs.cpanel.net/specifications/whm.openapi/customizations/customizations-delete_customizations.md): This function deletes customization data.

Customization data includes brand logos and colors.

Server owners and resellers can supply customization data to whitelabel portions
of the product or customize the cPanel experience for their users.

This function is used to delete customization data for the Jupiter theme only.

If you provide the optional path parameter, the API will removed only the specific element specified in the . separated path.
See the parameter for more details.

## Retrieve customization data

 - [GET /retrieve_customizations](https://api.docs.cpanel.net/specifications/whm.openapi/customizations/customizations-retrieve_customizations.md): This function retrieves customization data.

Customization data includes brand logos and colors.

This function is used to retrieve customization data for the Jupiter theme only.

## Update customization data

 - [POST /update_customizations](https://api.docs.cpanel.net/specifications/whm.openapi/customizations/customizations-update_customizations.md): This function supplies branding data for a specific application and theme.

Customization data includes brand logos and colors.

This function is used to save customization data for the Jupiter theme only.

