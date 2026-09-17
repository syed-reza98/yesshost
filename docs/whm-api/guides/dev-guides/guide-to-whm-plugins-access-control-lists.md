[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/)

# Guide to WHM Plugins - Access Control Lists

## Introduction

Access Control Lists (ACLs) limit the features that WHM users can access. Each ACL represents permissions that the `root` user can grant to other WHM accounts (resellers).

* Server administrators can define ACLs in WHM's [*Edit Reseller Nameservers and Privileges*](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/) interface (*WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges*).
* The system stores ACL information in the `/var/cpanel/resellers` file.


Warning:
WHM plugins **must** check the [authenticated user's](/guides/guide-to-api-authentication) ACLs. * By default, WHM plugins execute as the `root` user. Without appropriate ACL checks, unsafe plugins present a serious security threat. * ACL checks are necessary regardless of whether the plugin displays in the WHM Home interface.

## ACL checks

WHM plugin interfaces that perform ACL checks must include additional modules in order to display correctly.

To do this, add the following lines of code before you call functions within the `Whostmgr::ACLS` module:

* Perl Template Toolkit interfaces:



```USE Whostmgr;
SET acls = Whostmgr.init_acls();
```

* Other Perl interfaces:



```use Whostmgr::ACLS();
Whostmgr::ACLS::init_acls();
```

### Perl

The following code uses the `Whostmgr::ACLS` module to parse ACL information:


```
use lib '/usr/local/cpanel/';
use Whostmgr::ACLS ();
Whostmgr::ACLS::init_acls();
if (!Whostmgr::ACLS::checkacl( 'all' ) ) {
        print 'Access Denied.';
        exit;
}
```

* Line 1 uses [the `lib` pragma](https://perldoc.perl.org/lib) to add the contents of the `/usr/local/cpanel` directory and its subdirectories to `@INC`.
* Line 2 instantiates the `Whostmgr::ACLS` object.
* Line 3 loads the server's available ACLs.


Warning:
You **must** use the `init_acls()` function to load the server's ACLs in **all** code that uses the `Whostmgr::ACLS` module.

* Lines 4 through 7 check whether the authenticated user has the `all` ACL.
  * The `all` ACL indicates that the user has `root`-level privileges on the server.
  * If the user does not have the `all` ACL, the system prints an error message and exits, which denies the user access to the plugin.


### PHP

The following code checks the authenticated user's ACLs:


```
function checkacl ($acl) {
     $user = $_ENV['REMOTE_USER'];

    if ($user == "root") {
        return 1;   
    }     

    $reseller = file_get_contents("/var/cpanel/resellers");   
    foreach ( explode( "\n", $reseller ) as $line ) {       
        if ( preg_match( "/^$user:/", $line) ) {           
            $line = preg_replace( "/^$user:/", "", $line);
            foreach ( explode(",", $line )  as $perm ) {
                 if ( $perm == "all" || $perm == $acl ) {                   
                     return 1;               
                 }           
            }       
        }   
    }   
     return 0;
}
```

* Lines 1 through 6 check whether the user is the `root` user. If the user is the `root` user, the system returns true and grants the user access to the plugin.
* Line 8 loads the contents of the `/var/cpanel/resellers` file, which contains ACL list information for the server.
* Lines 9 through 20 check whether the authenticated user has the `all` ACL.
  * If the user has the `all` ACL, the system returns true and grants the user access to the plugin.
  * If the user does not have the `all` ACL, the system returns false and denies the user access to the plugin.