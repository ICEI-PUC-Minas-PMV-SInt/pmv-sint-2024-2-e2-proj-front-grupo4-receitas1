/** @format */

import React from 'react';
import iconeShare from '../img/iconeCompartilhar.svg';
import styles from './IconsStyle.module.css';

export function ShareIcon({ onClick }) {
	// Recebe o onClick como prop
	return (
		<img
			className={styles.icon}
			src={iconeShare}
			alt='Icone Compartilhar'
			onClick={onClick} // Aplica o onClick no próprio img
		/>
	);
}
