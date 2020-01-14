import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCard = props => {
  console.log(props);
  const { name, bio, id } = props.user;

  //handleDelete
  const handleDelete = event => {
    event.preventDefault();

    axios
      .delete(`http://localhost:8000/api/users/${id}`)
      .then(res => {
        console.log(res);
        const filteredData = props.userData.filter(user => user.id !== id);
        props.setUserData(filteredData);
      })
      .catch(error => {
        console.log('Sorry, no user deleted', error);
      });
  };

  //handleEdit

  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{bio}</p>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserCard;
