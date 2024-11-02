/** @format */

import React from 'react';
import styles from './LargeButton.module.css';

const LargeButton = ({ textoBotao, className }) => {
	return (
		<div className={`${styles.largeButton} ${className}`}>
			<p>{textoBotao}</p>
		</div>
	);
};

export default LargeButton;
