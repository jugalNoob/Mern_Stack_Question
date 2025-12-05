const mongoose=require("mongoose")


const DB =''
// const DB = process.env.DATABASE; // Correct usage

async function connectDB() {
  try {
    if (!DB) {
      throw new Error("Database URL not provided. Please set the DATABASE environment variable.");
    }
    console.log("Connecting to MongoDB...");
    await mongoose.connect(DB, {
       maxPoolSize: 100,        // default is 100 (MongoDB 4.2+)
      minPoolSize: 10,         // optional
      serverSelectionTimeoutMS: 5000, // fail fast if not connected
      socketTimeoutMS: 45000,
      family: 4,               // IPv4
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process if DB connection fails
  }
}


// await mongoose.connect(DB, {
//   maxPoolSize: 100,        // max connections in pool
//   minPoolSize: 10,         // min connections in pool
//   serverSelectionTimeoutMS: 5000, // fail fast if DB not reachable
//   socketTimeoutMS: 45000,  // idle connection timeout
//   family: 4,               // IPv4
//   useNewUrlParser: true,   
//   useUnifiedTopology: true,
//   autoIndex: false,        // disable automatic index creation in production
//   connectTimeoutMS: 10000, // max time to establish initial connection
//   authSource: "admin",     // database to authenticate against
//   retryWrites: true,       // retry writes automatically
//   w: "majority",           // write concern: wait for majority to acknowledge write
//   readPreference: "primary", // read from primary node
// });





module.exports = connectDB;



//  "mongodb+srv://jugal786:jugal786@cluster0.sgg8t.mongodb.net/ones?retryWrites=true&w=majority";