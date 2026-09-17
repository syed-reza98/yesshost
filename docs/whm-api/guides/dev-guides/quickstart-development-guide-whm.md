[Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-development-guide)

# Quickstart Development Guide - WHM

## Introduction

Custom WHM applications automate and customize server administration tasks. Third-party developers can create WHM applications for distribution to their customers in the hosting community. Server administrators can create private applications to streamline daily activities.

## Get started developing for WHM

### Get a development license

If you do not already have access to a cPanel & WHM server, [get a development license](https://cpanel.com/developer-license-app/) and install cPanel & WHM.

Many WHM developers will require `root`-level access to the server in order to call the desired functions or troubleshoot their custom code.

### Get to know the WHM API 1

Almost all WHM development projects require the use WHM API 1. The WHM API 1 contains functions that access all of the functionality that users can find in the WHM interface.

Warning:
Do **not** attempt to use cPanel or WHM interface URLs to perform actions in custom code. You **must** call the appropriate API functions in order to perform the actions of cPanel & WHM's interfaces.

For example, do **not** pass values to `.html` pages, as in the following example:


```
https://example.com:2083/cpsess###########/frontend/jupiter/email_accounts/index.html/create#email=test&domain=example.com
```

While this **unsupported** method sometimes worked in previous versions of cPanel & WHM, we **strongly** discourage its use and do **not** guarantee that it will work in the future. Instead, the correct method to perform this action is to call the appropriate API function.

* The current WHM API 1 version is [WHM API 1](/whm/introduction/).
* You can call the WHM API 1 through your web browser, the command line, custom scripts or modules, or WHM's [*API Shell*](https://docs.cpanel.net/whm/development/api-shell-for-whm/) interface (*WHM >> Home >> Development >> API Shell*).
* XML output is **not** compliant with XML standards, and it may result in validation errors. We **strongly** recommend that you use JSON.


Warning:
We have **deprecated** and **removed** XML output.

* Calls for XML API output will return a deprecation warning. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) documentation.


For more information, read our [Guide to WHM API 1](/whm/introduction/) documentation.

### Try out the Standardized Hooks system

Many WHM development projects use the Standardized Hooks system. You can create Standardized Hooks for many of WHM's functions, and cause them to trigger your own custom code in order to customize WHM's functionality.

* You can write Standardized Hooks as custom Perl modules, or as Perl or PHP scripts.
* Standardized Hooks can trigger before or after API functions or interface actions.


For more information, read our [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) documentation.

### Write your application's backend code

After you are familiar with the WHM API 1 and Standardized Hooks, you can write your application.

* Most developers write cPanel & WHM applications in PHP or Perl.
* If you develop in Perl, read our [Guide to Perl in cPanel & WHM](/guides/guide-to-perl) documentation.
* Applications that integrate with WHM **must** authenticate as a WHM user. For more information, read our [Guide to API Authentication](/guides/guide-to-api-authentication) documentation.


### Add interfaces to WHM

Developers can add interfaces to WHM and add the interfaces' icons to WHM's *Plugins* section (*WHM >> Home >> Plugins*). We recommend that you write WHM interfaces as [Template Toolkit](/guides/guide-to-template-toolkit) templates.

* You can use the [Package Extensions](/guides/guide-to-package-extensions) system to add custom application settings and variables to WHM's account and package interfaces.
* cPanel & WHM's [locale system](/guides/guide-to-locales) can localize interfaces as well as command line output, which allows you to make your application usable globally.


For more information, read our [Guide to WHM Plugins](/guides/guide-to-whm-plugins) documentation.

### Register your application

WHM plugins require registration if they include additions to the WHM interface. Many scripts and some applications, however, do not need to register if they run only in the background or from the command line.

When your application is ready, if you need to register it in the WHM interface, use the [AppConfig](/guides/guide-to-whm-plugins/guide-to-whm-plugins-the-appconfig-system) system.

### Test your code

Warning:
cPanel Technical Support cannot always assist third-party developers with problems that relate to custom code. For this reason, **always** test your projects **thoroughly** before you attempt to use them on production servers.

You can avoid many common issues when you test your code regularly throughout the development process. Make certain that you evaluate the testing requirements of your own code, and allow its functionality to determine the appropriate steps.

For suggested testing steps, read our [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code) documentation.

### Need more help?

Several options are available if you need help with a development project:

* Ask your question on our [cPanel Developers Forum](https://forums.cpanel.net/cpanel-developers.html).
* Reach out to us in [Discord](https://go.cpanel.net/discord).


If you think that you found a bug in an API or another cPanel development tool, contact [cPanel Technical Support](https://tickets.cpanel.net/) with your issue.