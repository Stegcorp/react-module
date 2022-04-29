import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";


let initialState={
        cars:[]
};
const getAll = createAsyncThunk(
    'getAllCar',
    async ()=>{
       const {date} = await carsService.getAll();
       return date
    }
);

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getAll.pending]:(state,action)=>{
            console.log('pending');
        },
        [getAll.fulfilled]:(state,action)=>{
            console.log(action.payload);
            console.log('fulfilled');
        },
        [getAll.rejected]:(state,action)=>{
            console.log('rejected');
        }

    }
});

const actionCar={
  getAll
}

const {reducer:carReducer,actions} = carSlice;

export {
    carReducer,actionCar
}