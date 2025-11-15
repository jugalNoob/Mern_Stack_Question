const redis = require('redis');
const express = require('express');

//const fetch = require('node-fetch'); // Ensure you have the node-fetch package




const app = express();
const port = process.env.PORT || 9000;

// Create Redis client to connect to the server
let redisClient;

(async () => {
  redisClient = redis.createClient();
  
  redisClient.on('error', (error) => {
    console.error(`Redis connection error: ${error}`);
  });

  let coonected=await redisClient.connect();

  if(coonected){
    console.log('Connected to Redis');
  }else{
    console.log('Failed to connect to Redis');
  }
})();




//create a rate limit client 



app.get("/", async (req, res) => {
  try {
    // Retrieve the client's IP address
    const clientip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    console.log(clientip);
    
    // Increment the request count for this IP in Redis
    const requestcount = await redisClient.incr(`${clientip}:request_count`);

    console.log(requestcount);

    // Check rate limit and respond accordingly
    // if (requestcount > 10) {
    //   return res.status(429).send("Too many requests");
    // }

    // Send the IP and request count as part of the response
    res.send({ message: "Hello, world!", clientip, request_count: requestcount });

    console.log(requestcount);

  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Server error");
  }
});


/// --------------------

app.get('/', async (req, res) => {
  // Fetch data from the external API without caching
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});






app.get('/api', async (req, res) => {
  try {
    // Check if data is in the Redis cache
  
    const cachedData = await redisClient.get('apiget');


    if (cachedData) {
      // If data is found in cache, send it
      console.log('Cache hit for /api');
      return res.send(JSON.parse(cachedData));
    }

    // If data is not in cache, fetch it from the external API
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');

    // Check if the fetch was successful
    if (!response.ok) {
      console.error('Failed to fetch data from external API:', response.status, response.statusText);
      return res.status(response.status).send(`Error fetching data from external API: ${response.statusText}`);
    }


    const data = await response.json();

    let timer=20 // 20 seconds timeout

    // Store the data in Redis with a TTL (e.g., 3600 seconds = 1 hour)
    // await redisClient.set('apiget', timer, JSON.stringify(data), { EX: 3600 });

    await redisClient.set('apiget', JSON.stringify(data), { EX: 3600 });


    
    // Send the data to the client
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



//Q what is in memory datastore ?

//Ans: store in Ram 

//https://redis.io/learn/develop/node/gettingstarted

//https://redis.io/learn/develop/node/node-crash-course


///docker pull redis/redis-stack:latest


 
///docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
