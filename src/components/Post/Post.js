import React, {useEffect, useState} from 'react';
import {postsService} from "../../service";
import PostView from "../PostView/PostView";

const Post = ({postId}) => {
    const [posts,setPosts] = useState(null)

    useEffect(()=>{
        postsService.getByIdPost(postId).then(({data}) => setPosts(data))
    },[])
    console.log(postId);
    return (
        <div>
            {
               posts &&  posts.map((post)=><PostView key={post.id} post={post} />)
            }
        </div>
    );
};

export default Post;