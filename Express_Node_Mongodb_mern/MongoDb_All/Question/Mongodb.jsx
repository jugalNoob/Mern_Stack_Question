


https://www.javatpoint.com/job-interview-questions

Q:what is mongodb?

ANS::mysql                           vs                noSQL_mongodb

1:RDBMS is relational database                       it's a non-relational,docement-oriented database 
managment system and works on                        management system and works on docemnet-based database
relational database

2:create database  ------same


3:it stores data in form of entity as tables.        mongoDB stores data in form of documents




4:it uses SQL to query database                              .MongoDB uses Bson's  	Binary file format




Qwhat is Json and Bson

::Jsons

1.JavaScript Object Notation (JSON) is a standard text-based format for 
representing structured data based on JavaScript object syntax. It is commonly used for 
transmitting data


2.JSON is a text-based format, and text parsing is very slow

3.JSON’s readable format is far from space-efficient, another database concern

4.JSON only supports a limited number of basic data types


5.Data Support--UTF-8 String--String, Boolean, Number, Array

6.Human and Machine


::Bson

1.BSON simply stands for “Binary JSON,” and that’s exactly what it was invented to
 be. BSON’s binary structure encodes type and length
 information, which allows it to be parsed much more quickly


2.Data Support--Binary---String, Boolean, Number (Integer, Float, Long, Decimal128...), Array, Date, Raw Binary

3.Machine Only



ANS::Schema Flexibility and Data Governance




Q::what is mongooseDB?

ANS::it frame work is mongodb 

..mongoose is an object data modeling (ODM)library for Mongodb and Node.js,it
manages relationships between data provides Schema validation and is used to
translate between object object in code and the representation of those object in mongodb


1.mongoose.js provider an abstraction layer on top of mongoDB that eliminates the need
to used named collections



Q::what is Schema and Models?

ANS::A mongoose Schema define the structure of the documnet,
default values , validators





3:::What is Mongoose?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction over MongoDB, allowing developers to define schemas, models, and perform database operations in a more structured and efficient manner.
What is MongoDB?
||||What is MongoDB?
MongoDB is a popular NoSQL database that provides a flexible, scalable, and document-oriented data storage solution. It stores data in a JSON-like format called BSON (Binary JSON) and supports dynamic schemas.
What are the advantages of using Mongoose with MongoDB?
||||What are the advantages of using Mongoose with MongoDB?
Mongoose simplifies MongoDB integration and provides additional features such as schema validation, middleware, data modeling, and query building. It enforces structure and consistency in data interactions, making development easier and more organized.
How do you define a schema in Mongoose?


||||||||||///How do you define a schema in Mongoose?
In Mongoose, a schema defines the structure of documents within a collection. Here's an example:



1::What is MongoDB?

MongoDB is a popular NoSQL database that provides a flexible, scalable, and document-oriented data storage solution. It stores data in a JSON-like format called BSON (Binary JSON) and supports dynamic schemas.


2::What are the key features of MongoDB?

MongoDB offers several key features, including document-based data model, dynamic schemas, scalability and horizontal scaling, flexible querying and indexing, high availability through replica sets, automatic sharding for data 
distribution, and support for geospatial queries.

3::SQL databases are relational databases that use structured query language (SQL) for defining and manipulating data. NoSQL databases, including MongoDB, use a variety of data models and have flexible schemas. They typically provide high scalability,
 performance, and horizontal scaling capabilities.


4::What is a document in MongoDB?

In MongoDB, a document is the basic unit of data storage. It is similar to a row in a traditional relational database. A document is represented in BSON format (Binary JSON) and can 
contain nested structures and arrays.


5::What is a collection in MongoDB?
||Schema-less: Unlike relational databases, MongoDB collections do not enforce a predefined schema. Each document within a collection can have different fields and
 structures. This flexibility allows for easy evolution of data models.


||Dynamic Documents: Documents within a collection can have varying structures, allowing for easy addition or removal of fields as needed. This dynamic nature 
enables easy storage and retrieval of complex and heterogeneous data.


||Storage of Documents: MongoDB stores documents within collections in BSON (Binary JSON) format. BSON is a binary representation of 
JSON-like documents, providing efficient storage and retrieval of data.


A collection in MongoDB is a group of related documents. It is similar to a table in a relational database. Collections do not enforce a schema, so each document within
 a collection can have different fields and structures.\


 6:::How do you perform CRUD operations (Create, Read, Update, Delete) in MongoDB?


 MongoDB provides CRUD operations through methods like insertOne, find, updateOne, and deleteOne. These methods allow you to create, read, update, and delete documents in a MongoDB collection.


7::What is sharding in MongoDB?

Sharding is the process of distributing data across 
multiple servers or machines in MongoDB. It enables horizontal scaling by splitting a collection's data across shards based on a shard key. Sharding helps handle large amounts of data and
 provides high availability and scalability.






1::Ad-hoc queries for optimized, real-time analytics --------------

When designing the schema of a database, it is impossible to know in advance all the queries that end 
users will perform. An ad hoc query is a short-lived command whose value depends on a variable.
Each time an ad hoc query is executed, the result may be different, depending on the variables in question.

2::Indexing appropriately for better query executions

In our experience, the number one issue that many technical support teams fail 
to address with their users is indexing. Done right, indexes are intended to improve
search speed and performance. A failure to properly define appropriate indices can and 
usually will lead to a myriad of accessibility issues, such as problems with query execution and load balancing.



3::Replication for better data availability and stability
When your data only resides in a single database, it is exposed to multiple potential points of failure, 
such as a server crash, service interruptions, or even good old hardware failure. Any of these
events would make accessing your data nearly impossible.



4::Sharding
When dealing with particularly large datasets, sharding—the process of splitting larger datasets across
multiple distributed collections, or “shards”—helps the database distribute and better execute
what might otherwise be problematic and cumbersome queries. Without sharding, scaling 
a growing web application with millions of daily users is nearly impossible.



5::Load balancing
At the end of the day, optimal load balancing remains one of the holy grails of 
large-scale database management for growing enterprise applications. Properly 
distributing millions of client requests to hundreds or thousands of servers can lead 
to a noticeable (and much appreciated) difference in performance.

1::Databases: Advanced database topics like 
database sharding, replication,
 and data modeling for complex applications.


2::: Logging and Monitoring: Setting up centralized
  logging and monitoring solutions
   like ELK Stack (Elasticsearch, 
   Logstash, Kibana), Prometheus,
    Grafana, or tools provided by cloud
 providers
  to track application health and performance.



  3:::A video streaming platform with real-time video encoding and transcoding


4:::A data visualization application using D3.js

5::State management:  Reducx Contect 


6::Authentication and authorization: 