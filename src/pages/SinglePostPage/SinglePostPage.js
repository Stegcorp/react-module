import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {postsService} from "../../service";
import {PostDetails} from "../../components";
import css from './SinglePostDetails.module.css'

const SinglePostPage = () => {

    const {id} =useParams();

    const [post,setPost] = useState([]);
    useEffect(()=>{
        postsService.postById(id).then(({data}) => setPost(data))
    },[id])
    return (
        <div className={css.main}>
            {post && <PostDetails post={post}/>}
            <Outlet/>
        </div>
    );
};


export {SinglePostPage};