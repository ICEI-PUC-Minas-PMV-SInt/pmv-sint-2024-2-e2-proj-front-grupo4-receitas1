/** @format */

import React from 'react';
import './Estilizacao Comentarios/RespostasLista.css';
import EnviarRespostaButton from './EnviarRespostaButton';

const RespostasLista = ({ respostas }) => {
	return (
		<div className='respostas-lista'>
			{respostas.map(resposta => (
				<div key={resposta.id} className='resposta-item'>
					<img src={resposta.fotoUsuario} alt={resposta.usuario} />
					<span className='resposta-usuario'>{resposta.usuario}</span>
					<p className='resposta-texto'>{resposta.texto}</p>
				</div>
			))}
		</div>
	);
};

export default RespostasLista;
