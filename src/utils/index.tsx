import * as jwt from 'jsonwebtoken';
import React from 'react';
import { ITokenDecode } from '../actions/Users';
import { FileName } from '../components/TopBar/Account/x';

export const getAccessToken = () => {
	const token = localStorage.getItem('token');
	return token as string;
};
export const tokenToStorage = (token: string) => {
	localStorage.setItem('token', token);
	const decoded = jwt.decode(token);
	return decoded as ITokenDecode;
};
export const setFocus = () => {};
