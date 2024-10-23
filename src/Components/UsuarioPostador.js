/** @format */

import React from 'react';
import styles from './UsuarioPostador.module.css';

const UsuarioPostador = ({ fotoUsuarioPostador, usuarioPostador }) => {
	return (
		<div className={styles.containerUsuarioPostador}>
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
