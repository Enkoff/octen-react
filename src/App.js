import React, {useReducer} from 'react';

import Inputs from "./components/Inputs/Inputs";
import CatsAndDogs from "./components/CatsAndDogs/CatsAndDogs";
import './App.css';

const initialState = {
    cats: [],
    dogs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            const {arrayName, item} = action.payload;

            return {
                ...state,
                [arrayName]: [...state[arrayName], item]
            }
        case 'delete':
            const {id, arrName} = action.payload;

            return {
                ...state,
                [arrName]: state[arrName].filter(item => item.id !== id)
            }
        default:
            return initialState;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={'root__wrapper'}>
            <Inputs dispatch={dispatch}/>
            <hr style={{width: '100%'}}/>
            <div className={'container'}>
                <CatsAndDogs data={state.cats} arrName={'cats'}  dispatch={dispatch}/>
                <CatsAndDogs data={state.dogs} arrName={'dogs'} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default App;


