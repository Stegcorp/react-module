import React, {useState} from 'react';

import css from './CatAndDog.module.css'
import {Form} from "../Form/Form";

const CatAndDog = () => {

    const [dog,setDog]= useState();
    const [cat,setCat]= useState();

    function mySubmit(e) {
        e.preventDefault()
        console.log(e.target.cat.value)
        setCat(e.target.cat.value)
    }

    function dogSubmit(e) {
        e.preventDefault()
        setDog(e.target.dog.value)
    }

    return (
       <div >
           <div className={css.main}>
                   <form onSubmit={mySubmit}><label > Add Cat <input type="text" name={'cat'}/></label>
                       <button>Save</button></form>

               <form onSubmit={dogSubmit}><label > Add Dog <input type="text" name={'dog'}/></label>
                   <button>Save</button></form>
           </div>
           <hr/>
           {dog && <Form props={dog}/>}
           {cat && <Form props={cat}/>}
       </div>
    );
};

export  {CatAndDog};