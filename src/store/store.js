import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./slices/car.slice";
import userReducer from "./slices/user.slice";


const store = configureStore({
    reducer: {
        user: userReducer,
        car: carReducer
    }
});

export default store