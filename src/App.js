import Users from "./components/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";
import Posts from "./components/Posts/Posts";
import {useState} from "react";

function App() {
    const [user,setUser]=useState(null)
    const [postId,setPostId]=useState(null)

    return (
        <div>
            <div>
                <Users getById={setUser} postFalse={setPostId}/>
                {user && <UserDetail user={user} getPostId={setPostId}/>}
            </div>
            <div>
                {postId && <Posts postId={postId}/>}
            </div>
        </div>
    );
}

export default App;
