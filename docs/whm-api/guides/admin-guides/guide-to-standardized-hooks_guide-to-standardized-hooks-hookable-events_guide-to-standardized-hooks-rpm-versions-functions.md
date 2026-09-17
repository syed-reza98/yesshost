[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - RPM::Versions Functions

The `RPM::Versions` category creates hookable events for RPMs. cPanel & WHM ships with the [preconfigured `RPM::Versions` hooks](#preconfigured-hooks).

The `/var/cpanel/legacy_hooks` touch file determines whether the system has already created the following hooks. To prevent the creation of [these preconfigured hooks](#preconfigured-hooks), touch the file before you install cPanel & WHM.

## RPM

`RPM::Versions` events use the `RPM` naming format, where `RPM` is the name of the RPM to associate with the hook.

### Information

* **Action code runs as:** The WHM user.
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** Available.


### Available stages

* `pre` — Hook action code runs before the event.
* `post` — Hook actions code runs after the event.


### Returns

The `pre` and `post` stages do not produce output.

### Preconfigured hooks

The following table lists cPanel & WHM's preconfigured `RPM::Versions` hooks:

| RPM | `pre` Script(s) | `post` Script(s) |
|  --- | --- | --- |
| `dovecot` | `/scripts/predovecotup` | `/scripts/postdovecotup` |
| `exim` | `/scripts/preeximup` | `/scripts/posteximup` |
| `proftpd` | `/scripts/preftpup` | `/scripts/postftpinstall`  `/scripts/postftpup` |
| `pure-ftpd` | `/scripts/preftpup` | `/scripts/postftpinstall`  `/scripts/postftpup` |
| `MySQL55-server` | `/scripts/premysqlup` | `/scripts/postmysqlinstall`  `/scripts/postmysqlup` |