[Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-authentication)

# Guide to API Authentication - Browser-Based Authentication

## Introduction

Browser-based authentication accesses cPanel & WHM's functionality via the browser.

Important:
* API calls that use a method that includes a URL **must** use the correct port:
* `2082` — Unsecure calls to cPanel's APIs.
* `2083` — Secure calls to cPanel's APIs.
* `2086` — Unsecure calls to WHM's APIs, or to cPanel's APIs via the WHM API 1.
* `2087` — Secure calls to WHM's APIs, or to cPanel's APIs via the WHM API 1.
* `2095` — Unsecure calls to cPanel's APIs via a Webmail session.
* `2096` — Secure calls to cPanel's APIs via a Webmail session.
* Otherwise-correct calls will return `Permission denied` or `Function not found` errors if they use an incorrect port number.
* This document **only** includes cPanel & WHM authentication methods. For Manage2 authentication information, read our [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/) documentation.


## Browser-based authentication

To call API functions through a web browser, you **must** first log in to WHM or cPanel.

* The API function determines which WebPros International, LLC product to log in to.
* Some functions require specific feature lists or user permissions.


For help logging in to WHM or cPanel, read our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.

### Examples

For more information and examples of browser-based calls, read the documentation for the function's API:

* [Guide to cPanel API 2](/cpanel-api-2/) — cPanel API 2 accesses cPanel account information and modifies settings.
* [Guide to UAPI](/cpanel/introduction/) — UAPI accesses the cPanel interface's features.
* [Guide to WHM API 1](/whm/introduction/) — WHM API 1 accesses the WHM interface's features.


Note:
You can call cPanel API2 and UAPI functions through the WHM API 1. This is useful, for example, when you develop plugins for WHM users, particularly resellers, but need to access cPanel functions. For more information, read our [Use WHM API 1 to Call cPanel API and UAPI](/whm/use-whm-api-to-call-cpanel-api-and-uapi) documentation.