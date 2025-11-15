🔹 Common REST API Methods in Node.js

GET

Purpose: Retrieve data from the server.

Example Use Case: Fetching a list of users.

Express Example:

app.get('/users', (req, res) => {
  res.send("Get all users");
});


POST

Purpose: Submit data to the server (create a resource).

Example Use Case: Creating a new user.

Express Example:

app.post('/users', (req, res) => {
  res.send("Create a new user");
});


PUT

Purpose: Update or replace an existing resource fully.

Example Use Case: Updating all details of a user profile.

Express Example:

app.put('/users/:id', (req, res) => {
  res.send(`Update user with ID ${req.params.id}`);
});


DELETE

Purpose: Remove a resource from the server.

Example Use Case: Deleting a user by ID.

Express Example:

app.delete('/users/:id', (req, res) => {
  res.send(`Delete user with ID ${req.params.id}`);
});


PATCH

Purpose: Partially update an existing resource.

Example Use Case: Updating only the email of a user.

Express Example:

app.patch('/users/:id', (req, res) => {
  res.send(`Partially update user with ID ${req.params.id}`);
});


HEAD

Purpose: Similar to GET but only fetches headers, not the body.

Example Use Case: Check if a resource exists or validate caching.

Express Example:

app.head('/users', (req, res) => {
  res.sendStatus(200);
});