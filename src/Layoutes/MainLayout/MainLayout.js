import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom"
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div className={css.hader}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
