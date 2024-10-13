/** @format */

import React from 'react';
import './styleComponents/UsuarioPostador.css';

const UsuarioPostador = ({ fotoUsuarioPostador, usuarioPostador }) => {
	return (
		<div className='container-usuario-postador'>
			<img
				className='fotoUsuarioPostador'
				src={fotoUsuarioPostador}
				alt={`Foto de ${usuarioPostador}`}
			/>
			<p>Por {usuarioPostador}</p>
		</div>
	);
};

export default UsuarioPostador;
