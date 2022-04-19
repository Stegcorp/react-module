import React, {useEffect, useState} from 'react';
import {commentsService} from "../../service";
import {useParams} from "react-router-dom";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments,setComments]=useState([]);
       const {id}=useParams();

    useEffect(()=>{
        commentsService.getByPostId(id).then(({data})=>setComments(data))
    },[id])
    return (
        <div>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export  {Comments};