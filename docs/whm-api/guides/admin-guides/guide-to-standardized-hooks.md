[Development Guides Home](/guides)

# Guide to Standardized Hooks

Standardized Hooks trigger applications when cPanel & WHM performs an action. Use this system to execute custom code (hook action code) to customize how cPanel & WHM functions in specific scenarios (hookable events). This functionality is useful for developers and system administrators. For example, you could use this system to make certain that a script runs each time that a user creates an account.

For a step-by-step tutorial to create and register a hook, read our [Tutorial - Create a Standardized Hook](/guides/quickstart-development-guide/tutorial-create-a-standardized-hook) documentation.

## Basic usage

Each standardized hook is comprised of a hookable event, a hook action, and hook registration.

To create a new standardized hook, perform the following steps:

1. [Select a hookable event.](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events) — Hookable events set the action that triggers a hook, and whether the hook triggers before or after the event.
2. [Write your custom hook action code](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hook-action-code).
3. [Register](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility) the hook. — Use the `/usr/local/cpanel/bin/manage_hooks` Command Line Interface (CLI) utility to connect (register) the hook action code with the event.
  * The system includes a hooks registry for each hookable event. This allows hooks from your application to coexist with another application's hooks that reference the same event.
  * cPanel & WHM provides the `/usr/local/cpanel/bin/manage_hooks` CLI utility to manage standardized hooks.


## Standardized Hook System data

Warning:
**Do not** edit this data manually. Instead, manage Standardized Hooks with the [`/usr/local/cpanel/bin/manage_hooks`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility) utility.

Standardized Hooks System data is in subdirectories within the `/var/cpanel/hooks/data/` directory. This allows the system to isolate individual events for better performance.

* Each subdirectory includes a `.yaml` file and a `.cache` file.
* For example, the `/var/cpanel/hooks/data/Passwd/` directory could contain the `change_password.yaml` file and the `change_password.cache` file.


If you have questions or need help with your customization project, join the conversation on our [cPanel Developers Forum](http://forums.cpanel.net/cpanel-developers.html), or reach out to us in [Discord](http://go.cpanel.net/discord).

We encourage anyone who develops for cPanel products to read the [cPanel Blog](http://blog.cpanel.net/) and join our Plugin Developers mailing list.