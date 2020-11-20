import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../reducers';
import { IUsersInitialState } from '../../reducers/Users';
import { UserListView } from './UserListView';

const UserList: React.FC = () => {
    const dispatch = useDispatch()
    const { allUsers } = useSelector<IRootState, IUsersInitialState>(state => state.users)
    useEffect(() => {



    }, [dispatch, allUsers])

    return (
        < >
            <UserListView users={allUsers} />
        </ >
    );
}

export { UserList };
