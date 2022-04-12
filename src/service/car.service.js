import {axiosService} from "./axios.service";
import {urls} from "../constants";

 const carService ={
    getAll:()=>axiosService.get(urls.cars),
    getByid:(id)=>axiosService(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars,car),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    update:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar)

}

export {carService}