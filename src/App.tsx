import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import MessagesList from './components/MessageList';
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
	const { activeUsers } = useSelector<IRootState, IInitialMessagesState>(
		(state) => state.messages,
	);
	const { user } = useSelector<IRootState, IUsersInitialState>(
		(state) => state.users,
	);
	return (
		<div className="App">
			<LoginForm />
			{user && <MessagesList />}
			<UserList />
		</div>
	);
}

export default App;
