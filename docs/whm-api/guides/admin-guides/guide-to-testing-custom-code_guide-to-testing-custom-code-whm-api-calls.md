[Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code)

# Guide to Testing Custom Code - WHM API 1 Calls

## Introduction

This guide explains the basics of how to test calls to [WHM API 1](https://api.docs.cpanel.net/whm/introduction/).

This document lists appropriate test steps for most custom code, and helpful information to [troubleshoot common problems](#troubleshoot-common-issues). Make certain that you evaluate the testing requirements of your own code, and allow its functionality to determine the appropriate steps.

Warning:
cPanel Technical Support cannot always assist third-party developers with problems that relate to custom code. For this reason, **always** test your projects **thoroughly** before you attempt to use them on production servers.

## Testing steps

Note:
Because the testing requirements of custom code differ, this document begins with the assumption that you have already discovered problems.

### Check to ensure that you called the correct API function

Often, problems in custom code occur due to a typo, or because integrators use the wrong function or assume that it exists in the wrong API.

Important:
* cPanel users can **only** call cPanel API 2 and cPanel UAPI functions, and in many cases **must** have access to the correct features for those functions.
* WHM users can call cPanel API 2 and cPanel UAPI functions, but **must** specify a cPanel user when calling those functions. The `root` user **cannot** log in to cPanel, and therefore you **cannot** call cPanel functions as the `root` user.
* If the method that you used to call the API includes a port number, make **certain** that you used the correct port number:
  * cPanel API 2 and cPanel UAPI calls use port `2082` (insecure) or `2083` (secure).
  * WHM API 1 calls use port `2086` (insecure) or `2087` (secure).


To ensure that the function you called exists in that API and performs the desired action, check the [Guide to WHM API 1](/whm/introduction/) documentation.

### Check whether your call includes all of the function's required parameters

Many errors occur because the call did not pass all of the required parameters to the function. Check the function's document to ensure that you passed values for all of the required input parameters.

### Check the input values that your code passes to the function

If your code passes input values to the function, check these values for any formatting or other errors. For example, in Perl code, you may wish to use the `Data::Dumper` module to print passed values to a log file before you call the function.

### Call the API function independently from your custom code

Use one of the following methods to call the API function independently:

* Use WHM's [*API Shell*](https://docs.cpanel.net/whm/development/api-shell-for-whm/) interface (*WHM >> Home >> Development >> API Shell*) to call the desired WHM API 1 function.
* Call the [WHM API 1](/whm/introduction/) function from the command line.
* Perform a [browser-based call](/whm/introduction/) to the desired WHM API 1 function. You **must** URI-encode parameters and values for browser-based calls.


If the function runs successfully and returns the expected output, a problem exists in the way in which your custom code authenticates or calls the function. To test whether your code authenticated successfully, read our [Guide to Testing Custom Code - API Authentication](/guides/guide-to-testing-custom-code/guide-to-testing-custom-code-api-authentication) documentation.

If the function does **not** run successfully, and you are certain that you included the correct parameters with valid values, a bug may exist in cPanel & WHM. Submit a ticket to [cPanel Support](https://tickets.cpanel.net/) to further investigate the issue.

## Troubleshoot common issues

### Unknown app requested for this version of the API

**Problem:**

You receive the following error when you call a WHM function:


```
Unknown app ("functionname") requested for this version (version) of the API.
```

**Solution:**

This error occurs when you attempt to call a function that does not exist.

* Check to ensure that the desired function exists in the API version that you called.
* If the method that you used to call the API includes a port number, make **certain** that you used the correct port number:
  * cPanel API 2 and UAPI calls use port `2082` (insecure) or `2083` (secure).
  * WHM API 1 calls use port `2086` (insecure) or `2087` (secure).
* Check to ensure that the function name is correct.
  * Function names are **case-sensitive**.
  * Often, this error occurs due to a typo in the function name.