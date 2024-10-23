/** @format */

import React from 'react';
import styles from './InputResposta.module.css';

const InputNovoComentario = ({
	novoComentario,
	setNovoComentario,
	adicionarComentario,
}) => {
	return (
		<div className={styles.inputNovoComentario}>
			<input
				type='text'
				value={novoComentario}
				onChange={e => setNovoComentario(e.target.value)}
				placeholder='Adicione um comentário...'
			/>
			<button onClick={adicionarComentario}>Comentar</button>
		</div>
	);
};

export default InputNovoComentario;
