/** @format */

import React, { useState, useEffect } from 'react';

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
			{ id: Date.now(), texto: novoComentario },
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
		<div>
			<h3>Comentários</h3>
			<ul>
				{comentarios.map(comentario => (
					<li key={comentario.id}>{comentario.texto}</li>
				))}
			</ul>

			<input type='text' />
		</div>
	);
};

export default Comentarios;
