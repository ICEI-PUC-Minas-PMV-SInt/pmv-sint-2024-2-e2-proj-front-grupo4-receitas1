/** @format */

import React from 'react';
import iconeComent from '../img/iconeComentarios.svg';
import styles from './IconsStyle.module.css';

export function CommentIcon({ onClick }) {
	return (
		<button
			onClick={onClick}
			style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
		>
			<img className={styles.icon} src={iconeComent} alt='Icone Comentários' />
		</button>
	);
}

{
	styles.icon;
}
