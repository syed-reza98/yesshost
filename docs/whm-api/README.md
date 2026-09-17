# WHM API 1 Complete Documentation Reference

> **Comprehensive cPanel & WHM API 1 Reference, Developer Guides & Server Administration Documentation**  
> **Source:** [cPanel & WHM Developer Portal](https://api.docs.cpanel.net/whm/introduction)  
> **API Version:** `11.138.0.6`  
> **Total Documented Endpoints:** 728 operations across 100 modules  
> **Total Guides & Tutorials:** 97 comprehensive technical guides  
> **OpenAPI 3.0 Specification:** [YAML Specification](spec/whm.openapi.yaml) (3.86 MB) | [JSON Specification](spec/whm.openapi.json) (10.74 MB)  
> **Local Assets:** Stored locally in [`assets/`](assets/) for full offline viewing.

---

## Table of Contents

1. [Architecture & Getting Started](#1-architecture--getting-started)
   - [Overview](#overview)
   - [Port and Protocol Requirements](#port-and-protocol-requirements)
   - [Authentication Methods](#authentication-methods)
   - [Calling WHM API 1 via cURL, Python & Node.js](#calling-whm-api-1)
2. [Core WHM Guides](#2-core-whm-guides)
3. [Developer Guides & Plugin Architecture](#3-developer-guides--plugin-architecture)
4. [Server Administration & System Integration Guides](#4-server-administration--system-integration-guides)
5. [High-Frequency Operations Cheat Sheet](#5-high-frequency-operations-cheat-sheet)
   - [Account Management](#account-management)
   - [Hosting Plans (Packages)](#hosting-plans-packages)
   - [DNS & Domains](#dns--domains)
   - [Backups & Restorations](#backups--restorations)
   - [SSL & Certificates](#ssl--certificates)
   - [Server Status & Metrics](#server-status--metrics)
6. [Complete API Operation Directory (By Category)](#6-complete-api-operation-directory)

---

## 1. Architecture & Getting Started

### Overview
WHM API 1 provides administrative control over cPanel & WHM servers. It allows you to automate tasks such as creating and managing accounts, configuring DNS zones, managing packages, administering SSL certificates, configuring PHP/PHP-FPM, monitoring server health, and more.

### Port and Protocol Requirements
WHM API 1 must be called via the WHM management ports:
* **Port `2087` (Secure HTTPS)**: Recommended for all API interactions.
* **Port `2086` (Insecure HTTP)**: Should be disabled in production.
* **Important**: You **cannot** execute WHM API 1 calls via standard cPanel user ports (`2082`/`2083`) or Webmail ports (`2095`/`2096`).

### Authentication Methods
WHM API 1 supports two primary forms of authentication:

1. **API Tokens (Recommended)**
   Generate an API Token in WHM (*Development » Manage API Tokens*).
   Pass it via the `Authorization` HTTP header:
   ```http
   Authorization: whm <username>:<api_token>
   ```
   *Example:*
   ```http
   Authorization: whm root:INSVHR5CGF22G438OZO5675NO30PPR8A
   ```

2. **Basic Authentication (Legacy/Direct)**
   Pass standard HTTP Basic Authorization:
   ```http
   Authorization: Basic base64(username:password)
   ```

3. **Session Authentication (Temporary / Internal)**
   Obtain a session token via `create_user_session` or `/cpsess##########/` URL path prefix.

---

## 2. Core WHM Guides

| Document | Description | Local File |
| :--- | :--- | :--- |
| **API Tokens in WHM** | API tokens allow you to call WHM API 1 functions outside of a WHM session. You can use API | [tokens.md](guides/tokens.md) |
| **Introduction to WHM API 1** | WHM API 1 accesses the WHM interface's features. You can use this API to perform server ad | [introduction.md](guides/introduction.md) |
| **Use WHM API to call cPanel API 2 and UAPI** | You can call cPanel API and UAPI functions through the WHM API 1. | [use-whm-api-to-call-cpanel-api-and-uapi.md](guides/use-whm-api-to-call-cpanel-api-and-uapi.md) |
| **WHM API 1 Filter Output** | You can use additional variables to filter WHM API 1 output. | [filter-output.md](guides/filter-output.md) |
| **WHM API 1 Output Columns** | You can limit the results of WHM API version 1 functions to display selected columns with  | [output-columns.md](guides/output-columns.md) |
| **WHM API 1 Paginate Output** | You can use additional variables to paginate WHM API 1 output. | [paginate-output.md](guides/paginate-output.md) |
| **WHM API 1 Sort Output** | You can use additional variables to sort WHM API 1 output. | [sort-output.md](guides/sort-output.md) |

---

## 3. Developer Guides & Plugin Architecture

Guides and tutorials for WHM plugin development, AppConfig registration, DynamicUI, and ACLs:

| Guide / Tutorial | Description | Local File |
| :--- | :--- | :--- |
| **Guide to API Authentication - API Tokens in WHM** | [Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-a | [guide-to-api-authentication-api-tokens-in-whm.md](guides/dev-guides/guide-to-api-authentication-api-tokens-in-whm.md) |
| **Guide to Testing Custom Code - WHM API 1 Calls** | [Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-test | [guide-to-testing-custom-code-whm-api-calls.md](guides/dev-guides/guide-to-testing-custom-code-whm-api-calls.md) |
| **Guide to WHM Plugins** | [Development Guides Home](/guides) | [guide-to-whm-plugins.md](guides/dev-guides/guide-to-whm-plugins.md) |
| **Guide to WHM Plugins - ACL Reference Chart** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-acl-reference-chart.md](guides/dev-guides/guide-to-whm-plugins-acl-reference-chart.md) |
| **Guide to WHM Plugins - Access Control Lists** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-access-control-lists.md](guides/dev-guides/guide-to-whm-plugins-access-control-lists.md) |
| **Guide to WHM Plugins - Add Plugins** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-add-plugins.md](guides/dev-guides/guide-to-whm-plugins-add-plugins.md) |
| **Guide to WHM Plugins - AppConfig Checks** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-appconfig-checks.md](guides/dev-guides/guide-to-whm-plugins-appconfig-checks.md) |
| **Guide to WHM Plugins - AppConfig Configuration File** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-appconfig-configuration-file.md](guides/dev-guides/guide-to-whm-plugins-appconfig-configuration-file.md) |
| **Guide to WHM Plugins - AppConfig Registration** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-appconfig-registration.md](guides/dev-guides/guide-to-whm-plugins-appconfig-registration.md) |
| **Guide to WHM Plugins - Installation Scripts** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-installation-scripts.md](guides/dev-guides/guide-to-whm-plugins-installation-scripts.md) |
| **Guide to WHM Plugins - Interfaces** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-interfaces.md](guides/dev-guides/guide-to-whm-plugins-interfaces.md) |
| **Guide to WHM Plugins - Plugin Files** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-plugin-files.md](guides/dev-guides/guide-to-whm-plugins-plugin-files.md) |
| **Guide to WHM Plugins - The ACL Metadata Perl Module** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-the-acl-metadata-perl-module.md](guides/dev-guides/guide-to-whm-plugins-the-acl-metadata-perl-module.md) |
| **Guide to WHM Plugins - The ACL Object Perl Module** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-the-acl-object-perl-module.md](guides/dev-guides/guide-to-whm-plugins-the-acl-object-perl-module.md) |
| **Guide to WHM Plugins - The AppConfig System** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-the-appconfig-system.md](guides/dev-guides/guide-to-whm-plugins-the-appconfig-system.md) |
| **Guide to WHM Plugins - Uninstall Plugins** | [Development Guides Home](/guides) >> [Guide to WHM Plugins](/guides/guide-to-whm-plugins/ | [guide-to-whm-plugins-uninstall-plugins.md](guides/dev-guides/guide-to-whm-plugins-uninstall-plugins.md) |
| **Guide to WHM dynamicui Files** | [Development Guides Home](/guides) | [guide-to-whm-dynamicui-files.md](guides/dev-guides/guide-to-whm-dynamicui-files.md) |
| **Quickstart Development Guide - WHM** | [Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-de | [quickstart-development-guide-whm.md](guides/dev-guides/quickstart-development-guide-whm.md) |
| **Tutorial - Create a New WHM Interface in PHP** | [Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-de | [tutorial-create-a-new-whm-interface-in-php.md](guides/dev-guides/tutorial-create-a-new-whm-interface-in-php.md) |
| **Tutorial - Create a New WHM Interface in Template Toolkit** | [Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-de | [tutorial-create-a-new-whm-interface-in-template-toolkit.md](guides/dev-guides/tutorial-create-a-new-whm-interface-in-template-toolkit.md) |
| **Tutorial - Create a WHM Plugin** | [Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-de | [tutorial-create-a-whm-plugin.md](guides/dev-guides/tutorial-create-a-whm-plugin.md) |
| **Tutorial - Register a WHM Plugin with AppConfig** | [Development Guides Home](/guides) >> [Quickstart Development Guide](/guides/quickstart-de | [tutorial-register-a-whm-plugin-with-appconfig.md](guides/dev-guides/tutorial-register-a-whm-plugin-with-appconfig.md) |

---

## 4. Server Administration & System Integration Guides

Comprehensive documentation for server hooks, privilege escalation, AutoSSL providers, custom pkgacct components, and authentication architecture:

| Guide | Description | Local File |
| :--- | :--- | :--- |
| **Guide to API Authentication** | [Development Guides Home](/guides) | [guide-to-api-authentication.md](guides/admin-guides/guide-to-api-authentication.md) |
| **Guide to API Authentication - API Tokens in WHM** | [Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-a | [guide-to-api-authentication_guide-to-api-authentication-api-tokens-in-whm.md](guides/admin-guides/guide-to-api-authentication_guide-to-api-authentication-api-tokens-in-whm.md) |
| **Guide to API Authentication - Access Hash Authentication** | [Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-a | [guide-to-api-authentication_guide-to-api-authentication-access-hash-authentication.md](guides/admin-guides/guide-to-api-authentication_guide-to-api-authentication-access-hash-authentication.md) |
| **Guide to API Authentication - Browser-Based Authentication** | [Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-a | [guide-to-api-authentication_guide-to-api-authentication-browser-based-authentication.md](guides/admin-guides/guide-to-api-authentication_guide-to-api-authentication-browser-based-authentication.md) |
| **Guide to API Authentication - Secure Remote Logins** | [Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-a | [guide-to-api-authentication_guide-to-api-authentication-secure-remote-logins.md](guides/admin-guides/guide-to-api-authentication_guide-to-api-authentication-secure-remote-logins.md) |
| **Guide to API Authentication - Single Sign On** | [Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-a | [guide-to-api-authentication_guide-to-api-authentication-single-sign-on.md](guides/admin-guides/guide-to-api-authentication_guide-to-api-authentication-single-sign-on.md) |
| **Guide to API Authentication - Two-Factor Authentication** | [Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-a | [guide-to-api-authentication_guide-to-api-authentication-two-factor-authentication.md](guides/admin-guides/guide-to-api-authentication_guide-to-api-authentication-two-factor-authentication.md) |
| **Guide to API Authentication - Username and Password Authentication** | [Development Guides Home](/guides) >> [Guide to API Authentication](/guides/guide-to-api-a | [guide-to-api-authentication_guide-to-api-authentication-username-and-password-authentication.md](guides/admin-guides/guide-to-api-authentication_guide-to-api-authentication-username-and-password-authentication.md) |
| **Guide to API Privilege Escalation** | [Development Guides Home](/guides) | [guide-to-api-privilege-escalation.md](guides/admin-guides/guide-to-api-privilege-escalation.md) |
| **Guide to API Privilege Escalation - Application Files** | [Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to | [guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-application-files.md](guides/admin-guides/guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-application-files.md) |
| **Guide to API Privilege Escalation - Call Your Application** | [Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to | [guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-call-your-application.md](guides/admin-guides/guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-call-your-application.md) |
| **Guide to API Privilege Escalation - Configuration Files** | [Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to | [guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-configuration-files.md](guides/admin-guides/guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-configuration-files.md) |
| **Guide to API Privilege Escalation - Object Methods** | [Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to | [guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-object-methods.md](guides/admin-guides/guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-object-methods.md) |
| **Guide to API Privilege Escalation - The Admin Module Method** | [Development Guides Home](/guides) >> [Guide to API Privilege Escalation](/guides/guide-to | [guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-the-admin-module-method.md](guides/admin-guides/guide-to-api-privilege-escalation_guide-to-api-privilege-escalation-the-admin-module-method.md) |
| **Guide to Custom Pkgacct Components** | [Development Guides Home](/guides) | [guide-to-custom-pkgacct-components.md](guides/admin-guides/guide-to-custom-pkgacct-components.md) |
| **Guide to Custom Service Notifications** | [Development Guides Home](/guides) | [guide-to-custom-service-notifications.md](guides/admin-guides/guide-to-custom-service-notifications.md) |
| **Guide to Custom dnsadmin Plugins** | [Development Guides Home](/guides) | [guide-to-custom-dnsadmin-plugins.md](guides/admin-guides/guide-to-custom-dnsadmin-plugins.md) |
| **Guide to Custom dnsadmin Plugins - Node Configuration Files** | [Development Guides Home](/guides) >> [Guide to Custom dnsadmin Plugins](/guides/guide-to- | [guide-to-custom-dnsadmin-plugins_guide-to-custom-dnsadmin-plugins-node-configuration-files.md](guides/admin-guides/guide-to-custom-dnsadmin-plugins_guide-to-custom-dnsadmin-plugins-node-configuration-files.md) |
| **Guide to Custom dnsadmin Plugins - The Remote Module** | [Development Guides Home](/guides) >> [Guide to Custom dnsadmin Plugins](/guides/guide-to- | [guide-to-custom-dnsadmin-plugins_guide-to-custom-dnsadmin-plugins-the-remote-module.md](guides/admin-guides/guide-to-custom-dnsadmin-plugins_guide-to-custom-dnsadmin-plugins-the-remote-module.md) |
| **Guide to Custom dnsadmin Plugins - The Remote Module Command Methods** | [Development Guides Home](/guides) >> [Guide to Custom dnsadmin Plugins](/guides/guide-to- | [guide-to-custom-dnsadmin-plugins_guide-to-custom-dnsadmin-plugins-the-remote-module-command-methods.md](guides/admin-guides/guide-to-custom-dnsadmin-plugins_guide-to-custom-dnsadmin-plugins-the-remote-module-command-methods.md) |
| **Guide to Custom dnsadmin Plugins - The Setup Module** | [Development Guides Home](/guides) >> [Guide to Custom dnsadmin Plugins](/guides/guide-to- | [guide-to-custom-dnsadmin-plugins_guide-to-custom-dnsadmin-plugins-the-setup-module.md](guides/admin-guides/guide-to-custom-dnsadmin-plugins_guide-to-custom-dnsadmin-plugins-the-setup-module.md) |
| **Guide to External Authentication** | [Development Guides Home](/guides) | [guide-to-external-authentication.md](guides/admin-guides/guide-to-external-authentication.md) |
| **Guide to External Authentication - OpenID Connect** | [Development Guides Home](/guides) >> [Guide to External Authentication](/guides/guide-to- | [guide-to-external-authentication_guide-to-external-authentication-openid-connect.md](guides/admin-guides/guide-to-external-authentication_guide-to-external-authentication-openid-connect.md) |
| **Guide to Package Extensions** | [Development Guides Home](/guides) | [guide-to-package-extensions.md](guides/admin-guides/guide-to-package-extensions.md) |
| **Guide to Package Extensions - Data Behavior and Changes** | [Development Guides Home](/guides) >> [Guide to Package Extensions](/guides/guide-to-packa | [guide-to-package-extensions_guide-to-package-extensions-data-behavior-and-changes.md](guides/admin-guides/guide-to-package-extensions_guide-to-package-extensions-data-behavior-and-changes.md) |
| **Guide to Package Extensions - Default Settings Files** | [Development Guides Home](/guides) >> [Guide to Package Extensions](/guides/guide-to-packa | [guide-to-package-extensions_guide-to-package-extensions-default-settings-files.md](guides/admin-guides/guide-to-package-extensions_guide-to-package-extensions-default-settings-files.md) |
| **Guide to Package Extensions - Template Files** | [Development Guides Home](/guides) >> [Guide to Package Extensions](/guides/guide-to-packa | [guide-to-package-extensions_guide-to-package-extensions-template-files.md](guides/admin-guides/guide-to-package-extensions_guide-to-package-extensions-template-files.md) |
| **Guide to Report Receiver APIs for the ModSecurity Rule Reports** | [Development Guides Home](/guides) | [guide-to-report-receiver-apis-for-the-modsecurity-rule-reports.md](guides/admin-guides/guide-to-report-receiver-apis-for-the-modsecurity-rule-reports.md) |
| **Guide to Standardized Hooks** | [Development Guides Home](/guides) | [guide-to-standardized-hooks.md](guides/admin-guides/guide-to-standardized-hooks.md) |
| **Guide to Standardized Hooks - Checks** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-checks.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-checks.md) |
| **Guide to Standardized Hooks - ConvertAddon Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-convertaddon-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-convertaddon-functions.md) |
| **Guide to Standardized Hooks - Cpanel Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-cpanel-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-cpanel-functions.md) |
| **Guide to Standardized Hooks - Debug Mode** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-debug-mode.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-debug-mode.md) |
| **Guide to Standardized Hooks - DiskQuota Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-diskquota-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-diskquota-functions.md) |
| **Guide to Standardized Hooks - Exceptions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-exceptions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-exceptions.md) |
| **Guide to Standardized Hooks - Hook Action Code** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hook-action-code.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hook-action-code.md) |
| **Guide to Standardized Hooks - Hookable Events** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events.md) |
| **Guide to Standardized Hooks - Hookable Events in Custom Modules** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events-in-custom-modules.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events-in-custom-modules.md) |
| **Guide to Standardized Hooks - Log::Retention Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-log-retention-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-log-retention-functions.md) |
| **Guide to Standardized Hooks - ModSecurity Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-modsecurity-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-modsecurity-functions.md) |
| **Guide to Standardized Hooks - Passwd Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-passwd-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-passwd-functions.md) |
| **Guide to Standardized Hooks - PkgAcct Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-pkgacct-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-pkgacct-functions.md) |
| **Guide to Standardized Hooks - Privilege Escalation** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-privilege-escalation.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-privilege-escalation.md) |
| **Guide to Standardized Hooks - RPM::Versions Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-rpm-versions-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-rpm-versions-functions.md) |
| **Guide to Standardized Hooks - Rollbacks** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-rollbacks.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-rollbacks.md) |
| **Guide to Standardized Hooks - Scripts Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-scripts-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-scripts-functions.md) |
| **Guide to Standardized Hooks - Stats Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-stats-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-stats-functions.md) |
| **Guide to Standardized Hooks - System Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-system-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-system-functions.md) |
| **Guide to Standardized Hooks - The describe() Method** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-the-describe-method.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-the-describe-method.md) |
| **Guide to Standardized Hooks - The manage_hooks Utility** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-the-manage-hooks-utility.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-the-manage-hooks-utility.md) |
| **Guide to Standardized Hooks - Whostmgr Functions** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-whostmgr-functions.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-whostmgr-functions.md) |
| **Guide to Standardized Hooks - modsec_vendor Script** | [Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-stand | [guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-modsec-vendor-script.md](guides/admin-guides/guide-to-standardized-hooks_guide-to-standardized-hooks-hookable-events_guide-to-standardized-hooks-modsec-vendor-script.md) |
| **Guide to Testing Custom Code** | [Development Guides Home](/guides) | [guide-to-testing-custom-code.md](guides/admin-guides/guide-to-testing-custom-code.md) |
| **Guide to Testing Custom Code - API Authentication** | [Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-test | [guide-to-testing-custom-code_guide-to-testing-custom-code-api-authentication.md](guides/admin-guides/guide-to-testing-custom-code_guide-to-testing-custom-code-api-authentication.md) |
| **Guide to Testing Custom Code - Branding** | [Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-test | [guide-to-testing-custom-code_guide-to-testing-custom-code-branding.md](guides/admin-guides/guide-to-testing-custom-code_guide-to-testing-custom-code-branding.md) |
| **Guide to Testing Custom Code - Standardized Hooks** | [Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-test | [guide-to-testing-custom-code_guide-to-testing-custom-code-standardized-hooks.md](guides/admin-guides/guide-to-testing-custom-code_guide-to-testing-custom-code-standardized-hooks.md) |
| **Guide to Testing Custom Code - WHM API 1 Calls** | [Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-test | [guide-to-testing-custom-code_guide-to-testing-custom-code-whm-api-calls.md](guides/admin-guides/guide-to-testing-custom-code_guide-to-testing-custom-code-whm-api-calls.md) |
| **Guide to Testing Custom Code - cPanel API and UAPI Calls** | [Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-test | [guide-to-testing-custom-code_guide-to-testing-custom-code-cpanel-api-and-uapi-calls.md](guides/admin-guides/guide-to-testing-custom-code_guide-to-testing-custom-code-cpanel-api-and-uapi-calls.md) |
| **Guide to Testing Custom Code - cPanel Plugin Registration** | [Development Guides Home](/guides) >> [Guide to Testing Custom Code](/guides/guide-to-test | [guide-to-testing-custom-code_guide-to-testing-custom-code-cpanel-plugin-registration.md](guides/admin-guides/guide-to-testing-custom-code_guide-to-testing-custom-code-cpanel-plugin-registration.md) |
| **Guide to Third-Party AutoSSL Provider Modules** | [Development Guides Home](/guides) | [guide-to-third-party-autossl-provider-modules.md](guides/admin-guides/guide-to-third-party-autossl-provider-modules.md) |
| **Guide to Transfer and Restore API Functions** | [Development Guides Home](/guides) | [guide-to-transfer-and-restore-api-functions.md](guides/admin-guides/guide-to-transfer-and-restore-api-functions.md) |
| **Guide to Transfer and Restore API Functions - Check the Transfer Session** | [Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guide | [guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-check-the-transfer-session.md](guides/admin-guides/guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-check-the-transfer-session.md) |
| **Guide to Transfer and Restore API Functions - Create the Transfer Session** | [Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guide | [guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-create-the-transfer-session.md](guides/admin-guides/guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-create-the-transfer-session.md) |
| **Guide to Transfer and Restore API Functions - Monitor the Transfer Session** | [Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guide | [guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-monitor-the-transfer-session.md](guides/admin-guides/guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-monitor-the-transfer-session.md) |
| **Guide to Transfer and Restore API Functions - Pause and Restart the Transfer Session** | [Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guide | [guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-pause-and-restart-the-transfer-session.md](guides/admin-guides/guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-pause-and-restart-the-transfer-session.md) |
| **Guide to Transfer and Restore API Functions - Plan the Transfer Session** | [Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guide | [guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-plan-the-transfer-session.md](guides/admin-guides/guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-plan-the-transfer-session.md) |
| **Guide to Transfer and Restore API Functions - Queue the Transfer Item** | [Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guide | [guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-queue-the-transfer-item.md](guides/admin-guides/guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-queue-the-transfer-item.md) |
| **Guide to Transfer and Restore API Functions - Start the Transfer Session** | [Development Guides Home](/guides) >> [Guide to Transfer and Restore API Functions](/guide | [guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-start-the-transfer-session.md](guides/admin-guides/guide-to-transfer-and-restore-api-functions_guide-to-transfer-and-restore-api-functions-start-the-transfer-session.md) |

---

## 5. High-Frequency Operations Cheat Sheet

Below is a quick-reference index of the most commonly needed WHM API functions when building hosting billing systems, account provisioning platforms, and server management dashboards.

### Account Management

| Function | Method | Description | Documentation |
| :--- | :--- | :--- | :--- |
| `createacct` | `GET /createacct` | Create a new cPanel account, domain, password & limits | [createacct](endpoints/account-creation/accounts-createacct.md) |
| `listaccts` | `GET /listaccts` | Return list of all active cPanel accounts on server | [listaccts](endpoints/account-management/accounts-listaccts.md) |
| `accountsummary` | `GET /accountsummary` | Return detailed information for a single cPanel account | [accountsummary](endpoints/account-management/accounts-accountsummary.md) |
| `modifyacct` | `GET /modifyacct` | Modify cPanel account parameters, limits, or plan | [modifyacct](endpoints/account-management/accounts-modifyacct.md) |
| `suspendacct` | `GET /suspendacct` | Suspend a cPanel account (e.g., overdue invoice) | [suspendacct](endpoints/suspensions/accounts-suspendacct.md) |
| `unsuspendacct` | `GET /unsuspendacct` | Unsuspend a previously suspended account | [unsuspendacct](endpoints/suspensions/accounts-unsuspendacct.md) |
| `killacct` | `GET /killacct` | Terminate and permanently delete a cPanel account | [killacct](endpoints/account-management/accounts-killacct.md) |

### Hosting Plans (Packages)

| Function | Method | Description | Documentation |
| :--- | :--- | :--- | :--- |
| `listpkgs` | `GET /listpkgs` | List all available hosting packages/plans | [listpkgs](endpoints/hosting-plans/packages-listpkgs.md) |
| `addpkg` | `GET /addpkg` | Create a new hosting package with resource quotas | [addpkg](endpoints/hosting-plans/packages-addpkg.md) |
| `editpkg` | `GET /editpkg` | Update disk quota, bandwidth, email limits on a package | [editpkg](endpoints/hosting-plans/packages-editpkg.md) |
| `killpkg` | `GET /killpkg` | Delete a hosting package | [killpkg](endpoints/hosting-plans/packages-killpkg.md) |

### DNS & Domains

| Function | Method | Description | Documentation |
| :--- | :--- | :--- | :--- |
| `dumpzone` | `GET /dumpzone` | Retrieve DNS zone file records for a domain | [dumpzone](endpoints/dns-zones/dns-dumpzone.md) |
| `adddns` | `GET /adddns` | Add a new DNS zone file | [adddns](endpoints/dns-zones/dns-adddns.md) |
| `editzonerecord` | `GET /editzonerecord` | Edit a specific DNS record (A, CNAME, MX, TXT) | [editzonerecord](endpoints/dns-zones/dns-editzonerecord.md) |
| `killdns` | `GET /killdns` | Remove a DNS zone from the server | [killdns](endpoints/dns-zones/dns-killdns.md) |
| `listzones` | `GET /listzones` | List all DNS zones on the server | [listzones](endpoints/dns-zones/dns-listzones.md) |

### Backups & Restorations

| Function | Method | Description | Documentation |
| :--- | :--- | :--- | :--- |
| `restoreaccount` | `GET /restoreaccount` | Restore an account from a cpmove or backup file | [restoreaccount](endpoints/restore-account/backup-restoreaccount.md) |
| `restore_queue_add_task` | `GET /restore_queue_add_task` | Queue an account restoration background job | [restore_queue_add_task](endpoints/restore-account/backup-restore_queue_add_task.md) |
| `backup_set_env` | `GET /backup_set_env` | Configure server automated backup schedule & storage | [backup_set_env](endpoints/backup-settings/backup-backup_set_env.md) |

### SSL & Certificates

| Function | Method | Description | Documentation |
| :--- | :--- | :--- | :--- |
| `fetch_ssl_certificates_for_fqdns` | `GET /fetch_ssl_certificates_for_fqdns` | Get SSL certificates for hostnames | [fetch_ssl](endpoints/auto-generated-certificates/ssl-fetch_ssl_certificates_for_fqdns.md) |
| `installssl` | `GET /installssl` | Install a CRT and private key on a domain | [installssl](endpoints/ssl-server-settings/ssl-installssl.md) |

### Server Status & Metrics

| Function | Method | Description | Documentation |
| :--- | :--- | :--- | :--- |
| `version` | `GET /version` | Return cPanel & WHM software version | [version](endpoints/system-information/sys-version.md) |
| `systemloadavg` | `GET /systemloadavg` | Return 1, 5, 15 minute server load averages | [systemloadavg](endpoints/system-information/sys-systemloadavg.md) |
| `gethostname` | `GET /gethostname` | Get the server's primary FQDN hostname | [gethostname](endpoints/server-settings/sys-gethostname.md) |
| `servicestatus` | `GET /servicestatus` | Check Apache, MySQL, Exim, BIND service status | [servicestatus](endpoints/services/sys-servicestatus.md) |

---

## 6. Complete API Operation Directory


### 360 Monitoring (`endpoints/360-monitoring/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **360 Monitoring** | `-` | The 360 Monitoring module for WHM API 1. | [_category.md](endpoints/360-monitoring/_category.md) |
| **Register the server with 360 Monitoring** | `GET /360Monitoring/register_server_with_360_monitoring` | This function registers the server with 360 Monitoring. | [360monitoring-register_server_with_360_monitoring.md](endpoints/360-monitoring/360monitoring-register_server_with_360_monitoring.md) |
| **Update 360 Monitoring agent polling settings** | `GET /360Monitoring/set_360_agent_polling` | This function updates agent360 polling settings. | [360monitoring-set_360_agent_polling.md](endpoints/360-monitoring/360monitoring-set_360_agent_polling.md) |

### Account Creation (`endpoints/account-creation/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Account Creation** | `-` | Accounts Creation / Accounts | [_category.md](endpoints/account-creation/_category.md) |
| **Create cPanel account** | `GET /createacct` | This function creates a cPanel account and sets up its domain information. | [accounts-createacct.md](endpoints/account-creation/accounts-createacct.md) |
| **Return cPanel accounts total number** | `GET /get_current_users_count` | This function returns the number of cPanel accounts on the server. | [accounts-get_current_users_count.md](endpoints/account-creation/accounts-get_current_users_count.md) |
| **Return maximum accounts for license** | `GET /get_maximum_users` | This function returns the maximum number of cPanel accounts that the server's lice... | [accounts-get_maximum_users.md](endpoints/account-creation/accounts-get_maximum_users.md) |
| **Validate new cPanel account username** | `GET /verify_new_username` | This function checks for username conflicts during account creation. | [nameconflict-verify_new_username.md](endpoints/account-creation/nameconflict-verify_new_username.md) |

### Account Enhancement Limit (`endpoints/account-enhancement-limit/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Account Enhancement Limit** | `-` | Resellers / Account Enhancement Limit | [_category.md](endpoints/account-enhancement-limit/_category.md) |
| **Return account enhancement limits** | `GET /list_enhancement_limits` | This function returns a reseller's account enhancement limits. | [accountenhancements-list_enhancement_limits.md](endpoints/account-enhancement-limit/accountenhancements-list_enhancement_limits.md) |
| **Update account enhancement limit** | `GET /set_enhancement_limit` | This function sets account enhancement limits for a reseller account. | [accountenhancements-set_enhancement_limit.md](endpoints/account-enhancement-limit/accountenhancements-set_enhancement_limit.md) |

### Account Enhancements (`endpoints/account-enhancements/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Account Enhancements** | `-` | Accounts / Account Enhancements | [_category.md](endpoints/account-enhancements/_category.md) |
| **Assign Account Enhancement** | `GET /assign_account_enhancement` | This function assigns an Account Enhancement to a cPanel account. | [accountenhancements-assign_account_enhancement.md](endpoints/account-enhancements/accountenhancements-assign_account_enhancement.md) |
| **Create Account Enhancement** | `GET /create_account_enhancement` | This function creates a new account enhancement. | [accountenhancements-create_account_enhancement.md](endpoints/account-enhancements/accountenhancements-create_account_enhancement.md) |
| **Remove an Account Enhancement** | `GET /delete_account_enhancement` | This function removes an account enhancement. | [accountenhancements-delete_account_enhancement.md](endpoints/account-enhancements/accountenhancements-delete_account_enhancement.md) |
| **Return Account Enhancements** | `GET /list_account_enhancements` | This function retrieves all existing account enhancements on the system. | [accountenhancements-list_account_enhancements.md](endpoints/account-enhancements/accountenhancements-list_account_enhancements.md) |
| **Unassign Account Enhancement** | `GET /unassign_account_enhancement` | This function removes an Account Enhancement from a cPanel account. | [accountenhancements-unassign_account_enhancement.md](endpoints/account-enhancements/accountenhancements-unassign_account_enhancement.md) |
| **Update Account Enhancement** | `GET /modify_account_enhancement` | This function modifies an account enhancement. | [accountenhancements-modify_account_enhancement.md](endpoints/account-enhancements/accountenhancements-modify_account_enhancement.md) |

### Account Limits (`endpoints/account-limits/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Account Limits** | `-` | Resellers / Account Limits | [_category.md](endpoints/account-limits/_category.md) |
| **Update reseller's bandwidth and disk quotas** | `GET /setresellerlimits` | This function sets a reseller's bandwidth and disk quotas. | [resellers-setresellerlimits.md](endpoints/account-limits/resellers-setresellerlimits.md) |
| **Update reseller's hosting plan limits** | `GET /setresellerpackagelimit` | This function limits the packages that a reseller assigns to cPanel accounts. | [resellers-setresellerpackagelimit.md](endpoints/account-limits/resellers-setresellerpackagelimit.md) |

### Account Management (`endpoints/account-management/`)

Contains **18** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Account Management** | `-` | Accounts / Account Management | [_category.md](endpoints/account-management/_category.md) |
| **Change document root for cPanel account primary domain** | `GET /set_primary_domain_docroot` | This function changes the document root for a cPanel account's primary domain. | [accounts-set_primary_domain_docroot.md](endpoints/account-management/accounts-set_primary_domain_docroot.md) |
| **Delete cPanel account** | `GET /removeacct` | This function deletes a cPanel or WHM account. | [accounts-removeacct.md](endpoints/account-management/accounts-removeacct.md) |
| **Enable or disable Digest Authentication** | `GET /set_digest_auth` | This function enables or disables Digest Authentication for an account. Windows Vi... | [sys-set_digest_auth.md](endpoints/account-management/sys-set_digest_auth.md) |
| **Get upgrade opportunities** | `GET /get_upgrade_opportunities` | This function lists accounts that could benefit from upgrading to a different pack... | [accounts-get_upgrade_opportunities.md](endpoints/account-management/accounts-get_upgrade_opportunities.md) |
| **Remove UID or GID from tracked list** | `GET /untrack_acct_id` | This function removes a user identification number (UID) or group | [accounts-untrack_acct_id.md](endpoints/account-management/accounts-untrack_acct_id.md) |
| **Return cPanel account summary** | `GET /accountsummary` | This function retrieves a summary of a user's account. | [accounts-accountsummary.md](endpoints/account-management/accounts-accountsummary.md) |
| **Return cPanel account system privileges** | `GET /myprivs` | This function retrieves the current user's Access Control List (ACL) privileges. | [acls-myprivs.md](endpoints/account-management/acls-myprivs.md) |
| **Return cPanel accounts** | `GET /listaccts` | This function lists the accounts on the server. | [accounts-listaccts.md](endpoints/account-management/accounts-listaccts.md) |
| **Return data from NVData file** | `POST /personalization_get` | This function retrieves the data from an NVData file on disk. cPanel | [personalization-personalization_get.md](endpoints/account-management/personalization-personalization_get.md) |
| **Return home directories list** | `GET /get_homedir_roots` | This function returns all the directories where the system stores | [accounts-get_homedir_roots.md](endpoints/account-management/accounts-get_homedir_roots.md) |
| **Return root and cPanel accounts** | `GET /list_users` | This function lists the cPanel user accounts and the root user on the server. | [accounts-list_users.md](endpoints/account-management/accounts-list_users.md) |
| **Save data to NVData file** | `POST /personalization_set` | This function is used to save personalization data for a WHM user to a | [personalization-personalization_set.md](endpoints/account-management/personalization-personalization_set.md) |
| **Update cPanel account** | `GET /modifyacct` | This function modifies a cPanel account. | [accounts-modifyacct.md](endpoints/account-management/accounts-modifyacct.md) |
| **Update multiple cPanel accounts** | `GET /massmodifyacct` | This function modifies multiple cPanel accounts. | [accounts-massmodifyacct.md](endpoints/account-management/accounts-massmodifyacct.md) |
| **Update user hosting plan** | `GET /changepackage` | This function changes a cPanel account's hosting plan (package). | [accounts-changepackage.md](endpoints/account-management/accounts-changepackage.md) |
| **Validate MySQL Configuration file** | `GET /has_mycnf_for_cpuser` | This function checks whether a cPanel user's home directory contains | [sys-has_mycnf_for_cpuser.md](endpoints/account-management/sys-has_mycnf_for_cpuser.md) |
| **Validate cPanel account Digest Authentication** | `GET /has_digest_auth` | This function checks whether Digest Authentication is enabled for | [sys-has_digest_auth.md](endpoints/account-management/sys-has_digest_auth.md) |

### Account Permissions (`endpoints/account-permissions/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Account Permissions** | `-` | Resellers / Account Permissions | [_category.md](endpoints/account-permissions/_category.md) |
| **Create or update privilege list and settings** | `GET /saveacllist` | This function creates or modifies an Access Control List (ACL). | [acls-saveacllist.md](endpoints/account-permissions/acls-saveacllist.md) |
| **Create or update reseller privilege settings** | `GET /setacls` | This function creates or modifies an Access Control List (ACL). | [resellers-setacls.md](endpoints/account-permissions/resellers-setacls.md) |
| **Return all privilege lists and settings** | `GET /listacls` | This function lists the server's | [acls-listacls.md](endpoints/account-permissions/acls-listacls.md) |

### Account Settings (`endpoints/account-settings/`)

Contains **10** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Account Settings** | `-` | Resellers / Account Settings | [_category.md](endpoints/account-settings/_category.md) |
| **Add IP addresses to reseller** | `GET /setresellerips` | This function adds IP addresses to a reseller's account. | [resellers-setresellerips.md](endpoints/account-settings/resellers-setresellerips.md) |
| **Return all resellers** | `GET /listresellers` | This function lists the reseller accounts on the server. | [resellers-listresellers.md](endpoints/account-settings/resellers-listresellers.md) |
| **Return current user's public contact information** | `GET /get_public_contact` | This function retrieves an account's public contact information. | [publiccontact-get_public_contact.md](endpoints/account-settings/publiccontact-get_public_contact.md) |
| **Return reseller's available IP addresses** | `GET /getresellerips` | This function lists a reseller's available IP addresses. | [resellers-getresellerips.md](endpoints/account-settings/resellers-getresellerips.md) |
| **Return reseller's information** | `GET /resellerstats` | This function lists data about a reseller's accounts. | [resellers-resellerstats.md](endpoints/account-settings/resellers-resellerstats.md) |
| **Return reseller's owned accounts' information** | `GET /acctcounts` | This function lists a reseller's total accounts, suspended accounts, and account c... | [resellers-acctcounts.md](endpoints/account-settings/resellers-acctcounts.md) |
| **Update current user's public contact information** | `GET /set_public_contact` | This function sets an account's public contact information. | [publiccontact-set_public_contact.md](endpoints/account-settings/publiccontact-set_public_contact.md) |
| **Update reseller's assigned nameservers** | `GET /setresellernameservers` | This function assigns nameservers to a reseller's account. | [resellers-setresellernameservers.md](endpoints/account-settings/resellers-setresellernameservers.md) |
| **Update reseller's main IP address** | `GET /setresellermainip` | This function assigns a main IP address to a reseller's account. | [resellers-setresellermainip.md](endpoints/account-settings/resellers-setresellermainip.md) |

### Api Authentication (`endpoints/api-authentication/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **API Authentication** | `-` | Integrations / API Authentication | [_category.md](endpoints/api-authentication/_category.md) |
| **Return remote access file's hash (deprecated)** | `GET /get_remote_access_hash` | This function retrieves a hash from a remote access file. | [resellers-get_remote_access_hash.md](endpoints/api-authentication/resellers-get_remote_access_hash.md) |

### Api Execution (`endpoints/api-execution/`)

Contains **6** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **API Execution** | `-` | API Development Tools / API Execution | [_category.md](endpoints/api-execution/_category.md) |
| **Enable CORS HTTP requests** | `GET /cors_proxy_get` | This function allows your system to perform Cross-Origin Resource Sharing (CORS) H... | [corsproxy-cors_proxy_get.md](endpoints/api-execution/corsproxy-cors_proxy_get.md) |
| **Run UAPI function through WHM API** | `GET /uapi_cpanel` | This function calls a UAPI function through the WHM API. This function's output wi... | [cpanel-uapi_cpanel.md](endpoints/api-execution/cpanel-uapi_cpanel.md) |
| **Run cPanel API or UAPI function** | `GET /cpanel` | You can call cPanel API and UAPI functions through the WHM API. | [other-cpanel.md](endpoints/api-execution/other-cpanel.md) |
| **Run multiple WHM API 1 functions** | `GET /batch` | This function combines calls for multiple WHM API 1 functions. | [other-batch.md](endpoints/api-execution/other-batch.md) |
| **Run remote WHM API 1 function** | `GET /execute_remote_whmapi1_with_password` | This function executes WHM API 1 functions on a remote server. | [cpanel-execute_remote_whmapi1_with_password.md](endpoints/api-execution/cpanel-execute_remote_whmapi1_with_password.md) |

### Api Statistics (`endpoints/api-statistics/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **API Statistics** | `-` | API Development Tools / API Statistics | [_category.md](endpoints/api-statistics/_category.md) |
| **Return deprecated cPanel API 1 functions** | `GET /get_api_pages` | This function returns the daily interface use of cPanel API 1 functions. Use this ... | [sys-get_api_pages.md](endpoints/api-statistics/sys-get_api_pages.md) |
| **Return deprecated cPanel API 1 functions by date** | `GET /get_api_calls` | This function returns the cPanel API 1 functions that the system called on specifi... | [sys-get_api_calls.md](endpoints/api-statistics/sys-get_api_calls.md) |

### Api Token Management (`endpoints/api-token-management/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **API Token Management** | `-` | API Development Tools / API Token Management | [_category.md](endpoints/api-token-management/_category.md) |
| **Create API token for Dashboard** | `GET /wp_dashboard_create_api_token` | This function creates a WHM API token for WebPros Dashboard. | [wpdashboard-wp_dashboard_create_api_token.md](endpoints/api-token-management/wpdashboard-wp_dashboard_create_api_token.md) |
| **Create WHM API token** | `GET /api_token_create` | This function creates an API token. You can use API tokens instead of a password | [tokens-api_token_create.md](endpoints/api-token-management/tokens-api_token_create.md) |
| **Disable WHM API token** | `GET /api_token_revoke` | This function revokes an API token from the WHM account. | [tokens-api_token_revoke.md](endpoints/api-token-management/tokens-api_token_revoke.md) |
| **Look up API token details** | `GET /api_token_get_details` | This function looks up an API token’s details based on the token itself. | [tokens-api_token_get_details.md](endpoints/api-token-management/tokens-api_token_get_details.md) |
| **Return WHM API tokens** | `GET /api_token_list` | This function lists a WHM account's API tokens. | [tokens-api_token_list.md](endpoints/api-token-management/tokens-api_token_list.md) |
| **Update WHM API token's settings** | `GET /api_token_update` | This function updates an API token's settings. | [tokens-api_token_update.md](endpoints/api-token-management/tokens-api_token_update.md) |

### Applications (`endpoints/applications/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Applications** | `-` | API Development Tools / Applications | [_category.md](endpoints/applications/_category.md) |
| **Return WHM API 1 functions list** | `GET /applist` | This function lists available WHM API 1 functions. | [other-applist.md](endpoints/applications/other-applist.md) |
| **Return registered applications** | `GET /get_appconfig_application_list` | This function lists registered AppConfig applications. | [sys-get_appconfig_application_list.md](endpoints/applications/sys-get_appconfig_application_list.md) |

### Authentication Providers (`endpoints/authentication-providers/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Authentication Providers** | `-` | Authentication / Authentication Providers | [_category.md](endpoints/authentication-providers/_category.md) |
| **Unregister cPanel account from authentication provider** | `GET /unlink_user_authn_provider` | This function unlinks a cPanel account from an external authentication identity pr... | [accounts-unlink_user_authn_provider.md](endpoints/authentication-providers/accounts-unlink_user_authn_provider.md) |

### Auto Generated Certificates (`endpoints/auto-generated-certificates/`)

Contains **17** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Auto-Generated Certificates** | `-` | SSL Certificates / Auto-Generated Certificates | [_category.md](endpoints/auto-generated-certificates/_category.md) |
| **Disable AutoSSL** | `GET /disable_autossl` | This function disables the AutoSSL feature. | [ssl-disable_autossl.md](endpoints/auto-generated-certificates/ssl-disable_autossl.md) |
| **Disable AutoSSL for domain** | `GET /add_autossl_user_excluded_domains` | This function disables AutoSSL for an account's specified domains. | [ssl-add_autossl_user_excluded_domains.md](endpoints/auto-generated-certificates/ssl-add_autossl_user_excluded_domains.md) |
| **Disable AutoSSL for domain** | `GET /set_autossl_user_excluded_domains` | This function disables AutoSSL for a specific domain on an account. | [ssl-set_autossl_user_excluded_domains.md](endpoints/auto-generated-certificates/ssl-set_autossl_user_excluded_domains.md) |
| **Remove AutoSSL for domain** | `GET /remove_autossl_user_excluded_domains` | This function enables AutoSSL for an account's specified domains. | [ssl-remove_autossl_user_excluded_domains.md](endpoints/auto-generated-certificates/ssl-remove_autossl_user_excluded_domains.md) |
| **Restore AutoSSL registration** | `GET /reset_autossl_provider` | This function resets the AutoSSL registration with a remote AutoSSL provider. | [ssl-reset_autossl_provider.md](endpoints/auto-generated-certificates/ssl-reset_autossl_provider.md) |
| **Return AutoSSL check script cron entry** | `GET /get_autossl_check_schedule` | This function returns the cron entry for the autossl_check.pl AutoSSL certificate ... | [ssl-get_autossl_check_schedule.md](endpoints/auto-generated-certificates/ssl-get_autossl_check_schedule.md) |
| **Return AutoSSL log file's contents** | `GET /get_autossl_log` | This function returns the contents of an AutoSSL log file. | [ssl-get_autossl_log.md](endpoints/auto-generated-certificates/ssl-get_autossl_log.md) |
| **Return AutoSSL log files** | `GET /get_autossl_logs_catalog` | This function lists the AutoSSL feature's log files. | [ssl-get_autossl_logs_catalog.md](endpoints/auto-generated-certificates/ssl-get_autossl_logs_catalog.md) |
| **Return all AutoSSL-excluded domains** | `GET /get_autossl_user_excluded_domains` | This function lists an account's domains the system excludes from AutoSSL. | [ssl-get_autossl_user_excluded_domains.md](endpoints/auto-generated-certificates/ssl-get_autossl_user_excluded_domains.md) |
| **Return available AutoSSL providers** | `GET /get_autossl_providers` | This function lists available AutoSSL providers on the server. | [ssl-get_autossl_providers.md](endpoints/auto-generated-certificates/ssl-get_autossl_providers.md) |
| **Return current user's AutoSSL metadata** | `GET /get_autossl_metadata` | This function retrieves values for the currently authenticated user's AutoSSL's me... | [ssl-get_autossl_metadata.md](endpoints/auto-generated-certificates/ssl-get_autossl_metadata.md) |
| **Start AutoSSL check for all cPanel accounts** | `GET /start_autossl_check_for_all_users` | This function performs an AutoSSL certificate check in the background for all cPan... | [ssl-start_autossl_check_for_all_users.md](endpoints/auto-generated-certificates/ssl-start_autossl_check_for_all_users.md) |
| **Start cPanel account AutoSSL check** | `GET /start_autossl_check_for_one_user` | This function performs an AutoSSL certificate check in the background for a cPanel... | [ssl-start_autossl_check_for_one_user.md](endpoints/auto-generated-certificates/ssl-start_autossl_check_for_one_user.md) |
| **Update AutoSSL metadata** | `GET /set_autossl_metadata` | This function sets values for AutoSSL's metadata keys. This allows you to replace ... | [ssl-set_autossl_metadata.md](endpoints/auto-generated-certificates/ssl-set_autossl_metadata.md) |
| **Update AutoSSL metadata via JSON** | `GET /set_autossl_metadata_key` | This function sets values for AutoSSL's metadata keys. This allows you to replace ... | [ssl-set_autossl_metadata_key.md](endpoints/auto-generated-certificates/ssl-set_autossl_metadata_key.md) |
| **Update the AutoSSL provider** | `GET /set_autossl_provider` | This function sets the provider that the AutoSSL feature uses. | [ssl-set_autossl_provider.md](endpoints/auto-generated-certificates/ssl-set_autossl_provider.md) |

### Backup Destination (`endpoints/backup-destination/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add a backup destination** | `GET /backup_destination_add` | This function adds a backup destination. | [backup-backup_destination_add.md](endpoints/backup-destination/backup-backup_destination_add.md) |
| **Backup Destination** | `-` | Backups / Backup Destination | [_category.md](endpoints/backup-destination/_category.md) |
| **Create Google Drive™ OAuth redirect URI** | `GET /backup_generate_google_oauth_uri` | This function generates a | [backup-backup_generate_google_oauth_uri.md](endpoints/backup-destination/backup-backup_generate_google_oauth_uri.md) |
| **Delete a backup destination** | `GET /backup_destination_delete` | This function removes a backup destination from the backup configuration file. | [backup-backup_destination_delete.md](endpoints/backup-destination/backup-backup_destination_delete.md) |
| **Return Google Drive™ client ID credentials** | `GET /backup_does_client_id_have_google_credentials` | This function returns whether a Google Drive™ client ID credential file exists. | [backup-backup_does_client_id_have_google_credentials.md](endpoints/backup-destination/backup-backup_does_client_id_have_google_credentials.md) |
| **Return a backup destination's settings** | `GET /backup_destination_get` | Use this function to obtain a backup destination's settings. | [backup-backup_destination_get.md](endpoints/backup-destination/backup-backup_destination_get.md) |
| **Return a list of backup destinations** | `GET /backup_destination_list` | This function lists backup destinations. | [backup-backup_destination_list.md](endpoints/backup-destination/backup-backup_destination_list.md) |
| **Update backup destination settings** | `POST /backup_destination_set` | Use this function to edit a backup destination's settings. | [backup-backup_destination_set.md](endpoints/backup-destination/backup-backup_destination_set.md) |
| **Validate a backup destination** | `GET /backup_destination_validate` | This function validates a backup destination. | [backup-backup_destination_validate.md](endpoints/backup-destination/backup-backup_destination_validate.md) |

### Backup Or Restore (`endpoints/backup-or-restore/`)

Contains **12** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Back up an account using the pkgacct script** | `GET /start_background_pkgacct` | This function backs up an account with the pkgacct script. | [backup-start_background_pkgacct.md](endpoints/backup-or-restore/backup-start_background_pkgacct.md) |
| **Backup or Restore** | `-` | Backups / Backup or Restore | [_category.md](endpoints/backup-or-restore/_category.md) |
| **Restore one cPanel account from a backup** | `GET /start_local_cpmove_restore` | This function performs a full restoration of a single cPanel account from a cpmove... | [transfers-start_local_cpmove_restore.md](endpoints/backup-or-restore/transfers-start_local_cpmove_restore.md) |
| **Return backup files for the server's accounts** | `GET /backup_set_list_combined` | This function lists locally-stored and backup-destination stored backup files for ... | [backup-backup_set_list_combined.md](endpoints/backup-or-restore/backup-backup_set_list_combined.md) |
| **Return backup files in the local disk** | `GET /backup_set_list` | This function lists backup files for the server's accounts in the local disk. | [backup-backup_set_list.md](endpoints/backup-or-restore/backup-backup_set_list.md) |
| **Return backup files sent through transport** | `GET /backup_list_transported` | This function lists backup files that the system sent through a specified addition... | [backup-backup_list_transported.md](endpoints/backup-or-restore/backup-backup_list_transported.md) |
| **Return backup transport events' status** | `GET /backup_get_transport_status` | This function retrieves the status of any backup transport events on the account. | [backup-backup_get_transport_status.md](endpoints/backup-or-restore/backup-backup_get_transport_status.md) |
| **Return cparchive files list** | `GET /list_cparchive_files` | This function lists all available cparchive files. | [backup-list_cparchive_files.md](endpoints/backup-or-restore/backup-list_cparchive_files.md) |
| **Return start_background_pkgacct session log file** | `GET /fetch_pkgacct_master_log` | This function returns the contents of a start_background_pkgacct session's master ... | [backup-fetch_pkgacct_master_log.md](endpoints/backup-or-restore/backup-fetch_pkgacct_master_log.md) |
| **Return start_background_pkgacct session state** | `GET /get_pkgacct_session_state` | This function returns the state of a start_background_pkgacct session. | [backup-get_pkgacct_session_state.md](endpoints/backup-or-restore/backup-get_pkgacct_session_state.md) |
| **Return users and domains with backup metadata** | `GET /get_users_and_domains_with_backup_metadata` | This function lists all users and their domains that have backup metadata. | [backup-get_users_and_domains_with_backup_metadata.md](endpoints/backup-or-restore/backup-get_users_and_domains_with_backup_metadata.md) |
| **Return users with backup metadata** | `GET /get_users_with_backup_metadata` | This function lists users with backup metadata. | [backup-get_users_with_backup_metadata.md](endpoints/backup-or-restore/backup-get_users_with_backup_metadata.md) |

### Backup Settings (`endpoints/backup-settings/`)

Contains **8** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Backup Settings** | `-` | Backups / Backup Settings | [_category.md](endpoints/backup-settings/_category.md) |
| **Enable or disable backups** | `GET /backup_skip_users_all` | This function enables and disables the backup and legacy backups. | [backup-backup_skip_users_all.md](endpoints/backup-settings/backup-backup_skip_users_all.md) |
| **Enable or disable legacy backups** | `GET /toggle_user_backup_state` | This function enables or disables legacy backups for a user. | [backup-toggle_user_backup_state.md](endpoints/backup-settings/backup-toggle_user_backup_state.md) |
| **Return backup configuration file data** | `GET /backup_config_get` | This function retrieves your backup destination configuration file data. | [backup-backup_config_get.md](endpoints/backup-settings/backup-backup_config_get.md) |
| **Return backup configuration status** | `GET /backup_skip_users_all_status` | This function checks each user's backup configuration status while the backup_skip... | [backup-backup_skip_users_all_status.md](endpoints/backup-settings/backup-backup_skip_users_all_status.md) |
| **Return dates where backup files exist** | `GET /backup_date_list` | This function lists the dates where backup file exists, whether stored locally or ... | [backup-backup_date_list.md](endpoints/backup-settings/backup-backup_date_list.md) |
| **Return users with a backup file** | `GET /backup_user_list` | This function lists users with a backup file, stored locally or on additional back... | [backup-backup_user_list.md](endpoints/backup-settings/backup-backup_user_list.md) |
| **Update the system's backup configuration** | `GET /backup_config_set` | This function configures a server's backup system. The system saves these settings... | [backup-backup_config_set.md](endpoints/backup-settings/backup-backup_config_set.md) |

### Bandwidth And Disk Quotas (`endpoints/bandwidth-and-disk-quotas/`)

Contains **6** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Bandwidth and Disk Quotas** | `-` | Accounts / Bandwidth and Disk Quotas | [_category.md](endpoints/bandwidth-and-disk-quotas/_category.md) |
| **Return all cPanel accounts disk usage** | `GET /get_disk_usage` | This function lists the disk usage status of the system's user accounts. This also... | [diskusage-get_disk_usage.md](endpoints/bandwidth-and-disk-quotas/diskusage-get_disk_usage.md) |
| **Return cPanel account bandwidth information** | `GET /showbw` | This function retrieves account bandwidth information. | [bandwidth-showbw.md](endpoints/bandwidth-and-disk-quotas/bandwidth-showbw.md) |
| **Update cPanel account bandwidth quota** | `GET /limitbw` | This function modifies a cPanel account's bandwidth quota. | [bandwidth-limitbw.md](endpoints/bandwidth-and-disk-quotas/bandwidth-limitbw.md) |
| **Update cPanel account disk quota** | `GET /editquota` | This function modifies a user's disk quota. | [accounts-editquota.md](endpoints/bandwidth-and-disk-quotas/accounts-editquota.md) |
| **Validate cPanel account quotas** | `GET /quota_enabled` | This function checks if quotas are enabled on at least one of a user's /home direc... | [quota-quota_enabled.md](endpoints/bandwidth-and-disk-quotas/quota-quota_enabled.md) |

### Configuration Clusters (`endpoints/configuration-clusters/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add configuration cluster server** | `POST /add_configclusterserver` | This function adds a server to a configuration cluster. The function's return data... | [clusterserver-add_configclusterserver.md](endpoints/configuration-clusters/clusterserver-add_configclusterserver.md) |
| **Configuration Clusters** | `-` | Server Administration / Configuration Clusters | [_category.md](endpoints/configuration-clusters/_category.md) |
| **Delete server from configuration cluster** | `GET /delete_configclusterserver` | This function removes a server from a configuration cluster. The function's return | [clusterserver-delete_configclusterserver.md](endpoints/configuration-clusters/clusterserver-delete_configclusterserver.md) |
| **Return all configuration cluster servers** | `GET /list_configclusterservers` | This function lists the servers in the server's configuration cluster. | [clusterserver-list_configclusterservers.md](endpoints/configuration-clusters/clusterserver-list_configclusterservers.md) |
| **Update configuration cluster server credentials** | `GET /update_configclusterserver` | This function updates the username or remote access key for a cluster server. | [clusterserver-update_configclusterserver.md](endpoints/configuration-clusters/clusterserver-update_configclusterserver.md) |
| **Update configuration file from backup** | `GET /restore_config_from_file` | This function restores a configuration backup from a file. If the backup file does... | [cpanel-restore_config_from_file.md](endpoints/configuration-clusters/cpanel-restore_config_from_file.md) |
| **Update configuration file from backup via POST** | `POST /restore_config_from_upload` | This function restores a configuration backup file via HTTP POST | [cpanel-restore_config_from_upload.md](endpoints/configuration-clusters/cpanel-restore_config_from_upload.md) |

### Configurations (`endpoints/configurations/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Configurations** | `-` | Server Administration / Configurations | [_category.md](endpoints/configurations/_category.md) |
| **Return Tweak Settings option's value** | `GET /get_tweaksetting` | This function retrieves values from the | [cpanel-get_tweaksetting.md](endpoints/configurations/cpanel-get_tweaksetting.md) |
| **Update Tweak Settings option** | `GET /set_tweaksetting` | This function sets an option's value in WHM's | [cpanel-set_tweaksetting.md](endpoints/configurations/cpanel-set_tweaksetting.md) |

### Connected Applications (`endpoints/connected-applications/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Connected Applications** | `-` | Server Administration / Connected Applications | [_category.md](endpoints/connected-applications/_category.md) |
| **Fetch application connection information** | `POST /fetch_connected_application` | Retrieve the connection information related to a application that has been granted | [connectedapplications-fetch_connected_application.md](endpoints/connected-applications/connectedapplications-fetch_connected_application.md) |
| **List application connection information** | `POST /list_connected_applications` | Retrieve the connection information for all the connected applications that have been | [connectedapplications-list_connected_applications.md](endpoints/connected-applications/connectedapplications-list_connected_applications.md) |
| **Remove application connection information** | `POST /remove_connected_application` | Remove the connected application from the server. This only removes the connection | [connectedapplications-remove_connected_application.md](endpoints/connected-applications/connectedapplications-remove_connected_application.md) |
| **Save application connection information.** | `POST /save_connected_application` | Save or update connection data about a specific connected application. | [connectedapplications-save_connected_application.md](endpoints/connected-applications/connectedapplications-save_connected_application.md) |

### Connections (`endpoints/connections/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Connections** | `-` | Server Administration / Connections | [_category.md](endpoints/connections/_category.md) |
| **Return TCP IPv4 sockets data** | `GET /get_tcp4_sockets` | This function returns data about the system's transmission control protocol (TCP) ... | [sys-get_tcp4_sockets.md](endpoints/connections/sys-get_tcp4_sockets.md) |
| **Return TCP IPv6 sockets data** | `GET /get_tcp6_sockets` | This function returns data about the system's transmission control protocol (TCP) ... | [sys-get_tcp6_sockets.md](endpoints/connections/sys-get_tcp6_sockets.md) |
| **Return UDP IPv4 sockets data** | `GET /get_udp4_sockets` | This function returns data about the system's user datagram protocol (UDP) IPv4 so... | [sys-get_udp4_sockets.md](endpoints/connections/sys-get_udp4_sockets.md) |
| **Return UDP IPv6 sockets data** | `GET /get_udp6_sockets` | This function returns data about the system's user datagram protocol (UDP) IPv6 so... | [sys-get_udp6_sockets.md](endpoints/connections/sys-get_udp6_sockets.md) |

### Cpanel Account Mail Management (`endpoints/cpanel-account-mail-management/`)

Contains **18** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add cPanel account to outbound email hold queue** | `GET /hold_outgoing_email` | This function sets Exim's queue to hold email that a user sends to an external add... | [accounts-hold_outgoing_email.md](endpoints/cpanel-account-mail-management/accounts-hold_outgoing_email.md) |
| **Release cPanel account queued outgoing emails** | `GET /release_outgoing_email` | This function releases outgoing email in the email queue for a single cPanel accou... | [accounts-release_outgoing_email.md](endpoints/cpanel-account-mail-management/accounts-release_outgoing_email.md) |
| **Remove email account messages by Dovecot query** | `GET /expunge_mailbox_messages` | This function removes mail messages from a cPanel account that you select with a q... | [mailboxes-expunge_mailbox_messages.md](endpoints/cpanel-account-mail-management/mailboxes-expunge_mailbox_messages.md) |
| **Remove email account messages by mailbox GUID** | `GET /expunge_messages_for_mailbox_guid` | This function removes mail messages from a cPanel account. | [mailboxes-expunge_messages_for_mailbox_guid.md](endpoints/cpanel-account-mail-management/mailboxes-expunge_messages_for_mailbox_guid.md) |
| **Return all cPanel account unique email recipients** | `GET /get_unique_sender_recipient_count_per_user` | This function gets a count of the email addresses that each system account sent ma... | [exim-get_unique_sender_recipient_count_per_user.md](endpoints/cpanel-account-mail-management/exim-get_unique_sender_recipient_count_per_user.md) |
| **Return all cPanel accounts email tracking statistics** | `GET /emailtrack_user_stats` | This function retrieves email tracking statistics for each user. | [exim-emailtrack_user_stats.md](endpoints/cpanel-account-mail-management/exim-emailtrack_user_stats.md) |
| **Return cPanel account email tracking statistics** | `GET /emailtrack_stats` | This function retrieves email tracking statistics. | [exim-emailtrack_stats.md](endpoints/cpanel-account-mail-management/exim-emailtrack_stats.md) |
| **Return cPanel account forward destination** | `GET /get_user_email_forward_destination` | This function retrieves the destination to which the system forwards a system acco... | [email-get_user_email_forward_destination.md](endpoints/cpanel-account-mail-management/email-get_user_email_forward_destination.md) |
| **Return cPanel account mailboxes status by name** | `GET /get_mailbox_status` | This function lists the status of a cPanel's mail account's mailboxes. | [mailboxes-get_mailbox_status.md](endpoints/cpanel-account-mail-management/mailboxes-get_mailbox_status.md) |
| **Return cPanel account mailboxes status list** | `GET /get_mailbox_status_list` | This function lists the status of a cPanel's mail account's mailboxes. | [mailboxes-get_mailbox_status_list.md](endpoints/cpanel-account-mail-management/mailboxes-get_mailbox_status_list.md) |
| **Return cPanel account unique email recipients** | `GET /get_unique_recipient_count_per_sender_for_user` | This function gets the number of unique recipients that a system user sent mail to... | [exim-get_unique_recipient_count_per_sender_for_user.md](endpoints/cpanel-account-mail-management/exim-get_unique_recipient_count_per_sender_for_user.md) |
| **Return cPanel account's email accounts** | `GET /list_pops_for` | This function lists a cPanel account’s email accounts. To prevent falsified data o... | [email-list_pops_for.md](endpoints/cpanel-account-mail-management/email-list_pops_for.md) |
| **Return email delivery records by search criteria** | `GET /emailtrack_search` | This function retrieves email delivery records. | [exim-emailtrack_search.md](endpoints/cpanel-account-mail-management/exim-emailtrack_search.md) |
| **Stop cPanel account IMAP and POP3 connections** | `GET /terminate_cpuser_mailbox_sessions` | This function terminates all IMAP and POP3 connections for a cPanel account. | [mailboxes-terminate_cpuser_mailbox_sessions.md](endpoints/cpanel-account-mail-management/mailboxes-terminate_cpuser_mailbox_sessions.md) |
| **Suspend cPanel account outgoing email** | `GET /suspend_outgoing_email` | This function sets Exim's queue to suspend and force failure for email that a user... | [accounts-suspend_outgoing_email.md](endpoints/cpanel-account-mail-management/accounts-suspend_outgoing_email.md) |
| **Unsuspend account outgoing email** | `GET /unsuspend_outgoing_email` | This function unsuspends outgoing email for a cPanel account's users. | [accounts-unsuspend_outgoing_email.md](endpoints/cpanel-account-mail-management/accounts-unsuspend_outgoing_email.md) |
| **Update cPanel account email forward destination** | `GET /set_user_email_forward_destination` | This function sets the destination to which the system forwards a system account's... | [email-set_user_email_forward_destination.md](endpoints/cpanel-account-mail-management/email-set_user_email_forward_destination.md) |
| **cPanel Account Mail Management** | `-` | Mail / cPanel Account Mail Management | [_category.md](endpoints/cpanel-account-mail-management/_category.md) |

### Cpanel Account Settings (`endpoints/cpanel-account-settings/`)

Contains **13** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add SSL certificate to installation queue** | `GET /enqueue_deferred_ssl_installations` | This function adds SSL certificates to the installation queue. This allows you to | [ssl-enqueue_deferred_ssl_installations.md](endpoints/cpanel-account-settings/ssl-enqueue_deferred_ssl_installations.md) |
| **Delete SSL vhost** | `GET /delete_ssl_vhost` | This function deletes the SSL virtual host. | [ssl-delete_ssl_vhost.md](endpoints/cpanel-account-settings/ssl-delete_ssl_vhost.md) |
| **Install SSL certificate** | `GET /installssl` | This function installs an SSL certificate. | [ssl-installssl.md](endpoints/cpanel-account-settings/ssl-installssl.md) |
| **Install SSL certificate for service** | `GET /install_service_ssl_certificate` | This function installs a new SSL certificate on a service. | [ssl-install_service_ssl_certificate.md](endpoints/cpanel-account-settings/ssl-install_service_ssl_certificate.md) |
| **Return SSL certificate information** | `GET /fetchcrtinfo` | This function retrieves information about a certificate. | [ssl-fetchcrtinfo.md](endpoints/cpanel-account-settings/ssl-fetchcrtinfo.md) |
| **Return SSL-encrypted domain for service access** | `GET /get_best_ssldomain_for_service` | This function retrieves the most appropriate SSL-encrypted domain to use to access... | [ssl-get_best_ssldomain_for_service.md](endpoints/cpanel-account-settings/ssl-get_best_ssldomain_for_service.md) |
| **Return account DCV issues** | `GET /get_autossl_problems_for_user` | This function returns the list of the latest Domain Control Validation (DCV) probl... | [ssl-get_autossl_problems_for_user.md](endpoints/cpanel-account-settings/ssl-get_autossl_problems_for_user.md) |
| **Return all SSL certificate components on vhost** | `GET /fetch_vhost_ssl_components` | This function lists the components of each SSL certificate on the server's virtual... | [ssl-fetch_vhost_ssl_components.md](endpoints/cpanel-account-settings/ssl-fetch_vhost_ssl_components.md) |
| **Return cPanel account FQDN certificate information** | `GET /fetch_ssl_certificates_for_fqdns` | This function retrieves the certificate information for all fully qualified domain... | [ssl-fetch_ssl_certificates_for_fqdns.md](endpoints/cpanel-account-settings/ssl-fetch_ssl_certificates_for_fqdns.md) |
| **Return cPanel account SSL certificate information** | `GET /fetchsslinfo` | This function retrieves information about SSL certificates that you could install ... | [ssl-fetchsslinfo.md](endpoints/cpanel-account-settings/ssl-fetchsslinfo.md) |
| **Return domain DCV issues** | `GET /get_autossl_problems_for_domain` | This function returns a list of objects that contains the latest Domain Control Va... | [ssl-get_autossl_problems_for_domain.md](endpoints/cpanel-account-settings/ssl-get_autossl_problems_for_domain.md) |
| **Return server vhosts and SSL certificates** | `GET /fetch_ssl_vhosts` | This function lists the server's virtual hosts (vhosts) and their installed SSL ce... | [ssl-fetch_ssl_vhosts.md](endpoints/cpanel-account-settings/ssl-fetch_ssl_vhosts.md) |
| **cPanel Account Settings** | `-` | SSL Certificates / cPanel Account Settings | [_category.md](endpoints/cpanel-account-settings/_category.md) |

### Cpanel Account Transfer (`endpoints/cpanel-account-transfer/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add module to transfer session** | `GET /enqueue_transfer_item` | This function adds a transfer session to a queue. For more information about how t... | [transfers-enqueue_transfer_item.md](endpoints/cpanel-account-transfer/transfers-enqueue_transfer_item.md) |
| **Create remote server transfer session** | `GET /create_remote_user_transfer_session` | This function creates a transfer session with a non-root user to a remote server. | [transfers-create_remote_user_transfer_session.md](endpoints/cpanel-account-transfer/transfers-create_remote_user_transfer_session.md) |
| **Create remote server transfer session as root user** | `GET /create_remote_root_transfer_session` | This function creates a transfer session as the root user. | [transfers-create_remote_root_transfer_session.md](endpoints/cpanel-account-transfer/transfers-create_remote_root_transfer_session.md) |
| **Start or restart transfer session** | `GET /start_transfer_session` | This function starts or restarts a transfer session. | [transfers-start_transfer_session.md](endpoints/cpanel-account-transfer/transfers-start_transfer_session.md) |
| **Stop transfer session** | `GET /abort_transfer_session` | This function aborts an active transfer session. | [transfers-abort_transfer_session.md](endpoints/cpanel-account-transfer/transfers-abort_transfer_session.md) |
| **Suspend active transfer session** | `GET /pause_transfer_session` | This function pauses an active transfer session. | [transfers-pause_transfer_session.md](endpoints/cpanel-account-transfer/transfers-pause_transfer_session.md) |
| **cPanel Account Transfer** | `-` | Transfers / cPanel Account Transfer | [_category.md](endpoints/cpanel-account-transfer/_category.md) |

### Cpanel Analytics (`endpoints/cpanel-analytics/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Enable analytics data gathering** | `GET /participate_in_analytics` | This function enables or disables | [analytics-participate_in_analytics.md](endpoints/cpanel-analytics/analytics-participate_in_analytics.md) |
| **cPanel Analytics** | `-` | The cPanel Analytics module for WHM API 1. | [_category.md](endpoints/cpanel-analytics/_category.md) |

### Customizations (`endpoints/customizations/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Customizations** | `-` | The Customizations module for WHM API 1. | [_category.md](endpoints/customizations/_category.md) |
| **Delete customization data** | `GET /delete_customizations` | This function deletes customization data. | [customizations-delete_customizations.md](endpoints/customizations/customizations-delete_customizations.md) |
| **Retrieve customization data** | `GET /retrieve_customizations` | This function retrieves customization data. | [customizations-retrieve_customizations.md](endpoints/customizations/customizations-retrieve_customizations.md) |
| **Update customization data** | `POST /update_customizations` | This function supplies branding data for a specific application and theme. | [customizations-update_customizations.md](endpoints/customizations/customizations-update_customizations.md) |

### Dns Cluster Settings (`endpoints/dns-cluster-settings/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **DNS Cluster Settings** | `-` | DNS / DNS Cluster Settings | [_category.md](endpoints/dns-cluster-settings/_category.md) |
| **Update remote DNS server's nameserver software** | `GET /set_nameserver` | This function sets the nameserver software that the remote servers in a DNS cluste... | [nameserver-set_nameserver.md](endpoints/dns-cluster-settings/nameserver-set_nameserver.md) |

### Dns Security (`endpoints/dns-security/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create domain's DNSSEC zone key** | `GET /add_zone_key` | This function generates a DNSSEC zone key for a domain. | [dns-add_zone_key.md](endpoints/dns-security/dns-add_zone_key.md) |
| **DNS Security** | `-` | DNS / DNS Security | [_category.md](endpoints/dns-security/_category.md) |
| **Disable DNSSEC on domain** | `GET /disable_dnssec_for_domains` | This function disables DNSSEC on the domain. | [dns-disable_dnssec_for_domains.md](endpoints/dns-security/dns-disable_dnssec_for_domains.md) |
| **Disable domain's DNSSEC key** | `GET /deactivate_zone_key` | This function deactivates a domain's DNSSEC security key. | [dns-deactivate_zone_key.md](endpoints/dns-security/dns-deactivate_zone_key.md) |
| **Enable DNSSEC on domain** | `GET /enable_dnssec_for_domains` | This function enables DNSSEC on the domain. | [dns-enable_dnssec_for_domains.md](endpoints/dns-security/dns-enable_dnssec_for_domains.md) |
| **Enable domain's DNSSEC key** | `GET /activate_zone_key` | This function activates a domain's DNSSEC security key. | [dns-activate_zone_key.md](endpoints/dns-security/dns-activate_zone_key.md) |
| **Export domain's DNSSEC key** | `GET /export_zone_key` | This function exports a DNSSEC security key to a domain. | [dns-export_zone_key.md](endpoints/dns-security/dns-export_zone_key.md) |
| **Import DNSSEC key** | `GET /import_zone_key` | This function imports a DNSSEC security key. | [dns-import_zone_key.md](endpoints/dns-security/dns-import_zone_key.md) |
| **Remove DNSSEC key** | `GET /remove_zone_key` | This function removes a DNSSEC security key. | [dns-remove_zone_key.md](endpoints/dns-security/dns-remove_zone_key.md) |

### Dns Zones (`endpoints/dns-zones/`)

Contains **14** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create DNS zone** | `GET /adddns` | This function creates a DNS zone. If trueowner=user, this function does the follow... | [dns-adddns.md](endpoints/dns-zones/dns-adddns.md) |
| **DNS Zones** | `-` | DNS / DNS Zones | [_category.md](endpoints/dns-zones/_category.md) |
| **Delete DNS zone** | `GET /killdns` | This function deletes a DNS zone. | [dns-killdns.md](endpoints/dns-zones/dns-killdns.md) |
| **Delete DNS zone record** | `GET /removezonerecord` | This function deletes a DNS zone record. | [dns-removezonerecord.md](endpoints/dns-zones/dns-removezonerecord.md) |
| **Export DNS zones in zone file format** | `GET /export_zone_files` | This function returns one or more DNS zones, in | [dns-export_zone_files.md](endpoints/dns-zones/dns-export_zone_files.md) |
| **Export domain's DNSKEY record value** | `GET /export_zone_dnskey` | This function exports a domain's DNSKEY record value. | [dns-export_zone_dnskey.md](endpoints/dns-zones/dns-export_zone_dnskey.md) |
| **Return a parsed DNS zone** | `GET /parse_dns_zone` | This function parses a given DNS zone. | [dns-parse_dns_zone.md](endpoints/dns-zones/dns-parse_dns_zone.md) |
| **Return domain's DNS zone configuration (deprecated)** | `GET /dumpzone` | This function returns a domain's DNS zone configuration. | [dns-dumpzone.md](endpoints/dns-zones/dns-dumpzone.md) |
| **Return server's DNS zones** | `GET /listzones` | This function lists the server's DNS zones. | [dns-listzones.md](endpoints/dns-zones/dns-listzones.md) |
| **Return specific line from domain's DNS configuration** | `GET /getzonerecord` | This function returns a line from a domain's DNS zone configuration. | [dns-getzonerecord.md](endpoints/dns-zones/dns-getzonerecord.md) |
| **Return whether DNS cluster server can share records** | `GET /cluster_member_has_trust_with` | This function queries whether nameservers in a DNS cluster can share records with ... | [clusterserver-cluster_member_has_trust_with.md](endpoints/dns-zones/clusterserver-cluster_member_has_trust_with.md) |
| **Update DNS zone record** | `POST /editzonerecord` | This function edits a DNS zone record. To effectively use this function, use the f... | [dns-editzonerecord.md](endpoints/dns-zones/dns-editzonerecord.md) |
| **Update a DNS zone** | `GET /mass_edit_dns_zone` | This function updates a given DNS zone. It can add, edit, | [dns-mass_edit_dns_zone.md](endpoints/dns-zones/dns-mass_edit_dns_zone.md) |
| **Update reverse DNS cache** | `GET /update_reverse_dns_cache` | This function queries DNS and updates the map of local IP addresses to reverse DNS... | [dns-update_reverse_dns_cache.md](endpoints/dns-zones/dns-update_reverse_dns_cache.md) |

### Domain Information (`endpoints/domain-information/`)

Contains **10** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Domain Information** | `-` | Accounts / Domain Domain Information | [_category.md](endpoints/domain-information/_category.md) |
| **Return additional domain conversion details** | `GET /convert_addon_fetch_conversion_details` | This function returns the details of a conversion from an addon | [convertaddon-convert_addon_fetch_conversion_details.md](endpoints/domain-information/convertaddon-convert_addon_fetch_conversion_details.md) |
| **Return additional domain data** | `GET /convert_addon_fetch_domain_details` | This function retrieves domain data for an addon domain. | [convertaddon-convert_addon_fetch_domain_details.md](endpoints/domain-information/convertaddon-convert_addon_fetch_domain_details.md) |
| **Return additional domains conversion queue** | `GET /convert_addon_list_conversions` | This function returns a list of addon domains undergoing conversion | [convertaddon-convert_addon_list_conversions.md](endpoints/domain-information/convertaddon-convert_addon_list_conversions.md) |
| **Return all domains information** | `GET /get_domain_info` | This function returns information about each domain on the server. | [accounts-get_domain_info.md](endpoints/domain-information/accounts-get_domain_info.md) |
| **Return conversion status for additional domain** | `GET /convert_addon_get_conversion_status` | This function returns the status of the convert addon domain to | [convertaddon-convert_addon_get_conversion_status.md](endpoints/domain-information/convertaddon-convert_addon_get_conversion_status.md) |
| **Return current user's additional domains** | `GET /convert_addon_list_addon_domains` | This function returns a list of addon domains that belong to the current user. | [convertaddon-convert_addon_list_addon_domains.md](endpoints/domain-information/convertaddon-convert_addon_list_addon_domains.md) |
| **Return domain owner** | `GET /getdomainowner` | This function lists the owner of a domain. | [accounts-getdomainowner.md](endpoints/domain-information/accounts-getdomainowner.md) |
| **Return domain user information** | `GET /domainuserdata` | This function retrieves domain data. | [accounts-domainuserdata.md](endpoints/domain-information/accounts-domainuserdata.md) |
| **Start additional domain conversion** | `GET /convert_addon_initiate_conversion` | This function initiates the conversion process for an addon domain | [convertaddon-convert_addon_initiate_conversion.md](endpoints/domain-information/convertaddon-convert_addon_initiate_conversion.md) |

### Domain Management (`endpoints/domain-management/`)

Contains **17** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create DNS zone record** | `POST /addzonerecord` | This function adds a DNS zone record. | [dns-addzonerecord.md](endpoints/domain-management/dns-addzonerecord.md) |
| **Create domain alias** | `GET /create_parked_domain_for_user` | This function creates an alias (parks a domain on a web virtual host). | [userdomains-create_parked_domain_for_user.md](endpoints/domain-management/userdomains-create_parked_domain_for_user.md) |
| **Create mail exchanger record** | `GET /savemxs` | This function creates a new MX record. | [dns-savemxs.md](endpoints/domain-management/dns-savemxs.md) |
| **Create subdomain** | `GET /create_subdomain` | This function creates a subdomain. | [userdomains-create_subdomain.md](endpoints/domain-management/userdomains-create_subdomain.md) |
| **Delete domain** | `GET /delete_domain` | This function deletes a domain. | [userdomains-delete_domain.md](endpoints/domain-management/userdomains-delete_domain.md) |
| **Domain Management** | `-` | DNS / Domain Management | [_category.md](endpoints/domain-management/_category.md) |
| **Enable NSEC semantics for domain** | `GET /unset_nsec3_for_domains` | This function configures the domain to use Next Secure Record (NSEC) semantics ins... | [dns-unset_nsec3_for_domains.md](endpoints/domain-management/dns-unset_nsec3_for_domains.md) |
| **Enable NSEC3 semantics for domain** | `GET /set_nsec3_for_domains` | This function configures the domain to use Next Secure Record 3 (NSEC3) semantics. | [dns-set_nsec3_for_domains.md](endpoints/domain-management/dns-set_nsec3_for_domains.md) |
| **Restore DNS zone to default values** | `GET /resetzone` | This function resets a DNS zone to its default values. This also resets the domain... | [dns-resetzone.md](endpoints/domain-management/dns-resetzone.md) |
| **Return ALIAS DNS record availability & resolver** | `GET /is_alias_available` | This function returns whether ALIAS and ANAME records are available and the value ... | [dns-is_alias_available.md](endpoints/domain-management/dns-is_alias_available.md) |
| **Return HTTPS DNS record support information** | `GET /is_https_available` | This function fetches information regarding HTTPS records support. | [dns-is_https_available.md](endpoints/domain-management/dns-is_https_available.md) |
| **Return SVCB DNS record support information** | `GET /is_svcb_available` | This function fetches information regarding SVCB records support. | [dns-is_svcb_available.md](endpoints/domain-management/dns-is_svcb_available.md) |
| **Return domain's DS record** | `GET /fetch_ds_records_for_domains` | This function fetches a domain's Delegation of Signing (DS) record. | [dns-fetch_ds_records_for_domains.md](endpoints/domain-management/dns-fetch_ds_records_for_domains.md) |
| **Return domain's IP address** | `GET /resolvedomainname` | This function resolves a domain's IPv4 address. | [nameserver-resolvedomainname.md](endpoints/domain-management/nameserver-resolvedomainname.md) |
| **Return domain's mail exchanger records** | `GET /listmxs` | This function lists a domain's MX records. | [dns-listmxs.md](endpoints/domain-management/dns-listmxs.md) |
| **Update /etc/userdomains file** | `GET /updateuserdomains` | This function updates the /etc/userdomains file based on the entries in /var/cpane... | [userdomains-updateuserdomains.md](endpoints/domain-management/userdomains-updateuserdomains.md) |
| **Validate local server is authoritative** | `GET /has_local_authority` | This function checks whether the local server has the authority to publish changes... | [dns-has_local_authority.md](endpoints/domain-management/dns-has_local_authority.md) |

### Easyapache Settings (`endpoints/easyapache-settings/`)

Contains **8** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Count domains using EOL PHP versions** | `GET /eol_php_sites` | This function counts the number of domains across all cPanel users that are using | [eolphpsites-eol_php_sites.md](endpoints/easyapache-settings/eolphpsites-eol_php_sites.md) |
| **Create EasyApache 4 profile** | `GET /ea4_save_profile` | This function creates an EasyApache 4 profile. This function only writes files to ... | [ea4-ea4_save_profile.md](endpoints/easyapache-settings/ea4-ea4_save_profile.md) |
| **EasyApache Settings** | `-` | Web Server Configuration / EasyApache Settings | [_category.md](endpoints/easyapache-settings/_category.md) |
| **Return EasyApache 4 profiles** | `GET /ea4_list_profiles` | This function returns a list of all EasyApache 4 profiles and the packages that ea... | [ea4-ea4_list_profiles.md](endpoints/easyapache-settings/ea4-ea4_list_profiles.md) |
| **Return EasyApache 4 recommendations** | `GET /ea4_recommendations` | This function returns any recommendations attached to your installed | [ea4-ea4_recommendations.md](endpoints/easyapache-settings/ea4-ea4_recommendations.md) |
| **Return any additional package prefixes, beyond ea.** | `GET /ea4_get_additional_pkg_prefixes` | This function returns any additional package prefixes set up in the /etc/cpanel/ea... | [ea4-ea4_get_additional_pkg_prefixes.md](endpoints/easyapache-settings/ea4-ea4_get_additional_pkg_prefixes.md) |
| **Return ea4-metainfo.json file contents** | `GET /ea4_metainfo` | This function returns the contents of the /etc/cpanel/ea4/ea4-metainfo.json file. | [ea4-ea4_metainfo.md](endpoints/easyapache-settings/ea4-ea4_metainfo.md) |
| **Return installed Easyapache 4 packages** | `GET /ea4_get_currently_installed_packages` | This function returns a list of the currently-installed EasyApache 4 packages. | [ea4-ea4_get_currently_installed_packages.md](endpoints/easyapache-settings/ea4-ea4_get_currently_installed_packages.md) |

### External Authentication (`endpoints/external-authentication/`)

Contains **12** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add identity provider to cPanel account** | `GET /link_user_authn_provider` | This function adds an External Authentication authorization link to an account. | [accounts-link_user_authn_provider.md](endpoints/external-authentication/accounts-link_user_authn_provider.md) |
| **Disable identity provider** | `GET /disable_authentication_provider` | This function disables a external authentication identity provider for a specified... | [authentication-disable_authentication_provider.md](endpoints/external-authentication/authentication-disable_authentication_provider.md) |
| **Disable identity provider modules that fail to load** | `GET /disable_failing_authentication_providers` | This function disables any enabled identity provider modules that fail to load. | [authentication-disable_failing_authentication_providers.md](endpoints/external-authentication/authentication-disable_failing_authentication_providers.md) |
| **Enable identity provider** | `GET /enable_authentication_provider` | This function enables an external authentication identity provider for a specified... | [authentication-enable_authentication_provider.md](endpoints/external-authentication/authentication-enable_authentication_provider.md) |
| **External Authentication** | `-` | Authentication / External Authentication | [_category.md](endpoints/external-authentication/_category.md) |
| **Return accounts linked to identity providers** | `GET /get_users_authn_linked_accounts` | This function lists all accounts that link to available external authentication id... | [accounts-get_users_authn_linked_accounts.md](endpoints/external-authentication/accounts-get_users_authn_linked_accounts.md) |
| **Return available identity providers** | `GET /get_available_authentication_providers` | This function lists available external authentication identity providers for all s... | [authentication-get_available_authentication_providers.md](endpoints/external-authentication/authentication-get_available_authentication_providers.md) |
| **Return identity provider client configuration** | `GET /get_provider_client_configurations` | This function retrieves the configuration details for the client of an external au... | [authentication-get_provider_client_configurations.md](endpoints/external-authentication/authentication-get_provider_client_configurations.md) |
| **Return identity provider configuration fields** | `GET /get_provider_configuration_fields` | This function retrieves the configuration fields for a external authentication ide... | [authentication-get_provider_configuration_fields.md](endpoints/external-authentication/authentication-get_provider_configuration_fields.md) |
| **Return identity provider login interface appearance** | `GET /get_provider_display_configurations` | This function retrieves the display configuration for the login button of an exter... | [authentication-get_provider_display_configurations.md](endpoints/external-authentication/authentication-get_provider_display_configurations.md) |
| **Update identity provider client configuration** | `GET /set_provider_client_configurations` | This function sets the values of configuration fields for an external authenticati... | [authentication-set_provider_client_configurations.md](endpoints/external-authentication/authentication-set_provider_client_configurations.md) |
| **Update identity provider login interface appearance** | `GET /set_provider_display_configurations` | This function sets the display configuration for the login button of an external a... | [authentication-set_provider_display_configurations.md](endpoints/external-authentication/authentication-set_provider_display_configurations.md) |

### Feature Access (`endpoints/feature-access/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add cPanel account feature list overrides** | `GET /add_override_features_for_user` | This function adds feature overrides to a cPanel account. | [accounts-add_override_features_for_user.md](endpoints/feature-access/accounts-add_override_features_for_user.md) |
| **Feature Access** | `-` | Hosting Plans / Feature Access | [_category.md](endpoints/feature-access/_category.md) |
| **Remove cPanel account feature list overrides** | `GET /remove_override_features_for_user` | This function removes feature overrides from a cPanel account. | [accounts-remove_override_features_for_user.md](endpoints/feature-access/accounts-remove_override_features_for_user.md) |
| **Return cPanel account feature access** | `GET /verify_user_has_feature` | This function checks whether a user has access to a feature on a feature list. | [accounts-verify_user_has_feature.md](endpoints/feature-access/accounts-verify_user_has_feature.md) |
| **Return cPanel accounts' feature settings** | `GET /get_users_features_settings` | This function lists the features settings of cPanel accounts. | [featurelists-get_users_features_settings.md](endpoints/feature-access/featurelists-get_users_features_settings.md) |

### Feature Lists (`endpoints/feature-lists/`)

Contains **12** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **(Deprecated) Get available feature lists (deprecated)** | `GET /get_available_featurelists` | DEPRECATED: Use get_featurelists instead. | [featurelists-get_available_featurelists.md](endpoints/feature-lists/featurelists-get_available_featurelists.md) |
| **(Deprecated) Read feature list settings (deprecated)** | `GET /read_featurelist` | DEPRECATED: Use get_featurelist_data instead. | [featurelists-read_featurelist.md](endpoints/feature-lists/featurelists-read_featurelist.md) |
| **Create feature list** | `GET /create_featurelist` | This function creates or updates a feature list. | [featurelists-create_featurelist.md](endpoints/feature-lists/featurelists-create_featurelist.md) |
| **Delete feature list** | `GET /delete_featurelist` | This function deletes a feature list. | [featurelists-delete_featurelist.md](endpoints/feature-lists/featurelists-delete_featurelist.md) |
| **Feature Lists** | `-` | Hosting Plans / Feature Lists | [_category.md](endpoints/feature-lists/_category.md) |
| **Return all features** | `GET /get_feature_names` | This function lists all available features. | [featurelists-get_feature_names.md](endpoints/feature-lists/featurelists-get_feature_names.md) |
| **Return current user's available feature lists** | `GET /get_featurelists` | This function lists the authenticated user's available feature lists. | [featurelists-get_featurelists.md](endpoints/feature-lists/featurelists-get_featurelists.md) |
| **Return current user's available feature lists info** | `GET /get_feature_metadata` | This function lists the details of the authenticated user's available feature lists. | [featurelists-get_feature_metadata.md](endpoints/feature-lists/featurelists-get_feature_metadata.md) |
| **Return dynamicui file** | `GET /get_available_applications` | This function returns the contents of a dynamicui file. For more | [dynamicui-get_available_applications.md](endpoints/feature-lists/dynamicui-get_available_applications.md) |
| **Return feature list configuration** | `GET /get_featurelist_data` | This function lists features in a specific feature list. | [featurelists-get_featurelist_data.md](endpoints/feature-lists/featurelists-get_featurelist_data.md) |
| **Return feature lists by package type** | `GET /get_featurelists_by_package_types` | This function lists features grouped by package type. | [featurelists-get_featurelists_by_package_types.md](endpoints/feature-lists/featurelists-get_featurelists_by_package_types.md) |
| **Update feature list** | `GET /update_featurelist` | This function creates or updates a feature list. | [featurelists-update_featurelist.md](endpoints/feature-lists/featurelists-update_featurelist.md) |

### Hosting Plan Extensions (`endpoints/hosting-plan-extensions/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add hosting plan extension** | `GET /addpkgext` | This function adds a package extension to a hosting plan (package). | [packages-addpkgext.md](endpoints/hosting-plan-extensions/packages-addpkgext.md) |
| **Hosting Plan Extensions** | `-` | Hosting Plans / Hosting Plan Extensions | [_category.md](endpoints/hosting-plan-extensions/_category.md) |
| **Remove hosting plan extension** | `GET /delpkgext` | This function deletes a package extension from a hosting plan (package). | [packages-delpkgext.md](endpoints/hosting-plan-extensions/packages-delpkgext.md) |
| **Return hosting plan extension templates** | `GET /_getpkgextensionform` | This function retrieves a hosting plan's package extension templates. When you cal... | [accounts-_getpkgextensionform.md](endpoints/hosting-plan-extensions/accounts-_getpkgextensionform.md) |

### Hosting Plans (`endpoints/hosting-plans/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create hosting plan** | `GET /addpkg` | This function creates a hosting plan (package). | [packages-addpkg.md](endpoints/hosting-plans/packages-addpkg.md) |
| **Delete hosting plan** | `GET /killpkg` | This function deletes a hosting plan (package). | [packages-killpkg.md](endpoints/hosting-plans/packages-killpkg.md) |
| **Hosting Plans** | `-` | Hosting Plans / Hosting Plans | [_category.md](endpoints/hosting-plans/_category.md) |
| **Return current user's available hosting plans** | `GET /listpkgs` | This function lists the authenticated user's available hosting plans (packages). | [packages-listpkgs.md](endpoints/hosting-plans/packages-listpkgs.md) |
| **Return filtered hosting plans** | `GET /matchpkgs` | This function matches the server's hosting plans (packages) against | [packages-matchpkgs.md](endpoints/hosting-plans/packages-matchpkgs.md) |
| **Return hosting plan configuration** | `GET /getpkginfo` | This function lists a hosting plan's (package's) settings. | [packages-getpkginfo.md](endpoints/hosting-plans/packages-getpkginfo.md) |
| **Update hosting plan** | `GET /editpkg` | This function edits a hosting plan (package). | [packages-editpkg.md](endpoints/hosting-plans/packages-editpkg.md) |

### Inproductsurvey (`endpoints/inproductsurvey/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Get in-product survey URL** | `GET /get_in_product_survey_url` | This function returns whether to display the in-product survey banner and the surv... | [inproductsurvey-get_in_product_survey_url.md](endpoints/inproductsurvey/inproductsurvey-get_in_product_survey_url.md) |
| **InProductSurvey** | `-` | In-product survey information. | [_category.md](endpoints/inproductsurvey/_category.md) |

### Install Or Uninstall Package (`endpoints/install-or-uninstall-package/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Install WHM plugin RPM package** | `GET /install_rpm_plugin` | This function starts a plugin installation. The installation runs as a background ... | [plugins-install_rpm_plugin.md](endpoints/install-or-uninstall-package/plugins-install_rpm_plugin.md) |
| **Install or Uninstall Package** | `-` | System Package Management / Install or Uninstall Package | [_category.md](endpoints/install-or-uninstall-package/_category.md) |
| **Start RPM package installation, update, or removal** | `GET /package_manager_submit_actions` | This function installs, upgrades, or uninstalls RPM packages. | [packagemanager-package_manager_submit_actions.md](endpoints/install-or-uninstall-package/packagemanager-package_manager_submit_actions.md) |
| **Start RPM package upgrade** | `GET /package_manager_upgrade` | This function downloads and installs package updates on the server. | [packagemanager-package_manager_upgrade.md](endpoints/install-or-uninstall-package/packagemanager-package_manager_upgrade.md) |
| **Uninstall WHM plugin RPM package** | `GET /uninstall_rpm_plugin` | This function starts the uninstall process for a plugin. The uninstall process run... | [plugins-uninstall_rpm_plugin.md](endpoints/install-or-uninstall-package/plugins-uninstall_rpm_plugin.md) |

### Ipv4 Address Settings (`endpoints/ipv4-address-settings/`)

Contains **6** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add IP addresses** | `GET /addips` | This function adds an IPv4 address or addresses to the server. | [ips-addips.md](endpoints/ipv4-address-settings/ips-addips.md) |
| **IPv4 Address Settings** | `-` | IP Address Management / IPv4 Address Settings | [_category.md](endpoints/ipv4-address-settings/_category.md) |
| **Remove IP address** | `GET /delip` | This function removes an IP address from the server. | [ips-delip.md](endpoints/ipv4-address-settings/ips-delip.md) |
| **Return server's IP addresses** | `GET /listips` | This function lists a server's IP addresses. | [ips-listips.md](endpoints/ipv4-address-settings/ips-listips.md) |
| **Return shared IP address** | `GET /get_shared_ip` | This function retrieves the IP address that an account shares with the accounts th... | [ips-get_shared_ip.md](endpoints/ipv4-address-settings/ips-get_shared_ip.md) |
| **Update domain or cPanel account IP address** | `GET /setsiteip` | This function changes a site's or account's IP address. | [accounts-setsiteip.md](endpoints/ipv4-address-settings/accounts-setsiteip.md) |

### Ipv6 Address Settings (`endpoints/ipv6-address-settings/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add IPv6 address range** | `GET /ipv6_range_add` | This function adds a range of IPv6 addresses to the server. | [ipv6-ipv6_range_add.md](endpoints/ipv6-address-settings/ipv6-ipv6_range_add.md) |
| **Add IPv6 address range to accounts** | `GET /ipv6_enable_account` | This function assigns an IPv6 address to one or more accounts. | [ipv6-ipv6_enable_account.md](endpoints/ipv6-address-settings/ipv6-ipv6_enable_account.md) |
| **IPv6 Address Settings** | `-` | IP Address Management / IPv6 Address Settings | [_category.md](endpoints/ipv6-address-settings/_category.md) |
| **Remove IPv6 address range** | `GET /ipv6_range_remove` | This function removes an IPv6 address range from the server. | [ipv6-ipv6_range_remove.md](endpoints/ipv6-address-settings/ipv6-ipv6_range_remove.md) |
| **Remove IPv6 address range from account** | `GET /ipv6_disable_account` | This function removes the IPv6 address from an account. | [ipv6-ipv6_disable_account.md](endpoints/ipv6-address-settings/ipv6-ipv6_disable_account.md) |
| **Return IPv6 address usage** | `GET /ipv6_range_usage` | This function retrieves usage information for IPv6 addresses in an IPv6 range. | [ipv6-ipv6_range_usage.md](endpoints/ipv6-address-settings/ipv6-ipv6_range_usage.md) |
| **Return available IPv6 address ranges** | `GET /ipv6_range_list` | This function lists available IPv6 address ranges. | [ipv6-ipv6_range_list.md](endpoints/ipv6-address-settings/ipv6-ipv6_range_list.md) |
| **Return server's IPv6 addresses** | `GET /listipv6s` | This function lists the IPv6 addresses bound to a server’s network interfaces. | [ips-listipv6s.md](endpoints/ipv6-address-settings/ips-listipv6s.md) |
| **Update IPv6 address range name or note** | `GET /ipv6_range_edit` | This function changes an IPv6 address range's name and/or note. | [ipv6-ipv6_range_edit.md](endpoints/ipv6-address-settings/ipv6-ipv6_range_edit.md) |

### Legacy Migration (`endpoints/legacy-migration/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Legacy Migration** | `-` | Backups / Legacy Migration | [_category.md](endpoints/legacy-migration/_category.md) |
| **Migrate server to new backup system** | `GET /convert_and_migrate_from_legacy_config` | This function converts and migrates a server from the Legacy Backup system to the ... | [backup-convert_and_migrate_from_legacy_config.md](endpoints/legacy-migration/backup-convert_and_migrate_from_legacy_config.md) |

### License Management (`endpoints/license-management/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **License Management** | `-` | The Server Administration module for WHM API 1. | [_category.md](endpoints/license-management/_category.md) |
| **Return cPanel Store or Market checkout URL** | `GET /purchase_a_license` | This function returns the checkout URL to use for a cPanel Store or cPanel Market ... | [market-purchase_a_license.md](endpoints/license-management/market-purchase_a_license.md) |
| **Return server's cPanel license status** | `GET /run_cpkeyclt` | This function verifies the system's license status with WebPros International, LLC's | [sys-run_cpkeyclt.md](endpoints/license-management/sys-run_cpkeyclt.md) |

### Links (`endpoints/links/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create integration link** | `GET /create_integration_link` | This function creates an integration link in the cPanel interface. | [integration-create_integration_link.md](endpoints/links/integration-create_integration_link.md) |
| **Create integration link group** | `GET /create_integration_group` | This function creates a group to store integrations links in the cPanel interface. | [integration-create_integration_group.md](endpoints/links/integration-create_integration_group.md) |
| **Links** | `-` | Integrations / Links | [_category.md](endpoints/links/_category.md) |
| **Remove integration link** | `GET /remove_integration_link` | This function removes an integration link from the cPanel interface. | [integration-remove_integration_link.md](endpoints/links/integration-remove_integration_link.md) |
| **Remove integration link group** | `GET /remove_integration_group` | This removes a group of integration links from the cPanel interface. | [integration-remove_integration_group.md](endpoints/links/integration-remove_integration_group.md) |
| **Return integration link configuration** | `GET /get_integration_link_user_config` | This function retrieves configuration information about a specified integration li... | [integration-get_integration_link_user_config.md](endpoints/links/integration-get_integration_link_user_config.md) |
| **Return integration link groups** | `GET /list_integration_groups` | This function lists the groups of integration links in the cPanel interface. | [integration-list_integration_groups.md](endpoints/links/integration-list_integration_groups.md) |
| **Return integration links** | `GET /list_integration_links` | This function lists integration links in the cPanel interface. | [integration-list_integration_links.md](endpoints/links/integration-list_integration_links.md) |
| **Update integration link token** | `GET /update_integration_link_token` | This function refreshes the token for an integration link. | [integration-update_integration_link_token.md](endpoints/links/integration-update_integration_link_token.md) |

### List Package Information (`endpoints/list-package-information/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **List Package Information** | `-` | System Package Management / List Package Information | [_category.md](endpoints/list-package-information/_category.md) |
| **Return RPM package update status** | `GET /package_manager_is_performing_actions` | This function checks the activity of the process that you executed in the WHM API ... | [packagemanager-package_manager_is_performing_actions.md](endpoints/list-package-information/packagemanager-package_manager_is_performing_actions.md) |
| **Return available RPM packages** | `GET /package_manager_list_packages` | This function lists information about the system's available RPM packages. | [packagemanager-package_manager_list_packages.md](endpoints/list-package-information/packagemanager-package_manager_list_packages.md) |
| **Return available RPM packages** | `GET /get_rpm_version_data` | This function lists a key's available RPMs. For more information, read our | [rpmversions-get_rpm_version_data.md](endpoints/list-package-information/rpmversions-get_rpm_version_data.md) |
| **Return available RPM packages information** | `GET /package_manager_get_package_info` | This function retrieves information about the system's available | [packagemanager-package_manager_get_package_info.md](endpoints/list-package-information/packagemanager-package_manager_get_package_info.md) |
| **Return possible RPM package changes** | `GET /package_manager_resolve_actions` | This function determines the actions that would result from the provisioning of a ... | [packagemanager-package_manager_resolve_actions.md](endpoints/list-package-information/packagemanager-package_manager_resolve_actions.md) |
| **Return required but uninstalled server RPM package** | `GET /list_rpms` | This function lists RPMs that the server needs, but the server owner has not yet i... | [rpmversions-list_rpms.md](endpoints/list-package-information/rpmversions-list_rpms.md) |

### Login Url (`endpoints/login-url/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Login URL** | `-` | Authentication / Login URL | [_category.md](endpoints/login-url/_category.md) |
| **Return cPanel Store or cPanel Market login URL** | `GET /get_login_url` | This function retrieves the login URL for the cPanel Store or a | [market-get_login_url.md](endpoints/login-url/market-get_login_url.md) |

### Mail Dns Settings (`endpoints/mail-dns-settings/`)

Contains **17** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add manual mail exchanger redirect record** | `GET /set_manual_mx_redirects` | This function lets you create a manual Exim mail exchanger (MX) redirect for a dom... | [exim-set_manual_mx_redirects.md](endpoints/mail-dns-settings/exim-set_manual_mx_redirects.md) |
| **Apply a DMARC record to a domain** | `GET /apply_dmarc` | This function applies a DMARC record to the specified domain(s). | [emailauth-apply_dmarc.md](endpoints/mail-dns-settings/emailauth-apply_dmarc.md) |
| **Disable domain's DKIM records** | `GET /disable_dkim` | This function removes the DomainKeys Identified Mail (DKIM) records on the DNS ser... | [emailauth-disable_dkim.md](endpoints/mail-dns-settings/emailauth-disable_dkim.md) |
| **Enable domain's DKIM records** | `GET /enable_dkim` | This function enables DomainKeys Identified Mail (DKIM) records on the DNS server ... | [emailauth-enable_dkim.md](endpoints/mail-dns-settings/emailauth-enable_dkim.md) |
| **Get the server's default DMARC record** | `GET /get_default_dmarc_record` | This function retrieves the server's default DMARC record. | [emailauth-get_default_dmarc_record.md](endpoints/mail-dns-settings/emailauth-get_default_dmarc_record.md) |
| **Install domain SPF record** | `GET /install_spf_records` | This function installs a Sender Policy Framework (SPF) record for a domain on the ... | [emailauth-install_spf_records.md](endpoints/mail-dns-settings/emailauth-install_spf_records.md) |
| **Install existing private key to DKIM record** | `GET /install_dkim_private_keys` | This function installs existing keys for use in a DomainKeys Identified Mail (DKIM... | [emailauth-install_dkim_private_keys.md](endpoints/mail-dns-settings/emailauth-install_dkim_private_keys.md) |
| **Mail DNS Settings** | `-` | Mail / Mail DNS Settings | [_category.md](endpoints/mail-dns-settings/_category.md) |
| **Remove domains' DMARC records.** | `GET /remove_dmarc` | This function removes the DMARC DNS record from a domain. | [emailauth-remove_dmarc.md](endpoints/mail-dns-settings/emailauth-remove_dmarc.md) |
| **Remove manual mail exchanger redirect record** | `GET /unset_manual_mx_redirects` | This function removes a domain's manual Exim mail exchanger (MX) redirect entry. T... | [exim-unset_manual_mx_redirects.md](endpoints/mail-dns-settings/exim-unset_manual_mx_redirects.md) |
| **Return domain's DKIM private key** | `GET /fetch_dkim_private_keys` | This function returns a domain's installed DKIM private key in Privacy-Enhanced Ma... | [emailauth-fetch_dkim_private_keys.md](endpoints/mail-dns-settings/emailauth-fetch_dkim_private_keys.md) |
| **Set the server's default DMARC record** | `GET /set_default_dmarc_record` | This function sets the server's default DMARC record. | [emailauth-set_default_dmarc_record.md](endpoints/mail-dns-settings/emailauth-set_default_dmarc_record.md) |
| **Validate DKIM records** | `GET /validate_current_dkims` | This function retrieves and checks the DomainKeys Identified Mail (DKIM) records f... | [emailauth-validate_current_dkims.md](endpoints/mail-dns-settings/emailauth-validate_current_dkims.md) |
| **Validate DMARC records** | `GET /validate_current_dmarcs` | This function retrieves and checks the DMARC record for one or more domains. | [emailauth-validate_current_dmarcs.md](endpoints/mail-dns-settings/emailauth-validate_current_dmarcs.md) |
| **Validate domain PTR records** | `GET /validate_current_ptrs` | This function validates the pointer records (PTR) for IPv4 and IPv6 addresses an a... | [emailauth-validate_current_ptrs.md](endpoints/mail-dns-settings/emailauth-validate_current_ptrs.md) |
| **Validate domain SPF records** | `GET /validate_current_spfs` | This function validates a Sender Policy Framework (SPF) record for one or more dom... | [emailauth-validate_current_spfs.md](endpoints/mail-dns-settings/emailauth-validate_current_spfs.md) |
| **Validate domain's DKIM keys** | `GET /ensure_dkim_keys_exist` | This function confirms the validity of a DomainKeys Identified Mail (DKIM) key for... | [emailauth-ensure_dkim_keys_exist.md](endpoints/mail-dns-settings/emailauth-ensure_dkim_keys_exist.md) |

### Mail Server Settings (`endpoints/mail-server-settings/`)

Contains **13** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **(Deprecated) Disable SNI mail services for domains (deprecated)** | `GET /disable_mail_sni` | This function is deprecated and always fails. | [ssl-disable_mail_sni.md](endpoints/mail-server-settings/ssl-disable_mail_sni.md) |
| **Create email account mobile profile configuration** | `GET /generate_mobileconfig` | This function generates a mobile configuration profile for an email account. | [email-generate_mobileconfig.md](endpoints/mail-server-settings/email-generate_mobileconfig.md) |
| **Enable SNI mail services for domains** | `GET /enable_mail_sni` | This function enables SNI for mail services on the specified domains. | [ssl-enable_mail_sni.md](endpoints/mail-server-settings/ssl-enable_mail_sni.md) |
| **Mail Server Settings** | `-` | Mail / Mail Server Settings | [_category.md](endpoints/mail-server-settings/_category.md) |
| **Rebuild mail SNI configuration files** | `GET /rebuild_mail_sni_config` | This function rebuilds the mail SNI configuration files. | [ssl-rebuild_mail_sni_config.md](endpoints/mail-server-settings/ssl-rebuild_mail_sni_config.md) |
| **Remove Exim configuration files after failed update** | `GET /remove_in_progress_exim_config_edit` | This function removes in-progress Exim configuration files after | [exim-remove_in_progress_exim_config_edit.md](endpoints/mail-server-settings/exim-remove_in_progress_exim_config_edit.md) |
| **Repair Exim configuration file** | `GET /exim_configuration_check` | This function scans the Exim configuration file for errors, and if it finds errors... | [exim-exim_configuration_check.md](endpoints/mail-server-settings/exim-exim_configuration_check.md) |
| **Repair misconfigured email settings** | `GET /normalize_user_email_configuration` | This function fixes a user's misconfigured email settings. This includes any misco... | [email-normalize_user_email_configuration.md](endpoints/mail-server-settings/email-normalize_user_email_configuration.md) |
| **Return domain's SNI mail services status** | `GET /mail_sni_status` | This function retrieves the status of the domain's SNI mail services. | [ssl-mail_sni_status.md](endpoints/mail-server-settings/ssl-mail_sni_status.md) |
| **Return server SNI support status** | `GET /is_sni_supported` | This function checks whether the server supports SNI (Server Name Indication). | [ssl-is_sni_supported.md](endpoints/mail-server-settings/ssl-is_sni_supported.md) |
| **Return server mail queue contents** | `GET /fetch_mail_queue` | This function retrieves the contents of the server's mail queue. | [exim-fetch_mail_queue.md](endpoints/mail-server-settings/exim-fetch_mail_queue.md) |
| **Validate Exim configuration** | `GET /validate_current_installed_exim_config` | This function validates the system's current Exim configuration. | [exim-validate_current_installed_exim_config.md](endpoints/mail-server-settings/exim-validate_current_installed_exim_config.md) |
| **Validate Exim configure file syntax** | `GET /validate_exim_configuration_syntax` | This function evaluates and validates an Exim configuration file's syntax. | [exim-validate_exim_configuration_syntax.md](endpoints/mail-server-settings/exim-validate_exim_configuration_syntax.md) |

### Manage Mysql Server (`endpoints/manage-mysql-server/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Manage MySQL Server** | `-` | Databases / Manage MySQL Server | [_category.md](endpoints/manage-mysql-server/_category.md) |
| **Return MySQL or MariaDB upgrade status** | `GET /background_mysql_upgrade_status` | This function retrieves the status of a background MySQL® or MariaDB® upgrade. | [mysql-background_mysql_upgrade_status.md](endpoints/manage-mysql-server/mysql-background_mysql_upgrade_status.md) |
| **Return MySQL version** | `GET /current_mysql_version` | This function retrieves the server's version of MySQL® or MariaDB®. | [mysql-current_mysql_version.md](endpoints/manage-mysql-server/mysql-current_mysql_version.md) |
| **Return available MySQL versions** | `GET /installable_mysql_versions` | This function lists all available versions of MySQL® and MariaDB. | [mysql-installable_mysql_versions.md](endpoints/manage-mysql-server/mysql-installable_mysql_versions.md) |
| **Return latest MySQL version** | `GET /latest_available_mysql_version` | This function retrieves the latest available version of MySQL® or MariaDB®. | [mysql-latest_available_mysql_version.md](endpoints/manage-mysql-server/mysql-latest_available_mysql_version.md) |
| **Start background MySQL upgrade** | `GET /start_background_mysql_upgrade` | This function upgrades MySQL® or MariaDB® in the background. This will reinstall M... | [mysql-start_background_mysql_upgrade.md](endpoints/manage-mysql-server/mysql-start_background_mysql_upgrade.md) |
| **Update MySQL root password** | `GET /set_local_mysql_root_password` | This function resets the root user's password on the local MySQL® server. | [localmysql-set_local_mysql_root_password.md](endpoints/manage-mysql-server/localmysql-set_local_mysql_root_password.md) |
| **Update the servers SQL configuration.** | `POST /update_sql_config` | This function updates the database configuration file for MySQL® or MariaDB®. | [mysql-update_sql_config.md](endpoints/manage-mysql-server/mysql-update_sql_config.md) |
| **Validate MySQL status before upgrade** | `GET /background_mysql_upgrade_checker_run` | This function checks your MySQL configuration file and table engine before an upgr... | [mysql-background_mysql_upgrade_checker_run.md](endpoints/manage-mysql-server/mysql-background_mysql_upgrade_checker_run.md) |

### Management (`endpoints/management/`)

Contains **8** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add login security record to list** | `GET /create_cphulk_record` | This function adds a new record or records to cPHulk's whitelist or blacklist. | [cphulk-create_cphulk_record.md](endpoints/management/cphulk-create_cphulk_record.md) |
| **Add login security record to list with comment** | `POST /batch_create_cphulk_records` | This function adds one or more records to cPHulk's whitelist or blacklist. The fun... | [cphulk-batch_create_cphulk_records.md](endpoints/management/cphulk-batch_create_cphulk_records.md) |
| **Management** | `-` | Login Security (cPHulk) / Management | [_category.md](endpoints/management/_category.md) |
| **Remove all login security records** | `GET /flush_cphulk_login_history` | This function removes the login history entries from the cPHulk | [cphulk-flush_cphulk_login_history.md](endpoints/management/cphulk-flush_cphulk_login_history.md) |
| **Remove login security IP address block** | `GET /flush_cphulk_login_history_for_ips` | This function removes specific login history entries from the cPHulk database. Use... | [cphulk-flush_cphulk_login_history_for_ips.md](endpoints/management/cphulk-flush_cphulk_login_history_for_ips.md) |
| **Remove login security record from list** | `GET /delete_cphulk_record` | This function deletes a record or records from cPHulk's whitelist or blacklist. | [cphulk-delete_cphulk_record.md](endpoints/management/cphulk-delete_cphulk_record.md) |
| **Return login security list records** | `GET /read_cphulk_records` | This function displays a cPHulk list's records. | [cphulk-read_cphulk_records.md](endpoints/management/cphulk-read_cphulk_records.md) |
| **Return login security status** | `GET /cphulk_status` | This function returns the status of the cPHulk service. | [cphulk-cphulk_status.md](endpoints/management/cphulk-cphulk_status.md) |

### Market Integration (`endpoints/market-integration/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Market Integration** | `-` | Commerce Integration / Market Integration | [_category.md](endpoints/market-integration/_category.md) |
| **Validate login token and return access token** | `GET /validate_login_token` | This function validates a login token with the cPanel Store or a cPanel Market pro... | [market-validate_login_token.md](endpoints/market-integration/market-validate_login_token.md) |

### Mysql Databases (`endpoints/mysql-databases/`)

Contains **8** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **MySQL Databases** | `-` | Databases / MySQL Databases | [_category.md](endpoints/mysql-databases/_category.md) |
| **Return MySQL database optimizations** | `GET /get_database_optimizations` | This function retrieves available database optimizations. | [db-get_database_optimizations.md](endpoints/mysql-databases/db-get_database_optimizations.md) |
| **Return MySQL databases** | `GET /list_databases` | This function lists the server's databases. | [db-list_databases.md](endpoints/mysql-databases/db-list_databases.md) |
| **Return MySQL databases and users for account** | `GET /list_mysql_databases_and_users` | This function retrieves the MySQL® database and user data for the specified account. | [db-list_mysql_databases_and_users.md](endpoints/mysql-databases/db-list_mysql_databases_and_users.md) |
| **Return MySQL users** | `GET /list_database_users` | This function lists the server's database users. | [db-list_database_users.md](endpoints/mysql-databases/db-list_database_users.md) |
| **Update MySQL database name** | `GET /rename_mysql_database` | This function changes a MySQL® database's name. MySQL does not allow you to rename... | [db-rename_mysql_database.md](endpoints/mysql-databases/db-rename_mysql_database.md) |
| **Update MySQL user password** | `GET /set_mysql_password` | This function changes a MySQL® database user's password. | [db-set_mysql_password.md](endpoints/mysql-databases/db-set_mysql_password.md) |
| **Update MySQL username** | `GET /rename_mysql_user` | This function changes a MySQL® database user's name. | [db-rename_mysql_user.md](endpoints/mysql-databases/db-rename_mysql_user.md) |

### Network Address Translation (`endpoints/network-address-translation/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Network Address Translation** | `-` | IP Address Management / Network Address Translation | [_category.md](endpoints/network-address-translation/_category.md) |
| **Register NAT IP address to public IP address** | `GET /nat_set_public_ip` | This function pairs a local IP address with a public IP address on NAT-configured ... | [nat-nat_set_public_ip.md](endpoints/network-address-translation/nat-nat_set_public_ip.md) |
| **Return public IP address of private IP address** | `GET /get_public_ip` | This function returns the public IP address for a specified public or private IP a... | [ips-get_public_ip.md](endpoints/network-address-translation/ips-get_public_ip.md) |
| **Validate public IP address for NAT** | `GET /nat_checkip` | This function validates a public IP address on a NAT-configured server. | [nat-nat_checkip.md](endpoints/network-address-translation/nat-nat_checkip.md) |

### Nginx Manager (`endpoints/nginx-manager/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Delete the user's NGINX cache.** | `GET /nginxmanager_clear_cache` | This function clears a user's NGINX cache | [nginxmanager-nginxmanager_clear_cache.md](endpoints/nginx-manager/nginxmanager-nginxmanager_clear_cache.md) |
| **NGINX Manager** | `-` | The NGINX Manager module for WHM API 1. | [_category.md](endpoints/nginx-manager/_category.md) |
| **Restore NGINX configuration to default values.** | `GET /nginxmanager_reset_users_cache_config` | This function resets a user to the NGINX system default. | [nginxmanager-nginxmanager_reset_users_cache_config.md](endpoints/nginx-manager/nginxmanager-nginxmanager_reset_users_cache_config.md) |
| **Return NGINX caching configurations.** | `GET /nginxmanager_get_cache_config_system` | This function returns the system NGINX cache configuration. | [nginxmanager-nginxmanager_get_cache_config_system.md](endpoints/nginx-manager/nginxmanager-nginxmanager_get_cache_config_system.md) |
| **Return user NGINX caching configurations.** | `GET /nginxmanager_get_cache_config_users` | This function returns a user's NGINX cache configuration. | [nginxmanager-nginxmanager_get_cache_config_users.md](endpoints/nginx-manager/nginxmanager-nginxmanager_get_cache_config_users.md) |
| **Update NGINX caching status.** | `GET /nginxmanager_set_cache_config` | This function enables or disables NGINX caching. | [nginxmanager-nginxmanager_set_cache_config.md](endpoints/nginx-manager/nginxmanager-nginxmanager_set_cache_config.md) |
| **Update NGINX configuration.** | `GET /nginxmanager_rebuild_cache_config` | This function rebuilds the NGINX user configuration. | [nginxmanager-nginxmanager_rebuild_cache_config.md](endpoints/nginx-manager/nginxmanager-nginxmanager_rebuild_cache_config.md) |

### Notifications (`endpoints/notifications/`)

Contains **12** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Notifications** | `-` | Server Administration / Notifications | [_category.md](endpoints/notifications/_category.md) |
| **Return Contact Manager event importance settings** | `GET /get_all_contact_importances` | This function lists the importance of all application events in | [contact-get_all_contact_importances.md](endpoints/notifications/contact-get_all_contact_importances.md) |
| **Return app contact importance setting** | `GET /get_application_contact_importance` | This function retrieves the importance level of an application's events for WHM's | [contact-get_application_contact_importance.md](endpoints/notifications/contact-get_application_contact_importance.md) |
| **Return app's event contact importance setting** | `GET /get_application_contact_event_importance` | This function retrieves the importance level of an application event for WHM's Con... | [contact-get_application_contact_event_importance.md](endpoints/notifications/contact-get_application_contact_event_importance.md) |
| **Send Pushbullet™ access verification** | `GET /verify_pushbullet_access` | This function calls the WHM API 1 send_test_pushbullet_note function with the syst... | [icontact-verify_pushbullet_access.md](endpoints/notifications/icontact-verify_pushbullet_access.md) |
| **Send Pushbullet™ test with access token** | `GET /send_test_pushbullet_note` | This function uses the specified access token to send a test Pushbullet™ note. The... | [icontact-send_test_pushbullet_note.md](endpoints/notifications/icontact-send_test_pushbullet_note.md) |
| **Send notification URL via POST** | `GET /send_test_posturl` | This function uses the specified URL to send a test message through the POST metho... | [icontact-send_test_posturl.md](endpoints/notifications/icontact-send_test_posturl.md) |
| **Send notification URL via POST verification** | `GET /verify_posturl_access` | This function calls the WHM API 1 send_test_posturl function for | [icontact-verify_posturl_access.md](endpoints/notifications/icontact-verify_posturl_access.md) |
| **Update WHM contact email address** | `GET /update_contact_email` | This function updates the contact email address in the wwwacct.conf file. | [wwwacct-update_contact_email.md](endpoints/notifications/wwwacct-update_contact_email.md) |
| **Update app contact importance setting** | `GET /set_application_contact_importance` | This function sets the importance level of an application's events for WHM's | [contact-set_application_contact_importance.md](endpoints/notifications/contact-set_application_contact_importance.md) |
| **Update app's event contact importance setting** | `GET /set_application_contact_event_importance` | This function sets the importance level of an application event for WHM's | [contact-set_application_contact_event_importance.md](endpoints/notifications/contact-set_application_contact_event_importance.md) |
| **Verify Slack® Webhook connection** | `GET /verify_slack_access` | This function verifies the connection to a Slack® WebHook. You can specify Slack a... | [icontact-verify_slack_access.md](endpoints/notifications/icontact-verify_slack_access.md) |

### Package Manager Settings (`endpoints/package-manager-settings/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Package Manager Settings** | `-` | System Package Management / Package Manager Settings | [_category.md](endpoints/package-manager-settings/_category.md) |
| **Remove rpm.versions system configuration** | `GET /delete_rpm_version` | This function removes RPM data. When you call this function, it performs the same | [rpmversions-delete_rpm_version.md](endpoints/package-manager-settings/rpmversions-delete_rpm_version.md) |
| **Repair RPM management yum cache issues** | `GET /package_manager_fixcache` | This function attempts to repair yum cache issues. | [packagemanager-package_manager_fixcache.md](endpoints/package-manager-settings/packagemanager-package_manager_fixcache.md) |
| **Return RPM management build log** | `GET /package_manager_get_build_log` | This function returns build log content. | [packagemanager-package_manager_get_build_log.md](endpoints/package-manager-settings/packagemanager-package_manager_get_build_log.md) |
| **Update rpm.versions system configuration** | `GET /edit_rpm_version` | This function edits RPM data. When you call this function, it performs the same ac... | [rpmversions-edit_rpm_version.md](endpoints/package-manager-settings/rpmversions-edit_rpm_version.md) |

### Passwords (`endpoints/passwords/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Enable forced password update** | `GET /forcepasswordchange` | This function forces a user to change the account password after the next login at... | [accounts-forcepasswordchange.md](endpoints/passwords/accounts-forcepasswordchange.md) |
| **Passwords** | `-` | Accounts / Passwords | [_category.md](endpoints/passwords/_category.md) |
| **Return password strength** | `GET /get_password_strength` | This function measures the strength of a password. | [accounts-get_password_strength.md](endpoints/passwords/accounts-get_password_strength.md) |
| **Update cPanel account password** | `GET /passwd` | This function modifies a cPanel or reseller account's password. | [sys-passwd.md](endpoints/passwords/sys-passwd.md) |

### Php (`endpoints/php/`)

Contains **15** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **PHP** | `-` | The PHP module for WHM API 1. | [_category.md](endpoints/php/_category.md) |
| **Return PHP handlers** | `GET /php_get_handlers` | This function returns the PHP handlers on the system. | [php-php_get_handlers.md](endpoints/php/php-php_get_handlers.md) |
| **Return PHP preconfigured domains** | `GET /php_get_impacted_domains` | This function lists domains that obtain their PHP version from a specified PHP con... | [php-php_get_impacted_domains.md](endpoints/php/php-php_get_impacted_domains.md) |
| **Return PHP version of all virtual hosts** | `GET /php_get_vhost_versions` | This function returns the PHP version of every virtual host that a reseller controls. | [php-php_get_vhost_versions.md](endpoints/php/php-php_get_vhost_versions.md) |
| **Return PHP version's directives** | `GET /php_ini_get_directives` | This function returns the directives in the selected PHP version's php.ini file. W... | [php-php_ini_get_directives.md](endpoints/php/php-php_ini_get_directives.md) |
| **Return PHP version's php.ini file** | `GET /php_ini_get_content` | This function returns the contents of a PHP version's php.ini file. | [php-php_ini_get_content.md](endpoints/php/php-php_ini_get_content.md) |
| **Return installed PHP versions** | `GET /php_get_installed_versions` | This function returns the installed PHP versions on a server. | [php-php_get_installed_versions.md](endpoints/php/php-php_get_installed_versions.md) |
| **Return system default PHP version** | `GET /php_get_system_default_version` | This function returns the system default PHP version. | [php-php_get_system_default_version.md](endpoints/php/php-php_get_system_default_version.md) |
| **Return virtual hosts per PHP version** | `GET /php_get_vhosts_by_version` | This function lists the virtual hosts that use a specified version of PHP. | [php-php_get_vhosts_by_version.md](endpoints/php/php-php_get_vhosts_by_version.md) |
| **Update PHP default save path** | `GET /php_set_session_save_path` | This function sets the location of PHP's default session save path. | [php-php_set_session_save_path.md](endpoints/php/php-php_set_session_save_path.md) |
| **Update PHP version's directives** | `GET /php_ini_set_directives` | This function sets the value of a PHP version's directives. | [php-php_ini_set_directives.md](endpoints/php/php-php_ini_set_directives.md) |
| **Update PHP version's handler** | `GET /php_set_handler` | This function sets a PHP version's handler. | [php-php_set_handler.md](endpoints/php/php-php_set_handler.md) |
| **Update PHP version's php.ini file** | `POST /php_ini_set_content` | This function changes the contents of a PHP version's php.ini file. | [php-php_ini_set_content.md](endpoints/php/php-php_ini_set_content.md) |
| **Update default PHP version** | `GET /php_set_system_default_version` | The version of PHP that you wish to set as the system's default. | [php-php_set_system_default_version.md](endpoints/php/php-php_set_system_default_version.md) |
| **Update domain's PHP values** | `GET /php_set_vhost_versions` | This function allows WHM's | [php-php_set_vhost_versions.md](endpoints/php/php-php_set_vhost_versions.md) |

### Php Fpm (`endpoints/php-fpm/`)

Contains **10** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Enable PHP-FPM on all domains** | `GET /convert_all_domains_to_fpm` | This function activates PHP-FPM for any non-PHP-FPM domains on a server. | [php-convert_all_domains_to_fpm.md](endpoints/php-fpm/php-convert_all_domains_to_fpm.md) |
| **Enable PHP-FPM on new cPanel accounts and domains** | `GET /php_set_default_accounts_to_fpm` | This function determines whether to enable PHP-FPM on new accounts and domains on ... | [php-php_set_default_accounts_to_fpm.md](endpoints/php-fpm/php-php_set_default_accounts_to_fpm.md) |
| **Enable PHP-FPM preconfigured status** | `GET /php_set_old_fpm_flag` | This function creates the /etc/cpanel/ea4/old_fpm_flag touch file. | [php-php_set_old_fpm_flag.md](endpoints/php-fpm/php-php_set_old_fpm_flag.md) |
| **PHP-FPM** | `-` | Web Server Configuration / PHP-FPM | [_category.md](endpoints/php-fpm/_category.md) |
| **Return PHP-FPM conversion status** | `GET /is_conversion_in_progress` | This function indicates whether the system's process to convert all of WHM's accou... | [php-is_conversion_in_progress.md](endpoints/php-fpm/php-is_conversion_in_progress.md) |
| **Return PHP-FPM directives and pool options** | `POST /php_fpm_config_get` | This function retrieves the PHP INI directives and pool options for a system's or ... | [php-php_fpm_config_get.md](endpoints/php-fpm/php-php_fpm_config_get.md) |
| **Return PHP-FPM preconfigured status** | `GET /php_get_old_fpm_flag` | This function determines whether your system runs with a preconfigured PHP-FPM con... | [php-php_get_old_fpm_flag.md](endpoints/php-fpm/php-php_get_old_fpm_flag.md) |
| **Return PHP-FPM status on new accounts** | `GET /php_get_default_accounts_to_fpm` | This function determines whether the system enables PHP-FPM for new domains and ac... | [php-php_get_default_accounts_to_fpm.md](endpoints/php-fpm/php-php_get_default_accounts_to_fpm.md) |
| **Return workload data for PHP-FPM on all domains** | `GET /get_fpm_count_and_utilization` | This function provides information that will help you to determine | [php-get_fpm_count_and_utilization.md](endpoints/php-fpm/php-get_fpm_count_and_utilization.md) |
| **Update PHP-FPM directives and pool options** | `POST /php_fpm_config_set` | This function configures the PHP INI directives and pool options | [php-php_fpm_config_set.md](endpoints/php-fpm/php-php_fpm_config_set.md) |

### Plugin Based Features (`endpoints/plugin-based-features/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Check if a plugin feature is ready for use** | `GET /EcosystemFeatures/is_ready` | This function checks if a plugin-based feature is installed and ready for use on t... | [is_ready.md](endpoints/plugin-based-features/is_ready.md) |
| **Disable feature locally** | `GET /EcosystemFeatures/local_disable` | This function allows you to locally disable a plugin-based feature. | [local_disable.md](endpoints/plugin-based-features/local_disable.md) |
| **Enable feature locally** | `GET /EcosystemFeatures/local_enable` | This function allows you to locally enable a plugin-based feature. | [local_enable.md](endpoints/plugin-based-features/local_enable.md) |
| **Plugin-Based Features** | `-` | The plugin-based features module for WHM API 1. | [_category.md](endpoints/plugin-based-features/_category.md) |

### Postgresql Databases (`endpoints/postgresql-databases/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **PostgreSQL Databases** | `-` | Databases / PostgreSQL Databases | [_category.md](endpoints/postgresql-databases/_category.md) |
| **Update PostgreSQL database name** | `GET /rename_postgresql_database` | This function changes a PostgreSQL® database's name. | [db-rename_postgresql_database.md](endpoints/postgresql-databases/db-rename_postgresql_database.md) |
| **Update PostgreSQL user password** | `GET /set_postgresql_password` | This function changes a PostgreSQL® database user's password. | [db-set_postgresql_password.md](endpoints/postgresql-databases/db-set_postgresql_password.md) |
| **Update PostgreSQL username** | `GET /rename_postgresql_user` | This function changes a PostgreSQL® database user's name. | [db-rename_postgresql_user.md](endpoints/postgresql-databases/db-rename_postgresql_user.md) |

### Product Management (`endpoints/product-management/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Product Management** | `-` | cPanel Market / Product Management | [_category.md](endpoints/product-management/_category.md) |
| **Return Market providers products** | `GET /get_market_providers_products` | This function lists products available in the server's cPanel Market. | [market-get_market_providers_products.md](endpoints/product-management/market-get_market_providers_products.md) |
| **Return Market providers' products adjusted prices** | `GET /get_adjusted_market_providers_products` | This function lists all available cPanel Market products from enabled providers, | [market-get_adjusted_market_providers_products.md](endpoints/product-management/market-get_adjusted_market_providers_products.md) |
| **Return Market providers' products metadata** | `GET /get_market_providers_product_metadata` | This function lists all available cPanel Market providers' products and the attrib... | [market-get_market_providers_product_metadata.md](endpoints/product-management/market-get_market_providers_product_metadata.md) |
| **Update Market provider product** | `GET /set_market_product_attribute` | This function sets an attribute for a cPanel Market provider's product. | [market-set_market_product_attribute.md](endpoints/product-management/market-set_market_product_attribute.md) |

### Provider Management (`endpoints/provider-management/`)

Contains **6** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Disable Market provider** | `GET /disable_market_provider` | This function disables a cPanel Market provider. | [market-disable_market_provider.md](endpoints/provider-management/market-disable_market_provider.md) |
| **Enable Market provider** | `GET /enable_market_provider` | This function enables a cPanel Market provider. | [market-enable_market_provider.md](endpoints/provider-management/market-enable_market_provider.md) |
| **Provider Management** | `-` | cPanel Market / Provider Management | [_category.md](endpoints/provider-management/_category.md) |
| **Return Market providers** | `GET /get_market_providers_list` | This function lists the available cPanel Market providers. | [market-get_market_providers_list.md](endpoints/provider-management/market-get_market_providers_list.md) |
| **Return Market providers' commission configuration** | `GET /get_market_providers_commission_config` | This function returns the commission configuration of all available cPanel Market ... | [market-get_market_providers_commission_config.md](endpoints/provider-management/market-get_market_providers_commission_config.md) |
| **Update Market provider commission contact ID** | `GET /set_market_provider_commission_id` | This function sets the contact ID to which a cPanel Market provider will send comm... | [market-set_market_provider_commission_id.md](endpoints/provider-management/market-set_market_provider_commission_id.md) |

### Remote Mysql Databases (`endpoints/remote-mysql-databases/`)

Contains **10** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create remote MySQL profile** | `GET /remote_mysql_create_profile` | This function creates a profile to access a remote MySQL® server. | [remotemysql-remote_mysql_create_profile.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_create_profile.md) |
| **Create remote MySQL profile via SSH** | `GET /remote_mysql_create_profile_via_ssh` | This function uses SSH to create a profile to access a remote MySQL® server. | [remotemysql-remote_mysql_create_profile_via_ssh.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_create_profile_via_ssh.md) |
| **Delete remote MySQL profile** | `GET /remote_mysql_delete_profile` | This function deletes a specified remote MySQL® profile. | [remotemysql-remote_mysql_delete_profile.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_delete_profile.md) |
| **Remote MySQL Databases** | `-` | Databases / Remote MySQL Databases | [_category.md](endpoints/remote-mysql-databases/_category.md) |
| **Return remote MySQL profile** | `GET /remote_mysql_read_profile` | This function displays the details of a specified remote MySQL® profile. | [remotemysql-remote_mysql_read_profile.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_read_profile.md) |
| **Return remote MySQL profile activation** | `GET /remote_mysql_monitor_profile_activation` | This function reports the current status of the remote MySQL® profile activation p... | [remotemysql-remote_mysql_monitor_profile_activation.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_monitor_profile_activation.md) |
| **Return remote MySQL profiles** | `GET /remote_mysql_read_profiles` | This function displays the details of all remote MySQL® profiles available in WHM. | [remotemysql-remote_mysql_read_profiles.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_read_profiles.md) |
| **Start remote MySQL profile activation** | `GET /remote_mysql_initiate_profile_activation` | This function initiates the activation process for a remote MySQL® profile. | [remotemysql-remote_mysql_initiate_profile_activation.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_initiate_profile_activation.md) |
| **Update remote MySQL profile** | `GET /remote_mysql_update_profile` | This function updates one or more parameters for a remote MySQL® | [remotemysql-remote_mysql_update_profile.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_update_profile.md) |
| **Validate remote MySQL profile connection** | `GET /remote_mysql_validate_profile` | This function validates a specified remote MySQL® profile's connection details. | [remotemysql-remote_mysql_validate_profile.md](endpoints/remote-mysql-databases/remotemysql-remote_mysql_validate_profile.md) |

### Reporting (`endpoints/reporting/`)

Contains **6** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Reporting** | `-` | Login Security (cPHulk) / Reporting | [_category.md](endpoints/reporting/_category.md) |
| **Return login security brute force attacks** | `GET /get_cphulk_brutes` | This function lists brute force attack entries from the cPHulk database. | [cphulk-get_cphulk_brutes.md](endpoints/reporting/cphulk-get_cphulk_brutes.md) |
| **Return login security brute force attacks by user** | `GET /get_cphulk_user_brutes` | This function lists brute force attack entries from the cPHulk database, ordered b... | [cphulk-get_cphulk_user_brutes.md](endpoints/reporting/cphulk-get_cphulk_user_brutes.md) |
| **Return login security country codes** | `GET /get_countries_with_known_ip_ranges` | This function lists the country codes available for whitelist and blacklist functi... | [countrycodes-get_countries_with_known_ip_ranges.md](endpoints/reporting/countrycodes-get_countries_with_known_ip_ranges.md) |
| **Return login security excessive brute force attacks** | `GET /get_cphulk_excessive_brutes` | This function retrieves excessive brute force attack entries from the cPHulk datab... | [cphulk-get_cphulk_excessive_brutes.md](endpoints/reporting/cphulk-get_cphulk_excessive_brutes.md) |
| **Return login security failed logins** | `GET /get_cphulk_failed_logins` | This function lists failed login attempt entries from the cPHulk database. | [cphulk-get_cphulk_failed_logins.md](endpoints/reporting/cphulk-get_cphulk_failed_logins.md) |

### Reseller Account Management (`endpoints/reseller-account-management/`)

Contains **6** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Delete reseller and reseller's cPanel accounts** | `GET /terminatereseller` | This function deletes a reseller and all of the reseller's cPanel accounts. | [resellers-terminatereseller.md](endpoints/reseller-account-management/resellers-terminatereseller.md) |
| **Disables cPanel account's reseller status** | `GET /unsetupreseller` | This function revokes reseller status from an account. | [resellers-unsetupreseller.md](endpoints/reseller-account-management/resellers-unsetupreseller.md) |
| **Enable cPanel account's reseller status** | `GET /setupreseller` | This function grants reseller status to an account. | [resellers-setupreseller.md](endpoints/reseller-account-management/resellers-setupreseller.md) |
| **Reseller Account Management** | `-` | Resellers / Account Management | [_category.md](endpoints/reseller-account-management/_category.md) |
| **Suspend reseller** | `GET /suspendreseller` | This function suspends a reseller account. | [resellers-suspendreseller.md](endpoints/reseller-account-management/resellers-suspendreseller.md) |
| **Unsuspend reseller** | `GET /unsuspendreseller` | This function unsuspends a reseller account. | [resellers-unsuspendreseller.md](endpoints/reseller-account-management/resellers-unsuspendreseller.md) |

### Resolvers (`endpoints/resolvers/`)

Contains **8** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create unbound DNS resolver** | `GET /set_up_dns_resolver_workarounds` | This function creates an Unbound (libunbound) DNS resolver configuration. | [dns-set_up_dns_resolver_workarounds.md](endpoints/resolvers/dns-set_up_dns_resolver_workarounds.md) |
| **Resolvers** | `-` | DNS / Resolvers | [_category.md](endpoints/resolvers/_category.md) |
| **Return ALIAS DNS record availability & resolver** | `GET /is_alias_available` | This function returns whether ALIAS and ANAME records are available and the value ... | [dns-is_alias_available.md](endpoints/resolvers/dns-is_alias_available.md) |
| **Return current user's nameservers** | `GET /get_nameserver_config` | This function retrieves the default nameservers for the currently-authenticated user. | [nameserver-get_nameserver_config.md](endpoints/resolvers/nameserver-get_nameserver_config.md) |
| **Return nameserver's IP address** | `GET /lookupnsip` | This function retrieves a nameserver's IP address. | [nameserver-lookupnsip.md](endpoints/resolvers/nameserver-lookupnsip.md) |
| **Return nameserver's IPv4 and IPv6 addresses** | `GET /lookupnsips` | This function retrieves a nameserver's IPv4 and IPv6 addresses. | [nameserver-lookupnsips.md](endpoints/resolvers/nameserver-lookupnsips.md) |
| **Update default nameservers** | `GET /update_nameservers_config` | This function updates nameservers in the wwwacct.conf file. For more information, ... | [wwwacct-update_nameservers_config.md](endpoints/resolvers/wwwacct-update_nameservers_config.md) |
| **Update server's resolver nameservers** | `GET /setresolvers` | This function configures the server's resolver nameservers. | [resolvers-setresolvers.md](endpoints/resolvers/resolvers-setresolvers.md) |

### Restore Account (`endpoints/restore-account/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Restore Account** | `-` | Account Restoration / Restore Account | [_category.md](endpoints/restore-account/_category.md) |
| **Restore account backup** | `GET /restoreaccount` | This function restores an account backup. You can use this function to restore daily, | [backup-restoreaccount.md](endpoints/restore-account/backup-restoreaccount.md) |
| **Restore user account from backup** | `GET /restore_queue_add_task` | This function restores a user's cPanel account from a backup file. | [backup-restore_queue_add_task.md](endpoints/restore-account/backup-restore_queue_add_task.md) |
| **Validate username during restoration** | `GET /verify_new_username_for_restore` | This function checks for username conflicts during account restoration. If the fun... | [nameconflict-verify_new_username_for_restore.md](endpoints/restore-account/nameconflict-verify_new_username_for_restore.md) |

### Restore Queue Management (`endpoints/restore-queue-management/`)

Contains **8** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Remove all completed restoration tasks** | `GET /restore_queue_clear_all_completed_tasks` | This function removes successfully completed tasks from the restoration queue. | [backup-restore_queue_clear_all_completed_tasks.md](endpoints/restore-queue-management/backup-restore_queue_clear_all_completed_tasks.md) |
| **Remove all failed restoration tasks** | `GET /restore_queue_clear_all_failed_tasks` | This function removes any failed tasks from the restoration queue. | [backup-restore_queue_clear_all_failed_tasks.md](endpoints/restore-queue-management/backup-restore_queue_clear_all_failed_tasks.md) |
| **Remove all pending restoration tasks** | `GET /restore_queue_clear_all_pending_tasks` | This function removes any pending tasks from the restoration queue. | [backup-restore_queue_clear_all_pending_tasks.md](endpoints/restore-queue-management/backup-restore_queue_clear_all_pending_tasks.md) |
| **Remove all restoration tasks** | `GET /restore_queue_clear_all_tasks` | This function removes all tasks from the restoration queue. | [backup-restore_queue_clear_all_tasks.md](endpoints/restore-queue-management/backup-restore_queue_clear_all_tasks.md) |
| **Remove completed restoration task** | `GET /restore_queue_clear_completed_task` | This function removes a single completed task from the restoration queue. | [backup-restore_queue_clear_completed_task.md](endpoints/restore-queue-management/backup-restore_queue_clear_completed_task.md) |
| **Remove pending restoration task** | `GET /restore_queue_clear_pending_task` | This function removes a single pending task from the restoration queue. | [backup-restore_queue_clear_pending_task.md](endpoints/restore-queue-management/backup-restore_queue_clear_pending_task.md) |
| **Restore Queue Management** | `-` | Account Restoration / Restore Queue Management | [_category.md](endpoints/restore-queue-management/_category.md) |
| **Start restoration** | `GET /restore_queue_activate` | This function activates the restore queue. This triggers a process that restores a... | [backup-restore_queue_activate.md](endpoints/restore-queue-management/backup-restore_queue_activate.md) |

### Restore Queue Reporting (`endpoints/restore-queue-reporting/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Restore Queue Reporting** | `-` | Account Restoration / Restore Queue Reporting | [_category.md](endpoints/restore-queue-reporting/_category.md) |
| **Return active restoration tasks list** | `GET /restore_queue_list_active` | This function lists the tasks that the restoration queue is actively processing. | [backup-restore_queue_list_active.md](endpoints/restore-queue-reporting/backup-restore_queue_list_active.md) |
| **Return backup modules list** | `GET /restore_modules_summary` | This function lists backup modules and their descriptions. | [transfers-restore_modules_summary.md](endpoints/restore-queue-reporting/transfers-restore_modules_summary.md) |
| **Return completed restoration tasks list** | `GET /restore_queue_list_completed` | This function lists the restoration queue's completed tasks. | [backup-restore_queue_list_completed.md](endpoints/restore-queue-reporting/backup-restore_queue_list_completed.md) |
| **Return pending restoration tasks list** | `GET /restore_queue_list_pending` | This function lists the tasks that the restoration queue has not yet processed. | [backup-restore_queue_list_pending.md](endpoints/restore-queue-reporting/backup-restore_queue_list_pending.md) |
| **Return restoration tasks list** | `GET /restore_queue_state` | This function lists the tasks in the restoration queue. | [backup-restore_queue_state.md](endpoints/restore-queue-reporting/backup-restore_queue_state.md) |
| **Validate restoration queue is active** | `GET /restore_queue_is_active` | This function checks whether the system's restoration queue is actively processing... | [backup-restore_queue_is_active.md](endpoints/restore-queue-reporting/backup-restore_queue_is_active.md) |

### Rule Settings (`endpoints/rule-settings/`)

Contains **14** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add staged ModSecurity rule** | `GET /modsec_add_rule` | This function adds a new rule to a ModSecurity™ configuration staging file. For ex... | [modsecurity-modsec_add_rule.md](endpoints/rule-settings/modsecurity-modsec_add_rule.md) |
| **Disable ModSecurity rule** | `GET /modsec_disable_rule` | This function disables a ModSecurity™ rule. | [modsecurity-modsec_disable_rule.md](endpoints/rule-settings/modsecurity-modsec_disable_rule.md) |
| **Enable ModSecurity rule** | `GET /modsec_undisable_rule` | This function enables a ModSecurity™ rule. | [modsecurity-modsec_undisable_rule.md](endpoints/rule-settings/modsecurity-modsec_undisable_rule.md) |
| **Enable all staged ModSecurity rule changes** | `GET /modsec_deploy_all_rule_changes` | This function deploys the staged changes for all of the ModSecurity™ configuration... | [modsecurity-modsec_deploy_all_rule_changes.md](endpoints/rule-settings/modsecurity-modsec_deploy_all_rule_changes.md) |
| **Enable staged ModSecurity rule changes** | `GET /modsec_deploy_rule_changes` | This function deploys staged changes to the ModSecurity™ configuration file and re... | [modsecurity-modsec_deploy_rule_changes.md](endpoints/rule-settings/modsecurity-modsec_deploy_rule_changes.md) |
| **Export ModSecurity rule error report** | `GET /modsec_report_rule` | This function submits ModSecurity™ rule error reports to a remote receiver. The third | [modsecurity-modsec_report_rule.md](endpoints/rule-settings/modsecurity-modsec_report_rule.md) |
| **Remove ModSecurity rule** | `GET /modsec_remove_rule` | This function removes a rule from a ModSecurity™ configuration file. | [modsecurity-modsec_remove_rule.md](endpoints/rule-settings/modsecurity-modsec_remove_rule.md) |
| **Remove all staged ModSecurity rule changes** | `GET /modsec_discard_all_rule_changes` | This function discards the staged ModSecurity™ rule changes, if present, for all of | [modsecurity-modsec_discard_all_rule_changes.md](endpoints/rule-settings/modsecurity-modsec_discard_all_rule_changes.md) |
| **Remove staged ModSecurity rule changes** | `GET /modsec_discard_rule_changes` | This function discards staged rule changes for a ModSecurity™ configuration file. | [modsecurity-modsec_discard_rule_changes.md](endpoints/rule-settings/modsecurity-modsec_discard_rule_changes.md) |
| **Return ModSecurity rules** | `GET /modsec_get_rules` | This function retrieves the ModSecurity™ rules from one or more ModSecurity config... | [modsecurity-modsec_get_rules.md](endpoints/rule-settings/modsecurity-modsec_get_rules.md) |
| **Rule Settings** | `-` | Web Server Security (ModSecurity) / Rule Settings | [_category.md](endpoints/rule-settings/_category.md) |
| **Save ModSecurity rule copy** | `GET /modsec_clone_rule` | This function copies a ModSecurity™ rule with a new rule ID. | [modsecurity-modsec_clone_rule.md](endpoints/rule-settings/modsecurity-modsec_clone_rule.md) |
| **Update staged ModSecurity rule** | `GET /modsec_edit_rule` | This function stages edits to a ModSecurity™ rule. The system does not save changes | [modsecurity-modsec_edit_rule.md](endpoints/rule-settings/modsecurity-modsec_edit_rule.md) |
| **Validate ModSecurity rule** | `GET /modsec_check_rule` | This function checks a ModSecurity™ rule's validity. | [modsecurity-modsec_check_rule.md](endpoints/rule-settings/modsecurity-modsec_check_rule.md) |

### Rule Vendor Settings (`endpoints/rule-vendor-settings/`)

Contains **12** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add ModSecurity vendor rules** | `GET /modsec_add_vendor` | This function adds a new ModSecurity™ vendor rule set to the server. | [modsecurity-modsec_add_vendor.md](endpoints/rule-vendor-settings/modsecurity-modsec_add_vendor.md) |
| **Disable ModSecurity vendor configuration files** | `GET /modsec_disable_vendor_configs` | This function disables a ModSecurity™ vendor's configuration files. | [modsecurity-modsec_disable_vendor_configs.md](endpoints/rule-vendor-settings/modsecurity-modsec_disable_vendor_configs.md) |
| **Disable ModSecurity vendor rules** | `GET /modsec_disable_vendor` | This function disables a ModSecurity™ vendor rule set. | [modsecurity-modsec_disable_vendor.md](endpoints/rule-vendor-settings/modsecurity-modsec_disable_vendor.md) |
| **Disable ModSecurity vendor updates** | `GET /modsec_disable_vendor_updates` | This function disables automatic updates for a ModSecurity™ vendor. | [modsecurity-modsec_disable_vendor_updates.md](endpoints/rule-vendor-settings/modsecurity-modsec_disable_vendor_updates.md) |
| **Enable ModSecurity vendor configuration files** | `GET /modsec_enable_vendor_configs` | This function enables a ModSecurity™ vendor's configuration files. | [modsecurity-modsec_enable_vendor_configs.md](endpoints/rule-vendor-settings/modsecurity-modsec_enable_vendor_configs.md) |
| **Enable ModSecurity vendor rules** | `GET /modsec_enable_vendor` | This function enables a ModSecurity™ vendor rule set. | [modsecurity-modsec_enable_vendor.md](endpoints/rule-vendor-settings/modsecurity-modsec_enable_vendor.md) |
| **Enable ModSecurity vendor updates** | `GET /modsec_enable_vendor_updates` | This function enables automatic updates for a ModSecurity™ vendor. | [modsecurity-modsec_enable_vendor_updates.md](endpoints/rule-vendor-settings/modsecurity-modsec_enable_vendor_updates.md) |
| **Remove ModSecurity vendor** | `GET /modsec_remove_vendor` | This function removes a ModSecurity™ vendor. When you call this function, the system | [modsecurity-modsec_remove_vendor.md](endpoints/rule-vendor-settings/modsecurity-modsec_remove_vendor.md) |
| **Return ModSecurity vendor rule metadata** | `GET /modsec_preview_vendor` | This function returns the metadata for a ModSecurity™ vendor rule set. | [modsecurity-modsec_preview_vendor.md](endpoints/rule-vendor-settings/modsecurity-modsec_preview_vendor.md) |
| **Return ModSecurity vendors** | `GET /modsec_get_vendors` | The function returns a list of configured ModSecurity™ vendors. | [modsecurity-modsec_get_vendors.md](endpoints/rule-vendor-settings/modsecurity-modsec_get_vendors.md) |
| **Rule Vendor Settings** | `-` | Web Server Security (ModSecurity) / Rule Vendor Settings | [_category.md](endpoints/rule-vendor-settings/_category.md) |
| **Update ModSecurity vendor ruleset** | `GET /modsec_update_vendor` | This function updates a vendor with the current version of the rule set. | [modsecurity-modsec_update_vendor.md](endpoints/rule-vendor-settings/modsecurity-modsec_update_vendor.md) |

### Scripts Hooks (`endpoints/scripts-hooks/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Delete script hook** | `GET /delete_hook` | This function removes a script hook. | [hooks-delete_hook.md](endpoints/scripts-hooks/hooks-delete_hook.md) |
| **Return script hooks list** | `GET /list_hooks` | This function lists the server's script hooks. | [hooks-list_hooks.md](endpoints/scripts-hooks/hooks-list_hooks.md) |
| **Scripts Hooks** | `-` | Integrations / Scripts Hooks | [_category.md](endpoints/scripts-hooks/_category.md) |
| **Update script hook** | `GET /edit_hook` | This function edits a script hook. | [hooks-edit_hook.md](endpoints/scripts-hooks/hooks-edit_hook.md) |
| **Update script hooks order** | `GET /reorder_hooks` | This function changes the order of script hooks. | [hooks-reorder_hooks.md](endpoints/scripts-hooks/hooks-reorder_hooks.md) |

### Security (`endpoints/security/`)

Contains **4** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Return Security Advisor results** | `GET /fetch_security_advice` | This function returns the cPanel Security Advisor's security scan data. It advises... | [security-fetch_security_advice.md](endpoints/security/security-fetch_security_advice.md) |
| **Return minimum password strength** | `GET /getminimumpasswordstrengths` | This function retrieves the minimum password strength for cPanel & WHM accounts. | [security-getminimumpasswordstrengths.md](endpoints/security/security-getminimumpasswordstrengths.md) |
| **Security** | `-` | The Security module for WHM API 1. | [_category.md](endpoints/security/_category.md) |
| **Update minimum password strength** | `GET /setminimumpasswordstrengths` | This function sets the minimum password strength for cPanel & WHM | [security-setminimumpasswordstrengths.md](endpoints/security/security-setminimumpasswordstrengths.md) |

### Server Nodes (`endpoints/server-nodes/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add linked server node** | `GET /link_server_node_with_api_token` | This function links your server to a remote server node. The server uses an API token | [cpanel-link_server_node_with_api_token.md](endpoints/server-nodes/cpanel-link_server_node_with_api_token.md) |
| **Remove linked server node** | `GET /unlink_server_node` | This function unlinks a remote server node from your server. | [cpanel-unlink_server_node.md](endpoints/server-nodes/cpanel-unlink_server_node.md) |
| **Repair distributed accounts with data loss** | `GET /force_dedistribution_from_node` | This function converts cPanel accounts that use a given | [cpanel-force_dedistribution_from_node.md](endpoints/server-nodes/cpanel-force_dedistribution_from_node.md) |
| **Return all linked server nodes** | `GET /list_linked_server_nodes` | This function returns a list of all remote server nodes linked to the server. It a... | [cpanel-list_linked_server_nodes.md](endpoints/server-nodes/cpanel-list_linked_server_nodes.md) |
| **Return cPanel accounts with server name and type** | `GET /list_user_child_nodes` | This function returns the system's cPanel accounts and the linked cPanel & WHM ser... | [cpanel-list_user_child_nodes.md](endpoints/server-nodes/cpanel-list_user_child_nodes.md) |
| **Return linked remote server node settings** | `GET /get_linked_server_node` | This function returns details about a linked remote server node. | [cpanel-get_linked_server_node.md](endpoints/server-nodes/cpanel-get_linked_server_node.md) |
| **Return linked server node status** | `GET /get_server_node_status` | This function returns the status of a linked remote server node. It returns | [cpanel-get_server_node_status.md](endpoints/server-nodes/cpanel-get_server_node_status.md) |
| **Server Nodes** | `-` | Server Administration / Server Nodes | [_category.md](endpoints/server-nodes/_category.md) |
| **Update linked server node settings** | `GET /update_linked_server_node` | This function updates a linked remote cPanel server node. | [cpanel-update_linked_server_node.md](endpoints/server-nodes/cpanel-update_linked_server_node.md) |

### Server Profiles (`endpoints/server-profiles/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Return available server profiles** | `GET /get_available_profiles` | This function returns a list of available server profiles. | [cpanel-get_available_profiles.md](endpoints/server-profiles/cpanel-get_available_profiles.md) |
| **Return server's node profile** | `GET /get_current_profile` | This function returns details about the server's current | [cpanel-get_current_profile.md](endpoints/server-profiles/cpanel-get_current_profile.md) |
| **Return whether server role is enabled** | `GET /is_role_enabled` | This function checks whether a specific server role is currently enabled | [cpanel-is_role_enabled.md](endpoints/server-profiles/cpanel-is_role_enabled.md) |
| **Server Profiles** | `-` | Server Administration / Server Profiles | [_category.md](endpoints/server-profiles/_category.md) |
| **Update server node profile** | `GET /start_profile_activation` | This function activates a server profile. | [cpanel-start_profile_activation.md](endpoints/server-profiles/cpanel-start_profile_activation.md) |

### Server Settings (`endpoints/server-settings/`)

Contains **15** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add ModSecurity configuration file include** | `GET /modsec_make_config_active` | This function adds an include for a ModSecurity™ configuration file to | [modsecurity-modsec_make_config_active.md](endpoints/server-settings/modsecurity-modsec_make_config_active.md) |
| **Add ModSecurity configuration file text** | `GET /modsec_assemble_config_text` | This function adds text to a ModSecurity™ configuration file. | [modsecurity-modsec_assemble_config_text.md](endpoints/server-settings/modsecurity-modsec_assemble_config_text.md) |
| **Enable staged ModSecurity configuration files** | `GET /modsec_deploy_settings_changes` | This function deploys the staged changes to your modsec2.cpanel.conf file and | [modsecurity-modsec_deploy_settings_changes.md](endpoints/server-settings/modsecurity-modsec_deploy_settings_changes.md) |
| **Remove ModSecurity configuration** | `GET /modsec_remove_setting` | This function removes a global ModSecurity™ configuration directive. | [modsecurity-modsec_remove_setting.md](endpoints/server-settings/modsecurity-modsec_remove_setting.md) |
| **Remove ModSecurity configuration file include** | `GET /modsec_make_config_inactive` | This function removes an include for a ModSecurity™ configuration file from | [modsecurity-modsec_make_config_inactive.md](endpoints/server-settings/modsecurity-modsec_make_config_inactive.md) |
| **Return ModSecurity configuration** | `GET /modsec_get_settings` | This function retrieves the server's ModSecurity™ configuration settings. The system | [modsecurity-modsec_get_settings.md](endpoints/server-settings/modsecurity-modsec_get_settings.md) |
| **Return ModSecurity configuration file** | `GET /modsec_get_config_text` | This function retrieves a ModSecurity™ configuration file's contents. | [modsecurity-modsec_get_config_text.md](endpoints/server-settings/modsecurity-modsec_get_config_text.md) |
| **Return ModSecurity logs** | `GET /modsec_get_log` | This function retrieves ModSecurity™ log entries from the modsec SQLite database. | [modsecurity-modsec_get_log.md](endpoints/server-settings/modsecurity-modsec_get_log.md) |
| **Return ModSecurity module status** | `GET /modsec_is_installed` | This function checks whether the ModSecurity™ module is installed. | [modsecurity-modsec_is_installed.md](endpoints/server-settings/modsecurity-modsec_is_installed.md) |
| **Return all ModSecurity configuration files** | `GET /modsec_get_configs` | This function lists ModSecurity™ configuration files. The system stores the config... | [modsecurity-modsec_get_configs.md](endpoints/server-settings/modsecurity-modsec_get_configs.md) |
| **Return staged ModSecurity configuration files** | `GET /modsec_get_configs_with_changes_pending` | This function lists the ModSecurity™ configuration files that have staged changes. | [modsecurity-modsec_get_configs_with_changes_pending.md](endpoints/server-settings/modsecurity-modsec_get_configs_with_changes_pending.md) |
| **Run ModSecurity batch settings** | `GET /modsec_batch_settings` | This function adds, updates, and removes global ModSecurity™ configuration directi... | [modsecurity-modsec_batch_settings.md](endpoints/server-settings/modsecurity-modsec_batch_settings.md) |
| **Server Settings** | `-` | Web Server Security (ModSecurity) / Server Settings | [_category.md](endpoints/server-settings/_category.md) |
| **Update ModSecurity configuration** | `GET /modsec_set_setting` | This function sets a global ModSecurity™ configuration directive. | [modsecurity-modsec_set_setting.md](endpoints/server-settings/modsecurity-modsec_set_setting.md) |
| **Update ModSecurity configuration file** | `GET /modsec_set_config_text` | This function sets the contents of a specified ModSecurity™ configuration file. Th... | [modsecurity-modsec_set_config_text.md](endpoints/server-settings/modsecurity-modsec_set_config_text.md) |

### Service Records (`endpoints/service-records/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Return HTTPS DNS record support information** | `GET /is_https_available` | This function fetches information regarding HTTPS records support. | [dns-is_https_available.md](endpoints/service-records/dns-is_https_available.md) |
| **Return SVCB DNS record support information** | `GET /is_svcb_available` | This function fetches information regarding SVCB records support. | [dns-is_svcb_available.md](endpoints/service-records/dns-is_svcb_available.md) |
| **Service Records** | `-` | DNS / Service Records | [_category.md](endpoints/service-records/_category.md) |

### Services (`endpoints/services/`)

Contains **12** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Enable monitoring for all services** | `GET /enable_monitor_all_enabled_services` | This function enables monitoring for all enabled services. | [services-enable_monitor_all_enabled_services.md](endpoints/services/services-enable_monitor_all_enabled_services.md) |
| **Enable or disable a service and its monitoring** | `GET /configureservice` | This function enables or disables a service and its monitoring. | [services-configureservice.md](endpoints/services/services-configureservice.md) |
| **Remove cPanel account service proxying** | `GET /unset_all_service_proxy_backends` | This function removes a cPanel account's | [accounts-unset_all_service_proxy_backends.md](endpoints/services/accounts-unset_all_service_proxy_backends.md) |
| **Restart service** | `GET /restartservice` | This function restarts a service, or daemon, on a server. | [services-restartservice.md](endpoints/services/services-restartservice.md) |
| **Return a cPanel account’s service proxying setup** | `GET /get_service_proxy_backends` | This function reports a cPanel account's | [accounts-get_service_proxy_backends.md](endpoints/services/accounts-get_service_proxy_backends.md) |
| **Return service configuration key** | `GET /get_service_config_key` | This function returns a specific configuration key for a service. | [advconfig-get_service_config_key.md](endpoints/services/advconfig-get_service_config_key.md) |
| **Return service configuration settings** | `GET /get_service_config` | This function returns a service's configuration settings. | [advconfig-get_service_config.md](endpoints/services/advconfig-get_service_config.md) |
| **Return service status** | `GET /servicestatus` | This function reports which services (daemons) are enabled, installed, and monitor... | [services-servicestatus.md](endpoints/services/services-servicestatus.md) |
| **Services** | `-` | Server Administration / Services | [_category.md](endpoints/services/_category.md) |
| **Update background process stopper** | `GET /configurebackgroundprocesskiller` | This function configures the server's background process killer. | [sys-configurebackgroundprocesskiller.md](endpoints/services/sys-configurebackgroundprocesskiller.md) |
| **Update cPanel account service proxying** | `GET /set_service_proxy_backends` | This function lets you configure a cPanel account's | [accounts-set_service_proxy_backends.md](endpoints/services/accounts-set_service_proxy_backends.md) |
| **Update service configuration key** | `GET /set_service_config_key` | This function configures global properties for specific services listed in the /va... | [advconfig-set_service_config_key.md](endpoints/services/advconfig-set_service_config_key.md) |

### Session (`endpoints/session/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create a temporary user session** | `GET /create_user_session` | This function creates a new temporary user session for a specified service. | [session-create_user_session.md](endpoints/session/session-create_user_session.md) |
| **Create login link for Dashboard** | `GET /wp_dashboard_create_login_link` | This function creates a single-use WHM session for re-entry from WebPros Dashboard. | [wpdashboard-wp_dashboard_create_login_link.md](endpoints/session/wpdashboard-wp_dashboard_create_login_link.md) |
| **Session** | `-` | API Development Tools / Session | [_category.md](endpoints/session/_category.md) |

### Settings (`endpoints/settings/`)

Contains **6** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Disable login security** | `GET /disable_cphulk` | This function disables the cPHulk service. | [cphulk-disable_cphulk.md](endpoints/settings/cphulk-disable_cphulk.md) |
| **Enable login security** | `GET /enable_cphulk` | This function enables the cPHulk service. | [cphulk-enable_cphulk.md](endpoints/settings/cphulk-enable_cphulk.md) |
| **Return login security configuration settings** | `GET /load_cphulk_config` | This function returns cPHulk's current settings. | [cphulk-load_cphulk_config.md](endpoints/settings/cphulk-load_cphulk_config.md) |
| **Save login security configuration settings** | `GET /save_cphulk_config` | This function modifies cPHulk's configuration settings. | [cphulk-save_cphulk_config.md](endpoints/settings/cphulk-save_cphulk_config.md) |
| **Settings** | `-` | Login Security (cPHulk) / Settings | [_category.md](endpoints/settings/_category.md) |
| **Update login security configuration settings** | `GET /set_cphulk_config_key` | This function modifies a single cPHulk configuration settings as specified. | [cphulk-set_cphulk_config_key.md](endpoints/settings/cphulk-set_cphulk_config_key.md) |

### Sitejet (`endpoints/sitejet/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Get Commerce Data** | `GET /get_commerce` | This function returns Sitejet Commerce data. | [get_commerce.md](endpoints/sitejet/get_commerce.md) |
| **Get Ecommerce Data (deprecated)** | `GET /get_ecommerce` | This function returns Sitejet Commerce data. | [get_ecommerce.md](endpoints/sitejet/get_ecommerce.md) |
| **Set Commerce URL** | `GET /set_commerce` | This function enables Sitejet Commerce for all users and allows the hosting provid... | [set_commerce.md](endpoints/sitejet/set_commerce.md) |
| **Set Ecommerce URL (deprecated)** | `GET /set_ecommerce` | This function enables Sitejet Commerce for all users and allows the hosting provid... | [set_ecommerce.md](endpoints/sitejet/set_ecommerce.md) |
| **Sitejet** | `-` | The Sitejet module for WHM API. | [_category.md](endpoints/sitejet/_category.md) |

### Spam Management (`endpoints/spam-management/`)

Contains **8** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add block on emails from specific countries** | `GET /block_incoming_email_from_country` | This function blocks email from specific countries. | [exim-block_incoming_email_from_country.md](endpoints/spam-management/exim-block_incoming_email_from_country.md) |
| **Add block on emails from specific domains** | `GET /block_incoming_email_from_domain` | This function blocks email from specific domains. | [exim-block_incoming_email_from_domain.md](endpoints/spam-management/exim-block_incoming_email_from_domain.md) |
| **Remove block on emails from specific countries** | `GET /unblock_incoming_email_from_country` | This function unblocks email from specific countries. | [exim-unblock_incoming_email_from_country.md](endpoints/spam-management/exim-unblock_incoming_email_from_country.md) |
| **Remove block on emails from specific domains** | `GET /unblock_incoming_email_from_domain` | This function unblocks email from specific domains. | [exim-unblock_incoming_email_from_domain.md](endpoints/spam-management/exim-unblock_incoming_email_from_domain.md) |
| **Return blocked email countries list** | `GET /list_blocked_incoming_email_countries` | This function lists which countries cannot send email to the server. | [exim-list_blocked_incoming_email_countries.md](endpoints/spam-management/exim-list_blocked_incoming_email_countries.md) |
| **Return blocked email domains list** | `GET /list_blocked_incoming_email_domains` | This function lists which domains cannot send email to the server. | [exim-list_blocked_incoming_email_domains.md](endpoints/spam-management/exim-list_blocked_incoming_email_domains.md) |
| **Spam Management** | `-` | Mail / Spam Management | [_category.md](endpoints/spam-management/_category.md) |
| **Update Apache SpamAssassin™ configuration** | `GET /save_spamd_config` | This function configures your Apache SpamAssassin™ options. | [spamd-save_spamd_config.md](endpoints/spam-management/spamd-save_spamd_config.md) |

### Spam Protection (Greylisting) (`endpoints/spam-protection-(greylisting)/`)

Contains **16** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add IP address to Greylisting trusted hosts** | `GET /create_cpgreylist_trusted_host` | This function adds an IP address to the Greylisting Trusted Hosts list. | [cpgreylist-create_cpgreylist_trusted_host.md](endpoints/spam-protection-(greylisting)/cpgreylist-create_cpgreylist_trusted_host.md) |
| **Add mail provider to Greylisting non-trusted hosts** | `GET /cpgreylist_untrust_entries_for_common_mail_provider` | This function marks the IP addresses for the specified mail provider as not trusted. | [cpgreylist-cpgreylist_untrust_entries_for_common_mail_provider.md](endpoints/spam-protection-(greylisting)/cpgreylist-cpgreylist_untrust_entries_for_common_mail_provider.md) |
| **Add mail provider to Greylisting trusted hosts** | `GET /cpgreylist_trust_entries_for_common_mail_provider` | This function marks the IP addresses for the specified mail provider as trusted. G... | [cpgreylist-cpgreylist_trust_entries_for_common_mail_provider.md](endpoints/spam-protection-(greylisting)/cpgreylist-cpgreylist_trust_entries_for_common_mail_provider.md) |
| **Disable Greylisting** | `GET /disable_cpgreylist` | This function disables Greylisting. | [cpgreylist-disable_cpgreylist.md](endpoints/spam-protection-(greylisting)/cpgreylist-disable_cpgreylist.md) |
| **Enable Greylisting** | `GET /enable_cpgreylist` | This function enables Greylisting. | [cpgreylist-enable_cpgreylist.md](endpoints/spam-protection-(greylisting)/cpgreylist-enable_cpgreylist.md) |
| **Remove IP address from Greylisting trusted hosts** | `GET /delete_cpgreylist_trusted_host` | This function deletes an IP address from the Greylisting _Trusted Hosts_ list. | [cpgreylist-delete_cpgreylist_trusted_host.md](endpoints/spam-protection-(greylisting)/cpgreylist-delete_cpgreylist_trusted_host.md) |
| **Return Greylisting IP addresses of mail providers** | `GET /cpgreylist_list_entries_for_common_mail_provider` | This function lists Greylisting's IP addresses for the specified mail provider. | [cpgreylist-cpgreylist_list_entries_for_common_mail_provider.md](endpoints/spam-protection-(greylisting)/cpgreylist-cpgreylist_list_entries_for_common_mail_provider.md) |
| **Return Greylisting deferred incoming email triplets** | `GET /read_cpgreylist_deferred_entries` | This function lists Greylisting's deferred triplets. | [cpgreylist-read_cpgreylist_deferred_entries.md](endpoints/spam-protection-(greylisting)/cpgreylist-read_cpgreylist_deferred_entries.md) |
| **Return Greylisting mail providers** | `GET /cpgreylist_load_common_mail_providers_config` | This function returns Greylisting's list of common mail service providers. | [cpgreylist-cpgreylist_load_common_mail_providers_config.md](endpoints/spam-protection-(greylisting)/cpgreylist-cpgreylist_load_common_mail_providers_config.md) |
| **Return Greylisting settings** | `GET /load_cpgreylist_config` | This function returns Greylisting's current settings. | [cpgreylist-load_cpgreylist_config.md](endpoints/spam-protection-(greylisting)/cpgreylist-load_cpgreylist_config.md) |
| **Return Greylisting status** | `GET /cpgreylist_status` | This function returns the status of Greylisting. | [cpgreylist-cpgreylist_status.md](endpoints/spam-protection-(greylisting)/cpgreylist-cpgreylist_status.md) |
| **Return Greylisting trust status of server netblock** | `GET /cpgreylist_is_server_netblock_trusted` | This function returns the Greylisting trusted status of the server's netblock. | [cpgreylist-cpgreylist_is_server_netblock_trusted.md](endpoints/spam-protection-(greylisting)/cpgreylist-cpgreylist_is_server_netblock_trusted.md) |
| **Return Greylisting trusted hosts** | `GET /read_cpgreylist_trusted_hosts` | This function retrieves the entries on the Greylisting Trusted Hosts list. | [cpgreylist-read_cpgreylist_trusted_hosts.md](endpoints/spam-protection-(greylisting)/cpgreylist-read_cpgreylist_trusted_hosts.md) |
| **Spam Protection (Greylisting)** | `-` | Mail / Spam Protection (Greylisting) | [_category.md](endpoints/spam-protection-(greylisting)/_category.md) |
| **Update Greylisting new mail provider handling** | `GET /cpgreylist_save_common_mail_providers_config` | This function sets whether Greylisting trusts new entries to cPanel's common mail ... | [cpgreylist-cpgreylist_save_common_mail_providers_config.md](endpoints/spam-protection-(greylisting)/cpgreylist-cpgreylist_save_common_mail_providers_config.md) |
| **Update Greylisting settings** | `GET /save_cpgreylist_config` | This function modifies the server's Greylisting configuration settings. | [cpgreylist-save_cpgreylist_config.md](endpoints/spam-protection-(greylisting)/cpgreylist-save_cpgreylist_config.md) |

### Ssh Keys And Connections (`endpoints/ssh-keys-and-connections/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create SSH key pair** | `GET /generatesshkeypair` | This function generates an SSH key pair. | [ssh-generatesshkeypair.md](endpoints/ssh-keys-and-connections/ssh-generatesshkeypair.md) |
| **Delete SSH key** | `GET /deletesshkey` | This function function deletes an SSH key from the server. | [ssh-deletesshkey.md](endpoints/ssh-keys-and-connections/ssh-deletesshkey.md) |
| **Enable SSH key for server** | `GET /authorizesshkey` | This function authorizes a public SSH key to access the server. | [ssh-authorizesshkey.md](endpoints/ssh-keys-and-connections/ssh-authorizesshkey.md) |
| **Import SSH key** | `GET /importsshkey` | This function imports an SSH key. | [ssh-importsshkey.md](endpoints/ssh-keys-and-connections/ssh-importsshkey.md) |
| **Migrate OpenSSH key to PuTTY format** | `GET /convertopensshtoputty` | This function converts an OpenSSH private key to a PuTTY key. | [ssh-convertopensshtoputty.md](endpoints/ssh-keys-and-connections/ssh-convertopensshtoputty.md) |
| **Return SSH keys list** | `GET /listsshkeys` | This function lists the server's SSH keys. | [ssh-listsshkeys.md](endpoints/ssh-keys-and-connections/ssh-listsshkeys.md) |
| **Return cPanel account access hash (deprecated)** | `GET /accesshash` | This function regenerates or retrieves a user's access hash. For more information ... | [resellers-accesshash.md](endpoints/ssh-keys-and-connections/resellers-accesshash.md) |
| **SSH Keys and Connections** | `-` | Authentication / SSH Keys and Connections | [_category.md](endpoints/ssh-keys-and-connections/_category.md) |
| **Validate SSH connection to another server** | `GET /check_remote_ssh_connection` | This function tests an SSH connection to another server. | [ssh-check_remote_ssh_connection.md](endpoints/ssh-keys-and-connections/ssh-check_remote_ssh_connection.md) |

### Ssl Server Settings (`endpoints/ssl-server-settings/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create self-signed SSL certificate** | `GET /generatessl` | This function generates a private key file, a certificate signing request (CSR), a... | [ssl-generatessl.md](endpoints/ssl-server-settings/ssl-generatessl.md) |
| **Create self-signed SSL certificate for service** | `GET /reset_service_ssl_certificate` | This function regenerates a self-signed SSL certificate and assigns it to a service. | [ssl-reset_service_ssl_certificate.md](endpoints/ssl-server-settings/ssl-reset_service_ssl_certificate.md) |
| **Rebuild installed SSL database (no-op)** | `GET /rebuildinstalledssldb` | This function is a no-op and performs no actions. | [ssl-rebuildinstalledssldb.md](endpoints/ssl-server-settings/ssl-rebuildinstalledssldb.md) |
| **Return domains with installed SSL certificates** | `GET /listcrts` | This function lists the server's domains with installed SSL certificates. | [ssl-listcrts.md](endpoints/ssl-server-settings/ssl-listcrts.md) |
| **Return system services and associated certificates** | `GET /fetch_service_ssl_components` | This function lists the system's services and their associated certificates. | [ssl-fetch_service_ssl_components.md](endpoints/ssl-server-settings/ssl-fetch_service_ssl_components.md) |
| **SSL Server Settings** | `-` | SSL Certificates / SSL Server Settings | [_category.md](endpoints/ssl-server-settings/_category.md) |
| **Update SSL certificate users database** | `GET /rebuilduserssldb` | This function rebuilds the database of SSL certificate users. | [ssl-rebuilduserssldb.md](endpoints/ssl-server-settings/ssl-rebuilduserssldb.md) |

### Styles (`endpoints/styles/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Return cPanel account theme's app keys and URLs** | `GET /get_users_links` | This function returns a list of | [plugins-get_users_links.md](endpoints/styles/plugins-get_users_links.md) |
| **Styles** | `-` | Server Administration / Account Management | [_category.md](endpoints/styles/_category.md) |

### Support Access (`endpoints/support-access/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Add Support IP addresses to firewall** | `GET /ticket_whitelist_setup` | This function adds cPanel Support's IP addresses to your server's firewall | [ticketsupport-ticket_whitelist_setup.md](endpoints/support-access/ticketsupport-ticket_whitelist_setup.md) |
| **Create Support SSH key** | `GET /ticket_grant` | This function installs an SSH key from the | [ticketsupport-ticket_grant.md](endpoints/support-access/ticketsupport-ticket_grant.md) |
| **Delete Support SSH key** | `GET /ticket_revoke` | This function removes a | [ticketsupport-ticket_revoke.md](endpoints/support-access/ticketsupport-ticket_revoke.md) |
| **Delete Support SSH key and closed tickets** | `GET /ticket_remove_closed` | This function removes cPanel Support's SSH keys and removes closed | [ticketsupport-ticket_remove_closed.md](endpoints/support-access/ticketsupport-ticket_remove_closed.md) |
| **Remove Support IP addresses from firewall** | `GET /ticket_whitelist_unsetup` | This function removes cPanel Support's IP addresses from your server's firewall | [ticketsupport-ticket_whitelist_unsetup.md](endpoints/support-access/ticketsupport-ticket_whitelist_unsetup.md) |
| **Support Access** | `-` | cPanel Support Tickets / Support Access | [_category.md](endpoints/support-access/_category.md) |
| **Validate Customer Portal connection** | `GET /ticket_ssh_test` | This function verifies the connection from the | [ticketsupport-ticket_ssh_test.md](endpoints/support-access/ticketsupport-ticket_ssh_test.md) |
| **Validate Support IP addresses on firewall** | `GET /ticket_whitelist_check` | This function checks whether the server's firewall whitelist correlates | [ticketsupport-ticket_whitelist_check.md](endpoints/support-access/ticketsupport-ticket_whitelist_check.md) |
| **Validate Support SSH connection** | `GET /ticket_ssh_test_start` | This function initiates an SSH connection test. | [ticketsupport-ticket_ssh_test_start.md](endpoints/support-access/ticketsupport-ticket_ssh_test_start.md) |

### Suspensions (`endpoints/suspensions/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Return suspended cPanel accounts** | `GET /listlockedaccounts` | This function lists locked accounts on the server. Only WHM users with | [accounts-listlockedaccounts.md](endpoints/suspensions/accounts-listlockedaccounts.md) |
| **Return suspended cPanel accounts and information** | `GET /listsuspended` | This function lists suspended accounts on the server. | [accounts-listsuspended.md](endpoints/suspensions/accounts-listsuspended.md) |
| **Suspend cPanel account** | `GET /suspendacct` | This function suspends an account. | [accounts-suspendacct.md](endpoints/suspensions/accounts-suspendacct.md) |
| **Suspensions** | `-` | Accounts / Suspensions | [_category.md](endpoints/suspensions/_category.md) |
| **Unsuspend cPanel account** | `GET /unsuspendacct` | This function unsuspends an account. | [accounts-unsuspendacct.md](endpoints/suspensions/accounts-unsuspendacct.md) |

### System Information (`endpoints/system-information/`)

Contains **9** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Restart server** | `GET /reboot` | This function reboots the server. | [sys-reboot.md](endpoints/system-information/sys-reboot.md) |
| **Return server's drive partition information** | `GET /getdiskusage` | This function retrieves the server's drive partition information. | [sys-getdiskusage.md](endpoints/system-information/sys-getdiskusage.md) |
| **Return server's hostname** | `GET /gethostname` | This function retrieves the server's hostname. | [sys-gethostname.md](endpoints/system-information/sys-gethostname.md) |
| **Return server's hostname** | `GET /wp_dashboard_get_hostname` | This function retrieves the server's hostname. WebPros Dashboard uses this functio... | [wpdashboard-wp_dashboard_get_hostname.md](endpoints/system-information/wpdashboard-wp_dashboard_get_hostname.md) |
| **Return system load average** | `GET /systemloadavg` | This function retrieves the system's load average. | [cpanel-systemloadavg.md](endpoints/system-information/cpanel-systemloadavg.md) |
| **Return whether system needs reboot** | `GET /system_needs_reboot` | This function determines if your system requires a reboot to apply quotas, softwar... | [applicationversions-system_needs_reboot.md](endpoints/system-information/applicationversions-system_needs_reboot.md) |
| **System Information** | `-` | The Server Administration module for WHM API 1. | [_category.md](endpoints/system-information/_category.md) |
| **Update server's hostname** | `GET /sethostname` | This function changes the server's hostname. | [hostname-sethostname.md](endpoints/system-information/hostname-sethostname.md) |
| **Update server's primary virtual host** | `GET /set_primary_servername` | This function sets the primary domain hosted on an IP address and web server port.... | [httpd-set_primary_servername.md](endpoints/system-information/httpd-set_primary_servername.md) |

### Ticket Management (`endpoints/ticket-management/`)

Contains **7** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create initial Support ticket request** | `GET /ticket_create_stub_ticket` | This function creates a stub ticket. The system uses the stub ticket | [ticketsupport-ticket_create_stub_ticket.md](endpoints/ticket-management/ticketsupport-ticket_create_stub_ticket.md) |
| **Enable Technical Support Agreement acceptance** | `GET /ticket_update_service_agreement_approval` | This function records a user's acceptance of the Technical Support | [ticketsupport-ticket_update_service_agreement_approval.md](endpoints/ticket-management/ticketsupport-ticket_update_service_agreement_approval.md) |
| **Import Technical Support Agreement text** | `GET /ticket_get_support_agreement` | This function retrieves the WebPros International, LLC Technical Support Agreement... | [ticketsupport-ticket_get_support_agreement.md](endpoints/ticket-management/ticketsupport-ticket_get_support_agreement.md) |
| **Import customer information from Customer Portal** | `GET /ticket_get_support_info` | This function retrieves the license holder's support-related information. | [ticketsupport-ticket_get_support_info.md](endpoints/ticket-management/ticketsupport-ticket_get_support_info.md) |
| **Return Support ticket status** | `GET /ticket_list` | This function lists all active and open support tickets from the | [ticketsupport-ticket_list.md](endpoints/ticket-management/ticketsupport-ticket_list.md) |
| **Ticket Management** | `-` | cPanel Support Tickets / Ticket Management | [_category.md](endpoints/ticket-management/_category.md) |
| **Validate Customer Portal OAuth2 code** | `GET /ticket_validate_oauth2_code` | This function validates the OAuth2 code from the | [ticketsupport-ticket_validate_oauth2_code.md](endpoints/ticket-management/ticketsupport-ticket_validate_oauth2_code.md) |

### Transfer Configuration (`endpoints/transfer-configuration/`)

Contains **5** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Remove cPanel account's archives** | `GET /delete_account_archives` | This function removes a cPanel user account's archives. | [transfers-delete_account_archives.md](endpoints/transfer-configuration/transfers-delete_account_archives.md) |
| **Return a transfer module's schema** | `GET /transfer_module_schema` | This function retrieves a transfer module's key structure. | [transfers-transfer_module_schema.md](endpoints/transfer-configuration/transfers-transfer_module_schema.md) |
| **Transfer Configuration** | `-` | Transfers / Transfer Configuration | [_category.md](endpoints/transfer-configuration/_category.md) |
| **Validate remote server's SSH credentials** | `GET /remote_basic_credential_check` | This function checks the SSH credentials on the remote server. | [ssh-remote_basic_credential_check.md](endpoints/transfer-configuration/ssh-remote_basic_credential_check.md) |
| **Validate username availability on target server** | `GET /validate_system_user` | This function validates a system user for use on the target server. | [sys-validate_system_user.md](endpoints/transfer-configuration/sys-validate_system_user.md) |

### Transfer Monitoring (`endpoints/transfer-monitoring/`)

Contains **6** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Return available transfer modules** | `GET /available_transfer_modules` | This function lists all available transfer modules. | [transfers-available_transfer_modules.md](endpoints/transfer-monitoring/transfers-available_transfer_modules.md) |
| **Return transfer session's information** | `GET /retrieve_transfer_session_remote_analysis` | This function analyzes a transfer session. | [transfers-retrieve_transfer_session_remote_analysis.md](endpoints/transfer-monitoring/transfers-retrieve_transfer_session_remote_analysis.md) |
| **Return transfer session's log file** | `GET /fetch_transfer_session_log` | This function returns a transfer session's log file. | [transfers-fetch_transfer_session_log.md](endpoints/transfer-monitoring/transfers-fetch_transfer_session_log.md) |
| **Return transfer session's status** | `GET /get_transfer_session_state` | This function retrieves the state of a transfer session. | [transfers-get_transfer_session_state.md](endpoints/transfer-monitoring/transfers-get_transfer_session_state.md) |
| **Transfer Monitoring** | `-` | Transfers / Transfer Monitoring | [_category.md](endpoints/transfer-monitoring/_category.md) |
| **Validate remote server's credentials** | `GET /analyze_transfer_session_remote` | This function checks the remote server's credentials, which a transfer session use... | [transfers-analyze_transfer_session_remote.md](endpoints/transfer-monitoring/transfers-analyze_transfer_session_remote.md) |

### Two Factor Authentication (`endpoints/two-factor-authentication/`)

Contains **12** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Create a one-time authentication secret and code** | `GET /twofactorauth_generate_tfa_config` | This function generates a random secret and a one-time password authentication (OT... | [twofactorauth-twofactorauth_generate_tfa_config.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_generate_tfa_config.md) |
| **Disable 2FA** | `GET /twofactorauth_disable_policy` | This function disables the Two-Factor Authentication (2FA) security policy on the ... | [twofactorauth-twofactorauth_disable_policy.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_disable_policy.md) |
| **Enable 2FA** | `GET /twofactorauth_enable_policy` | This function enables the Two-Factor Authentication (2FA) security policy on the s... | [twofactorauth-twofactorauth_enable_policy.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_enable_policy.md) |
| **Remove 2FA settings** | `GET /twofactorauth_remove_user_config` | This function removes the Two-Factor Authentication (2FA) settings for one or more... | [twofactorauth-twofactorauth_remove_user_config.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_remove_user_config.md) |
| **Return 2FA policy status** | `GET /twofactorauth_policy_status` | This function displays the Two-Factor Authentication (2FA) policy status on the se... | [twofactorauth-twofactorauth_policy_status.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_policy_status.md) |
| **Return cPanel account 2FA data** | `GET /twofactorauth_get_tfa_config_for_user` | This function returns the Two-Factor Authentication (2FA) configuration for a cPan... | [twofactorauth-twofactorauth_get_tfa_config_for_user.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_get_tfa_config_for_user.md) |
| **Return cPanel accounts with 2FA enabled** | `GET /twofactorauth_get_user_configs` | This function returns a list of user-controlled accounts and whether the accounts ... | [twofactorauth-twofactorauth_get_user_configs.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_get_user_configs.md) |
| **Return configured issuer for current user** | `GET /twofactorauth_get_issuer` | This function returns the currently configured issuer. The issuer appears within t... | [twofactorauth-twofactorauth_get_issuer.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_get_issuer.md) |
| **Two-Factor Authentication** | `-` | Authentication / Two-Factor Authentication | [_category.md](endpoints/two-factor-authentication/_category.md) |
| **Update 2FA authentication secret and code** | `GET /twofactorauth_set_tfa_config` | This function sets the secret and the authentication code for Two-Factor Authentic... | [twofactorauth-twofactorauth_set_tfa_config.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_set_tfa_config.md) |
| **Update 2FA issuer value** | `GET /twofactorauth_set_issuer` | This function sets the issuer value that the system uses to generate the secret an... | [twofactorauth-twofactorauth_set_issuer.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_set_issuer.md) |
| **Update cPanel account's 2FA data** | `POST /twofactorauth_set_tfa_config_for_user` | This function updates the Two-Factor Authentication (2FA) configuration for the gi... | [twofactorauth-twofactorauth_set_tfa_config_for_user.md](endpoints/two-factor-authentication/twofactorauth-twofactorauth_set_tfa_config_for_user.md) |

### Updates (`endpoints/updates/`)

Contains **13** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Return Long Term Support expiration status** | `GET /get_current_lts_expiration_status` | This function determines whether a branch's Long-Term Support (LTS) version expire... | [update-get_current_lts_expiration_status.md](endpoints/updates/update-get_current_lts_expiration_status.md) |
| **Return Long Term Support status for all versions** | `GET /get_lts_wexpire` | This function parses the /etc/cpanel/TIERS.json file and returns whether a branch ... | [update-get_lts_wexpire.md](endpoints/updates/update-get_lts_wexpire.md) |
| **Return cPanel & WHM available versions** | `GET /get_available_tiers` | This function lists of each available version of cPanel & WHM, and each | [sys-get_available_tiers.md](endpoints/updates/sys-get_available_tiers.md) |
| **Return cPanel & WHM version** | `GET /version` | This function returns the cPanel & WHM version that a server runs. | [cpanel-version.md](endpoints/updates/cpanel-version.md) |
| **Return if server uses the default update version** | `GET /get_update_availability` | This function checks whether your server uses the | [update-get_update_availability.md](endpoints/updates/update-get_update_availability.md) |
| **Return third-party software versions** | `GET /installed_versions` | This function lists the versions of third-party software that ship with cPanel & WHM. | [applicationversions-installed_versions.md](endpoints/updates/applicationversions-installed_versions.md) |
| **Save EULA acceptance** | `GET /accept_eula` | This function records acceptance of cPanel & WHM's legal terms. To do this, the fu... | [eula-accept_eula.md](endpoints/updates/eula-accept_eula.md) |
| **Start cPanel & WHM update** | `GET /start_cpanel_update` | This function starts an update of cPanel & WHM. | [cpanel-start_cpanel_update.md](endpoints/updates/cpanel-start_cpanel_update.md) |
| **Update Feature Showcase** | `GET /manage_features` | This function lists and manages items in the | [managefeatures-manage_features.md](endpoints/updates/managefeatures-manage_features.md) |
| **Update cPanel & WHM release tier** | `GET /set_tier` | This function sets a cPanel & WHM server to a specified support tier. | [sys-set_tier.md](endpoints/updates/sys-set_tier.md) |
| **Update cPanel & WHM update frequency** | `GET /set_cpanel_updates` | This function sets the frequency of cPanel & WHM updates. | [sys-set_cpanel_updates.md](endpoints/updates/sys-set_cpanel_updates.md) |
| **Update software update behavior** | `POST /update_updateconf` | This function modifies a server's /etc/cpupdate.conf file. This file controls how ... | [cpupdate-update_updateconf.md](endpoints/updates/cpupdate-update_updateconf.md) |
| **Updates** | `-` | Server Administration / Updates | [_category.md](endpoints/updates/_category.md) |

### Userdata (`endpoints/userdata/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Get scoped userdata** | `GET /get_scoped_userdata` | This function retrieves all userdata key/value pairs within the specified scope. | [userdata-get_scoped_userdata.md](endpoints/userdata/userdata-get_scoped_userdata.md) |
| **Set scoped userdata** | `GET /set_scoped_userdata` | This function sets (creates or updates) a userdata key/value pair within the speci... | [userdata-set_scoped_userdata.md](endpoints/userdata/userdata-set_scoped_userdata.md) |
| **UserData** | `-` | Scoped userdata storage functions. | [_category.md](endpoints/userdata/_category.md) |

### Web Log Retention (`endpoints/web-log-retention/`)

Contains **2** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **List accounts' web log retention settings** | `GET /list_accounts_retention` | List each cPanel account's web server log retention preference alongside the serve... | [weblogretention-list_accounts_retention.md](endpoints/web-log-retention/weblogretention-list_accounts_retention.md) |
| **Web Log Retention** | `-` | The Web Log Retention module for WHM API 1. | [_category.md](endpoints/web-log-retention/_category.md) |

### Whm Access (`endpoints/whm-access/`)

Contains **3** operations:

| Operation / Function | Endpoint | Description | File |
| :--- | :--- | :--- | :--- |
| **Clear all CIDR restrictions to login to cPanel & WHM with the root password.** | `GET /allow_all_whm_root_access` | This function removes all restrictions to root login to cPanel & WHM login based o... | [rootipaccess-allow_all_whm_root_access.md](endpoints/whm-access/rootipaccess-allow_all_whm_root_access.md) |
| **Restrict Access to WHM by CIDR list.** | `GET /restrict_whm_root_access` | This function restricts root login to cPanel & WHM based on a list of CIDR addresses. | [rootipaccess-restrict_whm_root_access.md](endpoints/whm-access/rootipaccess-restrict_whm_root_access.md) |
| **WHM Access** | `-` | Security / WHM Access | [_category.md](endpoints/whm-access/_category.md) |
