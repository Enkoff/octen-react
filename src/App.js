import React, {useEffect, useState} from 'react';

import './App.css';
import Inputs from "./components/Inputs/Inputs";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";

const App = () => {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);

    const filterUsersHandler = (inputs) => {
        let copyUsers = JSON.stringify(users);
        copyUsers = JSON.parse(copyUsers);

        let filterUsers = [];

       if (inputs.name) {
           filterUsers = copyUsers.filter(user => user.name.toLowerCase().includes(inputs.name.toLowerCase()));
       }
       if (inputs.username) {
           filterUsers = copyUsers.filter(user => user.username.toLowerCase().includes(inputs.username.toLowerCase()));
       }
       if (inputs.email) {
           filterUsers = copyUsers.filter(user => user.email.toLowerCase().includes(inputs.email.toLowerCase()));
       }

       if (!inputs.name && !inputs.username && !inputs.email) {
           setFilterUsers(copyUsers);
           return;
       }
       setFilterUsers(filterUsers);
    }

    useEffect(() => {
        userService.getAll()
            .then(res => {
                setUsers(res);
                setFilterUsers(res);
            });
    },[]);

    return (
        <div className={'root__container'}>
            <Inputs filterUsersHandler={filterUsersHandler}/>
            <Users users={filterUsers}/>
        </div>
    );
};

export default App;


