import React, {useReducer} from 'react';

const Counter = () => {


    function reducer(state,action) {
            switch (action.type) {
                case 'inc':
                    return {...state, count: state.count+1}
                 case 'dec':
                    return {...state, count: state.count-1}
                case 'reset':
                    return {...state, count: action.payload}
                default:
                    return state
            }
    }

    const [state,dispatch] = useReducer(reducer,{count:0})
    return (
        <div>
            <div>Count: {state.count} </div>
            <button onClick={()=>dispatch({type:'inc'})}>inc</button>
            <button onClick={()=>dispatch({type:'dec'})}>dec</button>
            <button onClick={()=>dispatch({type:'reset',payload:0})}>reset</button>
        </div>
    );
};

export {Counter};