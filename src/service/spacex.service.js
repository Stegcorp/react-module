import {constants} from "../constants";

export const spacexService={
    allUrl: fetch(constants.apiUrl).then(value => value.json())
}