🧠 What is DNS?

DNS stands for Domain Name System.
It is not a database of user data like MySQL or MongoDB —
but it works like a global distributed database that 
maps domain names to IP addresses.




⚙️ How DNS Works Step-by-Step

You type www.google.com in your browser.

Browser asks the Local DNS Resolver (from your ISP).

If the resolver doesn’t know, it asks:

Root DNS server (where to find .com info)

Then the TLD DNS server (.com server)

Then the Authoritative DNS server (Google’s own DNS zone)

The authoritative DNS server replies with:

www.google.com → 142.250.182.36


The resolver caches this mapping for faster access next time.








| Record Type | Purpose                       | Example                          |
| ----------- | ----------------------------- | -------------------------------- |
| **A**       | Maps domain → IPv4 address    | `google.com → 142.250.182.36`    |
| **AAAA**    | Maps domain → IPv6 address    | `google.com → 2607:f8b0::1`      |
| **CNAME**   | Alias (nickname) for a domain | `www → google.com`               |
| **MX**      | Mail server info              | `gmail.com → mail.google.com`    |
| **TXT**     | Metadata or verification data | `v=spf1 include:_spf.google.com` |


Poourlar:: --->>

