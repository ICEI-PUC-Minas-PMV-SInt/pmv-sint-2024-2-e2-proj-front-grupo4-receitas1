/** @format */

import React from 'react';
import styles from './InputResposta.module.css';

const EnviarRespostaButton = ({ onClick }) => {
	return (
		<button className={styles.respostaEnviarBtn} onClick={onClick}>
			Enviar
		</button>
	);
};

export default EnviarRespostaButton;
