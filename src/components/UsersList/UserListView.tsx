import React from 'react';
import {IUserList} from './model';
import './UserList.scss';

const UserListView: React.FC<IUserList> = ({users}) => {
	return (
		<>
			<div className="ui four column grid">

					{users && users.map(user =>
						<div className="column">
							<div className="ui fluid card">
								<div className="image">
									<img src={`${process.env.REACT_APP_FILE_PATH}/${user.avatar_image}`}/>
								</div>
								<div className="content">
									<a className="header">{user.first_name} {user.last_name}</a>
								</div>
							</div>
						</div>)}

			</div>
		</>
	);
};

export { UserListView };
