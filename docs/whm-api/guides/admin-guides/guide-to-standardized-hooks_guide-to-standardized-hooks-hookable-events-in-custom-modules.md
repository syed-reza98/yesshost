[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks)

# Guide to Standardized Hooks - Hookable Events in Custom Modules

Custom modules can help define more hookable events for the Standardized Hooks System. In essence, the system treats non-cPanel code that runs as a cPanel process as a native hookable event.

## Requirements

Your custom module **must** meet the following minimum requirements for hookable events:

* The calling code **must** be part of cPanel & WHM's runtime process (for example, a cPanel or WHM plugin).
  * It may be possible to use the Standardized Hooks System outside of cPanel processes. But certain features, such as privilege escalation, will not work. These features will also likely encounter errors. We do **not** recommend using Standardized Hooks outside of a cPanel process.
* The calling code **must** be Perl and must use the `Cpanel::Hooks` module.
* The calling code can only use characters that are a subset of US ASCII characters. The calling code **must** include only the following characters:
  * Alphanumeric characters (e.g., `A`-`Z`, `a`-`z`, and `0`-`9`).
  * A colon (`:`) or a dash (`-`).


We recommend that developers observe the following practices for consistency and expectations:

* In your custom code, bookend the primary logic with both a `pre` and `post` stage. Most cPanel-provided hookable events include these stages.
* For `pre` stages, observe the return value and do not perform the primary logic. While the Standardized Hooks System will handle the rollback actions, the caller must not allow the requested event to occur.
* Allow `post` stages to occur in a meaningful way with respect to the primary logic. Usually, you must dispatch the `post` stage and provide a dataset that clearly shows whether the primary logic completed successfully.


## Examples

The following Perl module includes custom hookable events:


```perl
package Cpanel::MyCustom;

use strict;
use warnings;

use Cpanel::Hooks ();

sub awesome {
    my %OPTS         = @_;
    my $return_value = {
        'status'     => 0,
        'status_msg' => undef
    };
    my ( $hook_result, $hook_msgs ) = Cpanel::Hooks::hook(
        {
            'category' => 'MyCustom',
            'event'    => 'awesome',
            'stage'    => 'pre',
            'blocking' => 1,
        },
        \%OPTS,
    );
    my $awesome_data;
    if ( !$hook_result ) {
        my $hooks_msg = ( int @{$hook_msgs} ) ? join( "\n", @{$hook_msgs} ) : '';
        $return_value->{'status_msg'} = 'Hook denied completion of '
            ."Cpanel::MyCustom::awesome(): $hooks_msg";
    }
    else {

        # === do primary logic here === #
        $awesome_data = {
            'in_realworld'      => 'this likely be the return a a subroutine',
            'has_pass_criteria' => 'up to the subroutine that does the work',
        };

        # === set response accordingly === #        
        $return_value->{'data'} = $awesome_data;
        if ( $awesome_data->{'has_pass_criteria'} ) {
            $return_value->{'status'}     = 1;
            $return_value->{'status_msg'} = 'Successfully achieved awesomeness.';
        }
        else {
            $return_value->{'status_msg'} = 'Failed to achieve awesomeness.';
        }
    }

    Cpanel::Hooks::hook(
        {
            'category' => 'MyCustom',
            'event'    => 'awesome',
            'stage'    => 'post',
        },
        $return_value,
    );
    return $return_value;
}

1;
```