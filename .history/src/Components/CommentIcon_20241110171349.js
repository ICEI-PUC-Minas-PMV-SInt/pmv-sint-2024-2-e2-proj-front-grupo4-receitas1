/** @format */

import React from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import styles from './IconsStyle.module.css';

export function CommentIcon({ onClick, withText = false }) {
	return (
		<div className={styles.iconWithText} onClick={onClick}>
			<FaRegCommentDots color='#333' size={24} />
			{withText && <span className={styles.iconText}>Comentários</span>}
		</div>
	);
}
