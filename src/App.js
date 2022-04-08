import {Users} from "./components";
import UserInfo from "./components/UserInfo/UserInfo";
import './App.css'
import {useState} from "react";
import Post from "./components/Post/Post";

function App() {
  const [userInfo,setUserInfo]= useState(null)
    const [postId,setPostId]=useState(null)
    return (
        <div>
            <div className={'df_m10'}>
                <Users  getUser={setUserInfo} getFalse={setPostId}/>
                {userInfo && <UserInfo user={userInfo} getPost={setPostId}/>}
            </div>
            <div>
                {postId && <Post postId={postId}/>}
            </div>

        </div>
    );
}

export default App;
