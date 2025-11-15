         ┌────────────────────────────┐
         │        TCP Chat App        │
         └────────────────────────────┘
                    ▲        ▲
                    │        │
                    │        │
             ┌──────┴────────┴──────┐
             │   Node.js net.Server  │
             │  (Plain TCP Sockets)  │
             └───────────────────────┘
                    ▲
        ┌───────────┼───────────┐
        │                       │
┌─────────────┐         ┌─────────────┐
│  Client A   │         │  Client B   │
│(telnet/net) │         │(telnet/net) │
└─────────────┘         └─────────────┘
       Sends plain text → Unencrypted ↔️ Data exchange


───────────────────────────────────────────────────────────────


         ┌────────────────────────────┐
         │       TLS Chat App         │
         └────────────────────────────┘
                    ▲        ▲
                    │        │
                    │        │
             ┌──────┴────────┴──────┐
             │  Node.js tls.Server   │
             │ (Encrypted TCP Layer) │
             └───────────────────────┘
                    ▲
        ┌───────────┼───────────┐
        │                       │
┌─────────────┐         ┌─────────────┐
│  Client A   │         │  Client B   │
│ (tls.connect)│         │ (tls.connect)│
└─────────────┘         └─────────────┘
       Encrypted messages ↔️ Secure TLS channel


       | Feature            | `net` (TCP)            | `tls` (Secure TCP)   |
| ------------------ | ---------------------- | -------------------- |
| Encryption         | ❌ No                   | ✅ Yes                |
| Certificate Needed | ❌ No                   | ✅ Yes                |
| Module             | `net`                  | `tls`                |
| Port Example       | 4000                   | 4443                 |
| Used For           | Internal communication | Secure communication |
| Real World Example | Chat, games            | Banking, HTTPS, APIs |
