import React, {useReducer} from 'react';

const Animals = () => {

    function reducer(state,action) {

    }

    const [state,dispatch] = useReducer(reducer,{cats:[],dogs:[]});

    return (
        <div>
            <form>

            </form>
            <div></div>

        </div>
    );
};

export {Animals};