import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentsService={

    getById:(postId)=>axiosService.get(`${urls.posts}/${postId}/comments`)

}

export {
    commentsService
}