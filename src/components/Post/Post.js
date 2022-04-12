import React from 'react';

const Post = ({post}) => {
    const {userId,id, title, body}=post
    return (
        <div>
            <p><b>userId</b> - {userId} </p>
            <p><b>№</b> - {id} </p>
            <p><b>title</b> - {title} </p>
            <p><b>body</b> - {body} </p>
        <hr/>
        </div>
    );
};

export default Post;