/** @format */

import React, { useState, useEffect } from 'react';
import '../styledComponents/Comentarios.css';

// Exemplo de componente para exibir comentários

const Comentarios = ({ receitaId }) => {
	const [comentarios, setComentarios] = useState([]);
	const [novoComentario, setNovoComentario] = useState('');

	// Carregar comentários do localStorage na montagem do componente
	useEffect(() => {
		const comentariosSalvos = localStorage.getItem(`comentarios-${receitaId}`);
		if (comentariosSalvos) {
			setComentarios(JSON.parse(comentariosSalvos));
		}
	}, [receitaId]);

	// Função para adicionar um novo comentário
	const adicionarComentario = () => {
		if (novoComentario.trim() === '') return;

		const comentarioAtualizado = [
			...comentarios,
			{ id: Date.now(), texto: novoComentario, usuario: 'Usuário Genérico' },
		];

		// Atualiza o estado e o localStorage
		setComentarios(comentarioAtualizado);
		localStorage.setItem(
			`comentarios-${receitaId}`,
			JSON.stringify(comentarioAtualizado)
		);

		// Limpar campo de novo comentário
		setNovoComentario('');
	};

	return (
		<div className='comentarios-container'>
			<h3>Comentários</h3>
			{comentarios.map(comentario => (
				<div className='comentario-item' key={comentario.id}>
					<img
						className='comentario-avatar'
						src='https://randomuser.me/api/portraits/men/1.jpg'
						alt='avatar'
					/>
					<div className='comentario-content'>
						<span className='comentario-username'>{comentario.usuario}</span>
						<p className='comentario-texto'>{comentario.texto}</p>
						<span className='comentario-timestamp'>2h atrás</span>
					</div>
				</div>
			))}

			<div className='input-novo-comentario'>
				<input
					type='text'
					value={novoComentario}
					onChange={e => setNovoComentario(e.target.value)}
					placeholder='Adicionar um comentário'
				/>
				<button onClick={adicionarComentario}>Comentar</button>
			</div>
		</div>
	);
};

export default Comentarios;
