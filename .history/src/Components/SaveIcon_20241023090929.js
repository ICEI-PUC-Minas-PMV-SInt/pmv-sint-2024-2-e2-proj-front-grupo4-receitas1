/** @format */

import React from 'react';
import iconeSalvar from '../img/iconeSalvar.svg';
import styles from './IconsStyle.module.css';

export function SaveIcon() {
	return <img className={styles.icon} src={iconeSalvar} alt='Icone Salvar' />;
}
