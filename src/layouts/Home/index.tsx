import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Link to="/users">Users</Link>
			<Link to="/posts">Posts</Link>
			<Link to="/messages">Messages</Link>
		</div>
	);
};

export { Home };
