/** @format */

import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import styles from './IconsStyle.module.css';

export function SaveIcon({ onClick, filled }) {
	return (
		<div className={styles.saveIconContainer} onClick={onClick}>
			<FaBookmark className={filled ? styles.saved : styles.unsaved} />
			<span className={styles.iconText}>Salvar</span>
		</div>
	);
}
