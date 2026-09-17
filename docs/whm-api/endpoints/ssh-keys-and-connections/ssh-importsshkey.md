# Import SSH key

This function imports an SSH key.

Endpoint: GET /importsshkey
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    The key's contents.
    Example: "-----BEGIN RSA PRIVATE KEY----- hPH+o4NgZrky7iGBb5iUg8R4aQzLPexpYfet25bLESvHOtutsBkbN7UWAaoM0pgM hytunlM8UU4BArJWlJyY6AD59aluZowBbuowKeU+f+TRaeJNJvkxTCOAipzp6LyG nrSVJ5hxSN/RPfntho1MEsdWYewVI4eLayuiZJyD+VONCYJh/vPLaZ9AVUJuMerl s/ZJ24AwCW8cILG+C3TWJRCjl4Ji+sJ9A5P29p/ad18cyJc1F+wmAzMULWitCaB7 mmE0i1nkiZRygQzzKjqdBYWCjujxfoE2+nPufAJg8ZdIEI1xSVBe5jKnj8DRX67w NAnNjXANMRePo39/RbDOSEXsD62h1qH93SnPsAhYT1JE6xHKV85AVIVOe8ktTA8t jMBBioCudBFngqPHknUrIJZ2QfUm0fkKBZaoKW4yr3JjGk+5y6kg02gSDIA7/jGc 8rs3iKN+QJ/ug2x/v7Xe0OozVqpl5QTltEMGJzJ1jFh9WnqgsgLTiJWlE7x5VSv8 fV8A5WTafOhBHnKuOpmpjAel1GD5DT1jNx3LhWXMHOayawC0WY04lT5kkLLWhuN2 pNqY6UBk6Z3m1ifPINq85RdnHriJiD3H/+6P+cUyGSOznni8yqU764LId4nNClWd Xc+VvM1Udw0Sm7xF7err9CKHYUg3HfFYQPBQOfI0ib9wqOi7zWq2vhH21B5OgcTg Bsw/HJUQ/IVnTbsqgZSn0sckaRguv/ifmwbISO1aQ4Yxcohe/4miOw05r6ihbYGW LO5kP0I8SBMCibkGFh5AxVnNgoGAW0l33hOPPSIVUTkE+8d3zYXLzupTFXCvmohl jq0it7uIGOxSglf7XH3eXlNKaZjK7pBJgS5HeXM80JI8FCfifqnkaik8XTE66Ll0 s1ySaGevGkPpX5Rhbgsm4IqddAeFvlmKIND8Zvh/wfT++bbD7bbFwFlrWCU3chce 8KaNVUP+whCAlaS7oGcs38ygaRFXIE3vug4Ra8Xiy/qfyp4YR67sMg46avHyoVky uFbVv2n7HphZb7g3WS3ns3/gCQQv9TYcdBoRnKW2yEqbzOQb9Fdt7EjgMohT/bdS pM6nRWFNdmWoihLzLbSi3bnc9iDwXZA8KyE3mpVi4QFfijR4dfrVWxEz5Ln2l9HC SZA6VPGzEOwOVVND98/HTu3oViJUV1gyDIWlyggSUDTyhfo/Z+c3tTHa+cv0f7xY oL63hWLgZQD2m/g6rKpsN3NhC77tCyCNZavdKy7usvZyCsoH/mPR2129LcwAwbJ3 u2Ec7qLncztSePHOmfmCTTED00a0YzFhKIQoJf7GrgLCMapYN/YPu0vgTDMPSi11 RH0rdyzd6MuPVDZwLnWO+SltjX85yz1ba/Q199HZwQOw6ZyejDaPSWJHOndD3k+r Q0T38gci9k4D87EwmfpK7zOaCoaiGiRQ6+DdYOv6hlzQ6Fdb2FOtlGQZharQ9WTC jOJBEj2oGUruc6P3fqhfUVllWi4cck0GgWZwcsmG1dDr8W6K9lrGA1dPbXoOns1B l58ghMGtHG7D0VlHs6SIqFmHr5kUgSQ4jJ2KZkVU8CrPBZ2HRtHQJJyjZWW2AbrE -----END RSA PRIVATE KEY-----"

  - `name` (string, required)
    The key's name.
    Example: "TestKey"

  - `extract_private` (integer)
    Whether to extract and save only the private key.
* 1 — Private key only.
* 0 — All data.

Note:

This parameter defaults to 1 for
PPK (PuTTY Key Generator)
files and 0 for all other imports.
    Enum: 0, 1

  - `extract_public` (integer)
    Whether to extract and save only the public key.
* 1 — Public key only.
* 0 — All data.

Note:

This parameter defaults to 1 for
PPK (PuTTY Key Generator)
files and 0 for all other imports.
    Enum: 0, 1

  - `passphrase` (string,null)
    The key's passphrase.

Note:

This parameter is required whenever you import a PPK file.
    Example: "123456luggage"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "importsshkey"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


