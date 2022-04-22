import React, {useEffect, useState} from 'react';
import {usersService} from "../../service";
import {Outlet, useLocation, useParams} from "react-router-dom";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const {id} = useParams();
    const {state} =useLocation()

    const [user,setUser] =useState([]);

    useEffect(()=>{
        if(!state){
            usersService.getById(id).then(({data})=>setUser(data))
        }else {
            setUser(state)
        }
     },[id,state])

    return (
        <div>
            <div>
                {
                    user && <UserDetails  user={user}/>
                }
            </div>
            <Outlet/>
        </div>

    );
};

export  {SingleUserPage};