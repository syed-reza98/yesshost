[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - Passwd Functions

The `Passwd` category's events occur when a WHM user or a cPanel user changes a cPanel user's password. These events trigger during the use of the following interfaces:

* WHM's [*Password Modification*](https://docs.cpanel.net/whm/account-functions/password-modification/) interface (*WHM >> Home >> Account Functions >> Password Modification*).
* cPanel's [*Password & Security*](https://docs.cpanel.net/cpanel/preferences/password-and-security/) interface (*cPanel >> Home >> Preferences >> Password & Security*)


These events also trigger during the use of the following API functions:

* WHM API 1's [`passwd`](/openapi/whm/operation/passwd) function.
* cPanel API 2's [`Passwd::change_password`](/cpanel-api-2/cpanel-api-2-modules-passwd/cpanel-api-2-functions-passwd-change_password) function.


## ChangePasswd

This event takes place when a user's password changes.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** Unavailable.


### Available stages

* `pre` — Hook action code runs before the password changes.
* `post` — Hook action code runs after the password changes.


### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The user for whom the password will change. | A valid username on the server. | `username` |
| `new_password` | *string* | The user's new password. | A secure password. | `123456luggage` |


### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The user for whom the password changed. | A valid username on the server. | `username` |
| `new_password` | *string* | The user's new password. | A secure password. | `123456luggage` |
| `rawout` | *string* | The event's raw output. | A string value. | `This is raw output.` |
| `applist` | *string* | A list of applications for which the password changed. | A list of one or more application names. | `application1,application2` |