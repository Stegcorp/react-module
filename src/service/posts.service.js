import {axiosService} from "./axion.service";
import {urls} from "../constants";

const postsService={
    getAll:()=>axiosService.get(urls.posts),
    postById:(id)=>axiosService(`${urls.posts}/${id}`),
    getByUserId:(userId)=>axiosService.get(`${urls.users}/${userId}/posts`)
}

export {
    postsService
}