[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - Rollbacks

Rollbacks undo hook action code changes in specific circumstances. If any hook action code returns a failure status, the system can stop the iteration of the main dispatch loop and initiate an alternate loop. This alternate dispatch loop iterates in reverse through the previous hooks and executes the hook action code in the `rollback` descriptor, if the descriptor is defined.

By definition, a blocking event prevents the core cPanel & WHM event, which potentially invalidates any work that the hook action code that ran during the dispatch loop performed.

## Add a rollback

Rollback formatting is the same as for other hook descriptors. You can itemize the rollback in a describe pattern, or add it through the [`/usr/local/cpanel/bin/manage_hooks`](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-the-manage-hooks-utility) utility directly.

The Standardized Hook System treats code that the rollback descriptor references in the same manner as the main hook action code:

* It receives the same context and dataset input arguments that were passed to the main hook action code.
* The check code should return a result status and optional result message in the same manner as the hook action code.


The itemized rollback action does not have to be part of the hook action code base. It may reference a completely different script or Perl module. However, the rollback action **must** be in the same language as the main hook action code (for example, a Perl subroutine if the hook action code is a Perl subroutine). You **cannot** mix modules and scripts within the same hook.

## Examples

In the following example, if the `Boo::InversePassword()` subroutine successfully runs, but some other hook during the `pre` stage of the `Passwd` category and `ChangePasswd` event fails, the Standardized Hooks System will run the `Boo::rollback_my_awesome_change()` subroutine.


```perl
sub describe {
    my $hooks = [
        {
            'category'  => 'Passwd',
            'event'     => 'ChangePasswd',
            'stage'     => 'pre',
            'hook'      => 'Boo::InversePassword',
            'exectype'  => 'module',
            'rollback'  => 'Boo::rollback_my_awesome_change',
        },
    ];
    return $hooks;
}
```

In the following example, if the `/var/cpanel/myapp/boo.php --inverse_password` code runs successfully, but some other hook during the `pre` stage of the `Passwd` category and `ChangePasswd` event fails, the Standardized Hooks System will run the `/var/cpanel/myapp/boo.php --rollback_my_awesome_change` code.


```
/usr/local/cpanel/bin/manage_hooks add script /var/cpanel/myapp/boo.php --manual 1 --category Passwd --event ChangePasswd --stage pre --exectype script --action="--inverse_password" --rollback "/var/cpanel/myapp/boo.php --rollback_my_awesome_change"
```