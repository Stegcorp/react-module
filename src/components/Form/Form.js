import React from 'react';

const Form = ({props}) => {
    let arr = []

    const click = () => {
     arr.push(props)
        for (const argument of arr) {

        }
    }

    return (
        <div>
            {argument}<button onClick={()=>click()}>delete</button>
        </div>
    );
};

export {Form};