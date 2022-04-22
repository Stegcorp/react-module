import React from 'react';
import {Button} from "../Button/Button";

const PostDetails = ({post}) => {
    const {id,userId,title,body}=post
    return (
        <div>
            <div>
                <p> <b>id:</b>{id}</p>
                <p> <b>userId:</b>{userId}</p>
                <p> <b>title:</b>{title}</p>
                <p> <b>body:</b>{body}</p>
            </div>
            <Button to={'comments'} >get comments</Button>
        </div>
    );
};

export {PostDetails};