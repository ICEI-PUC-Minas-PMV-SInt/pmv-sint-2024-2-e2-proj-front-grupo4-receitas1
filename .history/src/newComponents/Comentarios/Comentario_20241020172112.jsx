/** @format */

import React, { useState } from 'react';
import Resposta from './Resposta';
import InputResposta from './InputResposta';
import ComentarioAcoes from './ComentarioAcoes';
import RespostasLista from './RespostasLista';
import Avatar from './Avatar';

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

	const adicionarResposta = respostaTexto => {
		if (respostaTexto.trim() === '') return;

		const comentariosAtualizados = comentarios.map(com => {
			if (com.id === comentario.id) {
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
				<span className='comentario-username'>{comentario.usuario}</span>
				<p className='comentario-texto'>{comentario.texto}</p>
				<span className='comentario-timestamp'>2h atrás</span>

				<ComentarioAcoes
					toggleRespostasVisiveis={toggleRespostasVisiveis}
					removerComentario={() => removerComentario(comentario.id)}
					respostasVisiveis={respostasVisiveis}
					qtdeRespostas={comentario.respostas.length}
				/>

				{respostasVisiveis && (
					<>
						<InputResposta adicionarResposta={adicionarResposta} />
						<RespostasLista respostas={comentario.respostas} />
					</>
				)}
			</div>
		</div>
	);
};

export default Comentario;
