import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionCat} from "../../redux";

const CatsForm = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch();
const {catForUpdate} = useSelector(({cats}) => cats);
    useEffect(()=>{
        if(catForUpdate) setName(catForUpdate.name);
    },[catForUpdate])
    
    const save = () => {
        if(catForUpdate){
                dispatch(actionCat.updateCat({name,id:catForUpdate.id}))
        }else {
            dispatch(actionCat.addCat({name}))
        }
      setName('')
    }
    return (
        <div>
            <label>Cat name: <input type="text" onChange={(e) => setName(e.target.value)}
                                    value={name}/></label>
            <button onClick={save}>{catForUpdate ? 'update' :'create'}</button>
        </div>
    );
};

export {CatsForm};