import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authenticate, ITokenDecode, userToStore,} from '../../actions/Users';
import * as jwt from 'jsonwebtoken';
import {IRootState} from '../../reducers';
import {IUsersInitialState} from '../../reducers/Users';
import {getAccessToken} from '../../utils';
import './LoginForm.scss';
import {useHistory} from 'react-router-dom';

const LoginForm = () => {
	const [state, setstate] = useState({login: '', password: ''});
	const [accessToken, setAccessToken] = useState<any>(null);
	const {user, error} = useSelector<IRootState, IUsersInitialState>(
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
		const {name, value} = evt.currentTarget;
		setstate((prev) => ({...prev, [name]: value}));
	};
	const history = useHistory();
	const handleSubmit = () => {
		dispatch(authenticate(state.login, state.password, history));
		setstate({login: '', password: ''});
	};
	// @ts-ignore
	// @ts-ignore
	return (
		<div className="login-page">
			<div className={'login-from'}>
				<div className="ui middle aligned center aligned grid">
					<div className="column">

						<form className="ui large form">
							<div className="ui stacked secondary  segment">
								<div className="field">
									<div className="ui left icon input">
										<i className="user icon"/>
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
										<i className="lock icon"/>
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
							{/*//@-ts-ignore*/}
							<div className={`ui error message ${error && 'visible'}`}>Ошибка</div>
						</form>
						<div className="ui message">
							Haven't profile? <a href="#">Register</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
