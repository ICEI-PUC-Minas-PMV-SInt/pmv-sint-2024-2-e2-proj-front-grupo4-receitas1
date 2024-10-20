/** @format */

import React, { useState, useEffect } from 'react';
import '../styledComponents/Comentarios.css';

import { receitas } from './receitas'; // Certifique-se de ajustar o caminho

const Comentarios = ({ receitaId }) => {
	const [comentarios, setComentarios] = useState([]);
	const [novoComentario, setNovoComentario] = useState('');
	const [respostas, setRespostas] = useState({}); // Para armazenar respostas por ID de comentário

	useEffect(() => {
		const comentariosSalvos =
			JSON.parse(localStorage.getItem('comentarios')) || [];
		setComentarios(
			comentariosSalvos.filter(comentario => comentario.receitaId === receitaId)
		);
	}, [receitaId]);

	const adicionarComentario = () => {
		if (novoComentario.trim()) {
			const novoComentarioObj = {
				id: Date.now(),
				texto: novoComentario,
				usuario: 'Usuário Genérico',
				avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
				timestamp: new Date().toLocaleString(),
				respostas: [],
			};
			const novosComentarios = [...comentarios, novoComentarioObj];
			setComentarios(novosComentarios);
			localStorage.setItem('comentarios', JSON.stringify(novosComentarios));
			setNovoComentario('');
		}
	};

	const adicionarResposta = (comentarioId, respostaTexto) => {
		if (respostaTexto.trim()) {
			const novaResposta = {
				id: Date.now(),
				texto: respostaTexto,
				usuario: 'Usuário Genérico',
				avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
			};
			const novosComentarios = comentarios.map(comentario => {
				if (comentario.id === comentarioId) {
					return {
						...comentario,
						respostas: [...comentario.respostas, novaResposta],
					};
				}
				return comentario;
			});
			setComentarios(novosComentarios);
			localStorage.setItem('comentarios', JSON.stringify(novosComentarios));
		}
	};

	const removerResposta = (comentarioId, respostaId) => {
		const novosComentarios = comentarios.map(comentario => {
			if (comentario.id === comentarioId) {
				return {
					...comentario,
					respostas: comentario.respostas.filter(
						resposta => resposta.id !== respostaId
					),
				};
			}
			return comentario;
		});
		setComentarios(novosComentarios);
		localStorage.setItem('comentarios', JSON.stringify(novosComentarios));
	};

	const removerComentario = id => {
		const novosComentarios = comentarios.filter(
			comentario => comentario.id !== id
		);
		setComentarios(novosComentarios);
		localStorage.setItem('comentarios', JSON.stringify(novosComentarios));
	};

	return (
		<div className='comentarios-container'>
			<div className='input-novo-comentario'>
				<img
					className='comentario-avatar'
					src='https://randomuser.me/api/portraits/men/1.jpg'
					alt='Avatar'
				/>
				<input
					type='text'
					placeholder='Adicionar um comentário...'
					value={novoComentario}
					onChange={e => setNovoComentario(e.target.value)}
				/>
				<button onClick={adicionarComentario}>Publicar</button>
			</div>

			{comentarios.map(comentario => (
				<div key={comentario.id} className='comentario-item'>
					<img
						className='comentario-avatar'
						src={comentario.avatar}
						alt='Avatar'
					/>
					<div className='comentario-content'>
						<span className='comentario-username'>{comentario.usuario}</span>
						<span className='comentario-texto'>{comentario.texto}</span>
						<span className='comentario-timestamp'>{comentario.timestamp}</span>
						<button
							className='comentario-remover-btn'
							onClick={() => removerComentario(comentario.id)}
						>
							Excluir
						</button>

						<div className='respostas-lista'>
							{comentario.respostas.map(resposta => (
								<div key={resposta.id} className='resposta-item'>
									<img
										className='resposta-avatar'
										src={resposta.avatar}
										alt='Avatar'
									/>
									<div className='resposta-texto-container'>
										<span className='resposta-username'>
											{resposta.usuario}
										</span>
										<span className='resposta-texto'>{resposta.texto}</span>
										<button
											className='resposta-remover-btn'
											onClick={() =>
												removerResposta(comentario.id, resposta.id)
											}
										>
											Excluir
										</button>
									</div>
								</div>
							))}
						</div>

						<div className='resposta-input-container'>
							<input
								type='text'
								placeholder='Responder...'
								onKeyDown={e => {
									if (e.key === 'Enter') {
										adicionarResposta(comentario.id, e.target.value);
										e.target.value = '';
									}
								}}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Comentarios;
