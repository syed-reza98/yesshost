# Return SSL certificate information

This function retrieves information about a certificate.

Endpoint: GET /fetchcrtinfo
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `id` (string, required)
    The certificate's internal system ID.
    Example: "example_com_bf638_f81af_1500191700_79e34f42c83f748bd49474ab9d66f7cd"

  - `user` (string, required)
    The cPanel account's username.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cabundle` (string)
    The certificate authority (CA) bundle certificate.
    Example: "-----BEGIN CERTIFICATE-----\nMIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/MSQwIgYDVQQK\nExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMTDkRTVCBSb290IENBIFgzMB4X\nDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0NlowSjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxl\ndCdzIEVuY3J5cHQxIzAhBgNVBAMTGkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkq\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4\nS0EFq6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8SMx+yk13\nEiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0Z8h/pZq4UmEUEz9l6YKH\ny9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWAa6xK8xuQSXgvopZPKiAlKQTGdMDQMc2P\nMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQAB\no4IBfTCCAXkwEgYDVR0TAQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEE\nczBxMDIGCCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNvbTA7\nBggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9kc3Ryb290Y2F4My5w\nN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAwVAYDVR0gBE0wSzAIBgZngQwBAgEw\nPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcCARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNy\neXB0Lm9yZzA8BgNVHR8ENTAzMDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9P\nVENBWDNDUkwuY3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF\nAAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJouM2VcGfl96S8\nTihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/wApIvJSwtmVi4MFU5aMqrSDE\n6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwuX4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPM\nTZ+sOPAveyxindmjkW8lGy+QsRlGPfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M\n+X+Q7UNKEkROb3N6KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==\n-----END CERTIFICATE-----"

  - `data.certificate` (string)
    The certificate's text.
    Example: "-----BEGIN CERTIFICATE-----\nMIIGeDCCBWCgAwIBAgISAxs2uBW3Q2TrGS/aRjTFh90EMA0GCSqGSIb3DQEBCwUAMEoxCzAJBgNV\nBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MSMwIQYDVQQDExpMZXQncyBFbmNyeXB0IEF1\ndGhvcml0eSBYMzAeFw0xNzA0MTcwNzU1MDBaFw0xNzA3MTYwNzU1MDBaMCUxIzAhBgNVBAMTGm9u\nZWFkYXl1bnRpbHRoZWRheWlkaWUuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\nv2OGaQw5oeg2hy0LqfYlBoncBPqElkTfZGqY/2WHoKr5TawPqOlsrLzx17946KGxLs0A3J1rRpi9\nOqrHdv69tj2pFRFC1USjlQmWnUi3h//aTYFNrfDmG+lNWZQ3ALCveTQXYIAvbmwLSPxh6wdtEmU0\nGjbqDNxsI8GSrZcJ543PSTXYFvp7S1yBNSn64S5QB8WeNkLGyF0G+ieXbCJo5neJrNh6+6U+x7mT\n/VBsQDOFOMIskjKo1q56+/elzgSi6lZ5w9IXuQRB3YbbWzCC/kFmzEB/NTe9R5v1AEzdcNwWXpfi\nvlrNIktLQDYIRyHqtyrXl3uR8fvmoYf0ll+BrwIDAQABo4IDezCCA3cwDgYDVR0PAQH/BAQDAgWg\nMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBQW\ns0hUTrAJo+db1I2D9K2Aa2O3STAfBgNVHSMEGDAWgBSoSmpjBH3duubRObemRWXv86jsoTBwBggr\nBgEFBQcBAQRkMGIwLwYIKwYBBQUHMAGGI2h0dHA6Ly9vY3NwLmludC14My5sZXRzZW5jcnlwdC5v\ncmcvMC8GCCsGAQUFBzAChiNodHRwOi8vY2VydC5pbnQteDMubGV0c2VuY3J5cHQub3JnLzCCAYMG\nA1UdEQSCAXowggF2giFjcGFuZWwub25lYWRheXVudGlsdGhlZGF5aWRpZS5jb22CH21haWwub25l\nYWRheXVudGlsdGhlZGF5aWRpZS5jb22CHm1wMy5vbmVhZGF5dW50aWx0aGVkYXlpZGllLmNvbYIa\nb25lYWRheXVudGlsdGhlZGF5aWRpZS5jb22CIXJhbmRvbS5vbmVhZGF5dW50aWx0aGVkYXlpZGll\nLmNvbYIid2ViZGlzay5vbmVhZGF5dW50aWx0aGVkYXlpZGllLmNvbYIid2VibWFpbC5vbmVhZGF5\ndW50aWx0aGVkYXlpZGllLmNvbYIed2htLm9uZWFkYXl1bnRpbHRoZWRheWlkaWUuY29tgiJ3d3cu\nbXAzLm9uZWFkYXl1bnRpbHRoZWRheWlkaWUuY29tgh53d3cub25lYWRheXVudGlsdGhlZGF5aWRp\nZS5jb22CJXd3dy5yYW5kb20ub25lYWRheXVudGlsdGhlZGF5aWRpZS5jb20wgf4GA1UdIASB9jCB\n8zAIBgZngQwBAgEwgeYGCysGAQQBgt8TAQEBMIHWMCYGCCsGAQUFBwIBFhpodHRwOi8vY3BzLmxl\ndHNlbmNyeXB0Lm9yZzCBqwYIKwYBBQUHAgIwgZ4MgZtUaGlzIENlcnRpZmljYXRlIG1heSBvbmx5\nIGJlIHJlbGllZCB1cG9uIGJ5IFJlbHlpbmcgUGFydGllcyBhbmQgb25seSBpbiBhY2NvcmRhbmNl\nIHdpdGggdGhlIENlcnRpZmljYXRlIFBvbGljeSBmb3VuZCBhdCBodHRwczovL2xldHNlbmNyeXB0\nLm9yZy9yZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEAbfVset/dZ+ru/K2DMa2Od4pCnRYa\nLDREL7TyAWHjHq2fHK1WbzlO9zHis+C0ezB6QBPMnrGDZns/v1njGp1gASly1pqgAsytbQdPbfHv\n/Bx1HRWywniAKSRYFxrc3k3ThrSZxDj+A9mt0znNDNUvRNuP5dGFmQzFACykgNJ58yCeUJZkD78p\n7UjpbpzxWW2m6MHlHu7dDcCwSXpCa6uE4V9TeVs3OSo42C+ZlGH2x3GeZYlOZENmG2nFw0mQFSIW\nATyQuv1Jlc7tiUGmY9o13teTN4YLColMk037Rrwb/mne3ORCPB0k7QtPtzHnCdnRio2NvwZkPXzL\nbioRoW0dQg==\n-----END CERTIFICATE-----"

  - `data.is_self_signed` (integer)
    Whether the certificate is self-signed.

