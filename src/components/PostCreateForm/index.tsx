import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/Posts';
import './PostCreate.scss';

const PostCreateForm = () => {
	const [state, setState] = useState({ file: null, content: '' });
	const fileRef = useRef<any>(null);
	const dispatch = useDispatch();
	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.currentTarget;
		if (name === 'file') {
			const [file] = fileRef?.current?.files;
			setState((prev) => ({ ...prev, [name]: file }));
			return;
		}
		setState((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		if (!state.file) {
			return;
		}
		dispatch(createPost(state.content, state.file));
		fileRef.current = '';
	};
	return (
		<div className="body">
			<form onSubmit={handleSubmit}>
				<h6>Create new post</h6>
				{/* <input type="text" placeholder="For ex. CodingArtist" />
				<h6>Who are you?</h6>
				<input type="radio" name="job" id="developer" />
				<input type="radio" name="job" id="designer" /> */}
				<h6>Text content</h6>
				<input
					onChange={handleChange}
					type="text"
					name="content"
					id="content"
					value={state.content}
				/>
				<h6>File</h6>
				<input
					onChange={handleChange}
					type="file"
					ref={fileRef}
					name="file"
					id="file"
				/>
				<a href="#" className="submit">
					SUBMIT
				</a>
			</form>
		</div>
	);
};

export default PostCreateForm;
