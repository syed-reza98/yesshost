[Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-development-guide)

# Tutorial - Create a New WHM Interface in Template Toolkit

## Introduction

This tutorial uses Template Toolkit to create a new WHM interface. The examples below use WHM's master template, which creates new interfaces that integrate seamlessly with the look and feel of the main WHM interface.

## Create a new WHM interface

### Create a Template Toolkit file with the correct USE statements

To begin, create a new Template Toolkit file. Generally, this file uses the `.tmpl` file extension.

* Lines 2 and 3 use [Template Toolkit's USE directive](http://template-toolkit.org/docs/manual/Directives.html#section_USE) to load the `Whostmgr` and `JSON` modules, respectively.
* WHM interfaces **require** these modules in order to load properly.



```
[%
USE Whostmgr;
USE JSON;
%]
```

### Add correct handling for right-to-left locales.

By default, cPanel & WHM displays interfaces correctly for left-to-right locales.

If your plugin will support multiple locales, we **strongly** recommend that you configure the interface to correctly display right-to-left and left-to-right locales.

* Line 5 uses [Template Toolkit's IF directive](http://template-toolkit.org/docs/manual/Directives.html#section_IF_UNLESS_ELSIF_ELSE) to check whether the authenticated user's locale is a right-to-left (`rtl`) locale.
* Line 6 uses [Template Toolkit's SET directive](http://template-toolkit.org/docs/manual/Directives.html#section_SET) to set the correct minified Bootstrap CSS file if the authenticated user's locale is a right-to-left (`rtl`) locale.



```
[%
USE Whostmgr;
USE JSON;

IF locale.get_html_dir_attr() == 'rtl';
SET rtl_bootstrap = Whostmgr.find_file_url('/3rdparty/bootstrap-rtl/optimized/dist/css/bootstrap-rtl.min.css');
END;
%]
```

### Add WHM's wrappers

Use [Template Toolkit's WRAPPER directive](https://www.template-toolkit.org/docs/manual/Directives.html#section_WRAPPER) to apply WHM's master template, title, and theme to the template file.

* Line 9 uses the `WRAPPER` directive to set WHM's master template file.
* Line 10 sets the interface's header text and localizes it. Use the header value to set the name at the top of the interface.
* Line 11 applies WHM's Bootstrap theme.



```
[%
USE Whostmgr;
USE JSON;

IF locale.get_html_dir_attr() == 'rtl';
SET rtl_bootstrap = Whostmgr.find_file_url('/3rdparty/bootstrap-rtl/optimized/dist/css/bootstrap-rtl.min.css');
END;

WRAPPER 'master_templates/master.tmpl'
    header = locale.maketext("Example Plugin")
    theme='bootstrap';
%]

[% END %]
```

You can use additional flags to customize the way in which you include the master template, or the individual header and footer files. For more information and a full list of flags, read our [Guide to WHM Plugins - Interfaces](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files/guide-to-whm-plugins-interfaces) documentation.

### Add stylesheets

Add stylesheets to customize the appearance of your interface.

* Line 9 uses [Template Toolkit's SET directive](http://template-toolkit.org/docs/manual/Directives.html#section_SET) to set the list of stylesheets.
* Line 10 adds the `rtl_bootstrap` stylesheet, which you set in Step 2.
* Line 11 adds the `/libraries/fontawesome/css/font-awesome.min.css` stylesheet, which allows your interface to load [Font Awesome](http://fontawesome.io/) icons.
* Line 16 adds this list of stylesheets to the `WRAPPER` directive.


Note:
Enter the CSS files' paths relative to the `/docroot/` directory.


```
[%
USE Whostmgr;
USE JSON;

IF locale.get_html_dir_attr() == 'rtl';
SET rtl_bootstrap = Whostmgr.find_file_url('/3rdparty/bootstrap-rtl/optimized/dist/css/bootstrap-rtl.min.css');
END;

SET styleSheets = [
    rtl_bootstrap,
    '/libraries/fontawesome/css/font-awesome.min.css'
    ];

WRAPPER 'master_templates/master.tmpl'
    header = locale.maketext("Example Plugin")
    stylesheets = styleSheets,
    theme='bootstrap';
%]

[% END %]
```

### Add interface contents

Add the contents of your plugin's interfaces. These contents may use any combination of Template Toolkit and other web languages.


```
[%
USE Whostmgr;
USE JSON;

IF locale.get_html_dir_attr() == 'rtl';
SET rtl_bootstrap = Whostmgr.find_file_url('/3rdparty/bootstrap-rtl/optimized/dist/css/bootstrap-rtl.min.css');
END;

SET styleSheets = [
    rtl_bootstrap,
    '/libraries/fontawesome/css/font-awesome.min.css'
    ];

WRAPPER 'master_templates/master.tmpl'
    header = locale.maketext("WHM Example Plugin")
    stylesheets = styleSheets,
    theme='bootstrap';
%]

<div class="callout callout-info">
Interface contents go here.
</div>

[% END %]
```