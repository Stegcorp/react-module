import React from 'react';

const PostView = ({post}) => {
    const {id,userId, title, body} = post
        return (
            <div>
                <div>
                    <b>userId</b> : {userId}<br/>
                    <b>№ </b>{id}<br/>
                    <b>title</b> : {title}<br/>
                    <b>body</b> : {body}
                </div>
                <br/>
            </div>
        );
};

export default PostView;