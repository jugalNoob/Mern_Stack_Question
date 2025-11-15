https://devdocs.io/express/index#req.baseUrl

Q what is authentication vs authorization 




|||||||||||||||||||||||||||||||||       Express Code 2.0 ||||||||||||||||||||||||||||||||||||||
2::: Types of Respones ...............


:::::: Fetch Request options -------------------------

fetch('/data.json')
.then(res => {
  res.text()       // response body (=> Promise)
  res.json()       // parse via JSON (=> Promise)
  res.status       //=> 200
  res.statusText   //=> 'OK'
  res.redirected   //=> false
  res.ok           //=> true
  res.url          //=> 'http://site.com/data.json'
  res.type         //=> 'basic'
                   //   ('cors' 'default' 'error'
                   //    'opaque' 'opaqueredirect')

  res.headers.get('Content-Type')
})

function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}


Request options-----------------

fetch('/data.json', {
  method: 'post',
  body: new FormData(form), // post body
  body: JSON.stringify(...),

  headers: {
    'Accept': 'application/json'
  },

  credentials: 'same-origin', // send cookies
  credentials: 'include',     // send cookies, even in CORS
})


function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}


::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


fetch('/data.json')
.then(res => {
  res.text()       // response body (=> Promise)
  res.json()       // parse via JSON (=> Promise)
  res.status       //=> 200
  res.statusText   //=> 'OK'
  res.redirected   //=> false
  res.ok           //=> true
  res.url          //=> 'http://site.com/data.json'
  res.type         //=> 'basic'
                   //   ('cors' 'default' 'error'
                   //    'opaque' 'opaqueredirect')

  res.headers.get('Content-Type')
})


res.send('Hello, world!');

res.json({ message: 'Hello, world!' });

res.send('<h1>Hello, world!</h1>');

res.redirect('/new-url');

res.download('/path/to/file.pdf');

res.download('./file.pdf', 'user-facing-filename.pdf')

res.download('./file.pdf', 'user-facing-filename.pdf', (err) => {
  if (err) {
    //handle error
    return
  } else {
    //do something
  }
})

res.status(404).send('Not Found');

res.status(204).send();

res.status(404).end()

req.headers
req.headers['host']
req.headers['user-agent']
req.headers['accept-encoding']
req.headers['accept-language']

res.set('Content-Type', 'text/html')


res.set('Content-Type', 'text/plain').send('Hello, world!');

app.set('x', 'yyy')
app.get('x') //=> 'yyy'

app.enable('trust proxy')
app.disable('trust proxy')

app.enabled('trust proxy') //=> true

res.send(Buffer.from('whoop'))
res.send(Buffer.from('<p>some html</p>'))
res.send([1, 2, 3])
 res.sendFile(fileName, options, function (err) {

res.set('Content-Type', 'text/plain')

res.set({
  'Content-Type': 'text/plain',
  'Content-Length': '123',
  ETag: '12345'
})


...Res.Format()
res.format({
  'text/plain': function () {
    res.send('hey')
  },

  'text/html': function () {
    res.send('<p>hey</p>')
  },

  'application/json': function () {
    res.send({ message: 'hey' })
  },

  default: function () {
    // log the request and respond with 406
    res.status(406).send('Not Acceptable')
  }
})



1::::  Basic routing  ..........|||||||||||||||||||||||||||||||||||||||||||||

app.get('/', (req, res) => {
  res.send('Hello World!') 
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})


app.post('/form', (req, res) => {
  const name  = req.body.name
  const email = req.body.email
  const age   = req.body.age
})


app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})


app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})


Q what is MiddLeware  in Express?

// Custom middleware function
const logMiddleware = (req, res, next) => {
  console.log(`Received a ${req.method} request at ${req.url}`);
  next(); // Call next to move to the next middleware or route handler
};
// Using middleware globally
app.use(logMiddleware);

