/** @format */

import React from 'react';
import '../styledComponents/UsuarioPostador.css';

const UsuarioPostador = ({ fotoUsuarioPostador, usuarioPostador }) => {
	return (
		<div>
			<img
				className='fotoUsuarioPostador'
				src={fotoUsuarioPostador}
				alt={`Foto de ${usuarioPostador}`}
			/>
			<p>{usuarioPostador}</p>
		</div>
	);
};

export default UsuarioPostador;
