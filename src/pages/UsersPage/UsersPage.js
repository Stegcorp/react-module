import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {Post, Posts, User} from "../../components";
import {usersService} from "../../service";
import css from './Users.module.css'


const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={css.mainter}>
            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={css.other}>
                    <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};