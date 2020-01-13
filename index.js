// implement your API here
const express = require('express');
const cors = require('cors');
const Users = require('./data/db');

const server = express();
server.use(cors());
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
server.post('/api/users', (req, res) => {
  const addUser = req.body;

  Users.insert(addUser)
    .then(user => {
      console.log('Success, a new user created', user);
      res.status(201);
      res.json(user);
    })
    .catch(error => {
      console.log('Sorry, no user added', error);
      res.status(500);
      res.json({ errorMessage: 'Sorry, no user created on the server' });
    });
});

//DELETE --> delete a user by ID
server.delete('/api/users/:id', (req, res) => {
  const userID = req.params.id;
  let deletedUser = {};

  Users.findById(userID)
    .then(user => {
      deletedUser = { ...user };
    })
    .catch(error => {
      console.log('No user with that ID deleted', error);
      res.status(500);
      res.json({ errorMessage: 'Successfully deleted user' });
    });

  Users.remove(userID)
    .then(user => {
      res.status(404);
      res.json(deletedUser);
    })
    .catch(error => {
      console.log('Sorry, no user removed', error);
      res.status(400);
      res.json({ errorMessage: 'Sorry, no user removed from the server' });
    });
});

//GET --> single user by ID
server.get('/api/users/:id', (req, res) => {
  const userID = req.params.id;

  Users.findById(userID)
    .then(user => {
      console.log('Successfully found a user with that ID', user);
      res.status(200);
      res.json(user);
    })
    .catch(error => {
      console.log('No user with that ID found', error);
      res.status(404);
      res.json({ errorMessage: 'Sorry, now user found with that ID on the server' });
    });
});

//PUT --> update a user by ID
server.put('/api/users/:id', (req, res) => {
  const userID = req.params.id;
  let newUser = req.body;

  Users.update(userID, newUser)
    .then(user => {
      console.log('Successfully updated user', user);
      res.status(200);
      res.json(newUser);
    })
    .catch(error => {
      console.log('Sorry, user not updated', error);
      res.status(400);
      res.json({ errorMessage: 'Sorry, user not updated on the server' });
    });
});

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
