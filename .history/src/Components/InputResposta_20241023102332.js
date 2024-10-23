/** @format */

import React, { useState } from 'react';
import styles from './InputResposta.module.css';
import '../SendIcon';
import { SendIcon } from '../SendIcon';

const InputResposta = ({ adicionarResposta, idComentario }) => {
	const [novaResposta, setNovaResposta] = useState('');

	const handleEnviarResposta = () => {
		if (novaResposta.trim() === '') return;

		adicionarResposta(idComentario, novaResposta);
		setNovaResposta('');
	};

	return (
		<div className={styles.respostaInputContainer}>
			<input
				className={styles.respostaInput}
				type='text'
				placeholder='Escreva sua resposta...'
				value={novaResposta}
				onChange={e => setNovaResposta(e.target.value)}
			/>
			<button
				className={styles.respostaEnviarBtn}
				onClick={handleEnviarResposta}
			>
				<SendIcon />
			</button>
		</div>
	);
};

export default InputResposta;
