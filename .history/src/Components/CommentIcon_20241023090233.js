/** @format */

import React from 'react';
import iconeComent from '../assets/iconeComentarios.svg';
import styles from './IconsStyle.module.css';

export function CommentIcon({ onClick }) {
	return (
		<button
			onClick={onClick}
			style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
		>
			<img className='icon' src={iconeComent} alt='Icone Comentários' />
		</button>
	);
}
