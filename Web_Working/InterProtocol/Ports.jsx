1️⃣ Well-Known Ports (0–1023)
Notable well-known port numbers



Reserved for system processes and widely-used services.


Exploitation Risks -->Check With exploit


Examples:
Port 80 – HTTP
Port 443 – HTTPS
Port 22 – SSH
Port 53 – DNS
Port 25 – SMTP (Email)
21	FTP	File Transfer Protocol
23	Telnet53	DNS	Domain Name System	Remote access
67/68	DHCP	Dynamic Host Configuration Protocol
445	SMB	Windows file sharing
3389	RDP	Remote Desktop Protocol
110 Post Office Protocol (POP3) used by e-mail clients to retrieve e-mail from a server
119 Network News Transfer Protocol (NNTP)
123 Network Time Protocol (NTP)
194	Internet Relay Chat (IRC)
546, 547	DHCPv6 IPv6 version of DHCP



2️⃣ Registered Ports (1024–49151)  2. Web Exploitation Ports
Used by software vendors for specific applications.

Exploitation Risks check --

Examples:
Port 3306 – MySQL
Port 5432 – PostgreSQL
Port 27017 – MongoDB
Port 8080 – Alternative HTTP
8443	HTTPS Alternative


Dynamic / Private Ports (49152–65535)
Used for temporary communication (ephemeral ports).



2. Types of Ports Based on Function

📌 1. System Ports
Used by operating systems for essential services.
Examples:
Port 137-139 (NetBIOS) – Windows file sharing
Port 445 (SMB) – Microsoft file sharing
Port 3389 (RDP) – Remote Desktop Protocol


📌 2. Application-Specific Ports
Used by applications for communication.
Examples:
Port 25565 – Minecraft Server
Port 5222 – XMPP (Chat Protocol)
Port 8000–9000 – Web Apps & Streaming



3. Open vs. Closed vs. Filtered Ports
Open Ports – Actively listening for connections (e.g., a running web server).
Closed Ports – Not in use, but can be opened when needed.
Filtered Ports – Blocked by firewalls or security rules.

📌 3. Network Scanning & Exploitation
111	RPC	Remote procedure call
135	MSRPC	Windows RPC
137-139	NetBIOS	Windows file sharing
161/162	SNMP	Network monitoring
389	LDAP	Active Directory
636	LDAPS	Secure Directory Service
1900	SSDP	UPnP discover
2049	NFS	Network file system




📌 4. Logical vs. Physical Ports
Logical Ports – Software-based, used for communication (e.g., TCP/UDP ports).
Physical Ports – Hardware interfaces (e.g., USB, HDMI, Ethernet).



000. IoT & Industrial Systems

1883	MQTT	IoT Messaging

47808	BACnet	Building automation

502	Modbus	Industrial control



3. TCP vs. UDP Ports
Feature	TCP (Transmission Control Protocol)	UDP (User Datagram Protocol)
Connection Type	Connection-oriented	Connectionless
Reliability	Reliable (acknowledges receipt)	Unreliable (no acknowledgments)
Speed	Slower due to error checking	Faster, low latency
Use Cases	Web (HTTP/HTTPS), SSH, FTP	VoIP, DNS, Video Streaming
Examples	Port 80 (HTTP), Port 443 (HTTPS)	Port 53 (DNS), Port 161 (SNMP)


🔹 4. Commonly Scanned Ports in Hacking
🛑 High-Risk Ports for Attacks
Port 21 (FTP) – Brute-force attacks, anonymous login abuse
Port 22 (SSH) – Dictionary attacks, unauthorized access
Port 23 (Telnet) – Unencrypted access, MITM attacks
Port 53 (DNS) – DNS poisoning, tunneling
Port 445 (SMB) – EternalBlue exploit (WannaCry ransomware)
🛠️ Useful Tools for Port Scanning
Nmap – nmap -p 1-65535 <target> (Full port scan)
Netcat – nc -zv <IP> <port> (Check open ports)
Wireshark – Analyze network traffic on ports








