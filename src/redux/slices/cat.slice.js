import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats:[],
    catForUpdate:null
}

const catsSlice=createSlice({
    name: 'catsSlice',
    initialState,
    reducers:{
            addCat:(state,action)=>{
                const {name}= action.payload
                const newCat={id:new Date().getTime(),name}
                state.cats.push(newCat);
            },
        deleteCat:(state,action)=>{
                const {id}=action.payload
                const index = state.cats.findIndex((value) => value.id===id)
            state.cats.splice(index,1)
        },
        setCatForUpdate:(state,action)=>{
                state.catForUpdate=action.payload.cat
        },
        updateCat:(state,action)=>{
                const {id,name} =action.payload
            const index = state.cats.findIndex((value) => value.id===id);
                state.cats[index].name =name
            state.catForUpdate = false
        }
    }
})

const {reducer:catReducer, actions:{addCat,deleteCat,setCatForUpdate,updateCat}}=catsSlice

export default catReducer
export const actionCat={
    addCat,
    deleteCat,setCatForUpdate,updateCat
}