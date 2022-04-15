import {axiosService} from "./axion.service";
import {urls} from "../constants";


const usersService={
    getAll:()=>axiosService.get(urls.users),
    getByIdUser:(id)=>axiosService.get(`${urls.users}/ ${id}`)
}

export {
    usersService
}