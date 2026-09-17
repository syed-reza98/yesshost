[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - Scripts Functions

The `scripts` category's events occur when email scripts run.

## addpop

This event takes place when the `/usr/local/cpanel/scripts/addpop` script creates the email account.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** Unavailable.


### Available stages

* `pre` — Hook action code runs before the `addpop` script creates the email account.
* `post` — Hook action code runs after the `addpop` script creates the email account.


### Returns

The `pre` and `post` stages do not produce output.

## delpop

This event takes place when the `/usr/local/cpanel/scripts/delpop` script deletes the email account.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** Unavailable.


### Available stages

* `pre` — Hook action code runs before the `delpop` script deletes the email account.
* `post` — Hook action code runs after the `delpop` script deletes the email account.


### Returns

The `pre` and `post` stages do not produce output.