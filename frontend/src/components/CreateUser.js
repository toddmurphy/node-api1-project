import React, { useState } from 'react';
import axios from 'axios';
import EditUser from './EditUser';
import UserCard from './UserCard';

const CreateUser = () => {
  const [addUser, setAddUser] = useState({
    name: '',
    bio: ''
  });

  //handleInputChanges
  const handleInputChanges = event => {
    setAddUser({
      ...addUser,
      [event.target.name]: event.target.value
    });
  };

  //handleOnSubmitAddUser
  const handleOnSubmitAddUser = event => {
    event.preventDefault();

    axios
      .post('http://localhost:8000/api/users', addUser)
      .then(res => {
        console.log(res);

        setAddUser({
          name: '',
          bio: ''
        });
      })
      .catch(error => {
        console.log('Sorry, no user added', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmitAddUser}>
        {/* create user */}
        <h3>Add a User</h3>
        <input type="text" name="name" placeholder="Name" value={addUser.name} onChange={handleInputChanges} />
        <input type="text" name="bio" placeholder="Bio" value={addUser.bio} onChange={handleInputChanges} />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default CreateUser;
