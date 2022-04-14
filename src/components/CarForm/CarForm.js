import {useForm} from "react-hook-form";
import {carsService} from "../../service";
import {useEffect} from "react";


const CarForm = ({setPostCar, upCar}) => {
    const {reset, handleSubmit, register, setValue} = useForm();

    const mySubmit = async (car) => {
        if (upCar) {
             await carsService.updateById(upCar.id,car);
            setPostCar(upCar)
        } else {
            const {data} = await carsService.create(car);
            setPostCar(data);
        }
        reset()
    }

    useEffect(() => {
        if (upCar) {
            const {model, price, year} = upCar
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [upCar])

    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="text"{...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>Year: <input type="text"{...register('year', {valueAsNumber: true})}/></label></div>
            <button>Enter</button>
        </form>
    );
};

export {CarForm};