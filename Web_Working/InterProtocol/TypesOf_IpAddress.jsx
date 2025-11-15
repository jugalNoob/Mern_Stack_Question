
Type	      Scope	         Assigned By	   Example	     Use Case 
Public IP	WAN (Internet)	   ISP     	   203.0.113.1	      Hosting websites,
                                                            global communication.

Private IP	LAN (Local)	  Router/Admin	   192.168.1.1	  Internal communication in
                                                           home/office networks.


Static IP	Fixed	Manually configured	  192.168.1.100	  Servers, devices needing
                                                            consistent access.

                                                        
Dynamic IP	Temporary	DHCP server     	192.168.1.50	Home networks, devices
                                                             without fixed IP needs.


                                                         

1. Public IP Address
📌 Also Known As: WAN (Wide Area Network) IP
📌 Scope: Used for communication over the internet.
📌 Assigned By: Internet Service Provider (ISP).
📌 Unique: Each public IP is unique across the internet.

🔹 Example of Public IP Address
8.8.8.8 (Google DNS Server)
185.60.218.35 (Facebook Server)
🔹 Use Cases
✅ Websites, cloud services, and online gaming servers.
✅ VPNs, remote access, and email servers.
✅ Communication between different networks worldwide.

Example: 203.0.113.1 (IPv4) or 2001:0db8:85a3::8a2e:0370:7334 (IPv6).

Use Case:

Hosting a website or server accessible over the internet.

Example: A web server with the public IP 203.0.113.1 hosting a website.



2. Private IP Address
📌 Also Known As: LAN (Local Area Network) IP
📌 Scope: Used within a private network (e.g., home, office).
📌 Assigned By: Router (via DHCP).
📌 Not Accessible on the Internet: Used for internal communication.

🔹 Reserved Private IP Ranges
Class	Private IP Range
Class A	10.0.0.0 – 10.255.255.255
Class B	172.16.0.0 – 172.31.255.255
Class C	192.168.0.0 – 192.168.255.255
🔹 Example of Private IP Address
192.168.1.1 (Default router IP)
10.0.0.2 (Assigned to a local device)
🔹 Use Cases
✅ Connecting devices within a home or office network.
✅ File sharing, printing, and media streaming.
✅ Local servers and internal business applications.

3. Static IP Address
📌 Scope: Manually assigned, does not change over time.
📌 Best For: Hosting services and remote access.
📌 More Expensive: Often costs extra from ISPs.

🔹 Example of Static IP Address
A company assigns 203.0.113.5 to its web server.
185.199.108.153 (GitHub’s static IP).
🔹 Use Cases
✅ Web Hosting: Websites need fixed IPs for domain mapping.
✅ VPN & Remote Access: Static IP ensures secure connections.
✅ Game & Voice Servers: Used for low-latency connections.
✅ IoT Devices: Security cameras and smart home hubs require a fixed address.

4. Dynamic IP Address
📌 Scope: Automatically assigned by a DHCP server.
📌 Best For: Regular internet users and businesses.
📌 Changes Over Time: IP address may change upon reconnecting.

🔹 Example of Dynamic IP Address
A home internet user gets 103.45.67.89 today and 103.45.90.12 tomorrow.
🔹 Use Cases
✅ Regular Internet Browsing: Suitable for home users.
✅ Cost-Effective: ISPs manage addresses efficiently.
✅ Security: Frequent IP changes reduce attack risks.



Key Points
Public IP: Used for global communication over the internet.

Private IP: Used for internal communication within a local network.

Static IP: Manually assigned and does not change (used for servers).

Dynamic IP: Automatically assigned and can change (used for general devices).

