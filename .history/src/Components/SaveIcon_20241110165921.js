/** @format */

import React from 'react';
import iconeSalvar from '../img/iconeSalvar.svg';
import styles from './IconsStyle.module.css';

export function SaveIcon({ onClick }) {
	return (
		<img
			className={styles.icon}
			src={iconeSalvar}
			alt='Ícone Salvar'
			onClick={onClick}
			style={{ cursor: 'pointer' }}
		/>
	);
}
