# Return Market providers' products adjusted prices

This function lists all available cPanel Market products from enabled providers,
with the prices that the adjustments database modifies.

Endpoint: GET /get_adjusted_market_providers_products
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.products` (array)
    An array of objects that contains information about the products in the cPanel Market.

  - `data.products.base_name` (string)
    The base name, if one exists.

  - `data.products.billing_type` (string)
    The billing type.
    Example: "one-time"

  - `data.products.description` (string)
    The product's description.
    Example: "Get an SSL Certificate today."

  - `data.products.display_name` (string)
    The product's display name.
    Example: "Extended Validated cPanel SSL Certificate"

  - `data.products.enabled` (integer)
    Whether the product is enabled.

* 0 - Disabled.
* 1 - Enabled.
    Enum: 0, 1

  - `data.products.icon` (string)
    The icon to display in the product list.
    Example: "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAKq2lDQ1BJQ0MgUHJvZmlsZQAASImV\nlgdQU+kWx7970xstAQEpoffeQUroofcmKiGhhBJiICDYEXEFVhQRacqCrjQFV6XIKiIWRFkUG/YF\nWRTUdbFgQ+Vd4BHee/N23rwzc3J/c+Z8/3vul++b+QNAvsfi81NgCQBSeRmCIA9nekRkFB33O8AC\nJUAC2kCFxU7nMwICfMDfxoe7AJp73jKY0/r7vv8akpy4dDYAUADCsZx0dirCp5DsZvMFGQCgkARq\nWRn8OS5HmCZABkT46BwnLHDPHMcu8O35npAgF4QnAMCTWSxBAgCk90idnslOQHTINISNeRwuD2FX\nhB3YiSwOwnkI66emps3xcYS1Y/9FJ+HfNGNFmixWgogXvmU+8K7cdH4KK/v/3I7/HakpwsV3qCJJ\nThR4BiFPGWTPGpLTvEXMi/XzX2QuZ75/nhOFnqGLzE53iVpkDsvVe5GFyaGMRWYJltZyM5ghiyxI\nCxLpx6W7BYv045g+ohlS/EQcz3VnLnJOYkj4Imdyw/wWOT052Hupx0VUFwiDRDPHC9xF35iavjQb\nm7U0Q0ZiiOfSbBGiGThxrm6iOi9U1M/PcBZp8lMCRP1xKR6ienpmsGhtBnLAFjmJ5RWwpBMg2h/A\nAMEgFEk6CAOewBSYI4lMlRG3bu5MA5c0fraAm5CYQWcgtyaOzuSxDfXppsYmFgDM3cGFv/jd9fm7\nBcnGLtWykPUrviNnkbBUi3gKwDGkJs9aqmluBkAaBUBbL1soyFyooed+MIAIxAENyCF3XA254wbI\nZJbADjgBN+AF/EEIiASrARskglQgAFlgA9gK8kEh2A32gUpQAw6BBnAMnAAd4Aw4Dy6Da+AGuAMe\nghEwDl6CKfABzEAQhIMoEBWSg5QhDUgPMoWsIQfIDfKBgqBIKAZKgHiQENoAbYMKoRKoEqqFGqFf\noNPQeagfGoLuQ6PQJPQW+gKjYDJMgxVhTdgItoYZsDccAq+CE+C1cA6cB++Cy+E6+CjcDp+Hr8F3\n4BH4JTyNAigSSgalgjJAWaNcUP6oKFQ8SoDahCpAlaHqUC2oLlQf6hZqBPUK9RmNRVPRdLQB2g7t\niQ5Fs9Fr0ZvQRehKdAO6HX0RfQs9ip5Cf8dQMAoYPYwthomJwCRgsjD5mDLMEUwb5hLmDmYc8wGL\nxcpgtbBWWE9sJDYJux5bhD2AbcX2YIewY9hpHA4nh9PD2eP8cSxcBi4fV4E7ijuHu4kbx33Ck/DK\neFO8Oz4Kz8Pn4svwTfhu/E38c/wMQYKgQbAl+BM4hGxCMeEwoYtwnTBOmCFKErWI9sQQYhJxK7Gc\n2EK8RHxEfEcikVRJNqRAEpe0hVROOk66QholfSZLkXXJLuRospC8i1xP7iHfJ7+jUCiaFCdKFCWD\nsovSSLlAeUL5JEYVMxRjinHENotVibWL3RR7LU4Q1xBniK8WzxEvEz8pfl38lQRBQlPCRYIlsUmi\nSuK0xLDEtCRV0kTSXzJVskiySbJfckIKJ6Up5SbFkcqTOiR1QWqMiqKqUV2obOo26mHqJeo4DUvT\nojFpSbRC2jHaIG1KWkraXDpMep10lfRZ6REZlIymDFMmRaZY5oTMXZkvyxSXMZbFLdu5rGXZzWUf\nZZfLOsnGyRbItsrekf0iR5dzk0uW2yPXIfdYHi2vKx8onyV/UP6S/KvltOV2y9nLC5afWP5AAVbQ\nVQhSWK9wSGFAYVpRSdFDka9YoXhB8ZWSjJKTUpJSqVK30qQyVdlBmatcqnxO+QVdms6gp9DL6Rfp\nUyoKKp4qQpValUGVGVUt1VDVXNVW1cdqRDVrtXi1UrVetSl1ZXVf9Q3qzeoPNAga1hqJGvs1+jQ+\nampphmvu0OzQnNCS1WJq5Wg1az3Spmg7aq/VrtO+rYPVsdZJ1jmgc0MX1rXQTdSt0r2uB+tZ6nH1\nDugN6WP0bfR5+nX6wwZkA4ZBpkGzwaihjKGPYa5hh+FrI3WjKKM9Rn1G340tjFOMDxs/NJEy8TLJ\nNekyeWuqa8o2rTK9bUYxczfbbNZp9sZczzzO/KD5PQuqha/FDotei2+WVpYCyxbLSSt1qxiraqth\na5p1gHWR9RUbjI2zzWabMzafbS1tM2xP2P5lZ2CXbNdkN7FCa0XcisMrxuxV7Vn2tfYjDnSHGIef\nHEYcVRxZjnWOT53UnDhOR5yeM3QYSYyjjNfOxs4C5zbnjy62LhtdelxRrh6uBa6DblJuoW6Vbk/c\nVd0T3JvdpzwsPNZ79HhiPL0993gOMxWZbGYjc8rLymuj10Vvsnewd6X3Ux9dH4FPly/s6+W71/eR\nn4Yfz6/DH/gz/ff6Pw7QClgb8GsgNjAgsCrwWZBJ0IagvmBq8JrgpuAPIc4hxSEPQ7VDhaG9YeJh\n0WGNYR/DXcNLwkcijCI2RlyLlI/kRnZG4aLCoo5ETa90W7lv5Xi0RXR+9N1VWqvWrepfLb86ZfXZ\nNeJrWGtOxmBiwmOaYr6y/Fl1rOlYZmx17BTbhb2f/ZLjxCnlTMbZx5XEPY+3jy+Jn0iwT9ibMJno\nmFiW+Irrwq3kvknyTKpJ+pjsn1yfPJsSntKaik+NST3Nk+Il8y6mKaWtSxvi6/Hz+SNrbdfuWzsl\n8BYcSYfSV6V3ZtAQszMg1BZuF45mOmRWZX7KCss6uU5yHW/dQLZu9s7s5znuOT+vR69nr+/doLJh\n64bRjYyNtZugTbGbejerbc7bPL7FY0vDVuLW5K2/5RrnluS+3xa+rStPMW9L3th2j+3N+WL5gvzh\nHXY7an5A/8D9YXCn2c6Knd8LOAVXC40Lywq/FrGLrv5o8mP5j7O74ncNFlsWH9yN3c3bfXeP456G\nEsmSnJKxvb5720vppQWl7/et2ddfZl5Ws5+4X7h/pNynvLNCvWJ3xdfKxMo7Vc5VrdUK1TurPx7g\nHLh50OlgS41iTWHNl5+4P92r9ahtr9OsKzuEPZR56NnhsMN9P1v/3HhE/kjhkW/1vPqRhqCGi41W\njY1NCk3FzXCzsHnyaPTRG8dcj3W2GLTUtsq0Fh4Hx4XHX/wS88vdE94nek9an2w5pXGquo3aVtAO\ntWe3T3Ukdox0RnYOnfY63dtl19X2q+Gv9WdUzlSdlT5b3E3szuuePZdzbrqH3/PqfML5sd41vQ8v\nRFy4fTHw4uAl70tXLrtfvtDH6Dt3xf7KmX7b/tNXra92XLO81j5gMdD2m8VvbYOWg+3Xra533rC5\n0TW0Yqj7puPN87dcb12+zbx97Y7fnaG7oXfvDUcPj9zj3Ju4n3L/zYPMBzMPtzzCPCp4LPG47InC\nk7rfdX5vHbEcOTvqOjrwNPjpwzH22Ms/0v/4Op73jPKs7Lny88YJ04kzk+6TN16sfDH+kv9y5lX+\nn5J/Vr/Wfn3qL6e/BqYipsbfCN7Mvi16J/eu/r35+97pgOknH1I/zHws+CT3qeGz9ee+L+Ffns9k\nfcV9Lf+m863ru/f3R7Ops7N8loA1bwUQZwDg+HgA3tYDQIkEgHoDAKLYgkeeD2jB188T+Dte8NHz\nYQnA4R4A5qwa0wmACoS1EKZuAWDOIiHWCDYzE+U/Iz3ezHRBiyyPWJOe2dm3swDgYgD4Njg7O1M+\nO/utDBkW8dfn/Ba8+byP4QKg/g7AOjX9jXVbwH/EPwCGGQVDbR7I2wAAAAlwSFlzAAALEwAACxMB\nAJqcGAAAAgRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRv\nYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6\ncmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAg\nPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0\ncDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6\nLy9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9u\nPjM5MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lv\nbj41MTU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x\nPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRG\nPgo8L3g6eG1wbWV0YT4KxfVkQAAACgpJREFUWAmNV1lvG9cZPTMcLsN9EUmJlCzJ+9oEaZAu6WIU\nCVD0pb+lr31x3/oL8hKgaOOiQVugRV10SZG2dlGntqPElmzZliWLEimJkkhxEfchh5ye71LMQ2Cg\nHXI4w5k793zL+c53R3McZ4T/Y+M4NUrTNHUcjYYYDm11brgMaLpLnTtwoPHzv7YJrPHliV/1oIyZ\nAA/6XTx//CmKu3nYgyH6/QEE78rrb+HC5dehiZ3jn1dN9aVrGnSZeDK5AE32ycgJeHHnJSqlAtwe\nE51mHceVffQ6NTTqFRQL27j1y/ewuvIZwTWMRuNoTeZ41VECKsHUD4q76HbbaszEmIlBo9FIGbeb\n38CtX/wUrUZFjZs5dRr+oB8ejwfBkIlIPIFgfA4f/eG3KB3uQdd15cirgCfXxpnU4Dozl7mR29zA\n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"

  - `data.products.icon_mime_type` (string)
    The icon's image format.
    Example: "image/svg+xml"

  - `data.products.license_term` (integer)
    The license term.

  - `data.products.max_users` (integer,null)
    The maximum number of users.

  - `data.products.maximum_server_price` (number,null)
    The product's maximum price.

* null - The produce does not possess a maximum price.
    Example: 888.88

  - `data.products.minimum_server_price` (number,null)
    The product's minimum price.

* null - The product does not possess a minimum price.
    Example: 3

  - `data.products.price` (number,null)
    The product's price.

* null - The product does not possess a static price.
    Example: 6

  - `data.products.price_unit` (string)
    The currency code of the product's price, in [ISO-4217 format](https://en.wikipedia.org/wiki/ISO_4217) format.
    Example: "USD"

  - `data.products.product` (string)
    The product's display name.
    Example: "cPanel EV Certificate"

  - `data.products.product_category` (string,null)
    The product's category.
    Example: "N/A"

  - `data.products.product_group` (string)
    The product's group.
    Example: "ssl_certificate"

  - `data.products.product_id` (integer)
    The product ID.
    Example: 209

  - `data.products.provider_display_name` (string)
    The cPanel Market provider's display name.
    Example: "cPanel Store"

  - `data.products.provider_name` (string)
    The cPanel Market provider's name.
    Example: "cPStore"

  - `data.products.recommended` (integer)
    Whether we recommend the product.
* 1 - We recommend the product.
* 0 - We do not recommend the product.
    Enum: 0, 1

  - `data.products.requires_ip` (integer)
    Whether the product requires an IP.
* 1 - Requires an IP address.
* 0 - Does not require an IP address.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_adjusted_market_providers_products"

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


