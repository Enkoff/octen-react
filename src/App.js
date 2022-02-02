import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './App.module.css';
import {Todo} from './components';
import {addTodo} from './store';

const App = () => {
    const {todos, all, completed} = useSelector(state => state['todo']);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const saveHandler = () => {
        const todo = {id: new Date().getTime(), name: value};
        value && dispatch(addTodo({todo}));
        setValue('');
    };

    return (
        <div>
            <div className={styles.header}>
                <div>All: {all}</div>
                <div>Completed: {completed}</div>
            </div>
            <div className={styles.inputContainer}>
                <input value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={saveHandler}>Save</button>
            </div>
            <hr/>
            <div className={styles.todoContainer}>
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo}/>)
                }
            </div>
        </div>
    );
};

export default App;
