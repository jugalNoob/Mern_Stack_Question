🔹 Tips for MongoDB Interview Prep

Understand CRUD operations and query operators

Practice aggregation pipelines

Know indexes, replication, sharding, transactions

Be able to model data: embedded vs referenced

Understand cursors and performance optimization





🟢 MongoDB Basic Questions

What is MongoDB?

MongoDB is a NoSQL, document-oriented database that stores data in JSON-like BSON format.

Difference between SQL and NoSQL?


| Feature   | SQL                   | NoSQL (MongoDB)         |
| --------- | --------------------- | ----------------------- |
| Structure | Tables (rows/columns) | Collections (documents) |
| Schema    | Fixed schema          | Dynamic schema          |
| Query     | SQL                   | JSON-like queries       |
| Scaling   | Vertical              | Horizontal              |





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



6. What data types are supported in MongoDB documents?
MongoDB supports a variety of BSON data types, which extend standard JSON types:

String – Textual data.
Number – Integer (int), Long (long), Double (double), Decimal (Decimal128).
Boolean – true or false.
Date – Stores date and time in UTC format.
Array – List of values (can store mixed types).
Object / Embedded Document – Nested documents within a document.
ObjectId – Unique identifier automatically generated for _id field.
Null – Represents a null value.
Binary Data – Stores binary data like images or files.
Regular Expression – For pattern matching.
Timestamp – Special internal type used for replication and sharding.
Code / JavaScript – Stores JavaScript code.