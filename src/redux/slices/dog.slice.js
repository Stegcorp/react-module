import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs:[],
    dogForUpdate:null
}

const dogsSlice=createSlice({
    name: 'dogsSlice',
    initialState,
    reducers:{
        addDog:(state,action)=>{
            const {name}=action.payload
            const newDog = {id:new Date().getTime(),name}
            state.dogs.push(newDog)
        },
        deleteDog:(state,action)=>{
            const {id}=action.payload
            const index = state.dogs.findIndex(value => value.id===id)
            state.dogs.splice(index,1)
        },
        setDogForUpdate:(state,action)=>{
            state.dogForUpdate=action.payload.dog
        },
        update:(state,action)=>{
            const {id,name}=action.payload
            const index = state.dogs.findIndex(value => value.id===id)
            state.dogs[index].name=name
            state.dogForUpdate=false

        }
    }
})

const {reducer:dogReducer, actions:{addDog,deleteDog,setDogForUpdate,update}}=dogsSlice

export default dogReducer
export const actionDog={
    addDog,
    deleteDog,
    setDogForUpdate,
    update
}