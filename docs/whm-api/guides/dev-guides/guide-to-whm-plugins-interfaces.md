[Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/) >> [Guide to WHM Plugins - Plugin Files](/guides/guide-to-whm-plugins/guide-to-whm-plugins-plugin-files)

# Guide to WHM Plugins - Interfaces

## Introduction

Your plugins can include the same interface elements as cPanel-provided WHM interfaces. To best match the WHM interface, we **strongly** recommend that you include the provided headers and footers in all of your custom interfaces.

div
Note:

* For help to match custom interfaces to the WHM interface, read our **experimental** [User Interface Style Guide](http://styleguide.cpanel.net/).
* For hep to display icons and groups in your WHM interface, read our [Guide to WHM dynamicui Files](/guides/guide-to-whm-dynamicui-files) documentation.


## Basic usage

### Perl Template Toolkit

To include WHM's header and footer, use the [`WRAPPER` directive](http://www.template-toolkit.org/docs/manual/Directives.html#section_WRAPPER) to include the `master_templates/master.tmpl` file:


```
[% WRAPPER 'master_templates/master.tmpl' -%]
```

div
Note:

* The `master.tmpl` file provides the `_defheader.tmpl` file (the WHM header) and the `_deffooter.tmpl` file (the WHM footer).
* For more information, read our [Create a New WHM Interface in Template Toolkit tutorial](/guides/quickstart-development-guide/tutorial-create-a-new-whm-interface-in-template-toolkit).


### PHP

To include WHM's header and footer, use the `/usr/local/cpanel/php/WHM.php` PHP library:


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

div
Note:

* You **must** include both the header (lines 1-4) and footer (lines 8-10).
* For more information, read our [Create a New WHM Interface in PHP](/guides/quickstart-development-guide/tutorial-create-a-new-whm-interface-in-php) tutorial.


## Options

### Perl Template Toolkit

div
Note:

For Template Toolkit code examples that use these flags, read the Example section below.

You can include the following flags within the `WRAPPER` directive:

| Flag | Description |
|  --- | --- |
| `breadcrumbdata` | Provides data to construct the WHM interface's navigation breadcrumbs.When you use this flag, you **must** also set the following variables: `previous` — An array of hashes that includes the following variables: `name` — The previous page's display name.`url` — The previous page's location, relative to the `/usr/local/cpanel/` directory.`name` — The current page's name.`url` — The current page's location, relative to the `/usr/local/cpanel/` directory. |
| `extrastyle` | Provides inline CSS code. To include CSS stylesheets, use the stylesheets flag. |
| `hide_header` | Hides the WHM header.Set this value to `1` to hide the header.Set this value to `0` to display the header.If you do not include this flag, it defaults to `0`. |
| `hide_navigation` | Hides the WHM left navigation menu.Set this value to `1` to hide the menu.Set this value to `0` to display the menu.If you do not include this flag, it defaults to `0`. |
| `include_legacy_stylesheets` | Sets whether the interface uses legacy YUI stylesheets.Set this value to `1` to include legacy YUI stylesheets.Set this value to `0` to exclude legacy YUI stylesheets.If you do not include this flag, it defaults to `0`. |
| `include_frame_or_tab_or_popup` | Hides the WHM header, left navigation menu, navigation breadcrumbs, and *Support* tab.Set this value to `1` to hide these items.Set this value to `0` to display these items normally.If you do not include this flag, it defaults to `0`. |
| `scripts` | Adds an array of JavaScript files to load with the interface. For each file, the system will create a `<script>` include tag and insert it into the template's `<HEAD>` tag. |
| `skipbreadcrumb` | Hides navigation breadcrumbs.Set this value to `1` to hide navigation breadcrumbs.Set this value to `0` to display navigation breadcrumbs.If you do not include this flag, it defaults to `0`. |
| `skipheader` | Hides the interface's header.Set this value to `1` to hide the header.Set this value to `0` to display the header.If you do not include this flag, it defaults to `0`. |
| `skipsupport` | Hides the *Support* tab.Set this value to `1` to hide the Support tab.Set this value to `0` to display the Support tab.If you do not include this flag, it defaults to `0`. |
| `stylesheets` | Sets an array of CSS stylesheets for the interface. For each stylesheet, the system will create a `<style>` include tag and insert it into the template's `<HEAD>` tag.To include inline CSS code, use the extrastyle flag. |
| `theme` | Sets a Bootstrap or YUI theme, in order to use that theme's code and styles.Set this value to `yui` to use YUI code and styles.Set this value to `bootstrap` to use Bootstrap code and styles.If you do not include this flag, it does not use a Bootstrap or YUI theme. |


#### Example

The following code includes all of the possible flags for the `master.tmpl` file:


```
[%
     WRAPPER 'master_templates/master.tmpl'
         breadcrumbdata = {
             previous = [{name = "Home",url = "/scripts/command?PFILE=main"}],
             name = 'Previous Page',
             url = '/scripts/example',
             },
         extrastyle = '.container, #example-group { margin-bottom: 0; } #exampleContainer { margin-top: 0px; }',
         hide_header = 0,
         hide_navigation = 0,
         include_legacy_stylesheets = 1,
         inside_frame_or_tab_or_popup = 0,
         scripts = ['scripts/example.js'],
         skipbreadcrumb = 0,
         skipheader = 0,
         skipsupport = 0,
         stylesheets = ['index.css','example/styles.css'],
         theme = 'bootstrap'
 -%]

# Add plugin content here.

[% END %]
```

### PHP

#### Parameters

You can pass the following ordered parameters to the WHM header:

| Order | Parameter | Description |
|  --- | --- | --- |
| 1 | *none* | The new interface's title. |
| 2 | `skipsupport` | Hides the Support tab.Set this value to `1` to hide the *Support* tab.Set this value to `0` to display the *Support* tab.If you do not include this flag, it defaults to `0`. |
| 3 | `skipheader` | Hides the interface's header.Set this value to `1` to hide the header. Set this value to `0` to display the header.If you do not include this flag, it defaults to `0`. |


#### Example

The following code sets the interface title to *Example Plugin* Interface and displays the *Support* tab, but hides the interface's header:


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