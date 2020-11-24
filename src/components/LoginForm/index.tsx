import React, { ChangeEvent, useEffect, useState } from 'react';
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

const LoginForm = () => {
	const [state, setstate] = useState({ login: '', password: '' });
	const [accessToken, setAccessToken] = useState<any>(null);
	const { user } = useSelector<IRootState, IUsersInitialState>(
		(state) => state.users,
	);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!user) {
			const token = getAccessToken();
			if (token) {
				const decoded = jwt.decode(token);
				dispatch(userToStore(decoded as ITokenDecode));
			}
		}
	}, [user]);

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
	const handleSubmit = () => {
		dispatch(authenticate(state.login, state.password));
		setstate({ login: '', password: '' });
	};
	const handleLogOut = () => {
		dispatch(logout());
	};

	if (user) {
		return (
			<div className="">
				<button onClick={handleLogOut}>log out</button>
			</div>
		);
	}
	return (
		<div>
			<label htmlFor="#login">Login:</label>
			<input
				type="text"
				name="login"
				id="login"
				onChange={handleChange}
				value={state.login}
			/>
			<label htmlFor="#password">Password:</label>
			<input
				type="password"
				name="password"
				id="password"
				onChange={handleChange}
				value={state.password}
			/>
			<button onClick={handleSubmit}>login</button>
		</div>
	);
};

export default LoginForm;
