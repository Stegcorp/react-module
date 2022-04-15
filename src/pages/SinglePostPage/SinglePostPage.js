import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../service";

const SinglePostPage = () => {
    const [post,setPost] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        postsService.getByIdPost(id).then(({data})=>setPost(data) )
    }, [id])
    return (
        <div>
            {

            }
        </div>
    );
};

export {SinglePostPage};