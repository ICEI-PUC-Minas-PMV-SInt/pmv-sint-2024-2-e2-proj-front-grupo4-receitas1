/** @format */

import React from 'react';
import styles from './LargeButton.module.css';

const LargeButton = ({ textoBotao }) => {
	return (
		<div className={styles.largeButton}>
			<p>{textoBotao}</p>
		</div>
	);
};

export default LargeButton;
