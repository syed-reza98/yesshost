# Return all SSL certificate components on vhost

This function lists the components of each SSL certificate on the server's virtual hosts.

Warning:

* On most servers, this function returns a large amount of output. We strongly
recommend that you filter and
sort the output.
* The following example uses the filter and sort options:

  https://hostname.example.com:2087/cpsess##########/json-api/fetch_vhost_ssl_components?api.version=1&api.filter.a.field=servername&api.filter.a.arg0=servername.com&api.filter.a.type=eq&api.filter.enable=1&api.sort.enable=1&api.sort.a.field=servername

Endpoint: GET /fetch_vhost_ssl_components
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.components` (array)
    An array of objects containing the certificate information.

  - `data.components.cabundle` (string,null)
    The certificate's certificate authority (CA) bundle.

  - `data.components.cabundle_id` (string,null)
    The ID of the certificate's CA bundle.

  - `data.components.certificate` (string)
    The certificate's text.
    Example: "-----BEGIN CERTIFICATE-----\nMIIDcTCCAlmgAwIBAgIFAc/XZhswDQYJKoZIhvcNAQELBQAwFTETMBEGA1UEAwwK\ncmVzZWxsLmNvbTAeFw0xOTEyMjMxNjEwMDNaFw0yMDEyMjIxNjEwMDNaMBUxEzAR\nBgNVBAMMCnJlc2VsbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQDs/rUGLbn4z7PeU7jMH1LeOYGc9omIATsxFwkRJUr7khxDZd59MYm2NzwLf1X2\n7ccYqYGbqjlwwpCWTrWvS9vAmrFqAr+5xp30w3bVhKrE9K+tYfUb4MbY0N/Cu0Hf\nOiSDbo07SAoOrGMHVVaPINNs1+eQ5sRxsJYBz//tOUYEJlrQAPttiHb3sk6J13Vv\nWArtk5+Q7L4lLKSxtPjQmwy/1hU2SRr0tmVkIaH77iOOMWvwB2pIYsRYjKujp0eE\ngo7FdhUIBCJ7+ZqabZHGGpm/UQ+jveI83qqB/xHD4ZxAX7GKUyHGzp8XyIPTFLNq\nAaGWN8Kv80+DZk2my78vFcjfAgMBAAGjgccwgcQwHQYDVR0OBBYEFHIsjBLssrvL\n+K0pebUQE3HYyIxFMAkGA1UdEwQCMAAwQQYDVR0jBDowOIAUciyMEuyyu8v4rSl5\ntRATcdjIjEWhGaQXMBUxEzARBgNVBAMMCnJlc2VsbC5jb22CBQHP12YbMB0GA1Ud\nJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjA2BgNVHREELzAtggpyZXNlbGwuY29t\ngg9tYWlsLnJlc2VsbC5jb22CDnd3dy5yZXNlbGwuY29tMA0GCSqGSIb3DQEBCwUA\nA4IBAQAP6DKtvvr5SQGqxPTaYraq3PU6AWJGSJwFEI4LiUauyNnXMrox4a5Mi3Bl\nOoxEoyW9Br9S6HQ7Ta0kLppcPl6RTuvJljady5feMiCSYaz59XYB5Bo8vTl7Qn7u\nq2UsLqo9qroCpF+qdmbsqR8kFUltjycnVZ8g21Hu2QoeyOKEbuzohy5mtffchoV8\nzsifokwid0f+Zd88oYPQNNPib2P9Ef06DUHy2hBBe0Wunh2McjYckRTdYgIPVANj\n0DhtCcD76Q1VtmjkReirj4CY63/8wcQ2wk37qtUI5x2SzMIAuv49HAwD7atwQKgZ\n03hIrdHhFSIwTJMG1nqyO+h3X5En\n-----END CERTIFICATE-----"

  - `data.components.certificate_id` (string)
    The certificate's ID.
    Example: "example_com_ecfeb_5c8df_1608653403_1de5d524f287f7ec75531239a2f4a133"

  - `data.components.key` (string)
    The certificate's private key.
    Example: "-----BEGIN RSA PRIVATE KEY-----\nMIIEpgIBAAKCAQEA7P61Bi25+M+z3lO4zB9S3jmBnPaJiAE7MRcJESVK+5IcQ2Xe\nfTGJtjc8C39V9u3HGKmBm6o5cMKQlk61r0vbwJqxagK/ucad9MN21YSqxPSvrWH1\nG+DG2NDfwrtB3zokg26NO0gKDqxjB1VWjyDTbNfnkObEcbCWAc//7TlGBCZa0AD7\nbYh297JOidd1b1gK7ZOfkOy+JSyksbT40JsMv9YVNkka9LZlZCGh++4jjjFr8Adq\nSGLEWIyro6dHhIKOxXYVCAQie/mamm2RxhqZv1EPo73iPN6qgf8Rw+GcQF+xilMh\nxs6fF8iD0xSzagGhljfCr/NPg2ZNpsu/LxXI3wIDAQABAoIBAQDEBRA5YgzWDQVa\nuKi6vJXQFIRuDURH56zLt5/aPJw+Y+VYoaNarWSYACt73wB9UsJAVcNLu4nzCBqL\nF+MScI38Sna/ljJ6OBth3WImzKpqaW/82m7fdhVCM9E/wZ6EQhT9WK0cAUPASzlF\nUYJcs+vrtNBle1m0JziLmzy1O4/70R4Iongi6pnMbsXopA9zypKvkhQoxAEtb1i7\nJOsFKh0EDuo4tJWkbLaKmoe8CKPr+I9lRonR6q5mwwealhuvtKvPdrz1ckYwizBn\nJIAkY5s7OXbrBe4qYd/FboNem7ExuTqGWiO7oYs/RpdOGWst3Dq7l1oC/ePxbHWK\njcL5DG6hAoGBAPdQOFPQfLrI/UOTNOnghJ4xdfEPpElMOEtWZY02Oz4cZremXfhi\n+ZLOuww6f/Qey9uKH34Umi9ugszTFREEyukJJQ+nG04GkC6EmDgNcwn4lCR6iOMN\nJc8fsnRO3zZmFC9deEbfKkUWWYaVzzBEzqZpS0+DFbPrqz/NoS0WeBtJAoGBAPVR\ntN9Q8LyTA+HjT0h3tAtyLsxPlI8GAb3t89YjSkVNAAMCrUjbOx9g2cLdSIRdoKhj\n6cwRFB2OATne5E1PfyWiw5LLgUf7aGqhDhe4xOHQyN3NhBs1p1W+XNuCJJnLxnpF\nd3NnF8VUkrphlftBzYGCbtFfgzq0W6GxcSiksdrnAoGBAJEAltYFgmwdlei98aNC\nwV7jDwy0qBVVvBfn4wjFiDyleFArGiOdHElILoE/92+RcuMYe9h3ieNPfx9Kj6p3\nzeSOOQ2RY7/+tyCfG4SZ1h49gdZVhdbiCY4EPqRU7ii99w3CVtfu1qDFNt5jDaR2\nY1dMmxxWdi4UekahcOO3rdoJAoGBAMrIAGf8QxLNv47QU/AGKsivWOm/+oADKhty\nf3WJ9FG2pYTXiJ/JwGRerYJ7Yf8wWaX3+QGbOHJ5uJ+6lCMnzGUy1tEX8USsF5LU\nkI6hR/WVnQRjZokLX8frtFwqhtCudeEKXQQCus5960+vbMeljBc61xmxBwvWnEvb\nHjvHb9EPAoGBAMXpIOZPONaOZFpAnxkHMMpE8BSyCCBOYi22JiECcXQusWiI8PIT\nyxRAxIGZ6PY6ks3AEQhb9/oWSd9RVuXsflx01SFkpRIbSNwVWhLqr9HvfmpsZw2S\n5TTdqv/VaEByFDKJSIKnKk4e6rxa2XF6YxUEvZ59Bw3iP2fpksBG/nTu\n-----END RSA PRIVATE KEY-----"

  - `data.components.key_id` (string)
    The ID of the certificate's key.
    Example: "ecfeb_5c8df_35927dbac0386ff253c269a9cda4c6f3"

  - `data.components.servername` (string)
    The domain or domains that the certificate covers.
    Example: "example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_vhost_ssl_components"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


