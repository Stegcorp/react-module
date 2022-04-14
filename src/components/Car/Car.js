import React from 'react';
import {carsService} from "../../service";

const Car = ({car,setDelCars,setUpCar}) => {
    const {id,model,price,year}=car
    const delClick= async ()=>{
        await carsService.deleteById(id)
        setDelCars(car)
    }

    return (
        <div>
            <div><b>id: </b>{id}</div>
            <div><b>model: </b>{model}</div>
            <div><b>price: </b>{price}</div>
            <div><b>year: </b>{year}</div>
             <button onClick={delClick}>delete</button>
             <button onClick={()=>setUpCar(car)}>update</button>
            <br/>

        </div>
    );
};

export {Car};