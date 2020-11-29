import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.scss';
const TopBar = () => {
	return (
		<div className="top-bar">
			<Link to="/users">Users</Link>
			<Link to="/posts">Posts</Link>
			<Link to="/messages">Messages</Link>
		</div>
	);
};

export { TopBar };
