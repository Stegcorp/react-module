import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
    count1: 0,
    count2: 0,
    count3: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                [action.name]: state[action.name] + 1,
            };
        case 'DEC':
            return {
                ...state,
                [action.name]: state[action.name] - 1,
            };
        case 'reset':
            return {
                ...state,
                [action.name]:0
            }
        default:
            return state;
    }
};

const useValue = () => useReducer(reducer, initialState);

const Context = createContext(null);

// const useGlobalState = () => {
//     const value = useContext(Context);
//     if (value === null) throw new Error('Please add GlobalStateProvider');
//     return value;
// };

const GlobalStateProvider = ({ children }) => (
    <Context.Provider value={useValue()}>{children}</Context.Provider>
);

const Counter = ({ name }) => {
    const value = useContext(Context);
    // const [state, dispatch] = useGlobalState();
    const [state, dispatch] = value;
    return (
        <div>
            {state[name]}
            <button onClick={() => dispatch({ type: 'INC', name })}>+1</button>
            <button onClick={() => dispatch({ type: 'DEC', name })}>-1</button>
            <button onClick={() => dispatch({ type: 'reset', name })}>reset</button>
        </div>
    );
};

const CounterOne = () => (
    <GlobalStateProvider>
        <h2>Count1</h2>
        <Counter name="count1" />
        <h2>Count2</h2>
        <Counter name="count2" />
        <h2>Count3</h2>
        <Counter name="count3" />
    </GlobalStateProvider>
);

export {CounterOne};