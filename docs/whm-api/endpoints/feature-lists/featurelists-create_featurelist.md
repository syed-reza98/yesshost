# Create feature list

This function creates or updates a feature list.

Note:

A reseller must possess the
Add/Remove Package feature
to use this function.

Endpoint: GET /create_featurelist
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `featurelist` (string, required)
    The feature list's name.
    Example: "CustomFeatureList"

  - `featurelistname` (integer)
    Whether to add a specific feature in the feature list.

* 1 — Add the feature.
* 0 — Do not add the feature.

Note:

* The parameter's name is a feature's name. For example, the changemx=1
adds the Change Mail Exchanger feature to the feature list.

* You can add or omit multiple features.
    Enum: 1, 0

  - `overwrite` (integer)
    Whether to overwrite an existing feature list.

* 1 — Overwrite.
* 0 — Do not overwrite.
    Enum: 1, 0

## Response 200 fields (application/json):

  - `data` (object)

  - `data.featurelist` (string)
    The feature list's name.
    Example: "Arthur"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_featurelist"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


