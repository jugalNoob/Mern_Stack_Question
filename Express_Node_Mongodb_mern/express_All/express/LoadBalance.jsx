1. Round Robin Load Balancing
How it works: In this strategy, requests are distributed sequentially across a pool of servers in a cyclic manner. Each request is sent to the next server in the list.
Example:
If you have 3 servers (S1, S2, S3), the first request goes to S1, the second to S2, the third to S3, and then back to S1 for the fourth request.
Advantages: Easy to implement and good for evenly distributing traffic.
Drawbacks: Does not consider server load or response time.
2. Least Connections Load Balancing
How it works: Requests are directed to the server that has the fewest active connections at the time.
Advantages: Helps in distributing traffic more dynamically based on server load.
Drawbacks: Slightly more complex to implement as it requires monitoring the number of active connections to each server.
3. IP Hash Load Balancing
How it works: This technique uses the client's IP address to determine which server should handle the request. The IP address is hashed and then modded by the number of available servers to select the target server.
Advantages: Ensures that a client is consistently routed to the same server (sticky sessions).
Drawbacks: If a server goes down, the client may be routed to a different server, potentially losing session data.
4. Weighted Round Robin
How it works: Similar to round robin, but servers are assigned weights based on their capacity or performance. Servers with higher weights receive more requests.
Advantages: Useful when some servers are more powerful than others.
Drawbacks: Weight adjustment needs to be carefully calculated.
5. Sticky Session Load Balancing
How it works: Also known as session persistence, this strategy ensures that all requests from a particular client are directed to the same server throughout their session. This can be done using cookies or session IDs.
Advantages: Maintains session state across multiple requests.
Drawbacks: Can lead to uneven load distribution if one server gets too many sticky sessions.
6. Layer 4 (Transport Layer) Load Balancing
How it works: This type of load balancing occurs at the transport layer (TCP/UDP) and involves forwarding traffic based on IP address and TCP port without inspecting application-layer data (e.g., HTTP).
Advantages: Fast and efficient since it operates at a lower level in the OSI model.
Drawbacks: Cannot make decisions based on application-layer data like HTTP headers.
7. Layer 7 (Application Layer) Load Balancing
How it works: Layer 7 load balancing operates at the application layer (HTTP/HTTPS) and allows for intelligent routing based on application-specific data such as URLs, headers, and cookies.
Advantages: More control over request routing and can handle content-based routing.
Drawbacks: More complex and slower than Layer 4 load balancing due to inspection of application-layer data.
Load Balancing Tools for Node.js/Express.js:
Nginx:

Nginx is a popular reverse proxy and load balancer that can be configured to balance traffic across multiple Node.js instances.
It supports round robin, least connections, IP hash, and weighted load balancing.
HAProxy:

HAProxy is a high-performance TCP/HTTP load balancer. It supports Layer 4 and Layer 7 load balancing and is commonly used for load balancing Node.js apps.
PM2 Cluster Mode:

PM2 is a process manager for Node.js that also provides built-in load balancing by clustering multiple Node.js instances.
It uses round-robin load balancing to distribute traffic between instances.
AWS Elastic Load Balancer (ELB):

If you're deploying on AWS, ELB can be used to automatically balance traffic across multiple EC2 instances running your Node.js/Express.js application.
Kubernetes:

When deploying Node.js applications in a Kubernetes cluster, you can use Kubernetes' built-in load balancer services to distribute traffic across pods.
Conclusion
Load balancing is crucial for scaling Node.js and Express.js applications, and there are different strategies and tools available based on your application requirements and infrastructure.