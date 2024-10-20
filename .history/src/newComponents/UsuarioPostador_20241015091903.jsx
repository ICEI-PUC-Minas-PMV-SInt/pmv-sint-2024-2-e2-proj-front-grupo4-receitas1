/** @format */

import React from 'react';
import '../styledComponents/UsuarioPostador.css';

const UsuarioPostador = ({ fotoUsuarioPostador, usuarioPostador }) => {
	return (
		<div>
			<img src={fotoUsuarioPostador} alt={`Foto de ${usuarioPostador}`} />
			<p></p>
		</div>
	);
};

export default UsuarioPostador;
