import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.scss';
import {useDispatch} from "react-redux";
import {logout} from "../../actions/Users";
import Account from "./Account/Account";
const TopBar = () => {
	const  dispatch = useDispatch()
	return (
		<div className="top-bar">
			<Account/>
			<Link to="/users">Users</Link>
			<Link to="/posts">Posts</Link>
			<Link to="/messages">Messages</Link>
			<a onClick={()=>dispatch(logout())}>logout</a>
		</div>
	);
};

export { TopBar };
