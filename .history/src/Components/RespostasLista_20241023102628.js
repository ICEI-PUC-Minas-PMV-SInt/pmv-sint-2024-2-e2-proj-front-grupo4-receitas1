/** @format */

import React from 'react';
import styles from './RespostasLista.module.css';
import EnviarRespostaButton from './EnviarRespostaButton.js';

const RespostasLista = ({ respostas }) => {
	return (
		<div className={styles.respostasLista}>
			{respostas.map(resposta => (
				<div key={resposta.id} className={styles.respostaItem}>
					<img src={resposta.fotoUsuario} alt={resposta.usuario} />
					<div className='resposta-content'>
						<span className='resposta-usuario'>{resposta.usuario}</span>
						<p className='resposta-texto'>{resposta.texto}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default RespostasLista;
