Q what node.js Mthods ??

1::GET: The GET method is used to retrieve data from a server.
2::POST: The POST method is used to submit data to the server for processing. 
3::PUT: The PUT method is used to update an existing resource on the server. It sends the updated
4::DELETE: The DELETE method is used to delete a specified resource on the server. It requests the server to remove the specified resource.
5::PATCH: The PATCH method is used to partially update an existing resource on the server
6::HEAD: The HEAD method is similar to the GET method but retrieves only the headers of the response, 



| Method      | Action                | Example URL | Description                             |
| ----------- | --------------------- | ----------- | --------------------------------------- |
| **GET**     | Read / Retrieve       | `/users`    | Get a list of users or a single user    |
| **POST**    | Create / Send         | `/users`    | Add a new user                          |
| **PUT**     | Update / Replace      | `/users/1`  | Update the entire user with new data    |
| **PATCH**   | Partial Update        | `/users/1`  | Update only some fields of the user     |
| **DELETE**  | Delete / Remove       | `/users/1`  | Remove a specific user                  |
| **HEAD**    | Get Headers Only      | `/users`    | Retrieve headers (no body)              |
| **OPTIONS** | Check Allowed Methods | `/users`    | See which methods are supported for URL |
