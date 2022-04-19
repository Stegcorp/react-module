import React from 'react';
import css from './User.module.css'
import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id,name}=user
    return (
        <div className={css.main}>
            <div><b><span className={css.color}>id</span>: {id}</b><br/>
                <b><span className={css.color}>name</span> :{name}</b></div>
            <Button to={`${id}`} state={user}>Get Details</Button>
        </div>
    );
};

export {User};