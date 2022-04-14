import {CarForm, Cars} from "./components";
import {useState} from "react";


function App() {
    const [postCar,setPostCar] = useState(null);
    const [upCar,setUpCar] = useState(null);
    return (
        <div>
            <CarForm setPostCar={setPostCar} upCar={upCar}/>
            <hr/>
              <Cars postCar={postCar} setUpCar={setUpCar}/>
        </div>
    );
}

export default App;
