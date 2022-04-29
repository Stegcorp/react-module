import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionDog} from "../../redux";

const DogsForm = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
        const {dogForUpdate} = useSelector(({dogs}) => dogs);
    useEffect(()=>{
        if(dogForUpdate)setName(dogForUpdate.name)
    },[dogForUpdate])

    function save() {
        if(dogForUpdate){
            dispatch(actionDog.update({name,id:dogForUpdate.id}))
        }else {
        dispatch(actionDog.addDog({name}))
        }
        setName('')
    }

    return (
        <div>
            <label>Dog name: <input type="text" onChange={({target}) => setName(target.value)}
                                    value={name}/></label>
            <button onClick={save}>{dogForUpdate ? 'update':'create'}
            </button>
        </div>
    );
};

export {DogsForm};