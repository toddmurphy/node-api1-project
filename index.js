// implement your API here
const express = require('express');
const Users = require('./data/db');

const server = express();
server.use(express.json());

const port = 8000;

//write following endpoint: GET (all users), GET (user by id), POST, DELETE, PUT

//GET --> all users
server.get('/api/users', (req, res) => {
  //get the users from the database --> db
  Users.find()
    .then(users => {
      console.log('Succesfully received data from server', users);
      res.json(users);
      res.status(200);
    })
    .catch(error => {
      console.log('No users returned from the database', error);
      res.status(500);
      res.json({ errorMessage: 'Sorry, no data received from the server', error });
    });
});

//POST -> create a new user

//DELETE --> delete a user by ID

//GET --> single user by ID

//PUT --> update a user by ID

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
