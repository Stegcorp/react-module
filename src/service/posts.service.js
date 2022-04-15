import {axiosService} from "./axion.service";
import {urls} from "../constants";

const postsService={
    getAll:()=>axiosService.get(urls.posts),
    getByIdPost:(id)=>axiosService.get(`${urls.posts}/ ${id}`)
}

export {
    postsService
}