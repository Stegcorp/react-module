import React, {useEffect, useState} from 'react';

import {usersService} from "../../services";
import User from "../User/User";

const Users = () => {

    const [users,setUsers] = useState([])

    useEffect(()=>{
      usersService.getAllUsers.then(value => setUsers(value))
    },[])

    return (
        <div>
            {
                users.map(user=> <User key={user.id} user={user}/>)
            }
        </div>
    );
}

export default Users;