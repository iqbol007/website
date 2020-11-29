import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	authenticate,
	ITokenDecode,
	logout,
	userToStore,
} from '../../actions/Users';
import * as jwt from 'jsonwebtoken';
import { IRootState } from '../../reducers';
import { IUsersInitialState } from '../../reducers/Users';
import { getAccessToken } from '../../utils';
import { Input, Label } from 'semantic-ui-react';
import './LoginForm.scss';
import { useHistory } from 'react-router-dom';
const LoginForm = () => {
	const [state, setstate] = useState({ login: '', password: '' });
	const [accessToken, setAccessToken] = useState<any>(null);
	const { user, error } = useSelector<IRootState, IUsersInitialState>(
		(state) => state.users,
	);
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(logout());
		if (!user) {
			const token = getAccessToken();
			if (token) {
				const decoded = jwt.decode(token);
				dispatch(userToStore(decoded as ITokenDecode));
			}
		}
	}, [user, error]);

	useEffect(() => {
		if (!accessToken) {
			const token = getAccessToken();
			setAccessToken(token);
		}
	}, [user, dispatch]);
	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.currentTarget;
		setstate((prev) => ({ ...prev, [name]: value }));
	};
	const history = useHistory();
	const handleSubmit = () => {
		dispatch(authenticate(state.login, state.password, history));
		setstate({ login: '', password: '' });
	};
	return (
		<div className="loginForm">
			<div>
				<label htmlFor="#login">Login:</label>
				<Input
					type="text"
					name="login"
					id="login"
					onChange={handleChange}
					value={state.login}
				/>
				<label htmlFor="#password">Password:</label>
				<Input
					type="password"
					name="password"
					id="password"
					onChange={handleChange}
					value={state.password}
				/>
			</div>
			{error && <Label color="red"> error</Label>}
			<div>
				<button onClick={handleSubmit} className="ui teal basic button">
					Log in
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
