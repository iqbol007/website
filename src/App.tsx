import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import { AuthenticateRoute } from './components/AuthenticateRoute/AuthenticateRoute';
import LoginForm from './components/LoginForm';
import MessagesView from './components/Messages';
import PostsList from './components/Posts';
import { UserList } from './components/UsersList';
import { Home } from './layouts/Home';
import { IRootState } from './reducers';
import { IUsersInitialState } from './reducers/Users';
import { getAccessToken } from './utils';
import * as jwt from 'jsonwebtoken';
import { ITokenDecode, userToStore } from './actions/Users';

function App() {
	const dispatch = useDispatch();
	const { user } = useSelector<IRootState, IUsersInitialState>(
		(state) => state.users,
	);
	useEffect(() => {
		if (!user) {
			const token = getAccessToken();
			if (token) {
				const decoded = jwt.decode(token);
				dispatch(userToStore(decoded as ITokenDecode));
			}
		}
	}, [user]);
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/login" exact component={LoginForm} />
					<AuthenticateRoute path="/messages" component={MessagesView} />
					<AuthenticateRoute path="/users" component={UserList} />
					<AuthenticateRoute path="/posts" component={PostsList} />
					<AuthenticateRoute path="/home" component={Home} />
					<Redirect to="/login" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
