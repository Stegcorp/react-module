import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";
import Post from "../Post/Post";

const Posts = () => {
    const [posts,setPosts]= useState([])
    console.log(setPosts);
    useEffect(()=>{
        postsService.getAllPosts.then(value => setPosts(value))
    },[])

    return (
        <div>
            {
                posts.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;