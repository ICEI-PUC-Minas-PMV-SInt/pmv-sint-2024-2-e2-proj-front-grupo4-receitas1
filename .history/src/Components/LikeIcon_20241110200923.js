/** @format */

import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styles from './IconsStyle.module.css';

export function LikeIcon({ onLike, initialLiked = false }) {
	const [isLiked, setIsLiked] = useState(initialLiked);

	useEffect(() => {
		// Define o estado inicial com base na prop `initialLiked`
		setIsLiked(initialLiked);
	}, [initialLiked]);

	const handleClick = () => {
		const savedUser = JSON.parse(localStorage.getItem('user'));
		if (!savedUser) {
			// Redireciona para a página de login se o usuário não estiver logado
			window.location.href = '/login';
			return;
		}

		// Alterna o estado de curtida
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
