[Development Guides Home](/guides)

# Guide to External Authentication

## Introduction

External Authentication modules allow users to log in through OpenID® Connect™-compliant identity providers. OpenID Connect is an identity standard that overlays the OAuth 2.0 standard for Google®, Microsoft®, PayPal®, and other major online companies and organizations. For more information about OpenID Connect, read OpenID's How OpenID Connect Works documentation.

## Basic usage

Warning:
We **strongly** recommend that you develop authentication modules in Perl.

When you develop your authentication module, we recommend the following workflow:

1. Research the supported parameters for your chosen identity provider.
2. Copy the provided sample authentication module.
3. Configure the module with overrides that match the supported parameters for your identity provider.


After you develop and configure your authentication module, we recommend the following workflow to deploy the module:

* Navigate to WHM's *Manage External Authentications* interface (*WHM >> Home >> Security Center >> Manage External Authentications*).
* Enter the appropriate information in the *Client ID* and *Secret* text boxes.
* Test authentication with an account on a non-production development server.


## Icons

When you create your authentication module, your icons must meet the following criteria:

* Icons should be 32 pixels by 32 pixels.
* Image files **must** be in the JPG or PNG formats.
* Images **must** have white backgrounds and cannot be transparent.


## Provider modules

WebPros International, LLC provides the cPanelID, WebPros, and WHMCS External Authentication identity provider modules for cross-platform authentication and logins. Templates for third-party identity providers are also available to allow service providers to develop their own authentication modules.

div
Note:

cPanelID uses the same username and password as the cPanel Tickets system, the Manage2 billing system, and the cPanel Store.