// Route handling - a simple example
app.get('/', (req, res) => {
  res.send('Hello, this is the home page!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});



||||||||| What is request parameters and properties: ??

app.get('/', (req, res) => {
  // Accessing request parameters and properties
  const baseUrl = req.baseUrl;
  const hostname = req.hostname;
  const ip = req.ip;
  const method = req.method;
  const path = req.path;
  const protocol = req.protocol;
  const query = req.query;

  res.send(`
    Base URL: ${baseUrl}<br>
    Hostname: ${hostname}<br>
    IP: ${ip}<br>
    Method: ${method}<br>
    Path: ${path}<br>
    Protocol: ${protocol}<br>
    Query: ${JSON.stringify(query)}
  `);
});
// POST request handler
app.post('/submit', (req, res) => {
  // Accessing data submitted in the request body
  const formData = req.body;
  res.send(`Form data submitted: ${JSON.stringify(formData)}`);
});


Q What is Coockies Express ?
const cookieParser = require('cookie-parser')
app.use(cookieParser())

res.cookie('username', 'Flavio')
res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true })

res.cookie('username', 'Flavio', { expires: new Date(Date.now() + 900000), httpOnly: true })

expires()

res.clearCookie('username')



Q what is How to Work with HTTP Headers ||||||||||||||||||||||||

::: -- Types of general Header ------------------------------

.. Connection --tells to close or open Tcp Communication on behalf of HTTP Transmission

.. Content-Encoding  ---> Specifies what Kind of encoding is Being used gzip delfate

.. Content-Length --> specifices th length of the message body (Bytes)

..Content-Types  specifies Types of  content in message body  text/HTML

..Transfer-Encoding  ---> specifies any encoding on the message body over HTTP used to specify cheunked encoding 


::: Request Header -->  ------------------------

..Accept

..Accept-Encoding 

..Authorization  

...cookie 

...Host 

...If-Modified-Since 

...if-None-Match

...Origin

..referer

..User-agent


Respone Headers -----------------------------

...Access-Control-Allow origin

..Cache-Control

..Etag

..Expires

..Loaction

..Pargma

..server

..set-Cookies

...WWW.Authentication

..X-Frame-Options


app.get('/', (req, res) => {
  console.log(req.headers)
})

app.get('/', (req, res) => {
  req.header('User-Agent')
})

Q  How to change any HTTP header value for a response
res.set('Content-Type', 'text/html')


Q  How to Handle Redirects ||||||||||||||||||||||

res.redirect('/go-there')
res.redirect(301, '/go-there')
res.redirect('../go-there')
res.redirect('..')
res.redirect('back')







Explain the difference between req.params and req.query in Express.js.??

Ans::

--->It contains route parameters extracted from the URL path.
--->Used for accessing route parameters defined in the route path.
--->Route parameters are specified in the route path and are part of the URL itself.
--->For example, in the route /users/:id, :id is a route parameter that can be accessed using req.params.id.
--->app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Use userId in further processing
  res.send(`User ID: ${userId}`);
});


-->It contains the query parameters from the URL.
-->Used for accessing query parameters present in the URL after the ? symbol.
-->Query parameters are typically used for filtering, sorting, or providing additional data in a request.
-->Accessed using req.query.parameterName.

// For URL: /search?term=node&category=tech
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;
  const category = req.query.category;
  // Use searchTerm and category in further processing
  res.send(`Search Term: ${searchTerm}, Category: ${category}`);
});






Q what status error ? ||||||||||||||||||||||||||||||||||||||||||||||||||||
Ans::200 OK: The request was successful.
201 Created:--> The request has been fulfilled, resulting 
in the creation of a new resource.

400 Bad Request:--> The server cannot process the 
request due to a client error (e.g., malformed request syntax).
401 Unauthorized: The request requires authentication or the user does not have proper authorization.
404 Not Found: The server cannot find the requested resource.
500 Internal Server Error: A generic server error occurred while processing the request.

|||||||||||||||||||||||||||||||||||||||||   Express Code ||||||||||||||||||||||||||||||||||||||||


Q what is express.js ?

Ans:


Qwhat is header in express.js?
In Express.js, the "header" refers to the part of the HTTP response that contains
 metadata about the response. It consists of key-value pairs that provide additional
