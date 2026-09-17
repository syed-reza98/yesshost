# Return cPanel account access hash (deprecated)

This function regenerates or retrieves a user's access hash. For more information about access hashes, read our Remote Access Key documentation.

Warning:

We deprecated this function. We strongly suggest that you use the WHM API 1 api_token_create function.

Endpoint: GET /accesshash
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `generate` (integer, required)
    Whether to regenerate the access hash.
* 1 — Regenerate the access hash.
* 0 — Do not regenerate the access hash.
    Enum: 0, 1

  - `user` (string, required)
    The user's name.
    Example: "root"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.accesshash` (string)
    The user's access hash.
    Example: "cb523f89e9a31123fde7c6f93b580ac05bf00a2804d4febe6667ab9917a14baa1c4914da209bf55c862999ea51983a117a4d2f238140200b1e5b270b94b2c52492747e5ebfdeddb8abf4e1b0c428c6c68b701b48e13dbe39da49450e7a8e5422e18ab3b6290b5b6556bd82ee21d9c1103e7a51d1e94f2ac0c4dcc6a10954b8634c6db16a541660c3c89e10254f05583f4167adfcff7781090ea930647b46e5b981f3e16c7723ca4e12dc4b54a778dc66a28df73632a0d3a8e01e207b9fd6b555b72936a903af014f30061d712d736176a87fb5333c5b90cf0bb4f3c6735f2b45929ac79fb1184045a5f4c20bfcc553f5ab760eec077c0d6096e54d02724201281e441e7b0f642370a63f61c68766e224c8510bc32b0316780660c34352cbfeeccfee9d4f02e20ba7b664d3e84e9419ca386c41df07613f8af252aba8626a8b54796bbe616f41af1e6f11a3d0327f7608d23666fca64e6ebe899f7479a5fb0aea008b1e7a41890c9c58037682450febf91b7aa1c080d31d834b0ae466f8533df838ab271b26a7fb7de96402ad4a818d6b786af92c38414d2ef6c88deb7c685a1e60c3cbcfbf20cf6d2a00dd50d2be9bc1824d91284ec6842dd7db42564dfc3ecb75c1a9bc775c45c5f08784b9e2885c2d"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "accesshash"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


