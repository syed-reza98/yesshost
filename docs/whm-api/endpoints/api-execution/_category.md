# API Execution

API Development Tools / API Execution

## Run multiple WHM API 1 functions

 - [GET /batch](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/other-batch.md): This function combines calls for multiple WHM API 1 functions.

## Enable CORS HTTP requests

 - [GET /cors_proxy_get](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/corsproxy-cors_proxy_get.md): This function allows your system to perform Cross-Origin Resource Sharing (CORS) HTTP requests.

## Run cPanel API or UAPI function

 - [GET /cpanel](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/other-cpanel.md): You can call cPanel API and UAPI functions through the WHM API.

This method is useful, for example, when you develop plugins for WHM users, particularly resellers, but need to access cPanel functions. You can make these calls from within either the WHM or cPanel interfaces.

Important:

We recommend that you use the WHM API 1 uapi_cpanel function. The uapi_cpanel function is a more flexible way to call cPanel API functions from WHM. For example, you can use the uapi_cpanel function with the WHM API 1 batch function.

Before calling a cPanel API function via this method, read its documentation. The cPanel API function may require other parameters not listed in this document.

## Run remote WHM API 1 function

 - [GET /execute_remote_whmapi1_with_password](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/cpanel-execute_remote_whmapi1_with_password.md): This function executes WHM API 1 functions on a remote server.

## Run UAPI function through WHM API

 - [GET /uapi_cpanel](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/cpanel-uapi_cpanel.md): This function calls a UAPI function through the WHM API. This function's output will match the UAPI function that it calls.

