Q what is RestAPi? 

When to use it : When you need a simple stateless api that works
well with http methods 

. and best for CRUD operations


Stateless: Each request contains all the information needed to process it.
Resource-Based: Each resource (e.g., users, products) is identified by a unique URL.
Uses HTTP methods:
GET for retrieving data
POST for creating data
PUT for updating data
DELETE for removing data

const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'John Doe' }];

// GET request to fetch users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST request to add a user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log('REST API running on port 3000'));


Use Case:
Building a service for user management in a web app.
CRUD operations in an e-commerce app for products, orders, etc.



Q Soap APi ?

OAP (Simple Object Access Protocol) is a protocol for building APIs
 that use XML-based messages for communication.
 It is more rigid and designed for structured, secure communication.


 Key Features:
Uses XML for message formatting.
Supports advanced features like built-in error handling and security via WS-Security.
Requires a WSDL (Web Services Description Language) file for defining the API.


<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://example.com/webservice">
   <soapenv:Header/>
   <soapenv:Body>
      <web:GetUser>
         <web:UserID>123</web:UserID>
      </web:GetUser>
   </soapenv:Body>
</soapenv:Envelope>

Use Case:
Banking services for secure transactions.
Integrations with legacy systems.



Q GRaphQl API?

GraphQL is a query language for APIs that allows clients to request only the data they need. It gives more flexibility compared to REST.

Key Features:
Single endpoint for all operations (e.g., /graphql).
Clients specify the exact data they want in the query.
Supports real-time data with subscriptions.

Use Case:
Building a mobile app with specific data requirements.
Querying complex relational data in social media apps.


Q Websocket API?

WebSocket is a communication protocol that provides full-duplex
 communication channels over a single TCP connection,
  enabling real-time data exchange.

Key Features:
Persistent connection between client and server.
Ideal for real-time applications like chats, gaming, or live data feeds.


Use Case:
Chat Applications: Real-time messaging between users.
Stock Market Feeds: Real-time updates of stock prices.
Collaborative Tools: Collaborative editing in apps like Google Docs.



Feature	   REST API   	SOAP API	       GraphQL API	   WebSocket API 

Protocol	   HTTP	    :XML-based Protocol	    HTTP	            TCP

Flexibility	  Moderate	   :Low	               High	          High

Message Format	JSON (mostly) 	:XML	    Query language	   Binary or text

eal-Time	        :No	           :No	  :Partially (subscriptions) 	:Yes

Use Cases	 :Web services	:Secure transactions	:Complex data queries	:Real-time apps



Q 12 Tipes for API Security?
ANS: 1::useHTTPS 


2::use--> oAuth2
3::web Authn
4::Leveled API Keys 
5::Authorization 
6::Rate Limiting


7::API Versioning 
GET/V1/USER123 -->good
GET/USER/123 -->not good 

8::Allowlist
9::Check OWASP API Security Risks
10::Use API gateway 
11::Error Handing 





What is Rest APi Security?
1::: Middleware Enhancements
..Improved middleware handling for more  efficient request processing and error handling 

2:::Enhanced Routing ;;;
...More robust routing capabilities including support for advanced URL pattern matching and route parameter validation


:::::::::: Rest API security with code  ? 


1:: Rate Limiting
Implement rate limiting to prevent brute force attacks and DDoS attacks using middleware like express-rate-limit.

const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

app.use('/api/', apiLimiter);

2::::::::::::CORS
Configure CORS (Cross-Origin Resource Sharing) properly to control which domains can access your API.
Implementation Example:

const cors = require('cors');

const corsOptions = {
    origin: 'https://your-frontend-domain.com',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


3:::::. Environment Variables
require('dotenv').config();

const dbConnectionString = process.env.DB_CONNECTION_STRING;


4:::: Security Headers
Use middleware like helmet to set various HTTP headers for enhanced security.
Implementation Example:

const helmet = require('helmet');

app.use(helmet());


5:::10. Database Security
Ensure your MongoDB instance is secured by using strong passwords, enabling authentication, and limiting network exposure.
Use Mongoose’s built-in validation to validate data at the schema level.
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);


6:::::::::const Monitor = require('express-status-monitor');  

const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;

const memoryData = process.memoryUsage();

const memoryUsage = {
  rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
  heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
  heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
  external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
};

console.log(memoryUsage);

// console.log(Monitor , "hello")
module.exports= Monitor;


const Status=require("./Status")

app.use(status())

7:::::const { createLogger, transports } = require("winston");
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

app.use((req, res, next) => {
    logger.info(`Received request: ${req.method} ${req.url}`);
    next();
});



:::::::::::Monorting  ----------------------<><><><><><><><><>::::::::::::::::::::::::::


Monitoring tools for Express.js help track application performance, errors, and metrics. Here are some commonly used tools and techniques:

1. Logging Libraries ---------------------<><::::::::::::::::::::::
Winston: A versatile logging library for Node.js with support for multiple transports (console, file, HTTP, etc.) and customizable logging levels.
Pino: A fast logger for Node.js applications, suitable for high-performance logging with low overhead.


