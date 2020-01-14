import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const UserList = props => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/users')
      .then(res => {
        console.log(res.data);

        setUserData(res.data);
      })
      .catch(error => {
        console.log('No user data returned', error);
      });
  }, []);

  return (
    <div>
      {userData.map((user, index) => {
        return <UserCard key={index} user={user} userData={userData} setUserData={setUserData} history={props.history} />;
      })}
    </div>
  );
};

export default UserList;
