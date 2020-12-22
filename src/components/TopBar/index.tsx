import React, {useState} from 'react';
import './TopBar.scss';
import {useDispatch} from "react-redux";
import {Menu} from "semantic-ui-react";
import Account from "./Account/Account";
import {Link} from "react-router-dom";
import {logout} from "../../actions/Users";

const TopBar = () => {
	const dispatch = useDispatch()
	const [state, setState] = useState({activeItem: ''})

	const handleItemClick = () => {


	}
	return (

		<Menu fluid={true}>
			<Link to={'/posts'} className={'link'}>
				<Menu.Item
					name='posts'
					active={state.activeItem === 'posts'}
					onClick={handleItemClick}
				/>
			</Link>
			<Link to={'/messages'} className={'link'}>
				<Menu.Item
					name='messages'
					active={state.activeItem === 'messages'}
					onClick={handleItemClick}
				/>
			</Link>
			<Link to={'/users'} className={'link'}>
				<Menu.Item
					name='users'
					active={state.activeItem === 'users'}
					onClick={handleItemClick}
				/>
			</Link>
			<Menu.Item name={'account'} position="right">
				<Link to={'/account'} className={'link'}>
					<Account/>
				</Link>
			</Menu.Item>
			<Menu.Item
				name={'Logout'}
				onClick={() => dispatch(logout())}
			/>
		</Menu>
	);
};

export { TopBar };
