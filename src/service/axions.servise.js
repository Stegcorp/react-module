import axios from "axios";
import baseURL from "../constants/urls";

export const axionsServise=axios.create({baseURL})