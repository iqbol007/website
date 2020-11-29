import React from 'react';
import { Link } from 'react-router-dom';
import PostCreateForm from '../../components/PostCreateForm'
import { TopBar } from '../../components/TopBar';

const Home = () => {
	return (
		<div>
			<PostCreateForm />
		</div>
	); 
};

export { Home };
