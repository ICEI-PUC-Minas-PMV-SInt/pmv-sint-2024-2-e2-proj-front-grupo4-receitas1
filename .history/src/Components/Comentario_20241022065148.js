/** @format */

import React from 'react';
import './Estilizacao Comentarios/Comentario.css';
import Avatar from './Avatar';
import RespostasLista from './RespostasLista';
import ComentarioAcoes from './ComentarioAcoes';
import { useState } from 'react';
import InputResposta from './InputResposta';

const Comentario = ({
	comentario,
	removerComentario,
	setComentarios,
	comentarios,
	receitaId,
}) => {
	const [respostasVisiveis, setRespostasVisiveis] = useState(false);

	const toggleRespostasVisiveis = () => {
		setRespostasVisiveis(prev => !prev);
	};

	const adicionarResposta = (idComentario, respostaTexto) => {
		if (respostaTexto.trim() === '') return;

		const comentariosAtualizados = comentarios.map(com => {
			if (com.id === idComentario) {
				return {
					...com,
					respostas: [
						...com.respostas,
						{
							id: Date.now(),
							texto: respostaTexto,
							usuario: 'Usuário Genérico',
							fotoUsuario: 'https://randomuser.me/api/portraits/men/1.jpg',
						},
					],
				};
			}
			return com;
		});

		setComentarios(comentariosAtualizados);
		localStorage.setItem(
			`comentarios-${receitaId}`,
			JSON.stringify(comentariosAtualizados)
		);
	};

	return (
		<div className='comentario-item'>
			<Avatar src='https://randomuser.me/api/portraits/men/1.jpg' />
			<div className='comentario-content'>
				<div className='container-username-e-tempo-postado'>
					<span className='comentario-username'>{comentario.usuario}</span>
					<span className='comentario-timestamp'>2h atrás</span>
				</div>
				<p className='comentario-texto'>{comentario.texto}</p>

				<ComentarioAcoes
					toggleRespostasVisiveis={toggleRespostasVisiveis}
					removerComentario={() => removerComentario(comentario.id)}
					respostasVisiveis={respostasVisiveis}
					qtdeRespostas={comentario.respostas.length}
				/>

				{respostasVisiveis && (
					<>
						<RespostasLista respostas={comentario.respostas} />
						<InputResposta
							adicionarResposta={adicionarResposta}
							idComentario={comentario.id}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Comentario;