2. Performance Monitoring ------------------------::::::::::::::::::::::::::
Express Status Monitor: Middleware that provides real-time monitoring of your Express.js application's performance metrics such as response times, CPU usage, and memory usage.
New Relic: A comprehensive monitoring tool that provides insights into application performance, transactions, and infrastructure metrics.
PM2: A process manager for Node.js applications that includes monitoring capabilities for CPU usage, memory, and uptime.


3. Error Monitoring and Reporting--------------------------------:::::::::::::::::::::
Sentry: Captures and reports errors in real-time, providing detailed insights into exceptions and crashes within your Express.js application.
Bugsnag: Monitors errors and exceptions, offering real-time alerts and insights to help diagnose and fix issues quickly.
Rollbar: Provides error tracking and monitoring for JavaScript applications, including detailed error reports and integrations with popular frameworks like Express.js.

4. Metrics and Custom Monitoring ---------------------------::::::::::"""""""""""||||||||||||||
Prometheus: A leading open-source monitoring solution that collects and stores time-series data, suitable for custom metric collection and monitoring.
StatsD: A network daemon for collecting custom application metrics and sending them to backend systems like Prometheus, Graphite, or other monitoring tools.
Custom Middleware: Implement custom middleware in Express.js to collect and expose application-specific metrics such as request counts, response times, and database query performance.


const express = require("express");
const router = new express.Router();
require('dotenv').config()

const Register=require("../models/student")
const controllers=require("../controollers/userControllers")

//Monitoring start row  class Line 



const client = require("prom-client"); //metrice collection
const responseTime = require('response-time');
const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");




const options = {
  transports: [
    new LokiTransport({
      host: "http://127.0.0.1:3100"
    })
  ]
};

const logger = createLogger(options);

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

const reqResTime = new client.Histogram({  
  name: "http_express_req_res_time_Historgram",
  help: "This tells how much is taken by req and res",
  labelNames: ['method', 'route', 'status_code'],
  buckets: [1, 50, 100, 200, 500, 800, 1000, 2000]
});


///TotalReq ///////////////////////////////
const totaReq = new client.Counter({
  name: "total_req",
  help: "Tells total req"
});


///activeConnections //////////////////////////ANCHOR - 
const activeConnections = new client.Gauge({
  name: "active_connections",
  help: "Number of active connections",
  labelNames: ['service'],
});


///Summary /////////////////////////////////////////////////////ANCHOR - 
const requestDurationSummary = new client.Summary({  //
  name: "request_duration_summary",
  help: "Summary of request durations",
  labelNames: ['method', 'route' ,'status_code'],
  percentiles: [0.5, 0.9, 0.99],
});
//request_duration_summary{quantile="0.99",method="GET",route="/",status_code="404"} 6.128


  ///Create a middleWare ////!SECTION

  
  
  router.use(responseTime((req, res, time) => {   //this is middle ware 

      // Observe the actual request duration using the 'time' parameter
      requestDurationSummary.labels(
     req.method  || "GET" || "POST" || "PATCH" || "Delete",
        req.url ,// You can use 'req.url' as the route label
        res.statusCode
      ).observe(time);
    

    // Increment the activeConnections gauge for the service when a new connection is established
    activeConnections.labels({ service: 'your_service_name' }).inc();
  
    // Increment the total request counter
    totaReq.inc();
    // totaReq.dec();
  
    // Log the total number of requests
    console.log("Total Requests:", totaReq.hashMap[''].value);
  
    // Log the current date and time
    let datatimes = new Date();
    console.log("Current Date and Time:", datatimes);
  
    // Observe the request-response time using the provided parameters
    reqResTime.labels({
      method: req.method || "GET" || "POST" || "PATCH" || "Delete",
      route: req.url,
      status_code: res.statusCode
    }).observe(time);
  
    // Log the response time
    console.log("Request Time:", time);
  }));
  






  ///Slow check Your  ////////////////////FIXME - 
  router.get("/slow", async (req, res) => {
    try {
      // The response time is captured by the 'response-time' middleware
      // totaReq.inc();
      logger.info('req came on /slow router');
      res.json({
        name: "jugal",
        class: "40"
      });
    } catch (error) {
      logger.error(error.message);
    }
  });

  router.get("/jugal" , (req,res)=>{
    res.send("jugal")
  })

  //Meterix Your 
router.get("/metrics" ,async (req,res)=>{
    res.setHeader("Content-Type" ,client.register.contentType)
    const metrics=await client.register.metrics()
    // res.send(  totaReq.inc())
    res.send(metrics)

    // console.log(metrics)

})




//this is Your End Line Of code




router.post("/signup",controllers.forms )


router.get("/Dataget",controllers.user )

router.get("/Api",controllers.GetData )

router.patch("/updates/:id",controllers.updates)

router.delete("/delete/:id",controllers.delete)



module.exports = router;

// router.get("/finds" ,controllers.getAllDocuments)

// router.get("/signup/:id" , controllers.findId)

// router.get("/Op" ,controllers.AllSearch)