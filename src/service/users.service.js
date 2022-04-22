import {axiosService} from "./axios.service";
import {urls} from "../constants";


const usersService={
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`),
    getPostUser:(userId)=>axiosService.get(`${urls.users}/${userId}/posts`)

}
export {
    usersService
}