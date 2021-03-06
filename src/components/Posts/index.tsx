import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPosts, postLike} from '../../actions/Posts';
import {IRootState} from '../../reducers';
import {IinitialPostsState} from '../../reducers/Posts';
import PostCard from '../../shared/Card';
import './Posts.scss';
import {filePath} from "../../api/routes";

const PostsList = () => {
	const dispatch = useDispatch();
	const {posts} = useSelector<IRootState, IinitialPostsState>(
		(state) => state.posts,
	);
	useEffect(() => {
		if (posts.length === 0) {
			dispatch(getAllPosts());
		}

		return () => {};
	}, [posts]);
	const handleLike = (id: string | number) => {
		console.log(id);

		dispatch(postLike(id));
	};
	return (
		<div className="posts-page">
			<div className="posts">
				{posts?.map((post) => (
					<PostCard
						key={post.id}
						postId={post.post_id}
						postContent={post.content}
						postCreatedAt={post.createdAt}
						postImage={`${filePath}/${post.media}`}
						postOwner={`${post.owner_id}`}
						postLikes={post.post_likes}
						onLike={(id: string | number) => handleLike(id)}
					/>
				))}
			</div>
		</div>
	);
};

export default PostsList;
