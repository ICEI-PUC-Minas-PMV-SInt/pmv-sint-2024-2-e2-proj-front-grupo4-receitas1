/** @format */

// Comentarios.js

import React, { useState, useEffect } from 'react';
import styles from './Comentarios.module.css';
import Comentario from './Comentario.js';
import InputNovoComentario from './InputNovoComentario.js';

const Comentarios = ({ receitaId, className }) => {
	const [comentarios, setComentarios] = useState([]);
	const [novoComentario, setNovoComentario] = useState('');

	// Obtém informações do usuário logado
	const user = JSON.parse(localStorage.getItem('user'));

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
				usuario: user ? user.name : 'Usuário Anônimo',
				fotoUsuario: user ? user.avatar : '../img/default-avatar.png',
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
		<div className={`${styles.comentariosContainer} ${className}`}>
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
