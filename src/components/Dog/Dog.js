import React from 'react';
import {useDispatch} from "react-redux";
import {actionDog} from "../../redux";

const Dog = ({dog}) => {
    const {name,id}= dog
const dispatch = useDispatch();
    function deleteDog() {
        dispatch(actionDog.deleteDog({id}))
    }

    return (
        <div>
            {name}
            <button onClick={()=>dispatch(actionDog.setDogForUpdate({dog}))}>update</button>
            <button onClick={deleteDog}>delete</button>
        </div>
    );
};

export  {Dog};