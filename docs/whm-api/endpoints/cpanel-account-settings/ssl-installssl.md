# Install SSL certificate

This function installs an SSL certificate.

Endpoint: GET /installssl
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `crt` (string, required)
    The certificate's text.

Note:

You must URI-encode this value.
    Example: "-----BEGIN%20CERTIFICATE-----%0AMIIDNTCCAh2gAwIBAgIFAY0o0kwwDQYJKoZIhvcNAQELBQAwFjEUMBIGA1UEAwwL%0AZG9tYWluLnRlc3QwHhcNMTcxMDMxMTUyMjU1WhcNMTgxMDMxMTUyMjU1WjAWMRQw%0AEgYDVQQDDAtkb21haW4udGVzdDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC%0AggEBALer6vzwFt%2BO6ooHcXpq%2Bi%2FOVVQEY3oWxrqH6mB%2FPssVSxwcf6bLjoO4so%2Fn%0Adrymhb9mqfkOqYVHwnQ%2Fh2uM%2BIw1NKKDfwOljWcgCS24NykbfQUlW%2FSNDTovdDGl%0AT1Aner090Qse%2B19ta8KS%2F3Akz37bkgqMkPO%2FiEOHlF%2FLbLvjfighkoGco51wc6d7%0AHCQwPWR%2BUenbQWzUwR4%2F4Pqw%2FYrxDAv8O%2FEnNfOGwnCnlnFq4a390VGriqMAngzI%0AlRMVDu4qJGW3dFNStVUm71%2B16ba%2FeIVBQGN2rbgie6Rb6VuHdsqSreea0tSLRxdd%0AFd7A0QMQRvtnqoUv6RZBhefr2t0CAwEAAaOBiTCBhjAdBgNVHQ4EFgQUeitnD4U4%0AMXtmLX53dTAZPENjovwwHwYDVR0jBBgwFoAUeitnD4U4MXtmLX53dTAZPENjovww%0ACQYDVR0TBAIwADA5BgNVHREEMjAwggtkb21haW4udGVzdIIQbWFpbC5kb21haW4u%0AdGVzdIIPd3d3LmRvbWFpbi50ZXN0MA0GCSqGSIb3DQEBCwUAA4IBAQAeD4Fc%2FBwM%0AfJEvlPO30%2FOp2JJxG92tbgsoY9CKTYoZy0IMHhwOrt%2FB36joYDrOhtiO6XsRw4Zm%0AAPT8ey9p61kUc6XWs5oU9aifKeAKzWCZV9wQphbY%2F0rQp1YPsVN9tBgiag754HPo%0AbNDhWOZSZDKnh82DikTD6iciTxeblrvcbFC4Z76JH31dvqmNMEAgZvPCpq86Ued5%0A52gKM0u2%2BrK%2FzIYjh%2FhooqN%2BTY%2BJQ667JzLzPNenzAYFsoIQgVj6%2FZoFqJA4nbxC%0Azv%2Fspqc0OQ2W9m5egRPDhngKt%2Bi9804N7FeilBL%2FcpEgUHhgzMBi1T9n%2BYBrc6bO%0AjNjvnEQRbqZY%0A-----END%20CERTIFICATE-----"

  - `domain` (string, required)
    The domain's name.
    Example: "example.com"

  - `key` (string, required)
    The certificate's key.

Note:

