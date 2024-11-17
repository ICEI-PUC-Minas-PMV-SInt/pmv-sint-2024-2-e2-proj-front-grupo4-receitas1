/** @format */

import React from 'react';
import styles from './UsuarioPostador.module.css';
import defaultAvatar from '../img/default-avatar.png';

const UsuarioPostador = ({
	fotoUsuarioPostador,
	usuarioPostador,
	className,
}) => {
	return (
		<div className={`${styles.containerUsuarioPostador} ${className}`}>
			<img
				className={styles.fotoUsuarioPostador}
				src={fotoUsuarioPostador || defaultAvatar}
				alt={`Foto de ${usuarioPostador}`}
			/>
			<p>Por {usuarioPostador}</p>
		</div>
	);
};

export default UsuarioPostador;
