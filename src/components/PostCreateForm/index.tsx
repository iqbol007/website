import React, { ChangeEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputFiles } from 'typescript';
import { createPost } from '../../actions/Posts';

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
	const handleSubmit = () => {
		if (!state.file) {
			return;
		}
		dispatch(createPost(state.content, state.file));
		fileRef.current = '';
	};
	return (
		<div>
			<label htmlFor="content">Content:-</label>
			<input
				onChange={handleChange}
				type="text"
				name="content"
				id="content"
				value={state.content}
			/>
			<label htmlFor="file">File:-</label>
			<input
				onChange={handleChange}
				type="file"
				ref={fileRef}
				name="file"
				id="file"
			/>
			<button onClick={handleSubmit}>create post</button>
		</div>
	);
};

export default PostCreateForm;
