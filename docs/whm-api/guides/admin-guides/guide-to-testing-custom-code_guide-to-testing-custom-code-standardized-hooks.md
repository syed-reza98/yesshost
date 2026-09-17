[Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code)

# Guide to Testing Custom Code - Standardized Hooks

## Introduction

This guide explains the basics of how to test [Standardized Hook](/guides/guide-to-standardized-hooks) code.

This document lists appropriate test steps for most custom code, and helpful information to [troubleshoot common problems](#troubleshoot-common-issues). Make certain that you evaluate the testing requirements of your own code, and allow its functionality to determine the appropriate steps.

Warning:
cPanel Technical Support cannot always assist third-party developers with problems that relate to custom code. For this reason, **always** test your projects **thoroughly** before you attempt to use them on production servers.

Important:
We **strongly** recommend that you use the `Cpanel::Logger` module to log messages to the `/usr/local/cpanel/logs/error_log` file. Some of the steps in this document require that your code logs messages.

## Testing steps

### Enable Debug Mode on your development server

When you test Standardized Hooks, we recommend that you set the `debughooks` setting in the `/var/cpanel/cpanel.config` file to `3`.

This setting outputs a **large** amount of data. We only recommend this setting on development servers, and **not** on production servers.

For more information, read our [Guide to Standardized Hooks - Debug Mode](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-debug-mode) and [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/) documentation.

### Register the hook

To register your hook action code, run the [`/usr/local/cpanel/bin/manage_hooks` utility](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility).

Warning:
If you have already registered your hook once, you **must** use the `/usr/local/cpanel/bin/manage_hooks` utility to delete the hook from the list of registered hooks before you attempt to register it again.

If you see a message that resembles the following example, the hooks registered properly:


```
Added hook for Category::Event to hooks registry
```

If you see one of the following messages, the registration process encountered an error. Click on an error message below to for more information.

* [`WARNING: No "describe" pattern found in module.`](#warning-no-describe-pattern-found-in-module)
* [`This script may only be executed by root`](#this-script-may-only-be-executed-by-root)
* [`WARNING: Can't locate Module.pm in @INC`](#warning-cant-locate-modulepm-in-inc)


Note:
Most of the `/usr/local/cpanel/bin/manage_hooks` utility's other errors result from incorrect flags or missing required values. Check to ensure that you ran the utility correctly and included all of the required items, and then run the `manage_hooks` utility again.

### Check for your hook in the server's list of hooks.

Use either of the following methods to view the server's list of registered hooks:

* To view the list of registered hooks in the interface, navigate to WHM's [*Manage Hooks*](https://docs.cpanel.net/whm/development/manage-hooks/) interface (*WHM >> Home >> Development >> Manage Hooks*).
* To view the list of registered hooks on the command line, run the `/usr/local/cpanel/bin/manage_hooks` list command.


If your hook does not appear in the list, it did not register properly. Return to the [Register the hook](#register-the-hook) step and ensure that the `/usr/local/cpanel/bin/manage_hooks` utility returns a message of success.

### Perform an action that triggers the hook.

Use the appropriate interface to trigger your hook. For example, if you created a `Accounts::Create` hook, use WHM's [*Create a New Account*](https://docs.cpanel.net/whm/account-functions/create-a-new-account/) interface (*WHM >> Home >> Account Functions >> Create a New Account*) to create a new account.

Note:
If your hook's event is an API function, you can use the appropriate *API Shell* interface to call that function. However, we recommend that you also perform the related action in the cPanel or WHM interface, to make certain that the action uses the hooked API function.

### Check the log for your hook's messages

Check the `/usr/local/cpanel/log/error_log` file for the messages that your hook action code's `Cpanel::Logger` module objects log.

These messages will resemble the following example:


```
[2015-06-16 11:08:29 -0500] info [hook] ***** Copy my file before upcp *****
[2015-06-16 11:08:29 -0500] info [hook] ***** Replace the temp file *****
[2015-06-16 11:08:29 -0500] info [hook] ***** Delete the temp file *****
```

If the correct `info` messages do not appear in the `/usr/local/cpanel/log/error_log` file, one of the following problems occurred:

* [The hook action code does not log messages when it runs.](#hook-action-code-does-not-log-messages-when-it-runs)
* [An error occurred before the first message logged.](#hook-action-code-does-not-log-messages-when-it-runs)
* [Your hook is a post hook for a UAPI function, and the hooked event failed.](#hook-action-code-does-not-log-messages-when-it-runs)
* [The action that you performed did not trigger the hook.](#hook-action-code-does-not-log-messages-when-it-runs)


### Check for any desired changes from your hook action code.

Check to ensure that your hook action code performed the desired changes. For example, if your hook action code creates a new file, check for that file on the command line.

If you completed testing steps 1 through 5 successfully, but the hook action code does not perform the desired changes, a problem exists within the hook action code itself. Check your code for errors, incorrect logic, and other problems.

### Repeat the hook action for as many scenarios as possible

To increase the chance that you will discover bugs while you test your code, trigger the hook action code under as many different conditions as possible. For example, try to trigger the code in a way that will cause an error, or with different settings enabled or disabled on the server.

## Troubleshoot common issues

### WARNING: No "describe" pattern found in module.

**Problem:**

When you attempt to use the `/usr/local/cpanel/bin/manage_hooks` utility, you see the `WARNING: No "describe" pattern found in module.` error message.

**Solution:**

* If you did not include the `describe()` method in your hook action code, either add it, or run the `/usr/local/cpanel/bin/manage_hooks` utility again with the required additional options.
* If your hook action code **does** include a `describe()` method, your script or module may not compile correctly. For Perl modules, run the `perl -c Module.pm` command, where `Module.pm` represents the full module path, to view compilation errors. Fix any errors, and then attempt to run the `/usr/local/cpanel/bin/manage_hooks` utility again.


### This script may only be executed by root

**Problem:**

When you attempt to use the `/usr/local/cpanel/bin/manage_hooks` utility, you see the `This script may only be executed by root` error message.

**Solution:**

Make certain that you SSH in to the server as the `root` user before you attempt to run the `/usr/local/cpanel/bin/manage_hooks` utility. Other users **cannot** run this utility.

### WARNING: Can't locate Module.pm in @INC

**Problem:**

When you attempt to use the `/usr/local/cpanel/bin/manage_hooks` utility to register hook action code in a Perl module, you see the `WARNING: Can't locate Module.pm in @INC` error message.

**Solution:**

In most cases, this error indicates that you saved the hook action code to an incorrect location. Make **certain** that you saved it to one of the following locations on your development server:

* `/usr/local/cpanel`
* `/usr/local/cpanel/3rdparty/perl/514/lib64/perl5/cpanel_lib/x86_64-linux-64int`
* `/usr/local/cpanel/3rdparty/perl/514/lib64/perl5/cpanel_lib`
* `/usr/local/cpanel/3rdparty/perl/514/lib64/perl5/5.14.4/x86_64-linux-64int`
* `/usr/local/cpanel/3rdparty/perl/514/lib64/perl5/5.14.4`
* `/opt/cpanel/perl5/514/site_lib/x86_64-linux-64int`
* `/opt/cpanel/perl5/514/site_lib`
* `/var/cpanel/perl5/lib`
* `/var/cpanel/perl5/lib`


For more information about cPanel & WHM's Perl environments, read our [Guide to Perl](/guides/guide-to-perl) documentation.

### Hook action code does not log messages when it runs

**Problem:**

No log messages appear in the `/usr/local/cpanel/log/error_log` file after you perform an action to trigger a hook.

**Solution:**

This problem is often due to one of the following problems:

* Your hook action code does not use the `Cpanel::Logger` module to log messages to the /`usr/local/cpanel/log/error_log` file. Check your code to ensure that it logs messages correctly, and then repeat these testing steps. {#nolog}
* An error occurred before the first message logged. Add more logging instances to your code to locate the error. For example, you may wish to add a log message between every action that your code performs. {#errorbeforelog}
* You added a post hook for a [cPanel UAPI](https://api.docs.cpanel.net/cpanel/introduction/) function, and the hooked event failed. The system does not run post hooks when the hooked UAPI function fails. {#postuapi}
* The action that you performed did not trigger the hook. {#didnottrigger} The cPanel and WHM interfaces call a variety of functions from all of our APIs, and may not always use the version of our API that you expect. To resolve this problem, you can use either of the following methods to identify the correct API function:
  * If your browser includes a Developer Tools or Inspect Elements view, use it to monitor the network stack of requests in order to find the specific function that the interface calls.
  * Check the hooked function's documentation for newer and legacy equivalents. Then, create hooks for all of these API functions and attempt to trigger the hook again.
If you use this method, we recommend that you retain the hooks for newer equivalents, to ensure that your code continues to function when we eventually upgrade to use the newer functions.