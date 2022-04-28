import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    users:[
        {id:1,name:'ira'},
        {id:2,name:'max'},
        {id:3,name:'vasia'}
    ]
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        addUser:(state,action)=> {
            const user = action.payload.user;
            state.users.push(user)
        },
        deleteUser:(state,action)=>{
            const index = state.users.findIndex(value => value.id===action.payload.user.id);
            state.users.splice(index,1)

        }
    }
});

const userReducer = userSlice.reducer;

export const {addUser,deleteUser} = userSlice.actions;
export default userReducer
