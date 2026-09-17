# Run UAPI function through WHM API

This function calls a UAPI function through the WHM API. This function's output will match the UAPI function that it calls.

Endpoint: GET /uapi_cpanel
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `cpanel.function` (string, required)
    The UAPI function to call.

Note:

You must include the UAPI function's required parameters. You can also include its optional parameters.

For example, to call the UAPI get_stats function with its required display parameter and the bandwidthusage and diskusage values:

display=bandwidthusage|diskusage
    Example: "get_stats"

  - `cpanel.module` (string, required)
    The UAPI function's cPanel module.
    Example: "StatsBar"

  - `cpanel.user` (string, required)
    The cPanel username to call with the UAPI function.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.uapi` (object)
    hash of function output. Each hash contains the returns from the called UAPI function. For information about a function's returns, read the function's documentation.
    Example: {"data":[{"_count":"0","_max":"unlimited","_maxed":0,"count":"0","feature":"addondomains","id":"addondomains","is_maxed":0,"item":"Addon Domains","max":"unlimited","maxed_phrase":"You are using your maximum allotment ([numf,_1]) of addon domains.","module":"Park","name":"addondomains","near_limit_phrase":"You are using [numf,_1] of [numf,_2] available addon [numerate,_2,domain,domains].","percent":0,"percent10":0,"percent20":0,"percent5":0,"phrase":"Addon Domains","role":"WebServer","zeroisunlimited":0}],"errors":null,"messages":null,"metadata":{"transformed":1},"status":1,"warnings":null}

  - `data.uapi.data` (any)
    The UAPI response. This value varies based on the UAPI function requested.
    Example: [{"_count":"0","_max":"unlimited","_maxed":0,"count":"0","feature":"addondomains","id":"addondomains","is_maxed":0,"item":"Addon Domains","max":"unlimited","maxed_phrase":"You are using your maximum allotment ([numf,_1]) of addon domains.","module":"Park","name":"addondomains","near_limit_phrase":"You are using [numf,_1] of [numf,_2] available addon [numerate,_2,domain,domains].","percent":0,"percent10":0,"percent20":0,"percent5":0,"phrase":"Addon Domains","role":"WebServer","zeroisunlimited":0}]

  - `data.uapi.errors` (array,null)
    List of errors produced the by the API if any.

  - `data.uapi.messages` (array,null)
    List of messages produced the by the API if any.

  - `data.uapi.metadata` (object)
    Example: {"transformed":1}

  - `data.uapi.metadata.transformed` (integer)
    - 1 - A transform was applied.
- 0 - A transform was not applied.
    Enum: 0, 1

  - `data.uapi.status` (integer)
    - 1 - Success
- 0 - Failed: Check the errors field for more details.
    Enum: 0, 1

  - `data.uapi.warnings` (array,null)
    List of warnings produced the by the API if any.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "uapi_cpanel"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


