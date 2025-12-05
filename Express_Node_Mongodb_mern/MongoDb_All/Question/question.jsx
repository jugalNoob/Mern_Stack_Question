

✅ 1. Document (Smallest Unit – Like a Row)


It is a single record in MongoDB.

A document is stored in JSON / BSON format.

It contains fields + values.

Each document can have different fields.

Example Document:
{
  "_id": "123",
  "name": "Jugal",
  "age": 25,
  "skills": ["Node.js", "MongoDB"]
}


👉 Think:
Document = Row in SQL.

✅ 2. Collection (Group of Documents – Like a Table)

A collection is a group of multiple documents.

Similar to a table in SQL, but without a fixed structure.

Documents in the same collection can have different fields.

Example: users collection may contain many user documents.

Example:
users
 ├── { name: "Jugal", age: 25 }
 ├── { name: "Amit", age: 30, address: "Delhi" }
 └── { name: "Sara" }


👉 Think:
Collection = Table in SQL.

✅ 3. Schema (Structure Definition – Used in Mongoose)

Important: MongoDB itself does NOT require a schema.

But Mongoose (Node.js ODM) allows you to define a schema.

A schema defines the shape of documents inside a collection:

What fields it should have

What data types they should be

Which fields are required

Default values

Example Schema (Mongoose):
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  skills: [String]
});


👉 Think:
Schema = Blueprint / Model Definition (only when using Mongoose).

🔥 Super Simple Comparison Table

| Term           | Meaning                                       | Example           | SQL Equivalent  |
| -------------- | --------------------------------------------- | ----------------- | --------------- |
| **Document**   | Single data record                            | `{name: "Jugal"}` | Row             |
| **Collection** | Group of documents                            | `users`           | Table           |
| **Schema**     | Structure/Rules for documents (Mongoose only) | `userSchema`      | Table structure |



🎯 One Line Summary

Document = actual data

Collection = folder containing many documents

Schema = rules for documents (only in Mongoose)


✅ 🔥 TOP MongoDB Interview Questions (Most Asked)

(Short, clear, direct — perfect for interviews)

🔹 BASIC LEVEL (Must Know)
1. What is MongoDB?

MongoDB is a NoSQL, document-based, JSON/BSON database that stores data in collections and documents, not tables and rows.

2. What is a Document in MongoDB?

A document is a single record stored in BSON format (binary JSON).

3. What is a Collection?

A collection is a group of documents (similar to a table in SQL but schema-less).

4. What is a Schema?

MongoDB is schema-less, but Mongoose allows defining a schema (structure rules for documents).

5. What is Mongoose?

Mongoose is an ODM (Object Data Modeling) library for Node.js that:

Defines schemas

Validates data

Creates models

Provides query helpers

6. Difference between MongoDB and SQL?


| MongoDB            | SQL             |
| ------------------ | --------------- |
| Document-based     | Table-based     |
| JSON/BSON          | Rows & Columns  |
| Schema optional    | Fixed schema    |
| Horizontal scaling | Mostly vertical |
| Flexible           | Rigid           |



| MongoDB            | SQL             |
| ------------------ | --------------- |
| Document-based     | Table-based     |
| JSON/BSON          | Rows & Columns  |
| Schema optional    | Fixed schema    |
| Horizontal scaling | Mostly vertical |
| Flexible           | Rigid           |


7. What is BSON?

Binary JSON. More efficient format used internally by MongoDB.

8. What is _id in MongoDB?

Every document has a unique _id field (ObjectId by default).

9. What is ObjectId?

12-byte unique ID containing:

Timestamp

Machine ID

Process ID

Counter

10. What is CRUD in MongoDB?

Create → insertOne(), insertMany()

Read → find(), findOne()

Update → updateOne(), updateMany()

Delete → deleteOne(), deleteMany()

🔥 INTERMEDIATE LEVEL QUESTIONS
11. What is an Index in MongoDB?

Indexes make read queries faster, but use extra memory.

12. Types of Indexes

Single field index

Compound index

Text index

TTL index

Unique index

Sparse index

Wildcard index

13. What is Aggregation Pipeline?

A multi-stage pipeline for transforming and analyzing data.

Stages include:

$match

$group

$sort

$project

$lookup

$limit, $skip

14. What is $lookup?

Performs JOIN between collections (like SQL joins).

15. Difference between find() and findOne()?

find() → returns array/cursor

findOne() → returns one matched document

16. What is a Cursor in MongoDB?

A pointer to the result set of a query. Used for large dataset streaming.

17. What is Sharding?

Distributing data across multiple servers (horizontal scaling).

18. What is Replication?

Multiple MongoDB servers maintain same data, providing high availability.

19. What is Replica Set?

A group of MongoDB servers:

1 Primary

Multiple Secondary
Automatic failover.

20. What is the difference between $push and $addToSet?

$push → adds item every time

$addToSet → adds only if not exists (no duplicates)

🔥 ADVANCED QUESTIONS (Usually in Senior Backend Interviews)
21. What is the difference between Aggregation Pipeline and MapReduce?

Aggregation → faster, memory efficient
MapReduce → heavy, slower

22. What is Write Concern?

Ensures how many nodes must acknowledge before confirming write.

23. What is Read Concern?

Controls consistency level for reads (local, majority).

24. What is Transactions in MongoDB?

MongoDB 4.0+ supports ACID transactions across multiple documents.

25. Explain MongoDB Architecture.

Client

Query Router

Config Servers

Shards

Replica Sets

Storage Engine

26. What is the difference between MongoDB and Mongoose?

MongoDB driver → low-level
Mongoose → schema, validation, middleware

27. What is the use of pre and post hooks in Mongoose?

Middleware functions that run before/after:

save

validate

update

find

28. How to handle pagination in MongoDB?

Using:

limit() + skip()
or

Cursor based pagination (_id > last_id)

29. How to improve query performance?

Create proper indexes

Avoid unnecessary $lookup

Use projections

Avoid large documents (>16MB limit)

Use aggregation pipeline wisely

30. What is MongoDB Atlas?

Cloud solution for:

Managed DB hosting

Auto-scaling

Backups

Monitoring

Security