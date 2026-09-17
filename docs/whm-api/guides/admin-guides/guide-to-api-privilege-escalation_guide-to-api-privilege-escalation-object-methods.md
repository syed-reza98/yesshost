[Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to-api-privilege-escalation)

# Guide to API Privilege Escalation - Object Methods

Your class will inherit a number of useful methods from the `Cpanel::Admin::Base` module.

## Inherited methods

Your class will inherit the following methods:

| Method | Description |
|  --- | --- |
| `cpuser_has_feature_or_die($feature)` | This method checks whether the user has the necessary `$feature` feature to call the function. If the user does not have access to the feature, it returns an exception. |
| `get_action()` | This method returns the name of the function that the user called. |
| `get_caller_username()` | This method returns the username of the user who called the function. |
| `get_cpuser_domains()` | The method returns an array of the domains that the user who called the function owns. This includes the user's primary domain. |
| `get_cpuser_former_domains_that_remain_unused()` | This method returns an array of the domains that the user no longer owns. |
| `get_cpuser_homedir()` | This method returns the home directory of the user who called the function. |
| `get_cpuser_uid()` | This method returns the UID of the user who called the function. |
| `get_passed_fh()` | This method returns the Perl file handle that the user who called the function passed. If the user did not pass a file handle, this method returns the `undef` value. |
| `verify_that_cpuser_owns_domain($domain)` | This method checks whether the user who called the function owns the `$domain` domain. If the user does not own the domain, it returns an exception. |


## Example

The following example demonstrates these inherited methods:


```perl
#an arrayref of owned domains, including the account's primary domain
my $domains_ar = $self->get_cpuser_domains();

#an arrayref of formerly-owned domains that the user no longer owns
my $old_domains_ar = $self->get_cpuser_former_domains_that_remain_unused();

my $uid = $self->get_cpuser_uid();

my $username = $self->get_caller_username();

my $homedir = $self->get_cpuser_homedir(); #i.e., home directory

#the function that the user requested to run
my $action = $self->get_action();

my $passed_fh = $self->get_passed_fh();

$self->verify_that_cpuser_owns_domain($domain); #die()s if not

$self->cpuser_has_feature_or_die($feature); #die()s if not
```