import {axionsServise} from "./axions.servise";
import {urls} from "../constants";

export const postsService={
    getByPostId:(id)=> axionsServise.get(`${urls.posts}?userId=${id}`)
}