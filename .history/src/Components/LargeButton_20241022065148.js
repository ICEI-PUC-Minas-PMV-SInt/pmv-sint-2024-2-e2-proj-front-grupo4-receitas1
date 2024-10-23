/** @format */

import React from 'react';
import '../styledComponents/LargeButton.css';

const LargeButton = ({ textoBotao }) => {
	return (
		<div className='large-button'>
			<p>{textoBotao}</p>
		</div>
	);
};

export default LargeButton;
