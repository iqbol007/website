import React from 'react';
import { IUserList } from './model';

const UserListView: React.FC<IUserList> = ({ users }) => {
	console.log(users);

	return (
		<>
			{users &&
				users?.map((o) => {
					return (
						<div key={o.id}>
							{o.first_name} {o.last_name}
						</div>
					);
				})}
		</>
	);
};

export { UserListView };
