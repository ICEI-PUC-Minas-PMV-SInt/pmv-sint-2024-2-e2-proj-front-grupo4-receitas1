/** @format */

import React from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import styles from './IconsStyle.module.css';

export function ShareIcon({ onClick }) {
	return (
		<div className={styles.iconWithText} onClick={onClick}>
			<RiShareForwardLine color='#333' size={26} />
			<span className={styles.iconText}>Compartilhar</span>
		</div>
	);
}
