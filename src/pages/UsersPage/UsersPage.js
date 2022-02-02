import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsersThunk} from '../../store';

import {User} from '../../components';

const UsersPage = () => {
    const {users} = useSelector(state => state['user']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersThunk());
    }, [dispatch]);
    
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {UsersPage};