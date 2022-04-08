import React from 'react';

import './User.css'

const User = ({user,getUserId,getUser,getFalse}) => {
    const {id, name} = user
    return (
<div className={'w300'}>
    <div className={'dis'}>
        <div>  {id} -- {name} </div>
        <button onClick={()=> {
            getUserId(id)
           getUser(user)
            getFalse(null)
        } }>GetDetails</button>
    </div>
    <hr/>
</div>
    );
};

export {User};

