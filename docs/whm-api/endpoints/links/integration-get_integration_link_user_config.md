# Return integration link configuration

This function retrieves configuration information about a specified integration link in a specified user's cPanel interface.

Endpoint: GET /get_integration_link_user_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `app` (string, required)
    The integration link's app name.

Warning:

If you create a link with an app value that already exists, the function will replace the existing link with the newly-created link.
    Example: "WHMCS_billing"

  - `user` (string, required)
    The cPanel account name.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.userconfig` (object)
    An object with information about the user's integration link.

  - `data.userconfig.app` (string)
    The application to link.
    Example: "WHMCS_billing"

  - `data.userconfig.autologin_token_url` (string)
    A publicly-available URL to which the server will send the
app, token, user, and subscriber_unique_id values through
an HTTP POST request. The destination server will respond
with a JSON-encoded object with either a redirect_url
key or the retry and attempt keys.

* If the response contains redirect_url, the system will redirect
the user to that URL (for example, {"redirect_url":"http://www.whmcs.com/client_area/login/?one_time_user_token_that_expires_in_120_seconds=d41d8cd98f00}
will send the user to that URL).
* If the response contains retry and attempt, the system will wait for
the retry value in seconds for a maximum of 60 seconds
and then attempt the call again. The attempt value indicates
the number of attempts that the system tried. The system
will stop after three attempts (for example, {"retry":30,
"attempt":2} represents the second attempt to connect,
and the system will pause the user for 30 seconds before
it tries again).
    Example: "http://www.example.com/login.cgi"

  - `data.userconfig.base64_png_image` (string)
    The image to display for the application on the cPanel Home interface.
    Example: "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA%2fwD%2fAP%2bgvaeTAAAACXBIWXMAAABIAAAASABGyWs%2bAAALVUlEQVRo3sWZe3BU1R3HP79z793dZAPkBYIg4RUSBKkIEfCNog5WbaWOHevUWttOVXxVtFWctmpb2xGptVOt1ken1bbSVsVSxVba8UkrsRIxYhbRJEqRVxJCErK7d%2b89%2fePcTW6WTdj4mH5nLuTunj3n%2b%2f2d3%2fn9fucc4f%2bAbdu2ISJkMhmxbXupiMwH0lrr33qet7W6uhoRKaivwlp9TCQSCQAFVAEdwL7gqxLgCeB0wAOuSqVSvywvLyeZTIrWeqLWukdrvVcpRXV19UF9q0%2bbeEC%2bEvgOsA74EVAaNBkP1AR%2fW0BdNBq1enp68Dyvzvf9P2qtVwNn%2bb5vh%2frrg%2f1JEP3hG0ehROFpt8qW2CLAymRceax7aXeHv2PtFSM3LtD4NwNxYAqQAn4CnAwcFupqLjADiAG%2fAOqCz2PAq0Bb7tjDFrC8Pj7gfVVdD%2b3p9xAUoJcCKzGuKUCHhWyPSWmiV7fvCQQ4wGXAKcAEIBrqbibweMBrSujzt4HOfHwKEhAiXR5YqQHYs6quJ%2fSdHwGOxbgCGg8NZQp7zhGxyvu39rY3AJOCxkXAnDxDWcD0nM9c4AUgA1BTUzPgyyEFhIhHgcXA1cBC4DHgxuX18fZQ89HALNBEZRRTnDPo8rdLt79r4aaelx%2bLqzHJ%2fKMIAmjo%2bzePAA8oBiYlEok6YNf06dP%2f1tTUpAeNQiHyDnAT8C36F18G%2bBWwgv6pPQVYo9GjjopcxMLYcjxSpPzO9mI1%2bg1BzQ9IBLQVGk1ad%2bFyAIfiroiUKIyb5aIFeAeoBQ4HtsZisQs6OzsbC3EhDUwMkc%2fO3DeAJPCDYOoXa%2fTImIximrMECxtBcFRRuUYvClscNHu8LWxzn2Gn9wZJ3ZGptI788ZLiu193de%2fZwNKAaBaT6Hc%2fgFrP886ePXt2YyEzAPAV4EEOdrle4EWgDBM9RgiKGudc5seuJSalaPwca3i8nX6CTakH6dY7s6J2CNaSmJRtvnjEehs4HrgDs6YOgoisi0QiV2%2fdunXboHlgVV1P%2bPU1YGeeZkXAmcFAIwxBnyZ3DRuSK%2bnVbYRzpSAk3LX8O3UX3XoXgpV93qpQ1c0%2bKTDu%2bQJwObAlD%2flnIpHIsmQyuW3u3LkFJ7IWYHMhDTUaH49t7jr2eFtQwRCCYp%2ffQkPqYVx9IAi7Bgr7lRV7NnWNsWbj6TTj7em0%2bTteV9h3YnJGFp7jOGu6urqaa2trqaioMC4RcpdRmOy4HeiiPyz0AE3AWUORFxRFUspIdQSHWUdTYdUOcKGWzPN0%2bu8PII9xwzevLIe4jOXp3m8y0T3Bakg9UjbZXtxyYtGN7yjsWUFby%2fO8C%2bPx%2bIetra2NjuPsskPkFbAMuCIg%2b0rwvAXMAs4e2vI%2bY61jOD72bUaq8ThS0jcjAB5pdmU2o9G5BVjMx%2f16qapqas48l3b1gTm7M1tO8MksTLhrKqY4i9RE%2b8Q%2bQ3iet8jzvAWu625Pp9OvhRflvMDvxgfPqYHlWzERaPyhXKdYjabCmg6hyJ6dG1%2b7JPW%2bfNWjAGcmdftUjW8D4zV%2b1PTp0eE36ypOys0QRUC17%2fsVWQGxgPyEnI5LMOn9UOgE%2fVpMStuA00GPYkChqBGxsCWGJm8JrDR%2bbgZGUDgUDRYpXRFpywqIMzDuFooU8HfgXl%2b7G%2bZELvFdfWCuEmeuhXMccAZBdLKJUmnVpj7IvGwTlBtDQ%2bNInDJrygDrK6UaReRZy7I2KaW2ZK3Uhil3XxkG%2bX3AbcDFwLO2FO0%2fZsZJ3TEpewH4KfA1TAUZ0IGZkS82l8i4J0GnDtW5j88Y6ygqVE04EHiWZd3V2Nh4w6RJk35fVVXVoELxvgFTJb5QAPku4LuYynPfqrqeUN7QaDIIMh0YF7ZoiYydtLTkd42C%2fQDozOC29ymSCj4T%2bTIRKSG0nsTzvCPr6upKWltb0VobPw2JaAxE%2fHNI48B9wAOAm%2f3t9fUjeP6tPzDtzclYRI7TcD8560fjx4pl9GXnl6xuUTjrNV6YXF8OKZZKFsSu1RPs43IzufJ9%2f8re3t7bo9FoZSKR6F9oIRFNwBoGKQ2BTZjNxkFuMNk5jddnvlSpsG8Hna9cRuOPLVfTVpxVfE%2fZYdacdERGoLBROMRlNNOcM1lcfAc1zrmDLd6o53lX9Pb2XlpbW9tf24TyQTFwDPn3yz7wKPB%2bvp5TuoudXkPnFLV4k6BODozQhalYD6dvr%2bCXH24fO3%2bJVUOn%2fz69ug2Fwwg1jhFqAjbRXMt3iUiH1nosEBGRNqVU%2fcaNG5Hl9fEYZltXGxA%2fFrPVK8vDcTsmG7%2bZM2sALNsIN5R%2bSI%2b%2fZ5otsZtAvw%2b8hAkSq4DTBnYnCKrPUjpwoly7AN%2bLRCJPicg8z%2fNOFZF3y8rKVrqu69qYzUktJgcUM%2fRJxTuYxJYXcSmlyhlLqyvveiQvd%2fUBV7B0YPn%2f5nOoYOc2FHwgkU6nE8XFxYnKysrVqVRK2tra3KlTp2IDn6NwbMdk57y4o24fdxj9GkiHThAOx2T6MKn99O%2bRw%2bgJfl8SvBcBJ6TT6adEhO7u7syMGTP6Gis4lAEGoBuzvRsuZjFwQ%2fIc8HngZwR73QCtwCWYemxH6PP5kUikVGt90IGXzfAOt%2bIYdxiuiGbMmdASTHK7CuOOXZjN0pigXT2wVpC0RvuYdeMCT5Mn6mUFPI5ZAxMx0zaUoAmBiP3DFNAEXIoJDu8ET9bi74UEbBypJqT2egksia62sHcL0pEhtUlQnq0ieQVchDlRqMEcmdRhKtHyPESmB0IbC2GdcwSyH1gL0JRoQuOhsDs87f4ZdA%2bQFFEvZnSKh%2fefxF3HdmcwrjYk%2bqwdygNFwD3AV%2fO094DrgJ9nP8gNpYXipS2rcaSSlL%2fbsSTiaLT2dCoF%2bKfMvKjgfga4S0jEVcDd5HenesypwfaPI%2bCTQr5MfGRAcLC1MBezc%2fs%2bkB7ugME45cA5mFI7XxQUTPZ%2bGmgfylCSQ%2f4oTJ1z0iF47MeU3w8CmUJnIRhnJHArJlQ6Qwhwgd8IskKj9w4qIET%2bGIxvH1%2bgMTswJ8z3BYIGtVJojAnAzZiIFDnkCCZHPGpJ0Y31bXt33bdgPdUjF6Gkfz%2bUFVABrOagWuWQSAHPAPdi4ntXWEjQt2DuB04HrgTmM7x7CQ1q5Sljr1nx2t5HvFuObkak%2f%2bfZNdCFSTbDRRQ4D3MuWo%2fZ0TUtr493BsRHA7OBE4P%2fiz7CGK4Sq%2fmcv%2f7Qe%2bi089F6oMeFXWgeJqlN7FdONybRlGKuhwpBOngkEFjI%2bauHOYWLBOPEQuZ%2fTkn0wm63ve3eBT5KBk5euPP%2fYBbwMsyFwobgacTUMvfQfx00FCIU5t8hjqwFrg%2bEzMGsw4VAhSCrtN7fticJuw%2b0HPTj3Cg0ArOP3UF%2fVZjFncDyYRArFL2YauBJgJHOOErs0WpncktZxu%2bt8NEtvs6kF429lqVVd%2bUXMBhCwuLAnzDF2KeBW4Fbsi%2fDSY6FRoPJmEX4aeF4gvOj4WJQATn3A%2fMYeJuYRS%2bmTP4XQ1eouzAHYBvg4D0jJvtPBgbE%2bI8lIAQbk5lzo0kaE%2f8vBD6LqZ3yZdVOTNY9D%2bPr6%2fK0OYxBLjM%2bCQGCCaXhCz0XE5VuCwh2AP8g%2fyy0YCx%2fIPj7GmB9TptmYI8Su%2b80%2b2MLCC0kF3Pd8yVMcbUfeAiz8MKEtwEf5OmqAdgben8XU%2b0%2bD%2bzGXBZ%2bAfiLr93gzrJwFNQ6tB7KMHF6M7B34D0xEeDXgdAs%2fIDsvVmjhNpXY0qYTUDqo5blw72p7yB07Li8Ps6quh6uqy9GUGngVQ0X0D%2bz7YJuAOk77wkRDW8tPzIKEnAo60RVORErhq%2b9dUrsKIgjIL722l0%2fucVSDh2pDwoZatj4H%2bRdIAdHBVWZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA5LTAyVDEyOjM5OjQ4LTA1OjAwppVa9QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wOS0wMlQxMjozOTo0OC0wNTowMNfI4kkAAAAASUVORK5CYII%3d"

  - `data.userconfig.implements` (string)
    The service for which to implement authentication. The implements value is a string from the WHM API 1 get_users_links function. Typically, this function returns one of the following values:
* billing — This link appears in the user menu.
* customer_service — This link appears in the user menu.
* support — This link appears in the user menu.
* upgrade — This link appears in the user menu and context-sensitive areas when the user may require more of a resource.
    Example: "billing"

  - `data.userconfig.label` (string)
    The label to display for the application on the cPanel Home interface.
    Example: "WHMCS Billing"

  - `data.userconfig.subscriber_unique_id` (string)
    The subscriber's unique ID that the system will present to the URL in the autologin_token_url endpoint.
    Example: "1234"

  - `data.userconfig.url` (string)
    A publicly-available URL to which to send the user if the
location in the autologin_token_url parameter does not
respond.
    Example: "http://www.example.com"

  - `data.userconfig.user` (string)
    The cPanel account name.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_integration_link_user_config"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


