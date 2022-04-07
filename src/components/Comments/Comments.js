import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments,setComments]= useState([])

    useEffect(()=>{
        commentsService.getAllComments.then(value => setComments(value))
    },[])
    return (
        <div>
            {
                comments.map(comment=> <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;