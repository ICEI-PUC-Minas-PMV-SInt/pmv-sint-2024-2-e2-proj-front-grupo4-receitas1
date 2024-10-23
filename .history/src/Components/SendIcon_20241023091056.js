/** @format */

import React from 'react';
import iconeEnviar from '../img/iconeEnviar.svg';
import styles from './IconsStyle.module.css';

export function SendIcon() {
	return (
		<img className={styles.iconeEnviar} src={iconeEnviar} alt='Icone Enviar' />
	);
}
