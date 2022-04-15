import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {postsService} from "../../service";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div style={{display:"flex"}}>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};