You must URI-encode this value.
    Example: "-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpAIBAAKCAQEA4AVM6J4Qg3DIFWr/eJ5GRmIATYsJIepKbrDy70sq+udcO8R8xxak0oMZ/9mUdpjSNK/fLVTuCO0kxTfQ9VUWJllX7ThD6Zh9ZvlC/nf/OEZLm3ZbnBgu8rbC8E9wuDOkKbJLnINgdhtowIydLK2MJ++q62bFV89jkHWTMcKyyqHENo3hc+lkpd9vnp8rZTinaVb7nX26uQqAFZYRo+WU0G/NPsq40QVSMoqPxyEz4qXo0hvuIlCXmzFZq/6fCVPEKPLhQgMmpdBkMz4dVOazREfqXdjMD2+QXSNiA1AwWr8l0r4rtzlxEYDJIR41yXp0xMl3KoolxMyvLBqZy32niQIDAQABAoIBAQCmbGmhWmPsMeoCt1WJFxQgD4goE0U6k+Kt7vjbOt14Pk6v/B2yjaju1wSGpO59WLS4/XrwI2se6IXrmba7u3VUEgWXLriNHoLy7/SMNTs+ZEKhAMG36eNe3tVdT7busTag31r6sEMGGwCsIwpU+azosk0oylWLEX/m/uHWEs1eaIEWWWtgHB+KZrrP7Rr9RYfVQ144DxmOxS3Ca9+mST62WqAVPR6POWGEfZqnZl/ePWZPcQYbFrhwnnefNoYBl/bnLZBo8rbNWxAqOEOuKfkrBzglKG/39WKPw8rj4JIVzY0yOuFCW6xCDWRkOrhU8Ol/3FvwDa3uJpkpmgPr4TgxAoGBAPGPLmxSuOYR97mDAXxrs037F2GCbqWvI6m7/ezWe9yn+bMpjSIWfsgtq4FsyqzPueEkDdQWi3xh6nu2WI/1Tl875opGAqEIJMqss/u11tnva5wzu1cCL6H85A5+HMOBvP3sm6CObKcVw92h7kxynVIUJJWhjfeZMN8gBFFpKIVFAoGBAO1ptXBmXLC/YKKvtHI3M16/ZopvM8ZqU2HcAHaw214Refw9JJ/e3/xTNfSerVTyCAQO1AdWTzJKBN8jmSYv1Mk1D3RpQPNR7wVzi46KR081AU41uMpqIGVOwHtyVnW/ZfLrc1DLIK8Cx8aHfoxffwzoMO5SEQSooeZfOLhsfDN1AoGBAKQTUEINsj+75psgbAr6ELGgItJ9yPBLVRr+cUzEpx9LDWVvjMihpP4NX1gq8EOPWT+ewLHVmmsjCyV6xw8JXXF8e2xif3in0m3D/wCzE7u2T06rKM3B017hKnrZmGoHnrqPU2osM4sOUpshWX6dv1Q4EF1+fbK3YCW+VpCBsB9NAoGAQo+uhNLODee56iKkzpjXWCsFTq6ar3hD5F3P63buKdNwhd2GlSPhXFbf+7M5GWW6BZk6rMvv7EOAVice2uvyFm8/4/1WbmF8R+T7LX1rPLO5p/m701QpvP11TabiwqRkqtSEQhSRF0AKTojSW/yyHCZFAawUhV/Z9EKiHmKb97kCgYAyzmFc2it0HqnsOnRybop603nqMtWGTQO4cxa93HUDpYajuK2K3DfrxUj6lG3z/oKJGGE2JqgZ6LBAhNJtJWJu2ox3pKGE63QjLJnVwb8y1NFYpe/crbLePuBwIR0L7drXxfv7O5btY7h6QI2d1/UIAQPAWbxLoTM+ndQ/uPEdfA%3D%3D-----END%20RSA%20PRIVATE%20KEY-----"

  - `cab` (string)
    The certificate's certificate authority (CA) bundle.

If you do not use this parameter, the system automatically determines the
appropriate CA bundle file to use.

Note:

