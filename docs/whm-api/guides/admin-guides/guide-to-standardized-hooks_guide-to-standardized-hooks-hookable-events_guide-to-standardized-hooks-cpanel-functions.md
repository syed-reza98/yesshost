[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - Cpanel Functions

The `Cpanel` category creates hookable events for [cPanel API 2](/cpanel-api-2) or [UAPI](/cpanel/introduction) functions.

## API::Module::function

`Cpanel` events **all** use the `API::Module::function` naming format, where:

* `API` is the API that calls the hook point. This value is **case-sensitive**.
  * Use `Api2` for cPanel API 2 functions, or `UAPI` for UAPI functions.
* `Module` is the function's module name (for example, `StatsBar`).
* `function` is the function name (for example, `stat`).


### Information

* **Action code runs as:** The cPanel user.
  * Remote API calls that proxy to cPanel's API and cPanel API calls that are performed as a reseller in the cPanel interface will affect this user and **not** the authenticated user.
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** Available.


### Available stages

* `pre` — Hook action code runs before the event.
* `post` — Hook actions code runs after the event.


### post stage call failure

If an API call fails to execute, whether the post-stage hook runs depends on which API that you use.

* cPanel API 2 function post-hooks **always** run, but also include data about whether the API function succeeds. In your post-hook code, the `data->{'output'}{'result'}` section displays the call's status. For example:

```
"output" : [
 {
     "reason" : "File not found.\n",
     "result" : 0
    }
 ]
```
* UAPI post-hooks do **not** run if the API call fails.


### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `args` | *See description.* | A hash reference with `key=value` pairs for each of the function's parameters. | See the desired function's documentation. |  |
| `output` | *string* | A variable reference, which cPanel & WHM is likely to overwrite during processing. | A variable reference.  An undefined value. Expect an undefined value.  | `undef` |
| `user` | *string* | The cPanel user's username. | A valid cPanel username on the server. | `username` |


### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `args` | *See description.* | A hash reference with `key=value` pairs for each of the function's parameters. | See the desired function's documentation. |  |
| `output` | *string* | A variable reference, which cPanel & WHM is likely to overwrite during processing. | A variable reference.  An undefined value. Expect an undefined value.  | `undef` |
| `user` | *string* | The cPanel user's username. | A valid cPanel username on the server. | `username` |