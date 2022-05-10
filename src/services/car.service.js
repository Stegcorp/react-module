import {axiosService} from "./axios.service";
import {urls} from "../constants";


const carsService={
    getAll:()=>axiosService.get(urls.cars),
    deleteCar:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars,car),
    updateById:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar),
}


export {
    carsService
}