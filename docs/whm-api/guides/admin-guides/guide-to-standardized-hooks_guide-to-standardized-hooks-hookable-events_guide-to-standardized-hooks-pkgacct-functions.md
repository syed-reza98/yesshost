[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - PkgAcct Functions

The `PkgAcct` category's events occur during backup creation.

Note:
To include more data in the `cpmove` archive, write a [custom `pkgacct` component](/guides/guide-to-custom-pkgacct-components). Components run during the packaging process. Pair them with a `PkgAcct::Restore` `post` hook to restore the data later.

## Create

This event takes place when the [`/usr/local/cpanel/scripts/pkgacct`](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/) script creates the `cpmove` archive.

### Information

* **Action code runs as:**
  * During transfers, the `root` user.
  * While the system generates backup files, the user who owns the backup.
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** Unavailable.


### Available stages

* `pre` — Hook action code runs before the `pkgacct` script collects or writes data.
* `preFinalize` – Hook action code runs before the system compresses or transfers the `cpmove` file.
* `postFinalize` — Hook action code runs after the system compresses or transfers the `cpmove` file. This stage does **not** occur if the `skiphomedir` value is `1`.


### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `workdir` | *string* | The temporary working directory that the system uses to build the `cpmove` archive. | A valid directory path. | `workingdir` |
| `homedir` | *string* | The user's home directory. | A valid directory path. | `/home/username` |
| `user` | *string* | The user for whom the system will perform the backup. | A valid username on the server. | `username` |


### preFinalize returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `workdir` | *string* | The temporary working directory that the system uses to build the `cpmove` archive. | A valid directory path. | `workingdir` |
| `homedir` | *string* | The user's home directory. | A valid directory path. | `/home/username` |
| `user` | *string* | The user for whom the system will perform the backup. | A valid username on the server. | `username` |
| `is_incremental` | *Boolean* | Whether the archive is an incremental backup. | `1` — Incremental backup.  `0` — Not an incremental backup. | `1` |
| `is_split` | *Boolean* | Whether the system split the archive into multiple files. | `1` — Split.  `0` — Not split. | `1` |
| `is_tarball` | *Boolean* | Whether the system will generate a tarball. | `1` — Will generate.  `0` — Will not generate. | `1` |
| `is_backup` | *Boolean* | Whether the archive is a backup. | `1` — Backup.  `0` — Not a backup. | `1` |


### postFinalize returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `workdir` | *string* | The temporary working directory that the system used to build the `cpmove` archive. | A valid directory path. | `workingdir` |
| `homedir` | *string* | The user's home directory. | A valid directory path. | `/home/username` |
| `user` | *string* | The user for whom the system performed the backup. | A valid username on the server. | `username` |
| `is_incremental` | *Boolean* | Whether the archive is an incremental backup. | `1` — Incremental backup.  `0` — Not an incremental backup. | `1` |
| `is_split` | *Boolean* | Whether the system split the archive into multiple files. | `1` — Split.  `0` — Not split. | `1` |
| `is_tarball` | *Boolean* | Whether the system generated a tarball. | `1` — Generated a tarball.  `0` — Did not generate a tarball. | `1` |
| `is_backup` | *Boolean* | Whether the archive is a backup. | `1` — Backup.  `0` — Not a backup. | `1` |
| `tarball` | *string* | The tarball's path.  If the `is_split` value is `1` or the `pkgacct` script's `$create_tarball` variable is `false`, the system does **not** return this parameter. | A valid file path. | `/home/username/backup.tar.gz` |
| `md5sum` | *integer* | The tarball's `md5sum` value.  If the `is_split` value is `1` or the `pkgacct` script's `$create_tarball` variable is `false`, the system does **not** return this parameter. | A positive integer. | `595f44fec1e92a71d3e9e77456ba80d1` |


## Restore

This event takes place when the [`/usr/local/cpanel/scripts/pkgacct`](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/) script restores the `cpmove` archive.

### Information

* **Action code runs as:**
  * During restoration, the `root` user.
  * While the system restores backup files, the user who owns the backup.
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** Unavailable.


### Available stages

* `postExtract` — Hook action code runs before the system restores the `cpmove` file. This stage **does not** occur if the `skiphomedir` value is `1`.
* `post` — Hook action code runs after the system restores the `cpmove` file.


### postExtract returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The source for which the system restored the backup. | The name of the account or the full path to the backup file. | `account_name` |
| `old_user` | *string* | The user for whom the system performed the backup. | A valid username on the server. | `username` |
| `user_homedir` | *string* | The user's home directory to which the system restored the backup. | A valid directory name. | `/userhome` |
| `domain` | *string* | The domain on which to restore the account. | A valid domain on the server. | `example.com` |
| `extract_dir` | *string* | The directory where the system extracted the `cpmove` archive. Use this value to find files that a [custom `pkgacct` component](/guides/guide-to-custom-pkgacct-components) placed in the archive. | A valid directory path. | `/home/cpmove-username` |


### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The source for which the system restored the backup. | The name of the account or the full path to the backup file. | `account_name` |
| `old_user` | *string* | The user for whom the system performed the backup. | A valid username on the server. | `username` |
| `user_homedir` | *string* | The user's home directory to which the system restored the backup. | A valid directory name. | `/userhome` |
| `domain` | *string* | The domain on which to restore the account. | A valid domain on the server. | `example.com` |
| `extract_dir` | *string* | The directory where the system extracted the `cpmove` archive. Use this value to find files that a [custom `pkgacct` component](/guides/guide-to-custom-pkgacct-components) placed in the archive. | A valid directory path. | `/home/cpmove-username` |


### Example

The following Perl module registers a `PkgAcct::Restore` `post` hook. The hook restores a config file that a [custom `pkgacct` component](/guides/guide-to-custom-pkgacct-components#example-component) placed in the `cpmove` archive.


```perl
package MyAppRestorepkg;

use strict;
use warnings;

sub describe {
    return [
        {
            'category' => 'PkgAcct',
            'event'    => 'Restore',
            'stage'    => 'post',
            'hook'     => 'MyAppRestorepkg::do_it',
            'exectype' => 'module',
        },
    ];
}

sub do_it {
    my ( $context, $data ) = @_;

    my $user      = $data->{'user'};
    my $conf_file = $data->{'extract_dir'} . "/myapp/$user.conf";

    return if !-s $conf_file;

    require File::Copy;
    File::Copy::cp( $conf_file, "/var/myapp/users/$user.conf" )
      or warn "Failed to copy '$conf_file' to '/var/myapp/users/$user.conf': $!";

    return;
}

1;
```