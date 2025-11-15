
1:: What is MAC address?

MAC --> Media Access Control Address



full mac address  =0A:22:84:D5:65:V4

0A:22:84:                                         D5:65:V4
1::Organization Unique Identifier          1::Network interFace Controller



1::Country  --> 0A                             1::is called devic Id
2::State --> 22
3::City and manufactur -->84



What is the MAC address in a computer?
A MAC (Media Access Control) address, sometimes referred to as a hardware or
 physical address, is a unique, 12-character alphanumeric attribute that is used 
 to identify individual electronic devices on a network


Q::MAC Address Components
OUI (Organizationally Unique Identifier) - First 24 bits (3 bytes)

Example: 0A:22:84
Assigned to a manufacturer by the IEEE.
Identifies the manufacturer of the network interface.


Q::NIC Specific (Network Interface Controller) - Last 24 bits (3 bytes)
Example: D5:65:B4
Assigned by the manufacturer.
Uniquely identifies the device.


Q..Structure of a MAC Address
A MAC address is 48 bits long (6 bytes).
It is written in hexadecimal notation (0-9, A-F).
It is typically formatted as XX:XX:XX:XX:XX:XX or XX-XX-XX-XX-XX-XX.
 mac address 0A : 8bits and 1 bits 



Q :: Check MAC Address Manufacturer
Use MAC address lookup tools like:
https://macaddress.io
https://maclookup.com

MAC Address Spoofing – A Security Concern
Some hackers use MAC spoofing to bypass access restrictions. Tools like:

macchanger (Linux)
Technitium MAC Address Changer (Windows)



Q How to Check MAC Address? 

::window Command 

..getmac
 
..ipconfig /all


::Linux/macO

..ifconfig | grep ether

..ip link show



