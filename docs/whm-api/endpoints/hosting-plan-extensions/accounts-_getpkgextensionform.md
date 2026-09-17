# Return hosting plan extension templates

This function retrieves a hosting plan's package extension templates. When you call this
function, the system checks the hosting plan's _PACKAGE_EXTENSIONS value.  The function
returns the contents of the /var/cpanel/packages/extensions/name.tt2 file for each package
extension in the list, where name represents the package extension's name.

For more information, read our
Guide to Package Extensions.

Note:

This function returns only metadata if the hosting plan does not use package extensions, or
if the extensions' template files are empty.

Endpoint: GET /_getpkgextensionform
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `pkg` (string, required)
    The hosting plan's name.
    Example: "package1"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.html` (string)
    The HTML and Template Toolkit soure code for the hosting plan's extensions' templates.
    Example: "<div class=\"fatBorder\" id=\"dog_Extension\"> <fieldset class=\"groupEditor\"> <div class=\"propertyGroup\"> <h3>Dog Settings</h3> <div class=\"propertyEditor\"> <div class=\"propertyLabel\">Dog Species</div> <div class=\"propertyValue\"><input id=\"dog_species\" type=\"text\" name=\"dog_species\" value=\"dalmatian\"></div> </div> <div class=\"propertyEditor\"> <div class=\"propertyLabel\">Tail Length</div> <div class=\"propertyValue\"> <input type=\"radio\" id=\"dogTailLengthTiny\" name=\"dog_tail_length\" value=\"tiny\"> <label for=\"dogTailLengthTiny\">Tiny</label><br> <input type=\"radio\" id=\"dogTailLengthNormal\" name=\"dog_tail_length\" value=\"normal\"> <label for=\"dogTailLengthNormal\">Normal</label><br> <input type=\"radio\" id=\"dogTailLengthLong\" name=\"dog_tail_length\" value=\"long\"> <label for=\"dogTailLengthLong\">Long</label> </div> </div> <div class=\"propertyEditor\"> <div class=\"propertyLabel\"><label for=\"dog_spots\">Has Spots</label></div> <div class=\"propertyValue\"> <input id=\"dog_spots\" type=\"checkbox\" name=\"dog_spots\" value=\"y\" checked=\"checked\"> </div> </div> </div> </fieldset> </div>"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "_getpkgextensionform"

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


