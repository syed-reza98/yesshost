[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - Privilege Escalation

Scripted hook action code that runs as the cPanel user can escalate that user's privileges.

* Hookable events that occur in code that runs as the cPanel user can escalate privileges.
* A **script** must contain the hook action code in order to escalate privileges. Hook action code in Perl modules **always** executes as the default user for that event.


Warning:
**Do not use this feature unless it is necessary.** If the hook action code can run as the event's default user, it should do so. Unnecessary privilege escalation can introduce unnecessary risk to the system.

## Escalate privileges

If a given Standardized Hook defines the `escalateprivs` descriptor as true, the system will execute the hook action code as the `root` user.

* Many hookable events already run as the `root` user and do **not** require the `escalateprivs` descriptor.
* You can set the `escalateprivs` descriptor through the `describe()` method or through the [`/usr/local/cpanel/bin/manage_hooks`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility) utility.


For more information about which events run as which users, read the documentation for that event's [category](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events).

## Examples

In this example, the `/var/cpanel/myapp/do_extra.pl` script will run as the `root` user immediately before the system updates a user's password:


```
/usr/local/cpanel/bin/manage_hooks add script /var/cpanel/myapp/do_extra.pl --manual --category Passwd --event ChangePasswd --stage pre --exectype script --escalateprivs
```


```perl
sub describe {
    my $hooks = [
        {
            'category'      => 'Passwd',
            'event'         => 'ChangePasswd',
            'stage'         => 'pre',
            'hook'          => '/var/cpanel/myapp/do_extra.pl',
            'exectype'      => 'script',
            'escalateprivs' => 1,
        },
    ];
    return $hooks;
}
```