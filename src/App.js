import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayouts} from "./Layout";
import {CommentsPage, HomePage, PostsPage, SinglePostsPage, SingleUserPage, UsersPage} from "./pages";
import {UserDetails} from "./components";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayouts/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<PostsPage/>}/>
                    </Route>
                    </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':postId'} element={<SinglePostsPage/>}>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                </Route>

            </Route>

        </Routes>
    );
}

export default App;
