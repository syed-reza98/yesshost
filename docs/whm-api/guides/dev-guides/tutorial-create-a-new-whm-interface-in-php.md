[Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-development-guide)

# Tutorial - Create a New WHM Interface in PHP

## Introduction

This tutorial uses PHP to create a new WHM interface. The examples below create a new interface that integrates seamlessly with the look and feel of the main WHM interface.

## Access the PHP library

To begin a PHP plugin interface, add the following header:


```
<?php
 require_once('/usr/local/cpanel/php/WHM.php');
?>
```

This header accesses WHM's PHP library in the `/usr/local/cpanel/php/WHM.php` file.

## Retrieve the WHM header

You can use two different methods to retrieve the WHM header:

### Direct display

Important:
* The code examples below **only** use this method to display the WHM header.
* When you develop WHM interfaces in PHP, you **cannot** specify values for other header parameters. To modify these parameters, you **must** use [Template Toolkit to develop your interface](/guides/quickstart-development-guide/tutorial-create-a-new-whm-interface-in-template-toolkit).


To directly display WHM's header, your code should resemble the following example:


```
<?php
 require_once('/usr/local/cpanel/php/WHM.php');
    WHM::header('Example Plugin Interface',0,0);
?>
```

The `WHM::header('Example Plugin Interface',0,0);`  line passes the following values:

* The first passed value sets the interface's title.
* The second passed value sets the `skipsupport` parameter to `0`.
* The third passed value sets the `skipheader` parameter to `0`.


For more information and additional options, read our [Guide to WHM Plugins - Interfaces](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/guide-to-whm-plugins-interfaces) documentation.

### Retrieve as a string

Important:
* The code examples below **do not** use this method to display the WHM header.
* When you develop WHM interfaces in PHP, you **cannot** specify values for other header parameters. To modify these parameters, you **must** use [Template Toolkit to develop your interface](/guides/quickstart-development-guide/tutorial-create-a-new-whm-interface-in-template-toolkit)


To retrieve WHM's header as a string, your code should resemble the following example:


```
<?php
 require_once('/usr/local/cpanel/php/WHM.php');
 $headerString = WHM::getHeaderString("Example Plugin Interface",0,0);
 echo($headerString);
?>
```

The `$headerString = WHM::getHeaderString("Example Plugin Interface",0,0);` line passes the following values:

* The first passed value sets the interface's title.
* The second passed value sets the `skipsupport` parameter to `0`.
* The third passed value sets the `skipheader` parameter to `0`.


For more information and additional options, read our [Guide to WHM Plugins - Interfaces](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/guide-to-whm-plugins-interfaces) documentation.

## Add content

Add the desired interface contents below the header.


```
<?php
 require_once('/usr/local/cpanel/php/WHM.php');
    WHM::header('Example Plugin Interface',0,0);
?>

// Add content here.
```

## Add the WHM footer

You can use two different methods to retrieve the WHM footer:

### Direct display

To directly display WHM's footer, your code should resemble the following example:


```
<?php
 require_once('/usr/local/cpanel/php/WHM.php');
    WHM::header('Example Plugin Interface',0,0);
?>

// Add content here.

<?php
    WHM::footer();
?>
```

For more information, read our [Guide to WHM Plugins - Interfaces](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/guide-to-whm-plugins-interfaces) documentation.

### Retrieve as a string

To retrieve WHM's footer as a string, your code should resemble the following example:


```
<?php
 require_once('/usr/local/cpanel/php/WHM.php');
    WHM::header('Example Plugin Interface',0,0);
?>

// Add content here.

<?php
    $footerString = WHM::getFooterString();
    echo($footerString);
?>
```

For more information, read our [Guide to WHM Plugins - Interfaces](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/guide-to-whm-plugins-interfaces) documentation.