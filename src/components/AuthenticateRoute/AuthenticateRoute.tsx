import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getAccessToken } from '../../utils';
import { Menu } from '../Menu';
import { TopBar } from '../TopBar';
import './style.scss';
interface IProps {
	path: string;
	component: React.FC;
}
const AuthenticateRoute: React.FC<IProps> = ({ path, component }) => {
	const token = getAccessToken();
	if (token) {
		return (
			<>
				<div className="top-bar">
					<TopBar />
				</div>
				<div className="wrapper">
					<div className="menu">
						<Menu />
					</div>
					<div className="route">
						<Route exact path={path} component={component} />
					</div>
				</div>
			</>
		);
	}
	return <Redirect to="/login" />;
};

export { AuthenticateRoute };
