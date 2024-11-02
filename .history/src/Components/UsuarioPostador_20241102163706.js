/** @format */

import React from 'react';
import styles from './UsuarioPostador.module.css';

const UsuarioPostador = ({
	fotoUsuarioPostador,
	usuarioPostador,
	className,
}) => {
	return (
		<div className={`${styles.containerUsuarioPostador} ${className}`}>
			<img
				className={styles.fotoUsuarioPostador}
				src={fotoUsuarioPostador}
				alt={`Foto de ${usuarioPostador}`}
			/>
			<p>Por {usuarioPostador}</p>
		</div>
	);
};

export default UsuarioPostador;
