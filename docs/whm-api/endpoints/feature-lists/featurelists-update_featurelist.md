# Update feature list

This function creates or updates a feature list.

Endpoint: GET /update_featurelist
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `featurelist` (string, required)
    The feature list's name.
    Example: "TheBlackLagoon"

  - `feature name` (integer)
    Whether to include the feature in the feature list.

Notes:

 This parameter's name is the feature's name. If you do not specify any features, the system will disable all features in the feature list.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.featurelist` (string)
    The feature list's name. A valid string.
    Example: "TheBlackLagoon"

  - `data.invalid_features` (array)
    An array of invalid feature names. This array includes the invalid  feature return.

  - `data.invalid_features.invalid feature` (integer)
    Whether the feature exists in the feature list.

Note:

 The feature's name is the return's name.
- 1  The feature exists in the feature list.
- 0  The feature does not exist in the feature list.
    Enum: 0, 1

  - `data.updated_features` (object)
    hash of features in the feature list. This hash includes the feature  name return.

  - `data.updated_features.autoresponders` (any)

  - `data.updated_features.feature name` (integer)
    Whether the feature exists in the feature list.

Note:

 The feature's name is the return's name.
- 1  The feature exists in the feature list.
- 0  The feature does not exist in the feature list.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "update_featurelist"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


