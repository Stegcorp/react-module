import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {postsService} from "../../service";
import {Post} from "../../components";
import css from './PostPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div className={css.main}>
            <div className={css.post}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <div className={css.detail}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};