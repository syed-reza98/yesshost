# Session

API Development Tools / Session

## Create a temporary user session

 - [GET /create_user_session](https://api.docs.cpanel.net/specifications/whm.openapi/session/session-create_user_session.md): This function creates a new temporary user session for a specified service.
This allows users with WHM access to log in to third-party applications
(for example, billing systems) without storing the account password.

Note:

* The system destroys the temporary session after 15 minutes of inactivity.
* For more information about the Single Sign On feature, read our
Guide to API Authentication
documentation.

## Create login link for Dashboard

 - [GET /wp_dashboard_create_login_link](https://api.docs.cpanel.net/specifications/whm.openapi/session/wpdashboard-wp_dashboard_create_login_link.md): This function creates a single-use WHM session for re-entry from WebPros Dashboard.

