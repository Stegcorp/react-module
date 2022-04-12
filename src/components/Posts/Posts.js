import React, {useEffect, useState} from 'react';
import {postsService} from "../../service";
import Post from "../Post/Post";

const Posts = ({postId}) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        postsService.getByPostId(postId).then(({data}) => setPosts(data))
    }, [])


    return (
        <div>
            {
                posts ? posts.map(post => <Post key={post.id} post={post}/>)
                    : 'Loading...'
            }
        </div>
    );
};

export default Posts;