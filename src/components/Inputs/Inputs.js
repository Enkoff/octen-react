import React, {useState} from 'react';

import Input from "../Input/Input";
import style from './inputs.module.css';

const Inputs = ({dispatch}) => {
    const [inputs, setInputs] = useState({catInput: '', dogInput: ''});

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const clearField = (fieldName) => {
        setInputs({...inputs, [fieldName]: ''});
    }

    return (
        <div className={style.container}>
            <Input
                addName={'Add Cat'}
                value={inputs.catInput}
                onChange={onChange}
                name={'catInput'}
                dispatch={dispatch}
                arrayName={'cats'}
                clearField={clearField}
            />
            <Input
                addName={'Add Dog'}
                value={inputs.dogInput}
                onChange={onChange}
                name={'dogInput'}
                dispatch={dispatch}
                arrayName={'dogs'}
                clearField={clearField}
            />
        </div>
    );
};

export default Inputs;