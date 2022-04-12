import React from 'react';

const UserDetail = ({user,getPostId}) => {
    const {id,name,username,address ,email,phone,website}=user

    return (
        <div>
            {<b>
                 № {id}<br/>
                    name - {name}<br/>
                username - {username}<br/>
                    city - {address.city}<br/>
                email - {email}<br/>
                phone - {phone}<br/>
                website - {website}<br/>
            </b>}
            <button onClick={()=> getPostId(id)}> Get posts </button>
        </div>
    );
};

export default UserDetail;