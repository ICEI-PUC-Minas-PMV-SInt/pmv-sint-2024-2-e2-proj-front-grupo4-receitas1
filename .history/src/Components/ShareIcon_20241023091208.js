/** @format */

import React from 'react';
import iconeShare from '../img/iconeCompartilhar.svg';
import styles from './IconsStyle.module.css';

export function ShareIcon() {
	return (
		<img className={styles.icon} src={iconeShare} alt='Icone Compartilhar' />
	);
}
