[Development Guides Home](/guides)

# Guide to Custom Service Notifications

## Introduction

You can create modules to send notifications to custom services. This creates notifications to an Internet Relay Chat (IRC) server, Slack, or a related service. The custom notification consists of two Perl modules. The following steps describe how to create and configure these modules.

Important:
This feature does not function with UTF-8 byte strings that the system must decode.

## Modules

The Provider module must be a subclass of the `Cpanel::iContact::Provider` module. You do **not** need knowledge of the ancestor module.

To create a custom notification, you must create the following modules:

* The `Schema` module — This module validates your configuration and determines how to display information in the interface.
* The `Provider` module — This module defines how you communicate with the service. It uses the settings that the Schema module provides.


## The `Schema` module

Create the `Schema Perl` module in the following location, where `MODULE_NAME` represents the custom notification module name:


```perl
/var/cpanel/perl/Cpanel/iContact/Provider/Schema/MODULE_NAME.pm
```

After you create this module, add your custom information to the `get_settings()` and `get_config()` subroutines. If your `Schema` module requires external modules, store them in the relevant `checkval` functions.

The contents of this module should resemble the following example:


```perl
package Cpanel::iContact::Provider::Schema::Example; # Change 'Example' to your Service name
use strict;
use warnings;

# Use any modules from our installed CPAN modules here.

sub get_settings {
    return {
        'EXAMPLEAUTHTOKEN' => {
            'shadow'   => 1, # Flag for saving to /etc/wwwacct.conf.shadow or /etc/wwwacct.conf
            'type'     => 'password', # This maps to an HTML input tag's "type" attribute. Perfect for things like passwords or API bearer tokens.
            'checkval' => sub {
                # Not really much to do here, since I'm not actually aware of a good validation regex for these tokens.
                my $value = shift();
                # Do some validation here to make sure $value is either a) a sanitized version of what was input via the UI OR
                # b) a blank string, as it failed to validate.
                # NOTE: Do not establish whether the parameter is *valid* for your service (in this example). Instead, this ensures that you format things the way you want them.
                # As an example, you can input non-resolving email addresses in for the email notification field in Basic Setup, it will just fail to send when we go to actually do that.
                # Generally we expect integrators to follow this model as well. To reject an email address because it does not follow the RFC for a valid address string for example, would make sense here though.
                ...
                return $value;
            },
            'label' => 'Example Service Auth Token',
            'help' => 'Some string that would tell people how to obtain this, what it should look like, etc.',
        },
        'EXAMPLESERVICEHOST' => {
            'shadow'   => 1,
            'type'     => 'text',
            'checkval' => sub {
                my $value = shift();
                ...
                return $value;
            },
            'label' => 'Example Service API URI',
            'help' => 'Some string that would tell people how to obtain this, what it should look like, etc.',
        },
        # NOTE to 3rd party integrator - Only have one property prefixed with CONTACT, as that one will be the 'triggering' property for notifications.
        # In the logs, the TYPE of the notification will show up as CONTACT<NAME> where <NAME> is your TYPE.
        'CONTACTEXAMPLE' => {
            'name'     => 'Example', # Needed to tell cPanel what provider module to load over in /var/cpanel/perl/Cpanel/iContact/Provider/
            'shadow'   => 1,
            'type'  'checkval' => sub {
                my $value = shift();
                ...
                return $value;
       },
            'label' => 'Example Service user to notify',
            'help' => 'Some string that would tell people how to obtain this, what it should look like, etc.',
        }
    };
}

sub get_config {
    return {
        'default_level'    => 'All', # Maps to what you'd see in the WHM >> Contact Manager UI as the default notification level. In /var/cpanel/clevels.conf, this would be translated to '3'.
        'display_name'     => 'Example', # Maps to what your provider shows up as in the WHM >> Contact Manager UI.
	'icon_name' => 'Example', # Maps to what your icon is named. Currently irrelevant, as it does nothing to help your icon load, and falls back to 'display_name' above if not set.
  	'icon' => ... # A long Data URI (ex. "data:image/png;base64,$my_image_base64"). Thankfully these only display at 16x16px, so you can scale down the image first.
    };
}

1;
```

### The `Provider` module

Create the `Provider Perl` module in the following location, where `MODULE_NAME` represents the custom notification module name:


```perl
/var/cpanel/perl/Cpanel/iContact/Provider/MODULE_NAME.pm
```

After you create this module, add your custom information to the `send()` subroutine.

The contents of this module should resemble the following example:


```perl
package Cpanel::iContact::Provider::MODULE_NAME;
use strict;
use warnings;

# You must use the following, as all iContact providers are subclasses of this.
use parent 'Cpanel::iContact::Provider';

# You *may* also want to use some CPAN modules here for contacting your service,
# in particular, one of the WebService, LWP/HTTP or Net namespaced modules.    # (See NOTE: below) Try::Tiny would probably be nicer than block eval too.

# NOTE: We strongly recommended that you require *all* external dependencies
# at runtime. These modules load every time iContact notifications are sent if
# you 'use' them. When you 'use' modules, you can negatively impact the memory
# footprint of the parent process responsible for sending iContact
# notifications.

sub send { # Here is where we define how to reach out and touch your service.
    my ($self) = @_;

    # NOTE: If you use Data::Dumper, get the output of this hashref --
    # the 'html_template' contents may corrupt your tty due to some of the
    # symbols translating into control codes for the terminal.
    # Just run 'reset' on your terminal to clear any corruption of that
    # (or just don't dump that before decoding the UTF8 chars within it).

    # This hashref contains the recipients ('to' arrayref) and the processed
    # notification templates, among other things.
    my $args_hr = $self->{'args'};

    # This will contain any of the non-CONTACT prefixed properties you defined
    # in the schema module.
    my $contact_hr = $self->{'contact'};

    my @errs;

    my $subject_copy = $args_hr->{'subject'};
    my $body_copy    = ${ $args_hr->{'text_body'} };

    require Encode;
    my $subject      = Encode::decode_utf8( $subject_copy, $Encode::FB_QUIET );
    my $body         = Encode::decode_utf8( $body_copy, $Encode::FB_QUIET );

    foreach my $destination ( @{ $args_hr->{'to'} } ) {
        eval {
            # Try to do something to contact your service and deliver the
            # notification payload here. The author *should* die within this
            # block if something returns a failure response but doesn't die.
           my $response;
            $self->_send(
                'destination' => $destination,
                'subject' => $subject,
              'content' => $body
            ) || die "Sending to $destination failed: " . $self->_last_error();
        };
        push( @errs, $@ ) if $@;
    }

    # After all notification send attempts complete, die if one or more
    # failed
    if (@errs) {
        die "One or more notification attempts failed. Details below:\n" . join( "\n", @errs );
     }

    return 1;
}

# Ensure that you define all of the other internal methods defined below if you
# need them. You will notice in my example that I had a _send and _last_error
# subroutine. How you wish to implement these is up to you, however.
...

1;
```