# Ticket Management

cPanel Support Tickets / Ticket Management

## Create initial Support ticket request

 - [GET /ticket_create_stub_ticket](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_create_stub_ticket.md): This function creates a stub ticket. The system uses the stub ticket
to create a cPanel support ticket.

Note:

This function is not available through the command line. You must call
it as a request body.

## Import Technical Support Agreement text

 - [GET /ticket_get_support_agreement](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_get_support_agreement.md): This function retrieves the WebPros International, LLC Technical Support Agreement text
and metadata about the user's agreement status from the
cPanel Customer Portal.

Note:
* This function is not available through the command line. You must call it
as a request body.
* To use this function, you must set up a cPanelID token in your current session.
For more information, read our
cPanelID
documentation.

## Import customer information from Customer Portal

 - [GET /ticket_get_support_info](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_get_support_info.md): This function retrieves the license holder's support-related information.

Note:

* This function is not available through the command line. You must call
it as a request body.
* To use this function, you must set up a cPanelID token in your current session.
For more information, read our
cPanelID
documentation.

## Return Support ticket status

 - [GET /ticket_list](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_list.md): This function lists all active and open support tickets from the
cPanel Customer Portal.

Note:

This function is not available through the command line. You must call
it as a request body.

## Enable Technical Support Agreement acceptance

 - [GET /ticket_update_service_agreement_approval](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_update_service_agreement_approval.md): This function records a user's acceptance of the Technical Support
Agreement (TSA). The cPanel Customer Portal stores each record with the user's
login, the date and time, and the TSA's version.

Note:

This function is not available through the command line.
You must call it as a request body.

## Validate Customer Portal OAuth2 code

 - [GET /ticket_validate_oauth2_code](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_validate_oauth2_code.md): This function validates the OAuth2 code from the
cPanel Customer Portal.
After the function validates the token, the system stores it on the current session.

Note:

This function is not available through the command line. You must call it
as a request body.

