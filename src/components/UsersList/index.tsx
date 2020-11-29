import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../actions/Users';
import { IRootState } from '../../reducers';
import { IUsersInitialState } from '../../reducers/Users';
import { UserListView } from './UserListView';

const UserList: React.FC = () => {
	const dispatch = useDispatch();
	const { allUsers } = useSelector<IRootState, IUsersInitialState>(
		(state) => state.users,
	);
	useEffect(() => {
		if (!allUsers) {
			dispatch(getAllUsers());
		}
	}, [dispatch, allUsers]);

	return (
		<>
			User-List
			
			<UserListView users={allUsers} />
		</>
	);
};

export { UserList };
