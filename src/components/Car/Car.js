import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car,car: {id, year, model, price}}) => {

    const dispatch = useDispatch();

    const deleteById = async () => {
        await dispatch(carActions.deleteById({id}))
    }


    return (
        <div>
            <b>id:</b> {id} <b>model:</b>{model} <b>year:</b>{year} <b>price:</b>{price}
            <button onClick={deleteById}>delete</button>
            <button onClick={()=>dispatch(carActions.setCarForUpdate({car}))}>update</button>
        </div>
    );
};

export {Car};
