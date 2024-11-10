/** @format */

import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styles from './IconsStyle.module.css';

export function SaveIcon({ onSave }) {
	const [isSaved, setIsSaved] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

	const handleClick = () => {
		setIsSaved(prevState => !prevState);
		setShowMessage(true);
		onSave();

		setTimeout(() => {
			setShowMessage(false);
		}, 2000);
	};

	return (
		<div className={styles.saveIconContainer}>
			{isSaved ? (
				<AiFillHeart
					onClick={handleClick}
					className={styles.icon}
					color='#FF6347'
					size={30}
				/>
			) : (
				<AiOutlineHeart
					onClick={handleClick}
					className={styles.icon}
					color='#333'
					size={30}
				/>
			)}
			{showMessage && <p className={styles.saveMessage}>Receita Salva!</p>}
		</div>
	);
}
