import React, {useEffect, useState} from 'react';
import {carsService} from "../../service";
import {Car} from "../Car/Car";

const Cars = ({postCar,setUpCar}) => {
    const [cars,setCars] = useState([]);
    const [delCars,setDelCars] = useState(null);

    useEffect(()=>{
            carsService.getAll().then(({data})=>setCars(data))
        },[postCar,delCars])
    return (
        <div>
            {
                cars.map(car =><Car key={car.id} car={car} setDelCars={setDelCars} setUpCar={setUpCar}/> )
            }
        </div>
    );
};

export {Cars};