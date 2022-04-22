import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {PostDetails} from "../../components";
import {postsService} from "../../service";

const SinglePostsPage = () => {
        const {postId} = useParams();

    const [post,setPost] = useState(null);

  useEffect(()=>{
      postsService.getById(postId).then(({data})=>setPost(data))
  },[postId])


    return (
        <div>
            <div>
                {post && <PostDetails post={post}/>}
            </div>
            <Outlet/>
        </div>
    );
};

export {SinglePostsPage};