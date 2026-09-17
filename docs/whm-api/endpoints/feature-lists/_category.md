# Feature Lists

Hosting Plans / Feature Lists

## Create feature list

 - [GET /create_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-create_featurelist.md): This function creates or updates a feature list.

Note:

A reseller must possess the
Add/Remove Package feature
to use this function.

## Delete feature list

 - [GET /delete_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-delete_featurelist.md): This function deletes a feature list.

## Return dynamicui file

 - [GET /get_available_applications](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/dynamicui-get_available_applications.md): This function returns the contents of a dynamicui file. For more
information, read our
Guide to WHM dynamicui Files
documentation.

## Return current user's available feature lists info

 - [GET /get_feature_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_feature_metadata.md): This function lists the details of the authenticated user's available feature lists.

## Return all features

 - [GET /get_feature_names](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_feature_names.md): This function lists all available features.

## Return feature list configuration

 - [GET /get_featurelist_data](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelist_data.md): This function lists features in a specific feature list.

## Return current user's available feature lists

 - [GET /get_featurelists](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelists.md): This function lists the authenticated user's available feature lists.

Notes:

* When you call this function with the root account, it returns all feature lists on the server.
* When you call this function with a reseller account, it only returns feature lists that the account owns.

## Return feature lists by package type

 - [GET /get_featurelists_by_package_types](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelists_by_package_types.md): This function lists features grouped by package type.

## Update feature list

 - [GET /update_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-update_featurelist.md): This function creates or updates a feature list.

## (Deprecated) Get available feature lists (deprecated)

 - [GET /get_available_featurelists](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_available_featurelists.md): DEPRECATED: Use get_featurelists instead.

This function lists the authenticated user's available feature lists.

Notes:

* This function is deprecated because it treats a lack of available feature lists as an error for non-admin resellers, which is incorrect behavior.
* When you call this function with the root account, it returns all feature lists on the server.
* When you call this function with a reseller account, it only returns feature lists that the account owns.

## (Deprecated) Read feature list settings (deprecated)

 - [GET /read_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-read_featurelist.md): DEPRECATED: Use get_featurelist_data instead.

This function reads a feature list and returns a hash that maps feature IDs to values indicating whether each feature is enabled.

Notes:

* The function requires the featurelist parameter to specify which feature list to read.
* Access is controlled based on user permissions. Resellers can only access their own feature lists.

