[Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to-api-privilege-escalation)

# Guide to API Privilege Escalation - Configuration Files

Important:
This document does **not** apply to the [Admin module method](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-the-admin-module-method). The Admin module method does **not** require a configuration file.

The configuration file defines two configuration settings that determine your application's behavior.

* The `root` user must own the file.
* Set the file to use `0700` permissions (writable, readable, and executable by owner).
* Store this file with the application file in a new namespace in the `/usr/local/cpanel/bin/admin/` directory.
  * The namespace and the directory name that you create in `/usr/local/cpanel/bin/admin/` **must** be identical.
  * For example, you could create the `TheNameSpace` namespace, the `/usr/local/cpanel/bin/admin/TheNameSpace/` directory, and `TheModule` module and `TheModule.conf` configuration file in that directory.


## File

Your application's configuration file should resemble the following example:


```
mode=full
allowed_parents=/usr/local/cpanel/cpanel
```

This file contains the following settings:

| Setting | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `mode` | *string* | **Required**  The mode of data behavior to use. For more information, read the [Mode behavior](#mode-behavior) section below.  For historical reasons, this setting defaults to `simple`, but we **strongly** recommend that you use `full`.  We recommend that you use the `Cpanel::Admin::Base` module when you create `AdminBin` applications. | `full`  `simple` | `full` |
| `allowed_parents` | *string* | A list of the binaries that can call these routines. **If not given, anything can invoke the module.** For that reason, it is recommended always to specify `/usr/local/cpanel/cpanel` for this value.  If the `/var/cpanel/skipparentcheck` file exists, the system ignores the `allowed_parents` setting. We **strongly** recommend that you **do not** create this file on production systems. | A comma-separated list of compiled binaries. | `/usr/local/cpanel/cpanel` |


### Mode behavior

The `mode` setting modifies the way in which your application handles the following parameters. In all cases, the first line of `STDIN` is a set of **space-separated** values.

| Parameter | Full mode (recommended) | Simple mode |
|  --- | --- | --- |
| `uid` | Passed in as `ARGV[0]`. | Passed as the first item in `STDIN`. |
| `function` | Passed as the first item to `STDIN`. | Passed as the second item to `STDIN`. |
| `data` | The function passes `data` as the second item to `STDIN`, which interprets it as a space-separated list of scalar values.  To send the module extended data, include it after the first line of `STDIN`. You may format this extended data in a serialized data format, such as JSON. | Passed as the third item to `STDIN`.  The function interprets this data as a space-separated list of scalars. |


For more information about application parameters, read our [Guide to API Privilege Escalation - Application Files](/guides/guide-to-api-privilege-escalation/guide-to-api-privilege-escalation-application-files/) documentation.