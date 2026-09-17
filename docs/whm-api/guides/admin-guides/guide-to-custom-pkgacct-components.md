[Development Guides Home](/guides)

# Guide to Custom Pkgacct Components

## Introduction

You can extend the [`/usr/local/cpanel/scripts/pkgacct`](https://docs.cpanel.net/whm/scripts/the-pkgacct-script/) script with custom components. A `pkgacct` component is a Perl module. It runs when the system packages an account. Components let you add more data to the `cpmove` archive that `pkgacct` creates. For example, you can include a config file that lives outside the cPanel account user's home directory.

Components only cover the packaging side of an integration. To put your data back during a restore, use the matching [`PkgAcct::Restore` `post` hook](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-pkgacct-functions#restore) from the Standardized Hooks System. The [Restore the data](#restore-the-data) section shows how the two pieces work together.

Important:
* The system loads components from disk on every `pkgacct` run. It has no way to disable an installed component. To turn one off for a single run, move the module file out of the components directory.
* The calling code **must** work with Perl 5.36. For more information, read our [Custom Modules](/guides/guide-to-perl/guide-to-perl-in-cpanel-custom-modules) documentation.


## Component location

Place your component module in the following directory:


```
/var/cpanel/perl/Cpanel/Pkgacct/Components/
```

Each module's `package` name **must** match its filename. It **must** also use the `Cpanel::Pkgacct::Components::` namespace. For example, the `Cpanel::Pkgacct::Components::MyAppPkgacct` package belongs in the `/var/cpanel/perl/Cpanel/Pkgacct/Components/MyAppPkgacct.pm` file.

## Component structure

A component must use the following criteria:

* Inherit from the `Cpanel::Pkgacct::Component` parent class.
* Define a `perform()` method. The system calls this method when it packages an account.


The `perform()` method takes the component instance (`$self`) as its only argument. Each component holds a reference to the parent `pkgacct` object as the `pkgacct_obj` attribute. Call methods on that object to get information about the current run.

Access the object with `$self->get_attr('pkgacct_obj')`. For example, the call below returns the temporary working directory:


```perl
my $work_dir = $self->get_attr('pkgacct_obj')->get_work_dir();
```

### Job context methods

Use these methods on the `pkgacct_obj` to read details about the account that the system packages.

| Method | Description |
|  --- | --- |
| `get_work_dir()` | Returns the temporary directory where the system builds the `cpmove` archive. Write any files that you want in the backup to this directory. |
| `get_user()` | Returns the cPanel account username that the system packages. |
| `get_uid()` | Returns the cPanel account user's UID. |
| `get_domains()` | Returns the cPanel account user's domains. |
| `get_dns_list()` | Returns the cPanel account user's DNS zone list. |
| `get_suspended()` | Returns `1` if the cPanel account is suspended. Otherwise returns a false value. |
| `get_is_backup()` | Returns `1` when `pkgacct` runs as part of a backup. Otherwise returns a false value. |
| `get_is_userbackup()` | Returns `1` when the cPanel account user started the backup. Otherwise returns a false value. |
| `get_is_incremental()` | Returns `1` when the archive is incremental. Otherwise returns a false value. |
| `get_new_mysql_version()` | Returns the target MySQL version for the archive. |
| `get_now()` | Returns the timestamp the system captured at the start of the `pkgacct` run. Use this value so all components share the same notion of the current time. |
| `get_cpconf()` | Returns the parsed `/var/cpanel/cpanel.config` hashref. |
| `get_OPTS()` | Returns the raw options hashref that `pkgacct` ran with. |
| `get_output_obj()` | Returns the `Cpanel::Output` logger. Call `out()`, `warn()`, or `error()` on this object to send messages through the normal `pkgacct` log stream. |


### Backup helpers

The `pkgacct_obj` also offers helper methods for common backup tasks.

| Method | Description |
|  --- | --- |
| `ensure_dir_at_target($reldir, $perms)` | Creates a directory inside `work_dir` at the given relative path with the given permissions. |
| `syncfile_or_warn($source, $dest, $no_sym, $no_chown, $resume)` | Copies a single file. Sends a warning through the output object if the copy fails. |
| `backup_dir_if_target_is_older_than_source($source_dir, $rel_target_dir)` | Syncs an entire directory tree into `work_dir/$rel_target_dir`. Uses `rsync` semantics and honors the incremental backup flag. |


### Methods on the component itself

You can also call `$self->get_cpuser_data()` to load the cPanel account user's `cpuser` file. This method is defined on the component class. It delegates to the `pkgacct_obj` for you.

## Example component

The following example component copies a config file into the `cpmove` archive. The file lives outside the cPanel account user's home directory. The fictional `myapp` integration stores its data for each cPanel account user in the `/var/myapp/users/` directory.

Create the module in the following location: `/var/cpanel/perl/Cpanel/Pkgacct/Components/MyAppPkgacct.pm`


```perl
package Cpanel::Pkgacct::Components::MyAppPkgacct;

use strict;
use warnings;

use parent 'Cpanel::Pkgacct::Component';

sub perform {
    my ($self) = @_;

    my $pkgacct = $self->get_attr('pkgacct_obj');

    # The temporary directory where the system builds the cpmove archive.
    my $work_dir = $pkgacct->get_work_dir();

    # The cPanel account user whose account the system packages.
    my $user = $pkgacct->get_user();

    # Skip this component if the cPanel account user has no myapp configuration file.
    my $source = "/var/myapp/users/$user.conf";
    return if !-s $source;

    # Stage the file inside the cpmove archive.
    require File::Copy;
    require File::Path;
    File::Path::make_path("$work_dir/myapp");
    File::Copy::cp( $source, "$work_dir/myapp/$user.conf" )
      or warn "Failed to copy '$source' to '$work_dir/myapp/$user.conf': $!";

    return;
}

1;
```

When `pkgacct` runs, the system loads the component and calls `perform()`. The component writes the myapp config file into the `myapp/` subdirectory of the working directory. The system then adds that directory to the `cpmove` archive.

## Restore the data

`pkgacct` components only handle the packaging side. To restore the data that your component packaged, register a [`PkgAcct::Restore` `post` Standardized Hook](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-pkgacct-functions#restore). The hook runs after the system extracts the `cpmove` archive. It gives you access to the extracted contents through the `extract_dir` parameter.

Place your hook module in the following location:


```
/var/cpanel/perl5/lib/
```

The following example hook restores the file that the [example component](#example-component) packaged.

Create the module in the following location: `/var/cpanel/perl5/lib/MyAppRestorepkg.pm`


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

Register the hook with the [`/usr/local/cpanel/bin/manage_hooks`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility) utility:


```
/usr/local/cpanel/bin/manage_hooks add module MyAppRestorepkg
```

For more about the `PkgAcct::Restore` event and its data, read our [PkgAcct Functions](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-pkgacct-functions#restore) documentation.