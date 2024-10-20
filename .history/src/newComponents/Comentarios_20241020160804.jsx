/** @format */

import React, { useState, useEffect } from 'react';
import '../styledComponents/Comentarios.css';
import { SendIcon } from './SendIcon';

const Comentarios = ({ receitaId }) => {
	const [comentarios, setComentarios] = useState([]);
	const [novoComentario, setNovoComentario] = useState('');
	const [respostaTexto, setRespostaTexto] = useState({});
	const [respostasVisiveis, setRespostasVisiveis] = useState({});

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
				usuario: 'Usuário Genérico', // Simule o nome do usuário autenticado
				respostas: [], // Inicialmente, cada comentário terá uma lista vazia de respostas
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

	const adicionarResposta = comentarioId => {
		if (!respostaTexto[comentarioId]?.trim()) return;

		const comentariosAtualizados = comentarios.map(comentario => {
			if (comentario.id === comentarioId) {
				return {
					...comentario,
					respostas: [
						...comentario.respostas,
						{
							id: Date.now(),
							texto: respostaTexto[comentarioId],
							usuario: 'Usuário Genérico', // Simule o nome do usuário autenticado
							fotoUsuario: 'https://randomuser.me/api/portraits/men/1.jpg', // Simule a foto do usuário autenticado
						},
					],
				};
			}
			return comentario;
		});

		setComentarios(comentariosAtualizados);
		setRespostaTexto({ ...respostaTexto, [comentarioId]: '' }); // Limpa o input após adicionar
		localStorage.setItem(
			`comentarios-${receitaId}`,
			JSON.stringify(comentariosAtualizados)
		);
	};

	const toggleRespostasVisiveis = comentarioId => {
		setRespostasVisiveis(prev => ({
			...prev,
			[comentarioId]: !prev[comentarioId],
		}));
	};

	const handleRespostaChange = (comentarioId, value) => {
		setRespostaTexto({ ...respostaTexto, [comentarioId]: value });
	};

	return (
		<div className='comentarios-container'>
			<h3>Comentários</h3>
			{comentarios.map(comentario => (
				<div className='comentario-item' key={comentario.id}>
					<img
						className='comentario-avatar'
						src='https://randomuser.me/api/portraits/men/1.jpg'
						alt='Avatar'
					/>
					<div className='comentario-content'>
						<span className='comentario-username'>{comentario.usuario}</span>
						<p className='comentario-texto'>{comentario.texto}</p>
						<span className='comentario-timestamp'>2h atrás</span>
						<button
							className='comentario-remover-btn'
							onClick={() => removerComentario(comentario.id)}
						>
							Excluir
						</button>
						<button
							className='comentario-responder-btn'
							onClick={() => toggleRespostasVisiveis(comentario.id)}
						>
							Responder
						</button>

						{respostasVisiveis[comentario.id] && (
							<div className='resposta-input-container'>
								<input
									type='text'
									className='resposta-input'
									placeholder='Escreva sua resposta...'
									value={respostaTexto[comentario.id] || ''}
									onChange={e =>
										handleRespostaChange(comentario.id, e.target.value)
									}
								/>
								<button
									className='resposta-enviar-btn'
									onClick={() => adicionarResposta(comentario.id)}
								>
									ok
								</button>
							</div>
						)}

						{comentario.respostas.length > 0 && (
							<div className='comentario-respostas'>
								<button
									className='comentario-ver-mais-btn'
									onClick={() => toggleRespostasVisiveis(comentario.id)}
								>
									{respostasVisiveis[comentario.id]
										? `Esconder respostas`
										: `Ver mais ${comentario.respostas.length} respostas`}
								</button>
								{respostasVisiveis[comentario.id] && (
									<div className='respostas-lista'>
										{comentario.respostas.map(resposta => (
											<div className='resposta-item' key={resposta.id}>
												<img
													className='resposta-avatar'
													src={resposta.fotoUsuario}
													alt='Avatar'
												/>
												<div className='resposta-content'>
													<span className='resposta-username'>
														{resposta.usuario}
													</span>
													<p className='resposta-texto'>{resposta.texto}</p>
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			))}

			<div className='input-novo-comentario'>
				<input
					type='text'
					value={novoComentario}
					onChange={e => setNovoComentario(e.target.value)}
					placeholder='Adicione um comentário...'
				/>
				<button onClick={adicionarComentario}>Comentar</button>
			</div>
		</div>
	);
};

export default Comentarios;
