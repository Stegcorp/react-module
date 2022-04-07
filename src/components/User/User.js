import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <span>{user.name}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <hr/>
        </div>
    );
};

export default User;