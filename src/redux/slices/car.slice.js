import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";


const initialState = {
    cars: [],
    carForUpdate: null
}

const getAll = createAsyncThunk(
    'getAllCars',
    async () => {
        const {data} = await carsService.getAll();
        return data
    }
);
const createCar = createAsyncThunk(
    'createCar',
    async ({car}, {dispatch}) => {
        const {data} = await carsService.create(car);
        dispatch(create({car: data}))
    }
)
const updateById = createAsyncThunk(
    'updateById',
    async ({id, car}, {dispatch}) => {
        await carsService.updateById(id, car);
        dispatch(updateCarById({id, car}))
    }
)

const deleteById = createAsyncThunk(
    'deleteById',
    async ({id}, {dispatch}) => {
        await carsService.deleteCar(id)
        dispatch(deleteCarById({id}))
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index, 1)
        },
        create: (state, action) => {
            const car = action.payload.car
            state.cars.push(car)
        },
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index]= {...state.cars[index], ...action.payload.car};
            state.carForUpdate = false;
        },
         setCarForUpdate:(state,action)=>{
           state.carForUpdate=action.payload.car
         }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })

    }
})


const {reducer: carReducer, actions: {create, deleteCarById, updateCarById, setCarForUpdate}} = carSlice;

const carActions = {
    deleteById,
    getAll,
    createCar,
    updateById,
    setCarForUpdate
}

export {
    carActions,
    carReducer
}
