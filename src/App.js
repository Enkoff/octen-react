import React, {useReducer} from 'react';
import Counter from "./components/Counter";

const initialState = {
    counter1: 0,
    counter2: 0,
    counter3: 0
}

const reducer = (state, action) => {
    const counterName = action.counterName;

    switch (action.type) {
        case 'inc':
            return {
                ...state,
                [counterName]: state[counterName] + 1
            }
        case 'dec':
            return {
                ...state,
                [counterName]: state[counterName] - 1
            }
        case 'res':
            return {
                ...state,
                [counterName]: initialState[counterName]
            }
        default:
            return initialState;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <Counter counter={state.counter1} counterName={'counter1'} dispatch={dispatch}/>
            <Counter counter={state.counter2} counterName={'counter2'} dispatch={dispatch}/>
            <Counter counter={state.counter3} counterName={'counter3'} dispatch={dispatch}/>
        </div>
    );
};

export default App;


