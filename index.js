// implement your API here
const express = require('express');
const db = require('./data/db');

const server = express();
server.use(express.json());

const port = 8000;

//write following endpoint: GET (all users), GET (user by id), POST, DELETE, PUT

//GET --> all user

//POST -> create a new user

//DELETE --> delete a user by ID

//GET --> single user by ID

//PUT --> update a user by ID

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
