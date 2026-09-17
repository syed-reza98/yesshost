[Development Guides Home](/guides)

# Guide to Testing Custom Code

## Introduction

This guide explains the basics of how to test your custom code. You can avoid many common issues when you test your code regularly throughout the development process.

Warning:
cPanel Technical Support cannot always assist third-party developers with problems that relate to custom code. For this reason, always test your projects thoroughly before you attempt to use them on production servers.

## Basic troubleshooting

While the items below may seem basic, we see many support tickets and forum posts with these issues. As a result, we recommend that, when you troubleshoot custom code, you check the following items first:

### Does your code include any typos?

Common mistakes include missing semicolons (`;`) at the ends of lines, out-of-place comment characters, and misspelled variable names, function names, or filenames.

In Perl code, add the `use strict;` and `use warnings;` statements to the beginning of your custom code to find these errors more easily.

### Are the user's permissions correct?

Make certain that the user who will execute the code possesses the correct permissions.

* Unless you properly implement privilege escalation, cPanel users **cannot** run WHM functions. For more information, read our [Guide to API Privilege Escalation](/guides/guide-to-api-privilege-escalation) documentation.
* WHM users **cannot** run cPanel functions unless you supply a cPanel user to authenticate as. For more information, read our [Guide to Testing Custom Code - WHM API 1 Calls](/guides/guide-to-testing-custom-code/guide-to-testing-custom-code-whm-api-calls) documentation.
* Some functions require specific [feature lists](https://docs.cpanel.net/whm/packages/feature-manager/), [*Tweak Settings*](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) values, or `root` privileges. For more information, read the desired function's documentation.


### Does the function exist in the API that you called?

WebPros International, LLC produces two current and three deprecated APIs, and they all include separate sets of functions. Make **certain** that the function and module that you call exist in the API version that your code uses.

Important:
API calls **must** use the correct port:

* `2082` — Unsecure calls to cPanel's APIs.
* `2083` — Secure calls to cPanel's APIs.
* `2095` — Unsecure calls to cPanel's APIs via a Webmail session.
* `2096` — Secure calls to cPanel's APIs via a Webmail session.
* `2086` — Unsecure calls to WHM's APIs, or to cPanel's APIs via the WHM API.
* `2087` — Secure calls to WHM's APIs, or to cPanel's APIs via the WHM API.


Otherwise-correct calls will return `Permission denied` or `Function not found` errors if they use an incorrect port number.

**Call examples**

#### WHM API 1

**Browser-based call...**


```
https://hostname.example.com:2087/cpsess##########/json-api/accountsummary?api.version=1&user=username
```

Note:
Browser-based calls to WHM API 1 **must** include the WHM API 1 version (`api.version=1`).

**Command-line call...**


```
whmapi1 accountsummary user=username
```

For more information, read our [Guide to Testing Custom Code - WHM API 1 Calls](/guides/guide-to-testing-custom-code/guide-to-testing-custom-code-whm-api-calls) and [Guide to WHM API 1](/whm/introduction) documentation.

#### cPanel UAPI

**cPanel or Webmail session URL call**


```
https://hostname.example.com:2083/cpsess##########/execute/Module/function?parameter=value&parameter=value&parameter=value
```

**Command-line call**


```
uapi --user=username --output=type Module function parameter=value parameter=value
```

**LiveAPI PHP Class call**


```
$cpanel = new CPANEL(); // Connect to cPanel - only do this once.

// Call a UAPI function.
$function_result = $cpanel->uapi(
   'Module', 'function',
   array(
       'parameter'     => 'value',
       'parameter'     => 'value',
       'parameter'     => 'value',
        )
);
```

**LiveAPI Perl Module call**


```
my $cpliveapi = Cpanel::LiveAPI->new(); # Connect to cPanel - only do this once.

# Call a UAPI function.
my $function_result = $cpliveapi->uapi(
   'Module', 'function',
   {
       'parameter'     => 'value',
       'parameter'     => 'value',
       'parameter'     => 'value',
   }
);
```

**Template Toolkit call**


```
<!-- Call a UAPI function. -->
[%
execute(
    'Module', 'function',
    {
       'parameter' => 'value',
       'parameter' => 'value',
       'parameter' => 'value',
    }
);
%]
```

For more information, read our [Guide to Testing Custom Code - cPanel API and UAPI Calls](/guides/guide-to-testing-custom-code/guide-to-testing-custom-code-cpanel-api-and-uapi-calls) and [Guide to cPanel UAPI](/cpanel/introduction/) documentation.

#### cPanel API 2

Note:
cPanel API 2 is deprecated.

**Call through the WHM API 1**


```
https://hostname.example.com:2087/cpsess##########/json-api/cpanel?cpanel_jsonapi_user=user&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=Module&cpanel_jsonapi_func=function&parameter="value"
```

**Command-line call**


```
cpapi2 --user=username --output=type Module function parameter=value parameter=value
```

**Template Toolkit call**


```
<!-- Call a cPanel API 2 function. -->
[%-
USE Api2;
SET myvariable = execute(
    'Module', 'function',
   {
       'parameter'      => 'value',
       'parameter'      => 'value',
       'parameter'      => 'value',
   }
);
%]
```

**LiveAPI PHP Class call**


```
$cpanel = new CPANEL(); // Connect to cPanel - only do this once.

// Call the function.
$my_variable = $cpanel->api2(
   'Module', 'function',
   array(
       'parameter'      => 'value',
       'parameter'      => 'value',
       'parameter'      => 'value',
   )
);
```

**LiveAPI Perl Module call**


```
my $cpliveapi = Cpanel::LiveAPI->new(); # Connect to cPanel - only do this once.

# Call the function.
my $my_variable = $cpliveapi->api2(
   'Module', 'function',
   {
       'parameter'      => 'value',
       'parameter'      => 'value',
       'parameter'      => 'value',
   }
);
```

For more information, read our [Guide to Testing Custom Code - cPanel API and UAPI Calls](/guides/guide-to-testing-custom-code/guide-to-testing-custom-code-cpanel-api-and-uapi-calls) and [Guide to cPanel API 2](/cpanel-api-2/) documentation.

#### Deprecated APIs

cPanel API 2 is deprecated. We **strongly** recommend that you only use the equivalent [cPanel UAPI](/cpanel/introduction/) functions instead.

Warning:
Do **not** attempt to use cPanel or WHM interface URLs to perform actions in custom code. You **must** call the appropriate API functions in order to perform the actions of cPanel & WHM's interfaces. For example, do **not** pass values to `.html` pages, as in the following example: `https://example.com:2083/cpsess###########/frontend/jupiter/email_accounts/index.html/create#email=test&domain=example.com`. While this **unsupported** method sometimes worked in previous versions of cPanel & WHM, we **strongly** discourage its use and do **not** guarantee that it will work in the future. Instead, the correct method to perform this action is to call the appropriate API function.

### Are the file permissions correct?

Remember:
API functions run as a specific user. If that user does not posses the correct permissions, errors may occur.

Often, integrators see errors because of file permission issues with one or more of the files that relate to their custom code.

Note:
Make certain that your custom code does not change the permissions for cPanel & WHM's files. Changes to system file permissions may cause unexpected problems on cPanel & WHM servers.

The following examples describe two possible scenarios in which incorrect file permissions could cause problems:

* If you see the following error when you call [UAPI's `Email::add_pop` function](https://api.docs.cpanel.net/openapi/cpanel/operation/add_pop/), the `/home/username/etc/example.com/shadow` file possesses incorrect permissions:



```
File open for /home/username/etc/example.com/shadow failed with error Permission denied
```

If the system cannot write to this file, it cannot create an email address, because it **must** use this file to store email password hashes during the account creation process.

* If you see the following error when you call [cPanel API 2's `Fileman::mkfile` function](/cpanel-api-2/cpanel-api-2-modules-fileman/cpanel-api-2-functions-fileman-mkfile), the user cPanel account's files and directories may posses incorrect permissions:



```
Encountered error in Fileman::mkfile: Could not create file "example.txt" in /home/user/public_html/: Permission denied: Permission denied
```

To check the permissions for a directory's files, run the `ls -al` command.