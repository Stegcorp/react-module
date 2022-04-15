import {axiosService} from "./axion.service";
import {urls} from "../constants";

const commentsService={
    getAll:()=>axiosService.get(urls.comments)
}