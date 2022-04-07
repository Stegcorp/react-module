import React from 'react';

const User=(user)=> {
    const{id,name,username} = user
    console.log(user);
    return (
        <div>
            {id} -- {name} -- {username}
        </div>
    );
}

export {User};
