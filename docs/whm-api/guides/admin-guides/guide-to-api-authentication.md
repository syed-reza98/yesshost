[Development Guides Home](/guides)

# Guide to API Authentication

## Introduction

cPanel & WHM supports several API authentication methods. Whenever code calls an API function, it **must** first authenticate to the server. The authentication process accesses the server in order to run code as a specific cPanel or WHM user with a specific set of permissions.

Important:
* API calls that use a method that includes a URL **must** use the correct port:
* `2082` — Unsecure calls to cPanel's APIs.
* `2083` — Secure calls to cPanel's APIs.
* `2086` — Unsecure calls to WHM's APIs, or to cPanel's APIs via the WHM API 1.
* `2087` — Secure calls to WHM's APIs, or to cPanel's APIs via the WHM API 1.
* `2095` — Unsecure calls to cPanel's APIs via a Webmail session.
* `2096` — Secure calls to cPanel's APIs via a Webmail session.
* Otherwise-correct calls will return `Permission denied` or `Function not found` errors if they use an incorrect port number.
* This guide **only** includes cPanel & WHM authentication methods. For Manage2 authentication information, read our [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/) documentation.


## Authentication methods

You can use the following methods to authenticate with cPanel & WHM in your custom code:

* [Access Hash Authentication](/guides/guide-to-api-authentication/guide-to-api-authentication-access-hash-authentication) — Access hashes allow you to authenticate with the server as the root user.
* [API Tokens](/guides/guide-to-api-authentication/guide-to-api-authentication-api-tokens-in-whm) — API tokens allow you to call WHM API 1 functions outside of a WHM session.
* [Browser-Based Authentication](/guides/guide-to-api-authentication/guide-to-api-authentication-browser-based-authentication) — Browser-based authentication accesses cPanel & WHM's functionality via the browser.
* [Secure Remote Logins](/guides/guide-to-api-authentication/guide-to-api-authentication-secure-remote-logins) — cPanel & WHM supports secure remote logins via the `Cpanel::LogMeIn` module.
* [Single Sign On](/guides/guide-to-api-authentication/guide-to-api-authentication-single-sign-on/) — The Single Sign On feature generates a temporary session to authenticate with cPanel & WHM.
* [Two-Factor Authentication](/guides/guide-to-api-authentication/guide-to-api-authentication-two-factor-authentication) — Two-factor authentication (2FA) requires an additional security code to log in to cPanel & WHM. API calls that require username and password authentication do **not** require 2FA by default, though you can change this setting in WHM's *Configure Security Policies* interface (*WHM >> Home >> Security Center >> Configure Security Policies*).
* [Username and Password Authentication](/guides/guide-to-api-authentication/guide-to-api-authentication-username-and-password-authentication) — Scripts can authenticate via a username and password in an HTTP header.


Important:
We recommend that you use secure remote logins instead of username and password authentication when possible. For more information, read our [Secure Remote Logins](/guides/guide-to-api-authentication/guide-to-api-authentication-secure-remote-logins/) documentation.