* 1 — Self-signed.
* 0 — Not self-signed.
    Enum: 1, 0

  - `data.key` (string)
    The private key's text.
    Example: "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAv2OGaQw5oeg2hy0LqfYlBoncBPqElkTfZGqY/2WHoKr5TawP\nqOlsrLzx17946KGxLs0A3J1rRpi9OqrHdv69tj2pFRFC1USjlQmWnUi3h//aTYFN\nrfDmG+lNWZQ3ALCveTQXYIAvbmwLSPxh6wdtEmU0GjbqDNxsI8GSrZcJ543PSTXY\nFvp7S1yBNSn64S5QB8WeNkLGyF0G+ieXbCJo5neJrNh6+6U+x7mT/VBsQDOFOMIs\nkjKo1q56+/elzgSi6lZ5w9IXuQRB3YbbWzCC/kFmzEB/NTe9R5v1AEzdcNwWXpfi\nvlrNIktLQDYIRyHqtyrXl3uR8fvmoYf0ll+BrwIDAQABAoIBAG6cIm5LtnMwNXNi\nQT91Fmj0+8eU0VPXchQi11GjaAMfTP3q1xIT9c7PVCYQbtxjtncJ29mk0P73/0UM\ntkK7bwEIGdQnKa0AAlp8NCOqhwd+grgQZsiEVTkEWMPQuQkZFBDEXk5TRxZWMx93\nXU/r9smO29HasuHD8mun0BGrHPpJJm6JE8iMT9wIrr4pYb5TLtXtO/yQ5rxsT5uB\nbmuXAHZ51brj+aIdjrYNAVYHPvVDAjs7aHgKjbLvJ7DJPJKSbkbAEYKqT7lyQO5x\nGtLk1K5qKNHc1sFyybBF/LO1Tn7xTMbSuKce/AUvgE76RZ0nkvCD/kY1l3WBH2ns\nYFsojsECgYEA7UgMJgoKnerhmG/mnZqPUXb78PVgZmt0zmlAYRAcLc8K19xPKVOK\nz4HcDmfkPdkpsdp1YXJ6K/ueJOXq0aCFh2E+uYyqvsMQDFp72poxUPPlJ5zoj3jG\n6N9owoV2CuWX0QbhsE4/Hu5sVjBdE8WuqBBUqKp6602YV8YrA018bSkCgYEAznyq\nLhQujrpeqlN/HRhpNne5r5D8F4wQSZmFP9eRP1pnO2TQqY/wXJgOMKT20CcqwiiY\noVuOmQs1W3dz/MlWHanRKL5cIcF26Pgsp1jimD13JwPU/7nH4+CzJmkXGSHbNmQf\n2wvjv+jni2PbTZ5sotESziaJAdbcRAdg39KnexcCgYEAj086dycNbn9ULZs4L+wP\nr2YrmEa7KGCyNZCAH595RXmM1P7smMsqRVXrMJAy29/zPMXyqx5XB4V66FIs1tsa\nir+DANIitgBeCvgDYe5K5tfHiXtNQonxqOh1/zZYKxCr9sUvPiqkGOxrZkrjjHOS\nn1Ltrsj4YHGHF0xK4j3EbrECgYB403ANqJeZwyqTxmoST295hNNuDYvGB5qcRq43\nLl/6z16q3ZJQNj7zH7Ll+hHGubSGipTNjrLBkVJ2pE6FtBalIvKWQdXNltSK/HW8\nswFdDlKDzPU9cquqB5ktN79hYHNSv4H4fluVt6aN5S+1mqd9GpRDdz8iiWS4lgy0\nzCJenwKBgQC61u/GsjGx4yv0c3KJHgrpIroo3HYsamAdjJBfgBGKxrxVO5J7dbvd\n84UYzp+a0XNjazMxx5rEbU3HjKV5nsHjU+Eoqpz/vwfRqbC7mqINrRQoBKtEhuOY\n+xd6W+i58dOPv7PmgxPegmZ4Fo+jHx+mNLv9L+27JPMBRwRWUxH5TQ==\n-----END RSA PRIVATE KEY-----"

  - `data.subject.commonName_ip` (string)
    The certificate's IP address.
    Example: "192.0.2.0"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetchcrtinfo"

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


