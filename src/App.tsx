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
import Template from './layouts/Template/Template';
import Semantic from './layouts/Semantic/Semantic';
import Chat from './layouts/Chat/Chat';
import Loader from './components/Loader/loader';
// import { Loader } from 'semantic-ui-react';
/**
 * sasdsdgfghghmuilK
 */
function App() {
	const dispatch = useDispatch();
	const { user, loading } = useSelector<IRootState, IUsersInitialState>(
		(state) => state.users,
	);
	enum s {
		a = 1,
		b = 2,
	}
	useEffect(() => {
		if (!user) {
			const token = getAccessToken();
			if (token) {
				const decoded = jwt.decode(token);
				dispatch(userToStore(decoded as ITokenDecode));
			}
		}
		console.log(Object.keys(s).filter((o) => isNaN(Number(o))));
	}, [user, dispatch]);
	return (
		<>
			{loading && <Loader />}
			<Router>
				<Switch>
					{/* <Route path="/login" exact component={LoginForm} /> */}
					{/* <Route path="/template" exact component={Template} /> */}
					{/* <Route path="/semantic" exact component={Semantic} /> */}
					{/* <Route path="/chat" exact component={Chat} /> */}
					{/* <AuthenticateRoute path="/messages" component={MessagesView} /> */}
					{/* <AuthenticateRoute path="/users" component={UserList} /> */}
					<Route path="/posts" component={PostsList} />
					{/* <AuthenticateRoute path="/home" component={Home} /> */}
					<Redirect to="/posts" />
				</Switch>
			</Router>
		</>
	);
}

export default App;
