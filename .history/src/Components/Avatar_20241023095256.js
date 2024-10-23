/** @format */

import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ src }) => {
	return <img className={styles.comentarioAvatar} src={src} alt='Avatar' />;
};

export default Avatar;
