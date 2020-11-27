import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import MessagesView from './components/Messages';
import PostsList from './components/Posts';
import { UserList } from './components/UsersList';
import { IRootState } from './reducers';
import { IInitialMessagesState } from './reducers/Messages';
import { IUsersInitialState } from './reducers/Users';
// import { getAccessToken } from "./utils";
// import { useDispatch, useSelector } from "react-redux";
// import { ITokenDecode, userToStore } from "./actions/Users";
// import { IRootState } from "./reducers";
// import { IUsersInitialState } from "./reducers/Users";
// import { IUser } from "./actions/Users/interfaces";

function App() {
	const { user } = useSelector<IRootState, IUsersInitialState>(
		(state) => state.users,
	);
	return (
		<div className="App">
			<div className="" style={{ display: 'flex' }}>
				<div className="">
					<LoginForm />
					{user && <MessagesView />}
				</div>
				<div className="" style={{ marginLeft: 200 }}>
					Users:
					<UserList />
				</div>
				<div className="posts">
					Posts:
					<PostsList />
				</div>
			</div>
		</div>
	);
}

export default App;
