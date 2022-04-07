import React, {useEffect, useState} from 'react';
import {usersService} from "../../service";
import {User} from "../User/User";

const Users = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data))
    },[])

    return (
        <div>
            hello
            {

                users.map(user=> <User key={user} user={user}/>)
            }
        </div>
    );
};

export {Users};