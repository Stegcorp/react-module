import {CarForm, Cars} from "./components";
import {useState} from "react";


function App() {
    const [newCar,setNewCar] = useState(null);
    const [upCar,setUpCar] = useState(null);
    const [upi,setUpi] = useState(null);

    return (
        <div>
          <CarForm setNewCar={setNewCar} upCar={upCar} setUpi={setUpi}/>
            <hr/>
            <Cars newCar={newCar} setUpCar={setUpCar} upi={upi} />
        </div>
    );
}

export default App;
