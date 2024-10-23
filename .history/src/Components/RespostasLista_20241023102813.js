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
					<div className={styles.respostaContent}>
						<span className={styles.respostaUsuario}>{resposta.usuario}</span>
						<p className={styles.respostaTexto}>{resposta.texto}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default RespostasLista;