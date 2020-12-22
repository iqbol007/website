import React from 'react';
import './Gallary.scss';
const Gallary = () => {
	// $(document).ready(function () {
	//     $(".dark .button").click(function () {
	//       $(this).toggleClass("active");
	//       if ($(this).hasClass("active")) {
	//
	//       } else {
	//         $(":root").css("--bg", "#eee");
	//         $(":root").css("--bs", "3px 3px 7px 0 #0004, -3px -3px 10px 0 #fff");
	//         $(":root").css("--col", "#666");
	//         $(":root").css("--ts", "1px 1px 7px #0003");
	//       }
	//     });

	//     $(".heart").click(function () {
	//       $(this).toggleClass("active-heart");
	//     });
	//   });
	// const styled = {
	// 	':root': {
	// 		'--bg': '#222',
	// 		'--bs': '3px 3px 7px 0 #000, -3px -3px 10px 0 #fff1',
	// 		'--col': '#ccc',
	// 		'--ts': '1px 1px 7px #000',
	// 	},
	// };
	return (
		<div className='body'>
			<div className="nav">
				<div className="profile">
					<i className="fa fa-user"></i>
				</div>
				<div className="search">
					<input type="text" placeholder="Search" />
					<div className="button">
						<i className="fa fa-search"></i>
					</div>
				</div>
				<div className="options">
					<div className="font">
						A<span style={{ fontSize: '1.4em' }}>A</span>
						<div className="slider">
							<input type="range" min="1" max="100" />
						</div>
					</div>
					<div className="dark">
						DARK
						<div className="button">
							<div className="tape">
								<div className="slider"></div>
							</div>
						</div>
					</div>
					<div className="ham">
						<div className="in" id="a"></div>
						<div className="in"></div>
						<div className="in"></div>
					</div>
				</div>
			</div>

			<div className="trending">
				<div className="card">
					<div className="overlay">
						<div className="title">Title</div>
						<div className="heart">
							<i className="fa fa-heart"></i>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="overlay">
						<div className="title">Title</div>
						<div className="heart">
							<i className="fa fa-heart"></i>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="overlay">
						<div className="title">Title</div>
						<div className="heart">
							<i className="fa fa-heart"></i>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="overlay">
						<div className="title">Title</div>
						<div className="heart">
							<i className="fa fa-heart"></i>
						</div>
					</div>
				</div>
			</div>

			<div className="recent">
				<div className="header">Recents</div>
				<div className="story">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="title">Title</div>
					<div className="excerpt">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eius...
					</div>
					<div className="heart">
						<i className="fa fa-heart"></i>
					</div>
				</div>
				<div className="story">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="title">Title</div>
					<div className="excerpt">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eius...
					</div>
					<div className="heart">
						<i className="fa fa-heart"></i>
					</div>
				</div>
				<div className="story">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="title">Title</div>
					<div className="excerpt">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eius...
					</div>
					<div className="heart">
						<i className="fa fa-heart"></i>
					</div>
				</div>
				<div className="story">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="title">Title</div>
					<div className="excerpt">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eius...
					</div>
					<div className="heart">
						<i className="fa fa-heart"></i>
					</div>
				</div>
			</div>
			<div className="archives">
				<div className="header">Archives</div>
				<div className="story">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="title">Title</div>
					<div className="excerpt">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eius...
					</div>
					<div className="heart active-heart">
						<i className="fa fa-heart"></i>
					</div>
				</div>
				<div className="story">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="title">Title</div>
					<div className="excerpt">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eius...
					</div>
					<div className="heart active-heart">
						<i className="fa fa-heart"></i>
					</div>
				</div>
				<div className="story">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="title">Title</div>
					<div className="excerpt">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eius...
					</div>
					<div className="heart active-heart">
						<i className="fa fa-heart"></i>
					</div>
				</div>
				<div className="story">
					<div className="icon">
						<i className="fa fa-picture-o"></i>
					</div>
					<div className="title">Title</div>
					<div className="excerpt">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eius...
					</div>
					<div className="heart active-heart">
						<i className="fa fa-heart"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Gallary };
