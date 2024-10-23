/** @format */

import React from 'react';
import iconeEnviar from '../img/iconeEnviar.svg';
import styles from './IconsStyle.module.css';

const SendIcon = () => {
	return (
		<img className={styles.iconeEnviar} src={iconeEnviar} alt='Icone Enviar' />
	);
};

export default SendIcon;
