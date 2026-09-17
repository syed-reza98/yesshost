# Migrate OpenSSH key to PuTTY format

This function converts an OpenSSH private key to a PuTTY key.

Warning:

Do not transfer private keys over insecure ports.

Endpoint: GET /convertopensshtoputty
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `file` (string, required)
    The private key file's name.
    Example: "KeyFile"

  - `keep_file` (integer)
    Whether to keep the OpenSSH file on the server after conversion.
* 1 — Keep the file.
* 0 — Delete the file.
    Enum: 0, 1

  - `passphrase` (string)
    The private key file's passphrase.
    Example: "12345luggage"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.key` (string)
    The converted key file's text.
    Example: "PuTTY-User-Key-File-2: ssh-rsa Encryption: aes256-cbc Comment: imported-openssh-key Public-Lines: 12 AAAAB3NzaC1yc2EAAAABIwAAAgEAuuth41YYyWABsRKexJXgSMD8FvIBFCptUfZP 4U/6R41FvL/RS+99kq1WL/KASsKRoEA5uc0axM+iNgZtKuemQYGUZNvN+8X8sC/l E6GF7X3Pvj2Ml4AlD7TQv0WQZUp9xn+SlOti+3pYh+S56vzNjvdifO7U5mPGW/81 9N4vGhG3ThaAgETwkL33CM2LeNRuvoWpeQcuzEVX2aOvHQZqOvV15fTjZ64ZGL3i UDtKmeaHs4tMqgNIUXgn1P1V4TgPvTIfopH8FBX3g1pD15XD3vn+XHLwia0505c5 +QM+jElS3HHb0vrrDo3S+8koXLWp07wu/GYrvBd5+MlsSV7bpr7lmWj8uMQjc0ap eZe+eb/MteadWnqIPeOVuracssCvDLqXEPK2KjhFMPqBTepNhZaJHRfvkodPm43C 50nhqzrNoxFvXb1rfCjPPqGfhuSZhlCmo2FDiZPKdl0X7bhzDIvMVikyqJP06bqK y9iclyQv0VPfyCIx/VDcVclIoUa8A49nAinXHKeUx9QUNBHv8wXdyz7W41jQa+++ Ih3Yc4o9rpV95DDmKp7iF6kFk4aVjIWDgEsPTaL28wlvUyazoW5TAGPHDrRJoedU ag8KDRNPrGbKYu3CvoINiz0sshyCvr1gjKNG75Cwe+L4hXIkaw8wlCpwFq8VSX70 RS9Pei8= Private-Lines: 28 bb31s+xsiAv1+pclnmvreEYdxvuVmbeWMjUWJd4Y4TKIAyLEItsXNs078qn1QAZ+ Wj6t+0HcnhuUVICHyCyJrp++1g4OtzTAHRczaD5ybhb9ktSe1qlnszKD1Rg5/o+B 61h6kvMcZyuNSjtPkmqQ3XIh8OFYybB2oJXY7gJQzfRuRwk8dx9YWtIR4438Nbv5 ecTzGUDWvx+AfYzC4X/UIGiRy8AftfiBQyA+c1OFyg37qM1SLYnZYmIpSf5GsQ3A MaEGlB9P9hE2uoqZ4yT/A0aHj7w8DGEzYZqxNbMlCIJhLEO3vKZvMvaq7Q8ramG6 BzYwUz+8NPgCBUp1qyIcN2vvEHEq57pMMHYNfJMVfG9o0ijo+xxGCPV3MosmmvRI 1nxH0nrgdA2o6SJp/dJrKm3Hicbbxak/Kz4m8BROcnlCgptdjHp9V/cBnFq/UUHv or32gShGWmnG6+XyQs4LxpbLC4koz8EjPwg3/3W2Qn6Drn3i98omvZpmnX466i7e GUiHaiKTpBkqZkHmHFxNBAbbs85yngeo8o3RGUsmN69RupTqSkkLDuDFOMwgfsZG TWexWg/qBe+8Xrbshd9HphxvWv+Q3YcSeg+mm8Bc50Q5saLKYdQQsbfV5wtIpvLj 0eyjoTSh+FkPGBw/iB1MDzYV5OoIIgiDBndP2bOK2zFsLElSbbv/r3i//wL98316DgJWmJiQDqKxly4MEij8TfIVDAsdeyJJKvg6iGahonHbEBkZ9g9wcCpxlg8iMtTf /7eb8SmcPwe1NGdgB7PR1dU/RQ/kBbLaaBfo/1jQEnCC8VmksVu7B9ULImfLEOEm +A4J4NpKKlQocgCvJAtMogL+uRS5GpojJIElVqP12jnb7Ij3AYY3Zb4qotlprLeK 7dJslpNnrD/MSvbJZ/ZoAX+xyDxUMeq/83Xv30i5/wh00QBY4Cv5NTDU4rPoVmQm EWGW5aQx34in4JHY5bK3F4BvVYm7MscKLHoU8/OeKVAgzNcatUgPlN43FG9SX0AE pP3EYlVADSfULdbfBn9dZDidAiDMXnCv9259J65zA64tuT9XluinHXVs5PA/f5vm rZPQhAzGThw7h9L6rGYGfSKd9KYoTwf8kSOA6WU7OEyhfTvCdaW76vPi4CRW2M/Y RHX0IUdv3VxfKb4WnXFeQl6LshmGB1T2mbMyfThlqUCGAvPJyWDtZ6OpOUl3CK87 3jhFzO7t5wruhuWZ3RcISVsrdqcjgCrKy6Q9y+HbLJoNY40BkJm7f6WeV+hHn7o1 od7JiqDGq3Qk+ECEdexvqdRQS7BWgO7xudGFk+WFY02zoGvq5DMviNfsxqhM06P+ JgEinB8xPPCOPzi6q8T1y1Pz44gmluM15/QRX4z0Mwz6UQasVC/NsZxdfoNGtCy0 c2DAscy4zsiKhZMlLr0loPYycO2bOit6E5eYkrACJR2115/ZgVwzvzdmc/INJCxG3TvKYbeuv/tkolt56uJWGfMF2ZrfLJaaQ0iAiUyMep/keLP2bJ4Y97o+03BtQszZ zixXvzeQAX97WdBaUJU0C3mCKDOtkv4RWZ8hXV5v0m2tm7xbXVBzF22Pej2iHDKx GQkciskBRwQM4bDZorkcO+WnGn6uPbtw5v/AuIUqB1UNAcehWN6UTiFNveP4hLYu iRGWnZZ+uTbip91PNXSxXzb9yMWV2qSVIsZvud8kpR8ttL26Z4ySUKkFuPrgUeTeELnOF3GP6Ixk+IkwxU575w== Private-MAC: 1dfa6a4c8297d31e4cfadbf61aac8b4c5ca75584"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "convertopensshtoputty"

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


