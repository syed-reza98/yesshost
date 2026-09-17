# Return domain's DS record

This function fetches a domain's Delegation of Signing (DS) record.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

Endpoint: GET /fetch_ds_records_for_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain to fetch a DS record from.

Note:

To fetch records from multiple domains, duplicate or increment the parameter name. For example, to check three domains, you could:
* Use the domain parameter multiple times.
* Use the domain, domain-1, and domain-2 parameters.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains` (array)
    An array of objects that contains information about each domain.

  - `data.domains.domain` (string)
    The domain name.
    Example: "example.com"

  - `data.domains.ds_records` (object)
    An object that contains domain's DS records.

Note:

If the domain does not have a DS record, this function returns an empty object.
    Example: {"keys":{"40481":{"active":1,"algo_desc":"RSA/SHA-256","algo_num":8,"algo_tag":"RSASHA256","bits":2048,"created":1575395316,"digests":[{"algo_desc":"SHA-1","algo_num":1,"digest":"2808a14b89118256119d93d24b9e6b673dca092b"},{"algo_desc":"SHA-256","algo_num":2,"digest":"02a57812deb952438382ed8dd20f00d4af844a55b5324d28bb"},{"algo_desc":"SHA-384","algo_num":4,"digest":"4569a6fcfe9e151ec6a163307e67eaa3a9547f16cd80751b0d46eb498bd96743bd4ff7c4f6fd5f76cc780aeb979cd08d"}],"flags":257,"key_id":1,"key_tag":40481,"key_type":"KSK","privatekey":"Private-key-format: v1.2\nAlgorithm: 8 (RSASHA256)\nModulus: syUlztxieV1aOtuYAGGA4VBxgquwqPTWQXcDVY1VRFcPgFmLMWYr6dDnN4OUhu2yIulK3KMeZmAc/DmwM+yNdCdYc9y84gw5OyONKduuPGYXfwCiJfOJ+NpGaFomK6fVFN8BMi6LUBytdA4gotPw45Uz8FIbl1KsEOnV4/ZpjiM=\nPublicExponent: AQAB\nPrivateExponent: LxIfsQ7vQPxqbPSuJ8t21b0RVkhOjtZmRaVD1wLf2KkXhZ4BmOVDvJgLaObF6/4gxFOQPBEQN84hT5TI25vYPrAwRAlP/yGmQ4Z2aPIYeEawoqqNoYEa5Xjs1X90i6/+Y8mJSZpGvr4/Y4ElothZTUw+LCYb6o9ulg53yya8KUE=\nPrime1: 4od92Rbx9fSXRIk6eSSdTYN/Do3zgDiCuxmuZaCrrEAlkiK11iz/s4aZGj9+Yk4NfusjXr3NqU1OMfBiIp67Sw==\nPrime2: ynOJdz/E4/B6iBtuz/4y0kasljMtiJnaNIxPr4LG+hByx7WWCnaPm6p8g1pz3FC/w7HAdWq9xzR1VnbRPGcZiQ==\nExponent1: KUKmkIEWZ0c6ujgIl4IsyK6X2O3QGV2xqiSeWFJwknpInZqG5lDh7jAo+NfxzDQNTz3C/oGx0RGMmZoANfAViw==\nExponent2: ZcFkmpdmstqv+7EuJUSy7pWvMV9Px5Ts4/SSKLkmoZGa314Zp/CnhapPIwZXrai4effhsCKSeImZYHgf+qgnYQ==\nCoefficient: PBQUQquZB0kG//cy8oVA6nHvKkvVJ8zV4GVlkXHTDylbjoWBTuNWwQ93t5SM7Rz3JePHImWdOVMYNIXpPlp56g==\n"}},"nsec_details":{"nsec3_hash_algo_desc":"SHA-1","nsec3_hash_algo_num":1,"nsec3_iterations":7,"nsec3_narrow":1,"nsec3_opt_out":0,"nsec3_salt":"1a2b3c4d5e6f","nsec_version":"NSEC3"}}

  - `data.domains.ds_records.keys` (object)
    An object containing the DS keys on the requested domain.
    Example: {"40481":{"active":1,"algo_desc":"RSA/SHA-256","algo_num":8,"algo_tag":"RSASHA256","bits":2048,"created":1575395316,"digests":[{"algo_desc":"SHA-1","algo_num":1,"digest":"2808a14b89118256119d93d24b9e6b673dca092b"},{"algo_desc":"SHA-256","algo_num":2,"digest":"02a57812deb952438382ed8dd20f00d4af844a55b5324d28bb"},{"algo_desc":"SHA-384","algo_num":4,"digest":"4569a6fcfe9e151ec6a163307e67eaa3a9547f16cd80751b0d46eb498bd96743bd4ff7c4f6fd5f76cc780aeb979cd08d"}],"flags":257,"key_id":1,"key_tag":40481,"key_type":"KSK","privatekey":"Private-key-format: v1.2\nAlgorithm: 8 (RSASHA256)\nModulus: syUlztxieV1aOtuYAGGA4VBxgquwqPTWQXcDVY1VRFcPgFmLMWYr6dDnN4OUhu2yIulK3KMeZmAc/DmwM+yNdCdYc9y84gw5OyONKduuPGYXfwCiJfOJ+NpGaFomK6fVFN8BMi6LUBytdA4gotPw45Uz8FIbl1KsEOnV4/ZpjiM=\nPublicExponent: AQAB\nPrivateExponent: LxIfsQ7vQPxqbPSuJ8t21b0RVkhOjtZmRaVD1wLf2KkXhZ4BmOVDvJgLaObF6/4gxFOQPBEQN84hT5TI25vYPrAwRAlP/yGmQ4Z2aPIYeEawoqqNoYEa5Xjs1X90i6/+Y8mJSZpGvr4/Y4ElothZTUw+LCYb6o9ulg53yya8KUE=\nPrime1: 4od92Rbx9fSXRIk6eSSdTYN/Do3zgDiCuxmuZaCrrEAlkiK11iz/s4aZGj9+Yk4NfusjXr3NqU1OMfBiIp67Sw==\nPrime2: ynOJdz/E4/B6iBtuz/4y0kasljMtiJnaNIxPr4LG+hByx7WWCnaPm6p8g1pz3FC/w7HAdWq9xzR1VnbRPGcZiQ==\nExponent1: KUKmkIEWZ0c6ujgIl4IsyK6X2O3QGV2xqiSeWFJwknpInZqG5lDh7jAo+NfxzDQNTz3C/oGx0RGMmZoANfAViw==\nExponent2: ZcFkmpdmstqv+7EuJUSy7pWvMV9Px5Ts4/SSKLkmoZGa314Zp/CnhapPIwZXrai4effhsCKSeImZYHgf+qgnYQ==\nCoefficient: PBQUQquZB0kG//cy8oVA6nHvKkvVJ8zV4GVlkXHTDylbjoWBTuNWwQ93t5SM7Rz3JePHImWdOVMYNIXpPlp56g==\n"}}

  - `data.domains.ds_records.nsec_details` (object)
    An object with of the domain's [Next Secure Record](https://tools.ietf.org/html/rfc4470) (NSEC) information.

Note:

If the domain uses NSEC semantics, only the nsec_version return appears in this object.
    Example: {"nsec3_hash_algo_desc":"SHA-1","nsec3_hash_algo_num":1,"nsec3_iterations":7,"nsec3_narrow":1,"nsec3_opt_out":0,"nsec3_salt":"1a2b3c4d5e6f","nsec_version":"NSEC3"}

  - `data.domains.ds_records.nsec_details.nsec3_hash_algo_desc` (string)
    description of the NSEC3 key's algorithm.
    Example: "SHA-1"

  - `data.domains.ds_records.nsec_details.nsec3_hash_algo_num` (integer)
    The DNSSEC ([Domain Name Security Extensions](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions)) Digest Algorithm Number.
    Example: 1

  - `data.domains.ds_records.nsec_details.nsec3_iterations` (integer)
    The number of times that the system rehashes the first hash operation.
    Example: 7

  - `data.domains.ds_records.nsec_details.nsec3_narrow` (integer)
    Whether NSEC3 will operate in Narrow or Inclusive mode.

Note:

For more information about these modes, read [PowerDNS's DNSSEC documentation](https://doc.powerdns.com/authoritative/dnssec/intro.html).
* 1 - Narrow mode.
* 0 - Inclusive mode.
    Enum: 0, 1

  - `data.domains.ds_records.nsec_details.nsec3_opt_out` (integer)
    Whether NSEC3 will create records for all delegations or only for secure delegations.
* 1 - Create records for all delegations.
* 0 - Create records only for secure delegations.
    Enum: 0, 1

  - `data.domains.ds_records.nsec_details.nsec3_salt` (string)
    The salt value that PowerDNS uses in the hashes.

Note:

For more information about salt values, read [RFC 5155](https://tools.ietf.org/html/rfc5155#section-3.1.5).
    Example: "1a2b3c4d5e6f"

  - `data.domains.ds_records.nsec_details.nsec_version` (string)
    Whether the domain uses NSEC or NSEC3 ([Next Secure Record version 3](https://tools.ietf.org/html/rfc5155)) DNSSEC semantics.
    Enum: "NSEC", "NSEC3"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_ds_records_for_domains"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


