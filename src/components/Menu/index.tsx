import React from 'react';

function Menu() {
	//use active in item for active
	return (
		<div className="ui vertical pointing menu">
			<a className="item">Home</a>
			<a className="item">Messages</a>
			<a className="item">Friends</a>
			<a className="item">Music</a>
			<a className="item">Wall</a>
			<a className="item">Settings</a>
		</div>
	);
}

export { Menu };
