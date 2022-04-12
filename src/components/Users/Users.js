import React, {useEffect, useState} from 'react';
import {usersService} from "../../service";
import User from "../User/User";

const Users = ({getById,postFalse}) => {

   const [users,setUsers] = useState(null);

   useEffect(()=>{
       usersService.getAll().then(({data}) => setUsers(data) )
   },[])

    return (
        <div>
            {
                users && users.map(user => <User key={user.id} user={user} getById={getById} postFalse={postFalse}/>)
            }
        </div>
    );
};

export default Users;