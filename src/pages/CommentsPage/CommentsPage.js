import React, {useEffect, useState} from 'react';
import {commentsService} from "../../service";
import {useLocation, useParams} from "react-router-dom";
import {Comment} from "../../components";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {postId} = useParams();

    useEffect(() => {
        commentsService.getById(postId).then(({data}) => setComments(data))
    }, [postId])
    return (
        <div>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment} />)
            }
        </div>
    );
};

export {CommentsPage};