You must URI-encode this value.
    Example: "-----BEGIN%20CERTIFICATE-----%0AMIIDNTCCAh2gAwIBAgIFAY0o0kwwDQYJKoZIhvcNAQELBQAwFjEUMBIGA1UEAwwL%0AZG9tYWluLnRlc3QwHhcNMTcxMDMxMTUyMjU1WhcNMTgxMDMxMTUyMjU1WjAWMRQw%0AEgYDVQQDDAtkb21haW4udGVzdDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC%0AggEBALer6vzwFt%2BO6ooHcXpq%2Bi%2FOVVQEY3oWxrqH6mB%2FPssVSxwcf6bLjoO4so%2Fn%0Adrymhb9mqfkOqYVHwnQ%2Fh2uM%2BIw1NKKDfwOljWcgCS24NykbfQUlW%2FSNDTovdDGl%0AT1Aner090Qse%2B19ta8KS%2F3Akz37bkgqMkPO%2FiEOHlF%2FLbLvjfighkoGco51wc6d7%0AHCQwPWR%2BUenbQWzUwR4%2F4Pqw%2FYrxDAv8O%2FEnNfOGwnCnlnFq4a390VGriqMAngzI%0AlRMVDu4qJGW3dFNStVUm71%2B16ba%2FeIVBQGN2rbgie6Rb6VuHdsqSreea0tSLRxdd%0AFd7A0QMQRvtnqoUv6RZBhefr2t0CAwEAAaOBiTCBhjAdBgNVHQ4EFgQUeitnD4U4%0AMXtmLX53dTAZPENjovwwHwYDVR0jBBgwFoAUeitnD4U4MXtmLX53dTAZPENjovww%0ACQYDVR0TBAIwADA5BgNVHREEMjAwggtkb21haW4udGVzdIIQbWFpbC5kb21haW4u%0AdGVzdIIPd3d3LmRvbWFpbi50ZXN0MA0GCSqGSIb3DQEBCwUAA4IBAQAeD4Fc%2FBwM%0AfJEvlPO30%2FOp2JJxG92tbgsoY9CKTYoZy0IMHhwOrt%2FB36joYDrOhtiO6XsRw4Zm%0AAPT8ey9p61kUc6XWs5oU9aifKeAKzWCZV9wQphbY%2F0rQp1YPsVN9tBgiag754HPo%0AbNDhWOZSZDKnh82DikTD6iciTxeblrvcbFC4Z76JH31dvqmNMEAgZvPCpq86Ued5%0A52gKM0u2%2BrK%2FzIYjh%2FhooqN%2BTY%2BJQ667JzLzPNenzAYFsoIQgVj6%2FZoFqJA4nbxC%0Azv%2Fspqc0OQ2W9m5egRPDhngKt%2Bi9804N7FeilBL%2FcpEgUHhgzMBi1T9n%2BYBrc6bO%0AjNjvnEQRbqZY%0A-----END%20CERTIFICATE-----"

  - `ip` (string)
    The IP address of the certificate's domain.

This parameter defaults to the domain's local IP address.
    Example: "192.168.0.20"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.action` (string)
    The action for the function to execute.
    Enum: "install"

  - `data.aliases` (array)
    A list of domain aliases on the account.
    Example: ["mail.example.com","subdomain.example.com"]

  - `data.domain` (string)
    The domain on which the function installed the SSL certificate.
    Example: "example.com"

  - `data.extra_certificate_domains` (array)
    A list of domains that possess additional SSL certificates.
    Example: ["mail.example.com","subdomain.example.com"]

  - `data.html` (string)
    The function's raw HTML output.
    Example: "Certificate verification passed<br/> <br /> The Certificate for the domain example.com was installed on the IP 192.168.0.20. </html><br><b>Finished SSL Install Process for example.com (www.example.com).</b>"

  - `data.ip` (string)
    The domain's IP address.
    Example: "192.168.0.20"

  - `data.message` (string)
    A message of success or a reason for failure.
    Example: "The SSL certificate is now installed onto the domain \"example.com\" using the IP address \"192.168.0.20\". Apache is restarting in the background."

  - `data.servername` (string)
    The server's hostname.
    Example: "example.com"

  - `data.status` (integer)
    Whether the function was successful.

* 1 — Success.
* 0 — Failure.
    Enum: 1, 0

  - `data.statusmsg` (string)
    A message of success or a reason for failure.
    Example: "The SSL certificate is now installed onto the domain \"example.com\" using the IP address \"192.168.0.20\". Apache is restarting in the background."

  - `data.user` (string)
    The username for the account on which the function installed the SSL certificate.
    Example: "username"

  - `data.warning_domains` (array)
    A list of domains associated with the main domain on which the function did not install the SSL certificate.
    Example: ["subdomain.example.com"]

  - `data.working_domains` (array)
    An list of domains on which the function installed the SSL certificates.
    Example: ["example.com","mail.example.com"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "installssl"

  - `metadata.output` (string)
    The function's raw HTML output.
    Example: "<br>The SSL certificate is now installed onto the domain “example.com“ using the IP address“192.168 .0 .20“. < br / > Apache is restarting in the background."

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "The SSL certificate is now installed onto the domain “example.com“ using the IP address “192.168.0.20“.Apache is restarting in the background."

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


