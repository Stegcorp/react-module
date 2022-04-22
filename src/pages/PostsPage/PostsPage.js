import React, {useEffect, useState} from 'react';
import {postsService, usersService} from "../../service";

import {Outlet, useLocation, useParams} from "react-router-dom";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts,setPosts] = useState([]);
  const {id} = useParams();

    useEffect(()=>{
       if(!id){
           postsService.getAll().then(({data})=>setPosts(data))
       }else {
           usersService.getPostUser(id).then(({data})=>setPosts(data))
       }
    },[id])
    return (
        <div>
            <div>
                {
                    posts.map(post=><Post key={post.id} post={post}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};