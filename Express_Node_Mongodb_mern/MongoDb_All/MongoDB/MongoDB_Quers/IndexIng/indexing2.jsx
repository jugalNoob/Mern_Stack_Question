
Indexing
This section delves into creating and leveraging indexes, specialized data structures that significantly improve retrieval efficiency. Learn how to identify ideal fields for indexing and optimize your database performance for faster results.

Create an Index
Get an Index
Drop an Index
Index Types
Single Field Indexes
Compound Indexes
Multikey Indexes
Text Indexes



1️⃣ Create an Index
Syntax:
db.collection.createIndex({ field: 1 })   // 1 for ascending
db.collection.createIndex({ field: -1 })  // -1 for descending

Example: Single Field Index
// Create an index on "name" field ascending
db.users.createIndex({ name: 1 });


✅ 1 = ascending, -1 = descending

Compound Index

Indexes on multiple fields.

// Create index on "name" ascending and "age" descending
db.users.createIndex({ name: 1, age: -1 });


Useful when queries involve both fields together.

Multikey Index

Used for array fields. MongoDB automatically indexes each element of the array.

// Suppose each user has multiple hobbies
db.users.createIndex({ hobbies: 1 });


If hobbies is ["reading", "sports"], both elements are indexed separately.

Text Index

Used for text search.

// Create text index on "description" field
db.products.createIndex({ description: "text" });

// Query with text search
db.products.find({ $text: { $search: "laptop" } });

2️⃣ Get Indexes
List all indexes of a collection
db.users.getIndexes();
1::db.dataall.createIndex({age:1})
2::db.dataall.getIndexes()




Returns all indexes including the default _id index.

3️⃣ Drop an Index
Drop a single index
db.users.dropIndex("name_1"); // use the index name

Drop all indexes
db.users.dropIndexes();


Except _id index, which is always present.

4️⃣ Index Types Summary


| Index Type       | Use Case                                                   |
| ---------------- | ---------------------------------------------------------- |
| **Single Field** | Single field queries, e.g., `{ name: 1 }`                  |
| **Compound**     | Queries with multiple fields, e.g., `{ name: 1, age: -1 }` |
| **Multikey**     | Array fields                                               |
| **Text**         | Full-text search, e.g., description or comments            |




✅ Step-by-Step Example Workflow

Create a collection

db.createCollection("users");


Insert sample data

db.users.insertMany([
  { name: "Alice", age: 25, hobbies: ["reading", "sports"] },
  { name: "Bob", age: 30, hobbies: ["music", "movies"] }
]);


Create indexes

db.users.createIndex({ name: 1 });            // single field
db.users.createIndex({ name: 1, age: -1 });  // compound
db.users.createIndex({ hobbies: 1 });        // multikey


Check indexes

db.users.getIndexes();


Drop an index

db.users.dropIndex("name_1");


Drop all indexes

db.users.dropIndexes();
