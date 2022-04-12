import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../service";

const CarForm = ({setNewCar, upCar,setUpi}) => {
    const {register, handleSubmit, reset, setValue} = useForm();

    const submit = async (car) => {
        if(upCar){
     await carService.update(upCar.id,car);
            setUpi(false)
        } else {
            const {data} = await carService.create(car);
        setNewCar(data)
        }
        reset()
    }

    useEffect(() => {
        if (upCar) {
            const {model, price, year} = upCar
            setValue('model',model)
            setValue('price',price)
            setValue('year',year)
        }
    }, [upCar])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="text"{...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>Year: <input type="text"{...register('year', {valueAsNumber: true})}/></label></div>
            <button><b>Enter</b></button>
        </form>
    );
};

export {CarForm};