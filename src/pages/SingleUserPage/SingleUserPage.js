import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {usersService} from "../../service";
import {UserDetails} from "../../components";
import css from './SingleUsersPage.module.css'

const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {userId} = useParams();

    useEffect(() => {
        if (!state) {
            usersService.getByIdUser(userId).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [userId, state])

    return (
        <div className={css.userTwo}>
            {user && <UserDetails user={user}/>}
            <Outlet/>
        </div>
    );
};

export {SingleUserPage};
