[Development Guides Home](/guides)

# Guide to API Privilege Escalation

Warning:
Poor implementations of this system may cause `root`-privilege vulnerabilities and compromised servers. Read the [Security requirements](#security-requirements) section of this document **before** you use this system.

## Call a function

To run a function with escalated privileges, call the function through the [`Cpanel::AdminBin::Call::call()` method](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-call-your-application/#the-call-method) or use the [`send_cpwrapd_request`](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-call-your-application/#the-wrap-method) pluggable wrapper. The system manages privilege escalation, and ensures that the user can only run the permitted code.

## Create a module

To simplify construction of modules, WebPros International, LLC recommends that you write admin modules in Perl with the [Admin module method](#the-admin-module-method). For other programming languages, use the [Wrap method](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-call-your-application/#the-wrap-method).

### The Admin module method

We recommend that you develop Perl admin modules as subclasses of the `Cpanel::Admin::Base` base class. For more information, read our [Admin module method](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-the-admin-module-method) documentation.

### The Wrap method

We recommend that you **only** use this method for non-Perl programming languages.

#### Basic usage

To use privilege escalation in your custom code, perform the following steps:

1. Create the following files:
  * A configuration file. Download a simple example file: [Simple.tar.gz](/assets/simple.tar.7f0b0392548658c5b885604761b75f801a0d4e9f7d9ec5717dbae17ec5b0a95a.53c9ef84.gz).
  * An application file. Download an an advanced example file: [Advanced.tar.gz](/assets/advanced.tar.63801e8687063be4f76edf86765c53da171a337e27206c7b335d1eb08d74abfa.53c9ef84.gz).
    * **Never** use any of these example files on a production system.
2. Store these files in a new namespace in the `/usr/local/cpanel/bin/admin/` directory.
  * The namespace and the directory name **must** be identical.
  * Do **not** create your `AdminBin` application in the `Cpanel` namespace.
3. Use the `Cpanel::AdminBin::send_cpwrapd_request` method to call the application as the authenticated user.


## Security requirements

Whenever you use this system, **do not** manipulate files or directories that a user owns as the `root` user or execute **any** actions on unvalidated input.

Warning:
You **must** adhere to the following security practices:

* **Only** use this system to execute code that must run as the `root` user.
* **Thoroughly** validate any input that passes through this system.
* **Sanitize** the admin script's environment.


To sanitize the `admin` script's environment, set environment variables to limit the paths from which the script loads libraries.

* This action sanitizes the `@INC` array and ensures that users **cannot** load arbitrary libraries.
* The following example adds the `/usr/local/cpanel/` directory to the environment, and then removes entries that do not match standard Perl library paths:

```perl
BEGIN {
  unshift @INC, '/usr/local/cpanel';
  @INC = grep( !/(^\.|\.\.|\/\.+)/, @INC );
  }
```