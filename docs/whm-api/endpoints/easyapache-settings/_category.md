# EasyApache Settings

Web Server Configuration / EasyApache Settings

## Return any additional package prefixes, beyond ea.

 - [GET /ea4_get_additional_pkg_prefixes](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_get_additional_pkg_prefixes.md): This function returns any additional package prefixes set up in the /etc/cpanel/ea4/additional-pkg-prefixes/ file.

## Return installed Easyapache 4 packages

 - [GET /ea4_get_currently_installed_packages](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_get_currently_installed_packages.md): This function returns a list of the currently-installed EasyApache 4 packages.

Important:

When you disable the Web Server role, the system disables this function.

## Return EasyApache 4 profiles

 - [GET /ea4_list_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_list_profiles.md): This function returns a list of all EasyApache 4 profiles and the packages that each profile provides.

 Important:

 When you disable the Web Server role, the system disables this function.

## Return ea4-metainfo.json file contents

 - [GET /ea4_metainfo](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_metainfo.md): This function returns the contents of the /etc/cpanel/ea4/ea4-metainfo.json file.

## Return EasyApache 4 recommendations

 - [GET /ea4_recommendations](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_recommendations.md): This function returns any recommendations attached to your installed
EasyApache 4 packages. For more information about the recommendation system,
read our EasyApache 4 Recommendations documentation.

Important:

When you disable the Web Server role, the system disables this function.

## Create EasyApache 4 profile

 - [GET /ea4_save_profile](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_save_profile.md): This function creates an EasyApache 4 profile. This function only writes files to the /etc/cpanel/ea4/profiles/custom/ directory.

Important:

  When you disable the Web Server role, the system disables this function.

## Count domains using EOL PHP versions

 - [GET /eol_php_sites](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/eolphpsites-eol_php_sites.md): This function counts the number of domains across all cPanel users that are using
end-of-life (EOL) PHP versions. It determines EOL status by comparing each domain's
PHP version against the oldest_supported_version value from the
/etc/cpanel/ea4/ea4-metainfo.json file.

