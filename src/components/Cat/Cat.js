import React from 'react';
import {useDispatch} from "react-redux";
import {actionCat} from "../../redux";

const Cat = ({cat}) => {
    const {id, name} = cat
    const dispatch = useDispatch();

    function deletCat() {
        dispatch(actionCat.deleteCat({id}))
    }

    return (
        <div>
            {name}
            <button onClick={() => dispatch(actionCat.setCatForUpdate({cat}))}>update</button>
            <button onClick={deletCat}>delete</button>
        </div>
    );
};

export {Cat};