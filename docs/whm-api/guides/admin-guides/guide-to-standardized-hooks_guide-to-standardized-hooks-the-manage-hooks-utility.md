[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - The manage_hooks Utility

Use the `/usr/local/cpanel/bin/manage_hooks` Command Line Interface (CLI) utility to connect (register) the hook action code with the event.

This utility uses Standardized Hooks System descriptors and a reference to hook action code in order to modify registry entries in the Standardized Hooks database.

Two methods exist to provide registration information to the utility:

* Provide registration information manually through the command line when you call the `manage_hooks` utility.
* Use the [`describe()` method](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-describe-method) to include registration information in the hook action code itself.


Either method **requires** that you use this utility in some capacity.

## Synopsis

This utility uses the following syntax:


```
bin/manage_hooks [action] [type] [reference] [options]
```

This syntax uses the following arguments:

| Variable | Description | Possible values | Example |
|  --- | --- | --- | --- |
| `[action]` | The action to perform.  Exercise caution when you use the `--action` option with scripts. If you do not correctly pass a value, the utility may misinterpret that value as a description option switch.   This only occurs for values that lead with one or more hyphens. | `add` — Register a hook.  `delete` — Deregister (remove) a hook.  `describe` — Describe a hook's action.  `list` — List a category's registered hooks. For an example of this action's output, read the [List action output](#list-action-output) section.  `fullhelp` — Display help information for the utility. | `add` |
| `[type]` | The hook action code's type.  Use this value if the `[action]` value is `add` or `delete`. | `script` — The hook action code is a script.  `module` — The hook action code is a Perl module. | `script` |
| `[reference]` | The hook action code's location.  Use this value if the `[action]` value is `add` or `delete`. | For scripts, the script's absolute path and filename.  For Perl modules, the Perl module's `package` value. | `/myhook` |
| `[options]` | The desired options.  If you did not include the `describe` action in the hook action code, you **must** include the `--category` and `--event` options. | One or more options, in `--option value` format.  For a list of possible options, read the [Options](#options) section below. | `--category System` |


### Options

This utility uses the following options:

| Options | Description | Possible values | Example |
|  --- | --- | --- | --- |
| `--category` | The hookable event's category.  If the hook action code does not include the `describe` method, this option is **required**. | [`Cpanel`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-cpanel-functions)  [`PkgAcct`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-pkgacct-functions)  [`Passwd`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-passwd-functions)  [`Stats`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-stats-functions)  [`System`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-system-functions)  [`Whostmgr`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-whostmgr-functions)  [`RPM::Versions`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-rpm-versions-functions) | `--category Whostmgr` |
| `--event` | The [hookable event](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events) name.  If the hook action code does not include the `describe()` method, this option is **required**. | See the desired category's documentation for a list of available events. | `--event Accounts::Remove` |
| `--stage` | When the hook action code executes. | See the desired category's documentation for a list of available stages. | `--stage post` |
| `--blocking` | Whether a specific `pre`-stage event failure from the hook action code prevents the event's execution.  The hook action code must include the `describe()` method to use this option. You **must** set the value to `1` in the `describe()` method, and it must include an [exception](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-exceptions/#exceptions-in-perl-modules).  This option enables the `--rollback` option. | `1` — Block the event's execution.`0` — Do not block the event's execution. | `--blocking 1` |
| `--rollback` | Any additional hook action code to execute when another Standardized Hook that is associated with this event fails.  For more information, read our [Rollbacks](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-rollbacks) documentation.  This option only applies to events with the `blocking` attribute. | For scripts, the script's absolute path and filename.  For Perl modules, the Perl module's `package` value. | `--rollback Boo::rollback` |
| `--escalateprivs` | Whether to escalate the user to `root`-level privileges before the hook action code executes.   This option only applies to events with the `escalateprivs` attribute. | `1` — Escalate the user's privileges. `0` — Do not escalate the user's privileges. | `--escalateprivs 1` |
| `--weight` | The hook's priority order. If multiple hooks are registered for the same stage of an event, this value determines which hook action code runs first.  By default, the system assigns the first Standardized Hook that registers with a specific event a weight of `100`. Subsequent hook weights default to a value that is `100` points higher than the highest existing value. | A positive integer that represents the hook's priority order. | `--weight 555` |
| `--check` | Any additional hook action code to execute before the primary hook action code executes.  If the check action code fails, the primary hook action code will not run.  For more information, read our [Checks](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-checks) documentation. | For scripts, the script's absolute path and filename.  For Perl modules, the Perl module's `package` value. | `--check Boo::are_you_sure` |
| `--manual` | Whether the utility should use only the options that you provide to the utility from the CLI.  This value defaults to `0`.  If the system cannot find any `describe()` method information, it will attempt to use CLI options. | `1` — Use the CLI options. Select this option if hook action code does **not** use the `describe()` method. `0` — Use registration information from the `describe()` method. | `--manual 1` |
| `--action` | An additional hook action. | `add` — Register a hook.  `delete` — Deregister (remove) a hook.  `list` — List a category's registered hooks.  `fullhelp` — Display help information for the utility. | `--action add` |
| `--output` | The output type to use.  This option defaults to `HUMAN`.  Use this option with the `list` action. | `HUMAN` — Display the list of hooks in human-readable format.  `JSON` — Display the list of hooks in a JSON serialization. | `--output HUMAN` |
| `--help` | Print basic help information to `STDOUT`. | No value. | `--help` |


## List action output

The `list` action returns output that is similar to the following example:


```
[usr/local/cpanel/bin] $ ./manage_hooks list
Cpanel:
   Api2::StatsBar::stat:
      stage: pre
      weight: 1000
                id: rA73DrbGgM8QXvypjRkvsuLL
      exectype: module
      hook: MyApp::TestStatsBar
Whostmgr:
   Accounts::Create:
      stage: post
      escalateprivs: 0
      weight: 1000
                      id: OtAWTxns6w1wuIGTCmdnydcX
      exectype: script
      hook: /var/cpanel/myapp/testhook_post.php
      --
      stage: pre
      escalateprivs: 0
      weight: 1000
                      id: au9Pf6EdpOKNtWjrQKW_1IZC
      exectype: script
      hook: /var/cpanel/myapp/testhook_pre.php
```

In this example:

* The `MyApp::TestStatsBar` Perl module subroutine in the `/var/cpanel/perl5/lib/MyApp.pm` file executes the cPanel API 2 `StatsBar::Stat` function.
* A PHP script in the `/var/cpanel/myapp/testhook_post.php` file will execute after you create cPanel accounts. This script will run regardless of the method that you use to create the account (for example, the WHM interface or the `/usr/local/cpanel/scripts/wwwacct` script).


## Perl module examples

The following sections illustrate how to manually add and delete Standardized Hooks with hook action code in a Perl module.

* These examples assume that the `/var/cpanel/perl5/lib/MyApp/` directory contains the `WHM.pm` module file.
* This module contains the `remove()` subroutine that is called prior to an account's removal from the system.


### Add a hook

The module **does** use the `describe()` method:


```
usr/local/cpanel/bin/manage_hooks add module MyApp::WHM
```

The module does **not** use the `describe()` method:


```
usr/local/cpanel/bin/manage_hooks add module MyApp::WHM --manual --category Whostmgr --event 'Accounts::Remove' --stage pre --action remove
```

### Remove a hook

The module **does** use the `describe()` method:


```
usr/local/cpanel/bin/manage_hooks delete module MyApp::WHM
```

The module does **not** use the `describe()` method:


```
usr/local/cpanel/bin/manage_hooks delete module MyApp::WHM --manual --category Whostmgr --event 'Accounts::Remove' --stage pre --action remove
```

## Script examples

The following sections illustrate how to manually add and delete a Standardized Hook with hook action code in a script.

* These examples assume that the `/var/cpanel/myapp/` directory contains the  `whm.php` script.
* Inside this script, there is logic that can interpret command line arguments, to which a `--do_remove` switch is honored.
* The system will call the `/var/cpanel/myapp/whm.php --do_remove` function prior to an account's removal from the system.


### Add a hook

The script **does** use the `describe()` method:


```
usr/local/cpanel/bin/manage_hooks add script /var/cpanel/myapp/whm.php
```

The script does **not** use the `describe()` method:


```
usr/local/cpanel/bin/manage_hooks add script /var/cpanel/myapp/whm.php --manual --category Whostmgr --event 'Accounts::Remove' --stage pre --action='--do_remove'
```

### Remove a hook

The script **does** use the `describe()` method:


```
usr/local/cpanel/bin/manage_hooks delete script /var/cpanel/myapp/whm.php
```

The script does **not** use the `describe()` method:


```
usr/local/cpanel/bin/manage_hooks delete script /var/cpanel/myapp/whm.php --manual --category Whostmgr --event 'Accounts::Remove' --stage pre --action='--do_remove'
```