[Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-testing-custom-code)

# Guide to Testing Custom Code - Branding

## Introduction

This guide explains the basics of how to troubleshoot branding issues in the cPanel interface.

This document lists appropriate test steps for most custom code, and helpful information to [troubleshoot common problems](#troubleshoot-common-issues). Make certain that you evaluate the testing requirements of your own code, and allow its functionality to determine the appropriate steps.

Warning:
cPanel Technical Support cannot always assist third-party developers with problems that relate to custom code. For this reason, **always** test your projects **thoroughly** before you attempt to use them on production servers.

## Testing steps

Note:
Because the testing requirements of custom code differ, this document begins with the assumption that you have already discovered problems.

### Check to ensure that the accounts possess the correct permissions

The cPanel interface uses account permissions and ownership to determine which branding to display to each cPanel user.

* You **must** update branding as the `root` user or a reseller.
* When you update branding as a reseller, those branding changes will **only** display to cPanel accounts that that reseller owns.
* To test branding, when you log in to cPanel, you **must** use the reseller account or a cPanel account that that reseller owns.


### Check to ensure that you entered and saved the information correctly

Important:
We recommend that you modify branding settings in WHM's [*Customization*](https://docs.cpanel.net/whm/cpanel/customization/) interface (*WHM >> Home >> cPanel >> Customization*).

To check this, perform one or both of the following steps:

* If you updated branding via the WHM interface, navigate to WHM's [*Customization*](https://docs.cpanel.net/whm/cpanel/customization/) interface (*WHM >> Home >> cPanel >> Customization*) and validate whether the interface displays the desired information. If it does not, enter the correct information and click *Save*.
* If you updated branding directly within the files, check those files to ensure that the correct information exists. For a list of branding file locations, read our [Guide to cPanel Interface Customization and Branding](/guides/guide-to-cpanel-interface-customization-and-branding) documentation.


## Troubleshoot common issues

### Small or warped logos and images

**Problem:**

When you view custom branding in the cPanel interface, your custom logos appear in the wrong size, warped, or stretched.

**Solution:**

Make certain that your logos and other images use the correct image size and file format. For more information about image requirements for branding, read our [Guide to cPanel Interface Customization and Branding](/guides/guide-to-cpanel-interface-customization-and-branding) documentation.