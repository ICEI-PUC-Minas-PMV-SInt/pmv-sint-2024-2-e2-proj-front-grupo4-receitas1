/** @format */

import React from 'react';
import styles from './InputResposta.module.css';

const EnviarRespostaButton = ({ onClick }) => {
	return (
		<button className='resposta-enviar-btn' onClick={onClick}>
			Enviar
		</button>
	);
};

export default EnviarRespostaButton;
