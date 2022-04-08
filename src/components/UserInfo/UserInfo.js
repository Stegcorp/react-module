import React from 'react';
import './info.css'

const UserInfo = ({user,getPost}) => {
    const {id, name, username, email, address, phone, website} = user
    return (
        <div className={'w40'}>
            <div>
                <div className={'jcc'}><b>User Details</b></div>
                <div className={'detals'}>
                    <b>
                        № {id}<br/>
                        name : {name}<br/> username : {username}<br/> email : {email}<br/>
                        street : {address.street} <br/>
                        city : {address.city} <br/>
                        phone : {phone}<br/>
                        website : {website}
                    </b>
                    <button onClick={()=>getPost(id)}> Get Posts</button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;