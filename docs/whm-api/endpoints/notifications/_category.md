# Notifications

Server Administration / Notifications

## Return Contact Manager event importance settings

 - [GET /get_all_contact_importances](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_all_contact_importances.md): This function lists the importance of all application events in
WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

## Return app's event contact importance setting

 - [GET /get_application_contact_event_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_application_contact_event_importance.md): This function retrieves the importance level of an application event for WHM's Contact Manager interface (Home >> Server Contacts >> Contact Manager).

Note:

  The system will create a notification setting for the application's events if one does not already exist.

## Return app contact importance setting

 - [GET /get_application_contact_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_application_contact_importance.md): This function retrieves the importance level of an application's events for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

Note:

The system creates a notification setting for the application's events if one does
not already exist.

## Send notification URL via POST

 - [GET /send_test_posturl](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-send_test_posturl.md): This function uses the specified URL to send a test message through the POST method of HTTP as form data.
The function automatically generates a message title and body and includes a unique string in the test message.
When the test message returns, the system searches for the ID string and returns it.

If the function does not detect the correct ID string in the returned message, the function fails.

The test's success or failure depends on various conditions. For example:
* Valid access token.
* Network configuration.
* Service outages.
* External server rate limit.

## Send Pushbullet™ test with access token

 - [GET /send_test_pushbullet_note](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-send_test_pushbullet_note.md): This function uses the specified access token to send a test Pushbullet™ note. The function automatically generates a message title and body, and it includes a unique string in the test message. When the test message returns, the system searches for the ID string and returns it.

If the function does not detect the correct ID string in the returned message, the function fails. You can also review the user's Pushbullet channel history to confirm that the server sent and received the message.

The test's success or failure depends on various conditions. For example:
  * Valid access token.
  * Network configuration.
  * Service outages.
  * External server rate limit.

## Update app's event contact importance setting

 - [GET /set_application_contact_event_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-set_application_contact_event_importance.md): This function sets the importance level of an application event for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

For a list of available modules, use the WHM API 1
get_all_contact_importances
function.

Note:

The system creates a notification setting for the application's events
if one does not already exist.

## Update app contact importance setting

 - [GET /set_application_contact_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-set_application_contact_importance.md): This function sets the importance level of an application's events for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

For a list of available modules, use the WHM API 1
get_all_contact_importances
function.

Note:

The system creates a notification setting for the application's events if one
does not already exist.

## Update WHM contact email address

 - [GET /update_contact_email](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/wwwacct-update_contact_email.md): This function updates the contact email address in the wwwacct.conf file.
For more information, read our 
Installation Guide - Customize Your Installation
documentation.

## Send notification URL via POST verification

 - [GET /verify_posturl_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_posturl_access.md): This function calls the WHM API 1 send_test_posturl function for
your specified POST notification URLs. Users can specify POST notification
URLs in the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup).

Note:

If the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (Home >> Server Configuration >> Basic WebHost Manager Setup) contains
multiple POST URLs, the function will return an array that contains the results
for each URL.

## Send Pushbullet™ access verification

 - [GET /verify_pushbullet_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_pushbullet_access.md): This function calls the WHM API 1 send_test_pushbullet_note function with the system's specified
Pushbullet™ accounts. You can specify Pushbullet accounts in the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (Home >> Server Configuration >> Basic WebHost Manager Setup).

## Verify Slack® Webhook connection

 - [GET /verify_slack_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_slack_access.md): This function verifies the connection to a Slack® WebHook. You can specify Slack accounts in the Contact Information section of WHM's Basic WebHost Manager Setup  interface ( Home >> Server Configuration >> Basic WebHost Manager Setup ).

