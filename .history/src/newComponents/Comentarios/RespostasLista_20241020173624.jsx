/** @format */

import React from 'react';
import './Estilizacao Comentarios/RespostasLista.css';
import EnviarRespostaButton from './EnviarRespostaButton';

const RespostasLista = ({ respostas }) => {
	return (
		<div className='respostas-lista'>
			{respostas.map(resposta => (
				<EnviarRespostaButton key={resposta.id} resposta={resposta} />
			))}
		</div>
	);
};

export default RespostasLista;
