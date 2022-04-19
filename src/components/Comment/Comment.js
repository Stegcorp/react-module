import React from 'react';

import css from './Comment.module.css'

const Comment = ({comment}) => {
    const {postId,name} = comment;
    return (
        <div className={css.color}>
            <p><b><span>postId:</span>{postId}</b> <b><span>name:</span>{name}</b></p>
        </div>
    );

};

export  {Comment};