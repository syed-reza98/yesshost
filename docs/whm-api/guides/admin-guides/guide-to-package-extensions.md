[Development Guides Home](/guides)

# Guide to Package Extensions

## Introduction

Package extensions add custom fields to packages and accounts. These fields can accept customized non-standard variables that you can use in your cPanel & WHM applications or scripts.

Important:
* WHM will only recognize the package extension if you save the default settings file and the template (`.tt2`) file with **identical** filenames.
* For example, if `dog` is the default settings file, then `dog.tt2` must be the template file.
* Extension filenames **cannot** contain spaces.
* WHM users **cannot** add package extensions that are named `0` from WHM's [*Add a Package*](https://docs.cpanel.net/whm/packages/add-a-package/) interface (*WHM >> Home >> Packages >> Add a Package*). Instead, they **must** use the WHM API 1 to add that extension.


## Create an extension

To create a basic package extension, perform the following steps:

1. [Create a default settings file.](/guides/guide-to-package-extensions/guide-to-package-extensions-default-settings-files/) — The default settings file provides the default configuration for an extension's variables.
2. [Create a template file.](/guides/guide-to-package-extensions/guide-to-package-extensions-template-files/) — Package extensions use Template Toolkit (`.tt2`) files to display variable forms in the WHM interface.
3. Save these files to the `/var/cpanel/packages/extensions` directory.
4. Use the variables that the extension creates in your custom code.


## WHM interfaces

WHM users can access package extensions in the following interfaces:

* Add and configure extensions to hosting plans (packages) in WHM's  [*Add a Package*](https://docs.cpanel.net/whm/packages/add-a-package/) interface (*WHM >> Home >> Packages >> Add a Package*).
* Configure a hosting plan's extensions in WHM's [*Edit a Package*](https://docs.cpanel.net/whm/packages/edit-a-package/) interface (*WHM >> Home >> Packages >> Edit a Package*).
* Configure the chosen hosting plan's extensions when you select options manually in WHM's [*Create a New Account*](https://docs.cpanel.net/whm/account-functions/create-a-new-account/) interface (*WHM >> Home >> Account Functions >> Create a New Account*) or WHM's [*Modify an Account*](https://docs.cpanel.net/whm/account-functions/modify-an-account/) interface (*WHM >> Home >> Account Functions >> Modify an Account*).