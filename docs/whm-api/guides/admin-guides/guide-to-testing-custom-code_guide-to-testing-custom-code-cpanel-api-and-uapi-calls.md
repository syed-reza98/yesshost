[Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code)

# Guide to Testing Custom Code - cPanel API and UAPI Calls

## Introduction

This guide explains the basics of how to test calls to [cPanel API 2](/cpanel-api-2/) and [cPanel UAPI](/cpanel/introduction/).

This document lists appropriate test steps for most custom code, and helpful information to [troubleshoot common problems](#troubleshoot-common-issues). Make certain that you evaluate the testing requirements of your own code, and allow its functionality to determine the appropriate steps.

Warning:
cPanel Technical Support cannot always assist third-party developers with problems that relate to custom code. For this reason, **always** test your projects **thoroughly** before you attempt to use them on production servers.

## Testing steps

Note:
Because the testing requirements of custom code differ, this document begins with the assumption that you have already discovered problems.

### Check to ensure that you called the correct API function.

Warning:
If your custom code uses a cPanel API 2 function, check to ensure that an equivalent UAPI function does not exist. If one exists, we **strongly** recommend that you update your code to use the cPanel UAPI function. cPanel UAPI is our newest and most frequently-maintained API.

Often, problems in custom code occur due to a typo, or because integrators use the wrong function or assume that it exists in the wrong API (for example, an assumption that a cPanel API 2 function also exists in cPanel UAPI).

Important:
* cPanel users can **only** call cPanel API 2 and cPanel UAPI functions, and in many cases **must** have access to the correct features for those functions.
* WHM users can call cPanel API 2 and cPanel UAPI functions, but **must** specify a cPanel user when calling those functions. The `root` user **cannot** log in to cPanel, and therefore you **cannot** call cPanel functions as the `root` user.
* If the method that you used to call the API includes a port number, make **certain** that you used the correct port number:
  * cPanel API 2 and cPanel UAPI calls use port `2082` (insecure) or `2083` (secure).
  * WHM API 1 calls use port `2086` (insecure) or `2087` (secure).


Check our documentation to ensure that the function you called exists in that API and performs the desired action:

* [Guide to cPanel UAPI](https://api.docs.cpanel.net/cpanel/introduction/)
* [Guide to cPanel API 2](/cpanel-api-2/)


### Check whether your call includes all of the function's required parameters

Many errors occur because the call did not pass all of the required parameters to the function. Check the function's documentation to ensure that you passed values for all of the required input parameters.

### Check the input values that your code passes to the function

If your code passes input values to the function, check these values for any formatting or other errors. For example, in Perl code, you may wish to use the `Data::Dumper` module to print passed values to a log file before you call the function.

### Call the API function independently from your custom code

Use one of the following methods to call the API function independently:

* Use cPanel's [*API Shell*](https://docs.cpanel.net/cpanel/advanced/api-shell-for-cpanel/) interface (*cPanel >> Home >> Advanced >> API Shell*) to call the desired cPanel API 2 or cPanel UAPI function.
* Perform a [browser-based call through the WHM API 1](/whm/use-whm-api-to-call-cpanel-api-and-uapi) to the desired cPanel API 2 or cPanel UAPI function. You **must** URI-encode parameters and values for browser-based calls.


If the function runs successfully and returns the expected output, a problem exists in the way in which your custom code authenticates or calls the function.

* To test whether your code authenticated successfully, read our [Guide to Testing Custom Code - API Authentication](/guides/guide-to-testing-custom-code/guide-to-testing-custom-code-api-authentication) documentation.


If the function does **not** run successfully, and you are certain that you included the correct parameters with valid values, a bug may exist in cPanel & WHM. Submit a ticket to [cPanel Support](https://tickets.cpanel.net/) to further investigate the issue.

## Troubleshoot common issues

### User parameter is invalid or was not supplied

**Problem:**

You receive the following error when you call a cPanel function through the WHM API 1:


```
User parameter is invalid or was not supplied
```

**Solution:**

This error occurs for the following reasons:

* You did not supply a `cpanel_jsonapi_user` or `cpanel_xmlapi_user` value. You **must** supply this value when you call cPanel APIs through the WHM API 1, because the WHM API 1 **requires** a specific cPanel user to run the call.
* The `cpanel_jsonapi_user` or `cpanel_xmlapi_user` value was invalid. Check the way in which your code supplies this value to the call, and whether the account exists on the server.


### Could not find function in module

**Problem:**

You receive the following error when you call a cPanel function:


```
Could ```not find function 'functionname' in module 'Module'
```

**Solution:**

This error occurs when you attempt to call a function that does not exist.

* Check to ensure that the desired module and function exist in the API version that you called. For example, if you attempt to call an API function that only exists in cPanel API 2 through UAPI, you will receive this error.
* Check to ensure that the function name and module name are correct.
  * Module and function names are **case-sensitive**.
  * Often, this error occurs due to a typo in the module or function name.
* If the method that you used to call the API includes a port number, make **certain** that you used the correct port number:
  * cPanel API 2 and cPanel UAPI calls use port `2082` (insecure) or `2083` (secure).
  * WHM API 1 calls use port `2086` (insecure) or `2087` (secure).