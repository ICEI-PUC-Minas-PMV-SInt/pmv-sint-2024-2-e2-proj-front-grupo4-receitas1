/** @format */

import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styles from './IconsStyle.module.css';

export function LikeIcon({ onLike }) {
	const [isLiked, setIsLiked] = useState(false);

	const handleClick = () => {
		setIsLiked(prev => !prev);
		onLike();
	};

	return (
		<div className={styles.iconWithText} onClick={handleClick}>
			{isLiked ? (
				<AiFillHeart color='#FF6347' size={24} />
			) : (
				<AiOutlineHeart color='#333' size={24} />
			)}
			<span className={styles.iconText}>
				{isLiked ? 'Descurtir' : 'Curtir'}
			</span>
		</div>
	);
}
