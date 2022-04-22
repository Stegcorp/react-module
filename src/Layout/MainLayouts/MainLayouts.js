import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './MainLayouts.module.css'

const MainLayouts = () => {
    return (
        <div>
            <div className={css.main}>
                <NavLink to={'home'}>Home</NavLink>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'}>Posts</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>

    );
};

export {MainLayouts};