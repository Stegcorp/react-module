import React from 'react';
import css from './PostDetails.module.css'
import {Button} from "../Button/Button";

const PostDetails = ({post}) => {
    const {userId,id,title,body}=post

    return (
        <div className={css.posDetail}>
            <div>
                <p><b><span>id</span>:{id}</b></p>
                <p><b><span>userId</span>:{userId}</b></p>
                <p><b><span>title</span>:{title}</b></p>
                <p><b><span>body</span>:{body}</b></p>
            </div>
            <div><Button  to={'comments'}>Get comments</Button></div>
        </div>
    );
};

export {PostDetails};