Common Well-Known Ports
Port 20: FTP (File Transfer Protocol) Data Transfer
Port 21: FTP (File Transfer Protocol) Command Control
Port 22: SSH (Secure Shell)
Port 23: Telnet - Unencrypted text communications
Port 25: SMTP (Simple Mail Transfer Protocol) - Email routing
Port 53: DNS (Domain Name System) - Domain name resolution
Port 67: DHCP (Dynamic Host Configuration Protocol) - Server
Port 68: DHCP (Dynamic Host Configuration Protocol) - Client
Port 69: TFTP (Trivial File Transfer Protocol)
Port 80: HTTP (Hypertext Transfer Protocol) - Web traffic
Port 110: POP3 (Post Office Protocol 3) - Email retrieval
Port 119: NNTP (Network News Transfer Protocol) - Usenet
Port 123: NTP (Network Time Protocol)
Port 143: IMAP (Internet Message Access Protocol) - Email retrieval
Port 161: SNMP (Simple Network Management Protocol)
Port 194: IRC (Internet Relay Chat)
Port 220: IMAP3 (Internet Message Access Protocol 3)
Port 389: LDAP (Lightweight Directory Access Protocol)
Port 443: HTTPS (HTTP Secure) - Secure web traffic
Port 445: SMB (Server Message Block) over IP - File sharing
Port 465: SMTPS (Simple Mail Transfer Protocol Secure) - Email routing with SSL/TLS
Port 514: Syslog - System logging
Port 636: LDAPS (Lightweight Directory Access Protocol over SSL)
Port 873: Rsync - File synchronization and transfer
Port 990: FTPS (File Transfer Protocol Secure) - Data transfer over SSL/TLS
Port 993: IMAPS (Internet Message Access Protocol Secure) - Email retrieval over SSL/TLS
Port 995: POP3S (Post Office Protocol 3 Secure) - Email retrieval over SSL/TLS

Less Common Well-Known Ports    -----------------------------<><><><><><><>

Port 17: QOTD (Quote of the Day)
Port 37: Time Protocol
Port 49: TACACS (Terminal Access Controller Access-Control System)
Port 70: Gopher
Port 79: Finger
Port 109: POP2 (Post Office Protocol 2)
Port 113: Ident (Authentication Service)
Port 177: XDMCP (X Display Manager Control Protocol)
Port 201: AppleTalk Routing Maintenance
Port 264: BGMP (Border Gateway Multicast Protocol)
Port 318: TSP (Time Stamp Protocol)
Port 381: HP OpenView Network Node Manager (NNM) (Trap Daemon)
Port 383: HP OpenView Network Node Manager (NNM) (Data Pipe)
Port 407: Timbuktu
Port 512: rexec (Remote Process Execution)
Port 513: rlogin (Remote Login)
Port 514: rsh (Remote Shell)
Port 515: LPD (Line Printer Daemon)
Port 526: tempo (new date)
Port 530: Courier Remote Procedure Call
Port 531: Conference (chat)
Port 532: netnews
Port 540: UUCP (Unix-to-Unix Copy Protocol)
Port 548: AFP (Apple Filing Protocol)
Port 554: RTSP (Real Time Streaming Protocol)
Port 556: Remotefs
Port 563: NNTPS (Network News Transfer Protocol Secure)
Port 587: SMTP (Submission)
Port 591: FileMaker 6.0 Web Publishing
Port 631: IPP (Internet Printing Protocol)
Port 636: LDAPS (Lightweight Directory Access Protocol over TLS/SSL)
Port 646: LDP (Label Distribution Protocol)
Port 873: rsync
Port 953: BIND (Domain Name System Control)
Port 981: SofaWare Management Console
Port 987: Microsoft SharePoint
Port 992: Telnet (over TLS/SSL)
Port 993: IMAP (over TLS/SSL)
Port 994: IRC (over TLS/SSL)
Port 995: POP3 (over TLS/SSL)
