import {axiosService} from "./axion.service";
import {urls} from "../constants";

const commentsService={
    getByPostId:(postId)=>axiosService.get(`${urls.posts}/${postId}/comments`)
}

export {
    commentsService
}