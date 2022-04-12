import React, {useEffect, useState} from 'react';
import {carService} from "../../service";
import {Car} from "../Car/Car";

const Cars = ({newCar,setUpCar,upi}) => {
    const [cars,setCars] = useState([]);
    const [delCar,setDelCar] = useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[delCar,newCar,upi])

    return (
        <div>
            {
                cars.map(car=> <Car key={car.id} car={car} setDelCar={setDelCar} setUpCar={setUpCar}/>)
            }
        </div>
    );
};

export {Cars};