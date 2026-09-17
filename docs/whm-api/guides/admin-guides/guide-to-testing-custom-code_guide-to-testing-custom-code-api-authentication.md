[Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code)

# Guide to Testing Custom Code - API Authentication

## Introduction

This guide explains the basics of how to test your custom code's authentication with the cPanel & WHM server.

This document lists appropriate test steps for most custom code, and helpful information to [troubleshoot common problems](#troubleshoot-common-issues). Make certain that you evaluate the testing requirements of your own code, and allow its functionality to determine the appropriate steps.

Warning:
cPanel Technical Support cannot always assist third-party developers with problems that relate to custom code. For this reason, **always** test your projects **thoroughly** before you attempt to use them on production servers.

## Testing steps

Note:
Because the testing requirements of custom code differ, this document begins with the assumption that you already discovered problems.

### Check to ensure that you authenticated as the correct user

Many authentication issues occur because the custom code does not authenticate as a user who has the correct permissions.

Important:
* cPanel users can only call cPanel API 2 and UAPI functions, and in many cases **must** have access to the correct features for those functions.
* WHM users can call cPanel API 2 and UAPI functions, but **must** specify a cPanel user when calling those functions.


Check our documentation to ensure that the function you called exists in that API and performs the desired action:

* [Guide to cPanel UAPI](https://api.docs.cpanel.net/cpanel/introduction/)
* [Guide to WHM API 1](https://api.docs.cpanel.net/whm/introduction)
* [Guide to cPanel API 2](/cpanel-api-2/)


### Access Hash Authentication: Check to ensure that you formatted the access hash correctly

Warning:
We deprecated WHM's [Remote Access Key](https://docs.cpanel.net/whm/clusters/remote-access-key/) feature. We strongly recommend that you use API tokens instead.

When you use an [access hash](/guides/guide-to-api-authentication) or an [API Token](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/) to authenticate as the `root` user, you **must** supply the hash as a single, unbroken line. Line breaks will cause authentication errors.

### Single Sign-On: Check to ensure that you retrieved the required cookie

When you use [Single Sign-On](/guides/guide-to-api-authentication) to authenticate, you **must** perform a GET request to the URL that the function returns as the `url` value.

* This request returns a cookie that **must** exist for subsequent API calls to authenticate successfully.
* For examples of how to properly store the cookie in your custom code, read our [Guide to API Authentication](/guides/guide-to-api-authentication) documentation.


## Troubleshoot common issues

### FAILED LOGIN cpaneld: invalid cpanel user root

**Problem:**

You receive the following error:


```
FAILED LOGIN cpaneld: invalid cpanel user root
```

**Solution:**

This error occurs when you attempt to supply the `root` user as a cPanel user in order to call a cPanel API 2 or cPanel UAPI function. The `root` user can only call WHM API 1 functions, not cPanel functions. You may see similar errors if you attempt to authenticate as a reseller-level account, or as an account that does not exist on the server.

To resolve this issue, you **must** authenticate as a valid cPanel account.

### Single Sign-On Request Failed with a Fatal Error: Client

**Problem:**

You receive the following error:


```
Single Sign-On Request Failed with a Fatal Error: Client
```

**Solution:**

This error occurs when custom code that uses the Single Sign-On method to authenticate receives an invalid user (for example, if you attempt to use Single Sign-On to authenticate as a reseller in order to run a cPanel function).

To resolve this issue, you **must** authenticate as a user with the correct permissions.

### Missing Switch Account or Current User menu on reseller login via Single Sign-On method

**Problem:**

A reseller account authenticated successfully through the Single Sign-On method, but the *Current User* menu does not display as expected in the cPanel *Home* interface.

**Solution:**

Due to the way in which [WHM API 1's `create_user_session` function](https://api.docs.cpanel.net/openapi/whm/operation/create_user_session/) creates a user session, this is intended behavior. The reseller authenticated successfully.