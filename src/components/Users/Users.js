import React, {useEffect, useState} from 'react';
import {usersService} from "../../service";
import {User} from "../User/User";

const Users = ({getUser,getFalse}) => {
    const [users,setUsers] = useState([])
    const [user,setUser] = useState(null)

    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data))
    },[])

    let getUserId = async (id)=>{
        const {data} = await usersService.getById(id)
        setUser(data)
    }

    return (
        <div>
            <div>
                {
                    users.map(user=> <User key={user.id} user={user} getUserId={getUserId} getUser={getUser} getFalse={getFalse}/>)
                }
            </div>
            {/*{user && <div>{user.name} -- {user.username}</div>}*/}
        </div>
    );
};

export {Users};