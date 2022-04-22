import React from 'react';

import {Button} from "../Button/Button";

const UserDetails = ({user}) => {

   const {id,name,username,email,phone,website} =user

    return (
        <div>
            <div>
                <p><b><span>id</span>:{id}</b></p>
                <p><b><span>name</span>:{name}</b></p>
                <p><b><span>username</span>:{username}</b></p>
                <p><b><span>email</span>:{email}</b></p>
                <p><b><span>phone</span>:{phone}</b></p>
                <p><b><span>website</span>:{website}</b></p>
            </div>
            <Button to={'posts'} >user post</Button>
        </div>
    );
};

export {UserDetails};