information about the response,  such as the content type, caching directives, cookies, and more.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html'); // Set the Content-Type header
  res.setHeader('Cache-Control', 'no-store'); // Set the Cache-Control header

  res.send('<h1>Hello, World!</h1>'); // Send the response body
});



Q what node.js Mthods ??

1::GET: The GET method is used to retrieve data from a server.
2::POST: The POST method is used to submit data to the server for processing. 
3::PUT: The PUT method is used to update an existing resource on the server. It sends the updated
4::DELETE: The DELETE method is used to delete a specified resource on the server. It requests the server to remove the specified resource.
5::PATCH: The PATCH method is used to partially update an existing resource on the server
6::HEAD: The HEAD method is similar to the GET method but retrieves only the headers of the response, 



0:16:31 What is Middleware in Express.js?
::Logging: Middleware can log information about the incoming requests,
 such as the request method, URL, request headers, and more.

Q what is middleware types?

Ans: 

Application-Level Middleware: app.use(): It's used to mount middleware functions at a specified path
Global Error Handling:

Global Error Handling: Using app.use() to define error-handling middleware at the application
 level, ensuring it catches errors from all routes.

Router-Level Middleware::app.use()  ---------->

Built-in Middleware: -------->
Express.js provides several built-in middleware functions:
express.json(): Parses incoming requests with JSON payloads.
express.urlencoded(): Parses incoming requests with URL-encoded payloads.
express.static(): Serves static files and assets in a director


Error-Handling Middleware: ------->
Middleware functions with four parameters (err, req, res, next) 


Third-Party Middleware: --------------->
body-parser: Parses incoming request bodies in a middleware before handlers.
helmet: Helps secure Express apps by setting various HTTP headers.


const express = require('express');
const app = express();

// Custom middleware function
const logMiddleware = (req, res, next) => {
  console.log(`Received a ${req.method} request at ${req.url}`);
  next(); // Call next to move to the next middleware or route handler
};

// Using middleware globally
app.use(logMiddleware);

// Route handling - a simple example
app.get('/', (req, res) => {
  res.send('Hello, this is the home page!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


Qwhat is JWT?

1::JWT stands for JSON Web Token. In the context of
 Express.js, JWT is a popular method for authentication and 
authorization. It allows you to securely transmit
 information between parties as a JSON object.


 Here's how JWT works in Express.js: 

 2:::Authentication 

 3:::Token Transmission: The server sends the JWT back to
the client as a response. The client typically stores the JWT in local storage, session storage,
or a cookie.


5::Token Verification::




Qwhat is cookies parse?
In Express.js, cookie parsing refers to the process of extracting
 and handling cookies sent by the client in the HTTP request.
 Cookies are small pieces of data that are stored on the
 client-side and sent along with subsequent requests to the server

 const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  const cookies = req.cookies;

  console.log(cookies); // Access the parsed cookies
});







Q what is different jwt and cookies?




0:02:32 What are Express.js Features?
Routing: Express.js allows you to define routes for different HTTP methods 
and URLs. You can handle requests for specific routes by defining corresponding 
route handlers. This makes it easy to create a structured API or handle different pages of a web application.


Middleware: Express.js has built-in support for middleware functions. Middleware 
functions can be used to modify the request and response objects, perform
 tasks like authentication, logging, data parsing, error handling, 


 Error Handling: Express.js makes it easy to handle errors in your application. 
 You can define custom error-handling middleware to catch and process errors that occur during 

Flexibility: JWTs provide flexibility in terms of the data payload they can contain.
 Custom claims can be added to the payload, providing additional information about the user or application-specific
  data. Cookies, on the other hand, are limited to
 storing simple key-value pairs.

 
Robust Request and Response Handling: Express.js provides a simple and intuitive API 
for handling HTTP requests and responses. You can easily 
access request parameters, headers, cookies, and query strings. Similarly, 


Q what  is Error handling in javscript?


Error handling in Express.js is a crucial aspect of 
building robust and reliable web applications. Here
 are some key topics and best practices related 
to error handling in Express:


1::Error Handling Middleware: Implementing error-handling middleware using functions with four parameters (err, req, res, next).


2::Global Error Handling: Using app.use() to define error-handling middleware at the application level, 

3::Next Function with Errors: Using next(err)


4::Next Function with Errors: Using next(err)

5::Custom Error Handling:

6::HTTP Status Codes: Using appropriate HTTP status codes in error responses (e.g., 404 for not found, 500 for server errors



Q what status error ?

Ans::200 OK: The request was successful.

201 Created:--> The request has been fulfilled, resulting 
in the creation of a new resource.

400 Bad Request:--> The server cannot process the 
request due to a client error (e.g., malformed request syntax).
401 Unauthorized: The request requires authentication or the user does not have proper authorization.
404 Not Found: The server cannot find the requested resource.
500 Internal Server Error: A generic server error occurred while processing the request.

Q what is params in express:

Ans::// Define a route with URL parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Retrieve user data based on the provided ID
  res.send(`User ID: ${userId}`);
});

