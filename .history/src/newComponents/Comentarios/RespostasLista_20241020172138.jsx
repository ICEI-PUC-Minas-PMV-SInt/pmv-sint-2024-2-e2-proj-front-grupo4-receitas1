/** @format */

import React from 'react';
import Resposta from './Resposta';

const RespostasLista = ({ respostas }) => {
	return (
		<div className='respostas-lista'>
			{respostas.map(resposta => (
				<Resposta key={resposta.id} resposta={resposta} />
			))}
		</div>
	);
};

export default RespostasLista;
