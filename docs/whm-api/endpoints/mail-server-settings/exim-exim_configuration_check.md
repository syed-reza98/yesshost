# Repair Exim configuration file

This function scans the Exim configuration file for errors, and if it finds errors attempts to repair them.

Endpoint: GET /exim_configuration_check
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.message` (string)
    The reason why the configuration check failed.

Note:

 The function only returns this parameter if the configuration file contains errors.
    Example: "cPanel was unable to automatically merge your Exim configuration with the new settings that shipped\nwith the build you have installed (11.38.0 (build 9999)) because you have a custom or broken configuration which\ncannot be automatically configured.\n    Since this configuration update is not critical, we left your previous configuration intact until\nthe new configuration can be properly installed.  In order to complete this configuration update, you will \nneed to manually merge your configuration with the new configuration settings.\n\n\nPlease follow the steps below to complete this update:\n\n\t1. <a href='javascript:select_exim_backup();'>Backup your existing configuration</a>\n\t2. <a href='javascript:select_exim_advanced();'>Notate any custom changes  you have made in the ACL section in the 'Advanced Editor  Tab'.</a>\n\t3. <a href='javascript:select_exim_reset();'>Choose 'Reset cPanel & WHM Exim configuration files, one option at a time, until the installed Exim configuration is valid' under the 'Reset Tab'.</a>\n\t4. <a href='javascript:select_exim_advanced();'>Reinstall your customizations in the 'Advanced Editor Tab'.</a>\n\n\nCurrent  Config Version: 10.320000\nNew Config Version: 10.330000"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "exim_configuration_check"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Configuration Update Failed"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


