import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getAccessToken } from '../../utils';
interface IProps {
	path: string;
	component: React.FC;
}
const AuthenticateRoute: React.FC<IProps> = ({ path, component }) => {
	const token = getAccessToken();
	if (token) {
		return <Route exact path={path} component={component} />;
	}
	return <Redirect to="/login" />;
};

export { AuthenticateRoute };
