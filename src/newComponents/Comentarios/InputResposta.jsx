/** @format */

import React, { useState } from 'react';
import './Estilizacao Comentarios/InputResposta.css';
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
		<div className='resposta-input-container'>
			<input
				className='resposta-input'
				type='text'
				placeholder='Escreva sua resposta...'
				value={novaResposta}
				onChange={e => setNovaResposta(e.target.value)}
			/>
			<button className='resposta-enviar-btn' onClick={handleEnviarResposta}>
				<SendIcon />
			</button>
		</div>
	);
};

export default InputResposta;
