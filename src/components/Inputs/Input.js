import React from 'react';

const Input = ({inputName, value, onChangeText}) => {
    return (
        <div>
            <div>
                {inputName.toUpperCase()}
            </div>
            <input
                value={value}
                onChange={(e) => onChangeText(e.target.value, inputName)}
            />
        </div>
    );
};

export default Input;


