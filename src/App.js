import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div>
            <div className={'df'}>
                <Users/>
                <Posts/>
            </div>
<Comments/>
        </div>
    );
}

export default App;
