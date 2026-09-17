[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - Debug Mode

The Standardized Hooks System's debug mode helps to troubleshoot hook issues. For example, enable this mode when you experience a bug or to test whether hooks are functional. The tool prints debug data to the `/usr/local/cpanel/logs/error_log` file.

Warning:
* When you enable debug mode, it will also enable debug mode in the cPanel interface. This will **severely** impact the loading and performance of the cPanel interface. We recommend that you **disable** debug mode when you do not need it.
* We **strongly** recommend that you only perform these tests on development servers. This tool generates a **large** amount of error log noise.


## Debug mode settings

To enable or disable debug mode for Standardized Hooks, we **strongly** recommend that you use the *Standardized Hooks - Debug Mode* option in the *Development* section of WHM's [*Tweak Settings*](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#development) interface (*WHM >> Home >> Server Configuration >> Tweak Settings*).

This setting saves one of the following string values to the `/var/cpanel/debughooks` file:

| Tweak Settings option | debughooks value |
|  --- | --- |
| *Debug mode is off.* | `0` |
| *Debug mode is on. The system displays information about a hook while it executes, but does not log debug data to the error log.* | `log` |
| *Debug mode is on. The system displays information about a hook while it executes and logs debug data to the error log.* | `logdata` |
| *Debug mode is on. The system displays information about every stage for every hookable event, even if no hooks exist for that stage.* | `logall` |


If the system cannot locate a valid value in the `/var/cpanel/debughooks` file, it will use the `debughooks` value in the `/var/cpanel/cpanel.config` file.

* We **strongly** recommend that you do **not** update the `debughooks` value in the `/var/cpanel/cpanel.config` file. Changes to this file do **not** override the values in the `/var/cpanel/debughooks` file.
* The `/var/cpanel/cpanel.config` file uses the following `debughooks` settings:
  * `0` — Debug mode is **off**.
  * `1` — Debug mode is **on**. The system displays information about a hook while it executes, but does **not** log debug data to the error log.
  * `2` — Debug mode is **on**. The system displays information about a hook while it executes **and** logs debug data to the error log.
  * `3` — Debug mode is **on**. The system displays information about every stage for every hookable event, even if no hooks exist for that stage.


If you use the `/var/cpanel/debughooks` file to manually enable debug mode, your locale may revert to the English defaults for JavaScript elements. To fix this problem, run the following commands to disable debug mode and restart the `cpsrvd` daemon:


```
echo -n > /var/cpanel/debughooks
/scripts/restartsrv_cpsrvd
```