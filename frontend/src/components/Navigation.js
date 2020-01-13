import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div>
            <Link to='/CreateUser'>Create user</Link>
            <Link to='/'>User List</Link>
        </div>
     );
}
 
export default Navigation;