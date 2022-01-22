import React, {useState} from 'react';

import './inputs.css';
import Input from "./Input";

const Inputs = ({filterUsersHandler}) => {
    const [inputs, setInputs] = useState({name: '', username: '', email: ''});

    const onChangeText = (value, inputName) => {
        setInputs({...inputs,[inputName]: value});
    }

    const findHandler = () => {
        filterUsersHandler(inputs);
    }

    return (
        <div className={'wrapper'}>
            <Input
                inputName={'name'}
                value={inputs.name}
                onChangeText={onChangeText}
            />
            <Input
                inputName={'username'}
                value={inputs.username}
                onChangeText={onChangeText}
            />
            <Input
                inputName={'email'}
                value={inputs.email}
                onChangeText={onChangeText}
            />
            <button onClick={findHandler}>FIND</button>
        </div>
    );
};

export default Inputs;


