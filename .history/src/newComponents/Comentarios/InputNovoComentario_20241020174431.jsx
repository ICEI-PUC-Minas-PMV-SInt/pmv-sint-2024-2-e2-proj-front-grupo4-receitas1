/** @format */

import React from 'react';
import './Estilizacao Comentarios/InputResposta.css';

const InputNovoComentario = ({
	novoComentario,
	setNovoComentario,
	adicionarComentario,
}) => {
	return (
		<div className='input-novo-comentario'>
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
