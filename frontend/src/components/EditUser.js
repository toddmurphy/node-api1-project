import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = props => {
  const [addUser, setAddUser] = useState({
    name: '',
    bio: ''
  });

  //setup useEffect to get request to api using dynamic id to get single user -->
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setAddUser(res.data);
      })
      .catch(error => {
        console.log('Sorry, user not updated', error);
      });
  }, [props.match.params.id]);

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
      .put(`http://localhost:8000/api/users/${props.match.params.id}`, addUser)
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

  const cancelEdit = () => {
    props.history.push('/');
  };

  return (
    <div>
      <form onSubmit={handleOnSubmitAddUser}>
        <h3>Edit User</h3>
        <input type="text" name="name" placeholder="Name" value={addUser.name} onChange={handleInputChanges} />
        <input type="text" name="bio" placeholder="Bio" value={addUser.bio} onChange={handleInputChanges} />
        <button type="submit">Update user</button>
        <button onClick={() => cancelEdit()}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUser;
