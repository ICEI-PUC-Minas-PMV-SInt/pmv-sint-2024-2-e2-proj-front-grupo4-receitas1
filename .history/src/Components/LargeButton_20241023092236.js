/** @format */

import React from 'react';
import styles from './LargeButton.module.css';

const LargeButton = ({ textoBotao }) => {
	return (
		<div className={styles.large - button}>
			<p>{textoBotao}</p>
		</div>
	);
};

export default LargeButton;
