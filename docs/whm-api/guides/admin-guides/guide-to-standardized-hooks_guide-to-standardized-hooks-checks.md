[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - Checks

Checks verify arbitrary conditions before the system runs the hook action code. This allows a developer to programmatically decide whether it is valid for the itemized hook action code to run.

If a Standardized Hook includes a check, the dispatch loop will execute the check reference.

* If the dispatch loop observes a success, then it will proceed to execute the main hook action code.
* If the loop observes a failure, the hook action code is skipped, as though it did not exist.


## Add a check

The system treats the code that the check descriptor references in the same manner as the main hook action code.

* It receives the same context and dataset input arguments that are passed to the main hook action code.
* The check code should return a result status and optional result message in the same manner as the hook action code.


The itemized check action is not required to be part of the hook action code base. It can be a reference to a completely different script or Perl module. However, it is required that the check action be written in the same language as the main hook action code. (for example, both must be Perl modules).

## Examples

In the following example, before a password change, the system will execute the `Boo::check_some_conditionals()` subroutine. If that subroutine returns true, the Standardized Hooks System will run the `Boo::InversePassword()` subroutine.


```perl
sub describe {
    my $hooks = [
        {
            'category'  => 'Passwd',
            'event'     => 'ChangePasswd',
            'stage'     => 'pre',
            'hook'      => 'Boo::InversePassword',
            'exectype'  => 'module',
            'check'     => 'Boo::check_some_conditionals',
        },
    ];
    return $hooks;
}
```

In the following example, before a password change, the system will execute `/var/cpanel/myapp/boo.php --check_some_conditionals`. If the script returns `1`, the Standardized Hooks System will run `/var/cpanel/myapp/boo.php --inverse_password`.


```
/usr/local/cpanel/bin/manage_hooks add script /var/cpanel/myapp/boo.php --manual 1 --category Passwd --event ChangePasswd --stage pre --exectype script --action="--inverse_password" --check "/var/cpanel/myapp/boo.php --check_some_conditional"
```