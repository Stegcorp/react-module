import React from "react";
import {Button} from "../Button/Button";
import css from './Post.module.css'


const Post = ({post, flag}) => {
    const {id, title} = post;

    return (
        <div className={css.post}>
            <div><b><span style={{color: "green"}}> №</span>: {id}</b> <b>
                <span style={{color: "green"}}>title</span> :{title}</b></div>
            {flag && <Button to={`${id}`} state={post}>Get Details</Button>}
        </div>
    );
};

export {Post};