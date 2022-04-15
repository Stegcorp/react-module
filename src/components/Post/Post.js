import React from 'react';

import {Button} from "../Button/Button";
import css from './Post.module.css'

const Post = ({post}) => {
    const {id,title}=post
    return (
        <div className={css.post}>
            <p className={css.post}><b>{id}</b> -- {title}</p> <Button to={`${id}`} state={post} ><b>get Details</b></Button>
        </div>
    );
};

export {Post};