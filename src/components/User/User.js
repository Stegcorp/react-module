import React from 'react';

const User = ({user,getById,postFalse}) => {
    const {id,name}=user
    return (
        <div>
            <span>
                {id} -- {name}
            </span>
             <button onClick={()=> {
                 getById(user)
                 postFalse(false)
             }}>UserDetail</button>
            <hr/>
        </div>
    );
};

export default User;