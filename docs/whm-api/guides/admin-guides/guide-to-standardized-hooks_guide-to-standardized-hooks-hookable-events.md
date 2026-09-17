[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - Hookable Events

Hookable events set the action that triggers a hook, and whether the hook triggers before or after the event. Within any cPanel & WHM event (for example, an API call or binary process), the code contains the following phases:

1. **Preparation** — The preparation of variables and the environment.
2. **Execution** — The execution of specific operations.
3. **Rendering** — The rendering of the operation's results via HTTP content headers and body.


cPanel & WHM events run routines before (`pre`) or after (`post`) the execution phase.

Most `pre` events can signal a failure that skips the execution phase of the event entirely. The rendering phase uses this signal as if the failure occurred natively, before execution.

## Hookable events

The Standardized Hooks system uses the following categories for hookable events:

* [`ConvertAddon`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-convertaddon-functions) — The `ConvertAddon` category's events occur during WHM functions.
* [`Cpanel`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-cpanel-functions) — The `Cpanel` category creates hookable events for [cPanel API 2](/cpanel-api-2) or [UAPI](/cpanel/introduction) functions.
* [`DiskQuota`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-diskquota-functions) — The `DiskQuota` category's events occur during disk quota processing.
* [`Log::Retention`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-log-retention-functions/) — The `Log::Retention` category's events occur when you run the `/usr/local/cpanel/scripts/log_retention` script.
* [`modsec_vendor` script](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-modsec-vendor-script) — The `modsec_vendor` script category's events occur when you run a [WHM script](https://docs.cpanel.net/whm/scripts/whm-scripts/). These scripts reside in the `/usr/local/cpanel/scripts/` directory.
* [`ModSecurity`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-modsecurity-functions) — The `ModSecurity`™ category's events occur during WHM functions.
* [`Passwd`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-passwd-functions) — The `Passwd` category's events occur when a WHM user or a cPanel user changes a cPanel user's password.
* [`PkgAcct`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-pkgacct-functions) — The `PkgAcct` category's events occur during backup creation.
* [`RPM::Versions`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-rpm-versions-functions/) — The `RPM::Versions` category creates hookable events for RPMs.
* [`Scripts`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-scripts-functions) — The `scripts` category's events occur when email scripts run.
* [`Stats`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-stats-functions) — The `Stats` category's events occur during statistics processing.
* [`System`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-system-functions) — The `System` category's events occur during system updates or backups.
* [`Whostmgr`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-whostmgr-functions) — The `Whostmgr` category's events occur during WHM functions.


Advanced users can [define additional hookable events in their custom modules](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events-in-custom-modules).

## Hookable event attributes

All hookable events are comprised of three main attributes:

1. `category` — The event's logical grouping within cPanel & WHM.
2. `event` — The event that cPanel & WHM performs.
3. `stage` — The location of the trigger that runs the hook action code, relative to the event.


Some hookable events may include additional attributes:

* `blocking` — Whether a returned failure from the hook action code prevents the event's execution. Only specific `pre`-stage events can block.
* `escalateprivs` — Whether the hookable event can [escalate privileges](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-privilege-escalation) before the hook action code runs. (Scripts **only**.)
* `Action Code Run As` — The system user that owns the process that executes the hook action code.


These additional attributes are implicit implementation details that relate to the cPanel & WHM code that dispatches the hookable event.

If the `blocking` and `escalateprivs` attributes are present for a given event, the hook action code can use the `describe` method to define the `rollback` and `escalateprivs` attributes for registration.