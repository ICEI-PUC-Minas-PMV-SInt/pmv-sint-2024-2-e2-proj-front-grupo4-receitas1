/** @format */

import React from 'react';
import iconeLike from '../img/iconeLike.svg';
import styles from './IconsStyle.module.css';

export function LikeIcon() {
	return <img className={styles.icon} src={iconeLike} alt='Icone Like' />;
}
