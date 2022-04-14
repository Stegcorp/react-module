import {axiosService} from "./axion.service";
import {urls} from "../constants";

 const carsService={
    getAll:()=>axiosService.get(urls.cars),
    getById:(id)=>axiosService.get(urls.cars+'/'+id),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar),
    create:(car)=>axiosService.post(urls.cars,car)
}
export {
    carsService
}