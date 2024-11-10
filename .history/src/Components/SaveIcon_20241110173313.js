/** @format */

import React from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import styles from './IconsStyle.module.css';

export function SaveIcon({ onClick, filled }) {
	return (
		<div className={styles.saveIconContainer} onClick={onClick}>
			{filled ? (
				<FaBookmark className={styles.saved} />
			) : (
				<FaRegBookmark className={styles.unsaved} />
			)}
			<span className={styles.iconText}>{filled ? 'Salvo' : 'Salvar'}</span>
		</div>
	);
}
