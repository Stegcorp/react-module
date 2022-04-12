import {axionsServise} from "./axions.servise";
import {urls} from "../constants";

export const usersService = {
    getAll:()=> axionsServise.get(urls.users)

}