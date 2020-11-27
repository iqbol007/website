import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const PostsView = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch();
		return () => {};
	}, []);
	return <div></div>;
};

export default PostsView;
