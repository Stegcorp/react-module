import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarsForm = () => {
    const {carForUpdate} = useSelector(state => state.cars);
    const {handleSubmit, reset, setValue, register} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            const {model, year, price} = carForUpdate

            setValue('model', model)
            setValue('year', year)
            setValue('price', price)
        }
    }, [carForUpdate])

    const submit = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: newCar}))
        } else {
            await dispatch(carActions.createCar({car: newCar}))
        }
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model:<input type="text" {...register('model')} /></label></div>
            <div><label>year:<input type="text" {...register('year')} /></label></div>
            <div><label>price:<input type="text" {...register('price')} /></label></div>
            <button>{carForUpdate?'create':'Save'}</button>
        </form>
    );
};

export {CarsForm};