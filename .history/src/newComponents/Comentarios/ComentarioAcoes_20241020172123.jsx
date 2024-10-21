/** @format */

import React from 'react';

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
	);
};

export default ComentarioAcoes;