Q :53 How to allow CORS in Express.js?
To allow Cross-Origin Resource Sharing (CORS) in an
Express.js application, you can use the cors middleware package. 
CORS is a mechanism that allows web browsers to make cross-origin requests, 
enabling resources on one domain to be accessed by a web page on a 
different domain. Here's how you can enable CORS in Express.js:



 ||||||||||||||| extracted Question data>>>>>>>>>>>>>

Explain the difference between req.params and req.query in Express.js.
What is the purpose of res.send() in Express.js?
How can you serve static files in Express.js?
What is CORS and how can you enable it in Express.js?
How do you handle form data in Express.js?
What is the role of Express.js in building RESTful APIs?
Explain the concept of template engines in Express.js and provide an example.
How can you handle authentication and authorization in Express.js?
What are the advantages of using Express.js for server-side development?
How can you deploy an Express.js application to a production server?

0:53:44 How to Debbuging are done in Express.js?
0:54:17 What is Express validator used for?
0:55:20 What are the different methods in REST API?
0:55:57 What is Express template engine? 

0:31:29 How to render plain Html in Express.js web apps?
0:32:47 What are Http request object properties?
0:37:47 What are Http response Object methods?
0:42:17 How to Create an Http server using Express.js?
0:45:43 What is body-parser?
0:46:50 What is the Role of Process.env?
0:47:44 What is a Cookie, and what purpose does it use?
0:49:58 What is Session and What purpose does it use?
0:51:15 How to Config properties in Express.js?














Q adavcen Topices ?

1:::Middleware Composition: Advanced middleware usage involves composing middleware functions
and chains to handle complex request processing workflows. This includes error handling 
middleware, custom middleware for authentication, authorization, logging, etc.


2:::Authentication and Authorization: Implementing robust authentication and authorization
mechanisms using middleware like Passport.js or custom authentication strategies.
This involves user authentication, session management, token-based authentication (JWT), OAuth, etc.


3:::Database Integration: Advanced Express applications often interact with databases.
This includes using ORMs like Sequelize or Mongoose for relational and non-relational
databases respectively, implementing database migrations, transactions, and advanced querying techniques.


4::Real-time Communication: Integrating real-time communication features using technologies 
like WebSockets (with libraries like Socket.IO), Server-Sent Events (SSE), or WebRTC.
This enables bidirectional communication between clients and servers for live updates,
chat applications, gaming, etc.



5::Performance Optimization: Optimizing Express applications for performance involves 
techniques like caching (using Redis or Memcached), load balancing, clustering
, lazy loading, gzip compression, CDN integration, and database query optimization.



6":::Security Best Practices: Implementing security measures to protect Express applications
from common threats such as SQL injection, cross-site scripting (XSS), cross-site request 
forgery (CSRF), session fixation, etc. This includes input validation, output encoding,
HTTPS, CORS, CSRF protection, etc.

7:::Containerization and Deployment: Containerizing Express applications using Docker, orchestration
with Kubernetes, and deploying to cloud platforms like AWS, Google Cloud Platform, or 
Microsoft Azure. This involves CI/CD pipelines, monitoring, logging, scaling, and high 
availability.