[Development Guides Home](/guides) >> [Guide to Package Extensions](/guides/guide-to-package-extensions)

# Guide to Package Extensions - Default Settings Files

## Introduction

The default settings file provides the default configuration for an extension's variables.

Important:
* You **must** store the default settings file in the `/var/cpanel/packages/extensions` directory.
* With a new installation of cPanel & WHM, the `/var/cpanel/packages/extensions` directory does not exist until you create a package.
* The default settings file's name **must** match the template's filename **exactly**.


## Default settings file

The default settings file is a plain text file **without** a file extension. This file contains key and value pairs in the `key=value` format, with one setting pair per line.

For example, the `dog` extension could use the following default settings file:


```
dog_tail_length=normal
dog_species=Dalmatian
dog_spots=y
_NAME=Dog Settings
```

When you add a package, the system uses the default extension values in the default settings file. The system stores the values from subsequent edits in the package's file in the `/var/cpanel/packages/` directory or in the account's `userdata` file.

Note:
All of the form variables that the template file uses must exist in the default settings file. WHM will disregard any variables that do not exist in the default settings file.

## Extension and variable names

In the dog extension default settings file above, `_NAME` is the extension description that users will see when they view this extension's configuration in the WHM interface.

* This variable only exists in the default file.
* The system does **not** append this variable to the package file when a user saves the extension's configuration.


Ensure that all of the other variables in the default settings file begin with a string that relates to your extension. This convention avoids collisions with other variable names for other extensions, or with standard cPanel & WHM variables in the package and account files.

For example, use `dog_species` as the name of the `species` variable in the dog extension.

Warning:
* cPanel & WHM does **not** have built-in protections against package variable name collisions.
* Package extension names and variable names are case-sensitive.