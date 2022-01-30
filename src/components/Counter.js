import React from 'react';

const Counter = ({counter, counterName, dispatch}) => {
    return (
        <div>
            {counter}
            <button onClick={() => dispatch({type: 'inc', counterName: counterName})}>inc</button>
            <button onClick={() => dispatch({type: 'dec', counterName: counterName})}>dec</button>
            <button onClick={() => dispatch({type: 'res', counterName: counterName})}>res</button>
        </div>
    );
};

export default Counter;


