/** @format */

import React, { useState, useEffect } from 'react';
import '../styledComponents/Comentarios.css';
import Comentario from './Comentario';
import InputNovoComentario from './InputNovoComentario';

const Comentarios = ({ receitaId }) => {
	const [comentarios, setComentarios] = useState([]);
	const [novoComentario, setNovoComentario] = useState('');

	useEffect(() => {
		const comentariosSalvos = localStorage.getItem(`comentarios-${receitaId}`);
		if (comentariosSalvos) {
			setComentarios(JSON.parse(comentariosSalvos));
		}
	}, [receitaId]);

	const adicionarComentario = () => {
		if (novoComentario.trim() === '') return;

		const comentarioAtualizado = [
			...comentarios,
			{
				id: Date.now(),
				texto: novoComentario,
				usuario: 'Usuário Genérico',
				respostas: [],
			},
		];

		setComentarios(comentarioAtualizado);
		localStorage.setItem(
			`comentarios-${receitaId}`,
			JSON.stringify(comentarioAtualizado)
		);

		setNovoComentario('');
	};

	const removerComentario = id => {
		const comentariosAtualizados = comentarios.filter(
			comentario => comentario.id !== id
		);

		setComentarios(comentariosAtualizados);
		localStorage.setItem(
			`comentarios-${receitaId}`,
			JSON.stringify(comentariosAtualizados)
		);
	};

	return (
		<div className='comentarios-container'>
			<h3>Comentários</h3>
			{comentarios.map(comentario => (
				<Comentario
					key={comentario.id}
					comentario={comentario}
					removerComentario={removerComentario}
					setComentarios={setComentarios}
					comentarios={comentarios}
					receitaId={receitaId}
				/>
			))}

			<InputNovoComentario
				novoComentario={novoComentario}
				setNovoComentario={setNovoComentario}
				adicionarComentario={adicionarComentario}
			/>
		</div>
	);
};

export default Comentarios;
