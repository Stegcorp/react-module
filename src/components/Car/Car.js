import React from 'react';
import {carService} from "../../service";

const Car = ({car,setDelCar,setUpCar}) => {
    const {id, model, price, year} = car

  const deleteCar = async () => {
   await carService.deleteById(id);
      setDelCar(id)
  }
    return (
        <div>
            <div><b>id</b>: {id}</div>
            <div><b>model</b>: {model}</div>
            <div><b>price</b>: {price}</div>
            <div><b>year</b>: {year}</div>
            <button onClick={()=>deleteCar()}>delete</button>
            <button onClick={()=>setUpCar(car)}>update</button>
            <hr/>
        </div>
    );
};

export {Car};