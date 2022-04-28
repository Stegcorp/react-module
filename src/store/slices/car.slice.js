import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    cars:[
        {id:1,brand:'bmw'},
        {id:2,brand:'audi'},
        {id:3,brand:'kia'}
    ]
}

const carSlice = createSlice({
    name:'carSlice',
    initialState
});

const carReducer = carSlice.reducer;

export default carReducer