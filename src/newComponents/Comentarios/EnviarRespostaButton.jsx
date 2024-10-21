/** @format */

import React from 'react';
import './Estilizacao Comentarios/InputResposta.css';

const EnviarRespostaButton = ({ onClick }) => {
	return (
		<button className='resposta-enviar-btn' onClick={onClick}>
			Enviar
		</button>
	);
};

export default EnviarRespostaButton;
