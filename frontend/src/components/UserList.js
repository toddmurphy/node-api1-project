import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const UserList = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                console.log(res)

                // setUserData(res)
            })
            .catch(error => {
                console.log('No user data returned', error)
            })
    }, [])


    return ( 
        <div>
            <UserCard/>
        </div>
     );
}
 
export default UserList;