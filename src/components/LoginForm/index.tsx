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
		<div className="login-page">
			<div className="ui middle aligned center aligned grid login-form">
				<div className="column">
					<h2 className="ui image header">
						<div className="content">Log-in to your account</div>
					</h2>
					<form
						action="https://s.codepen.io/voltron2112/debug/PqrEPM?"
						method="get"
						className="ui large form">
						<div className="ui stacked secondary  segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input
										type="text"
										name="login"
										id="login"
										placeholder="Login"
										onChange={handleChange}
										value={state.login}
									/>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Password"
										onChange={handleChange}
										value={state.password}
									/>
								</div>
							</div>
							<div
								className="ui fluid large teal submit button"
								onClick={handleSubmit}>
								Login
							</div>
						</div>

						<div className="ui error message"></div>
					</form>

					<div className="ui message">
						New to us? <a href="#">Register</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
