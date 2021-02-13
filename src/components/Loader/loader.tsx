import React from 'react';
import './loader.scss';
const Loader: React.FC = () => {
	return (
		<div className="background">
			<div className="circles">
				<div></div>
				<div></div>
				<div></div>
				<span></span>
			</div>
		</div>
	);
};

export default Loader;
