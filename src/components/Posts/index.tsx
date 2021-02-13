import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, postLike } from '../../actions/Posts';
import { IRootState } from '../../reducers';
import { IinitialPostsState } from '../../reducers/Posts';
import Chart from 'react-apexcharts'
import './Posts.scss';

const PostsList = () => {
	const dispatch = useDispatch();
	const { posts } = useSelector<IRootState, IinitialPostsState>(
		(state) => state.posts,
	);
	useEffect(() => {
		if (posts.length === 0) {
			dispatch(getAllPosts());
		}

		return () => { };
	}, [posts]);
	// const handleLike = (id: string | number) => {
	// 	console.log(id);

	// 	dispatch(postLike(id));
	// };
	const options = {

		chart: {
			height: 350,
			type: 'area'
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		xaxis: {
			type: 'year',
			categories: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"]
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm'
			},
		},
	}
	const series = [{
		name: 'Ҳаҷми об(млн метри куби)',
		data: [31, 40, 28, 51, 42, 109, 100]
	}, {
		name: 'Миқдори барфу боришот (сантиметр/моҳ)',
		data: [11, 32, 45, 32, 34, 52, 41]
	}]
	return (
		<div className="posts-page">
			<div className="posts">
				<Chart options={options} series={series} type="area"  width="100%" height="400" />
			</div>
		</div>
	);
};

export default PostsList;
	// {/* {posts?.map((post) => (
	// 				<PostCard
	// 					key={post.id}
	// 					postId={post.post_id}
	// 					postContent={post.content}
	// 					postCreatedAt={post.createdAt}
	// 					postImage={`${filePath}/${post.media}`}
	// 					postOwner={`${post.owner_id}`}
	// 					postLikes={post.post_likes}
	// 					onLike={(id: string | number) => handleLike(id)}
	// 				/>
	// 			))} */}