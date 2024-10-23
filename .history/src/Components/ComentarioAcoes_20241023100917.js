/** @format */

import React from 'react';
import styles from './ComentarioAcoes.module.css';

const ComentarioAcoes = ({
	toggleRespostasVisiveis,
	removerComentario,
	respostasVisiveis,
	qtdeRespostas,
}) => {
	return (
		<div className={styles.comentarioAcoes}>
			<button
				className={styles.comentarioRemoverBtn}
				onClick={removerComentario}
			>
				Excluir
			</button>
			<button
				className={styles.comentarioResponderBtn}
				onClick={toggleRespostasVisiveis}
			>
				Responder
			</button>
			<div className={styles.containerVerMaisRespostasOuEsconderRespostas}>
				{qtdeRespostas > 0 && (
					<button
						className='comentario-ver-mais-btn'
						onClick={toggleRespostasVisiveis}
					>
						{respostasVisiveis
							? `Esconder respostas`
							: `Ver mais ${qtdeRespostas} respostas`}
					</button>
				)}
			</div>
		</div>
	);
};

export default ComentarioAcoes;
