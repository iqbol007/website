import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../actions/Posts';
import { IRootState } from '../../reducers';
import { IinitialPostsState } from '../../reducers/Posts';

const PostsList = () => {
	const dispatch = useDispatch();
	const { posts } = useSelector<IRootState, IinitialPostsState>(
		(state) => state.posts,
	);
	useEffect(() => {
		if (!posts) {
			dispatch(getAllPosts());
		}
		return () => {};
	}, [posts]);
	return (
		<div>
			{posts?.map((post) => (
				<li key={post.id}>
					<img src={post.media} alt={post.media_type} />
					{post.content}
				</li>
			))}
		</div>
	);
};

export default PostsList;