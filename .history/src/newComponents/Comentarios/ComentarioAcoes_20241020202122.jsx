/** @format */

import React from 'react';
import './Estilizacao Comentarios/ComentarioAcoes.css';

const ComentarioAcoes = ({
	toggleRespostasVisiveis,
	removerComentario,
	respostasVisiveis,
	qtdeRespostas,
}) => {
	return (
		<div className='comentario-acoes'>
			<button className='comentario-remover-btn' onClick={removerComentario}>
				Excluir
			</button>
			<button
				className='comentario-responder-btn'
				onClick={toggleRespostasVisiveis}
			>
				Responder
			</button>
			<div className='container-verMaisRespostas-ou-esconderRespostas'>
				{qtdeRespostas > 0 && (
					<button
						className='comentario-ver-mais-btn'
						onClick={toggleRespostasVisiveis}
					>
						{respostasVisiveis
							? `--Esconder respostas`
							: `Ver mais ${qtdeRespostas} respostas`}
					</button>
				)}
			</div>
		</div>
	);
};

export default ComentarioAcoes;
