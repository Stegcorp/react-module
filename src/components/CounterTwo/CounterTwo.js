import React, {useReducer} from 'react';


const initialState={
    firstCounter:0,
    secondCounter:0,
    threeCounter:0
}

const reducer=(state,action)=>{
        switch (action.type) {
            case 'inc':
                return {...state,firstCounter: state.firstCounter +1}
            case 'dec':
                return {...state,firstCounter: state.firstCounter -1}
            case 'inc2':
                return {...state,secondCounter: state.secondCounter +1}
            case 'dec2':
                return {...state,secondCounter: state.secondCounter -1}
            case 'inc3':
                return {...state,threeCounter: state.threeCounter +1}
            case 'dec3':
                return {...state,threeCounter: state.threeCounter -1}
            case 'reset':
                return {...state,firstCounter: 0}
            case 'reset2':
                return {...state,secondCounter: 0}
            case 'reset3':
                return {...state,threeCounter: 0}
        }

}


const CounterTwo = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <div>firstCounter : {state.firstCounter}</div>
            <button onClick={()=>dispatch({type:'inc'})}>inc</button>
            <button onClick={()=>dispatch({type:'dec'})}>dec</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button><br/>
            <hr/>
            <div>secondCounter : {state.secondCounter}</div>
            <button onClick={()=>dispatch({type:'inc2'})}>inc</button>
            <button onClick={()=>dispatch({type:'dec2'})}>dec</button>
            <button onClick={()=>dispatch({type:'reset2'})}>reset</button><br/>
            <hr/>
            <div>threeCounter : {state.threeCounter}</div>
            <button onClick={()=>dispatch({type:'inc3'})}>inc</button>
            <button onClick={()=>dispatch({type:'dec3'})}>dec</button>
            <button onClick={()=>dispatch({type:'reset3'})}>reset</button>
        </div>
    );
};

export {CounterTwo};