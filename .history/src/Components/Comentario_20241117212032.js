/** @format */

import React, { useState } from 'react';
import styles from './Comentario.module.css';
import Avatar from './Avatar.js';
import RespostasLista from './RespostasLista.js';
import ComentarioAcoes from './ComentarioAcoes.js';
import InputResposta from './InputResposta.js';
import FotoPadrao from '../img/default-avatar.png';

const Comentario = ({
	comentario,
	removerComentario,
	setComentarios,
	comentarios,
	receitaId,
}) => {
	const [respostasVisiveis, setRespostasVisiveis] = useState(false);

	// Obtém informações do usuário logado, caso existam
	const user = JSON.parse(localStorage.getItem('user'));

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
							usuario: user ? user.name : 'Usuário Anônimo',
							fotoUsuario: user ? user.avatar : FotoPadrao,
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
		<div className={styles.comentarioItem}>
			<Avatar src={comentario.fotoUsuario || FotoPadrao} />
			<div className={styles.comentarioContent}>
				<div className={styles.containerUsernameETempoPostado}>
					<span className={styles.comentarioUsername}>
						{comentario.usuario || 'Usuário Anônimo'}
					</span>
					<span className={styles.comentarioTimestamp}>Agora mesmo</span>
				</div>
				<p className={styles.comentarioTexto}>{comentario.texto}</p>

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
