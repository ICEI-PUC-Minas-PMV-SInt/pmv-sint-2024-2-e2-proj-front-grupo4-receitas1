/** @format */

import React, { useState } from 'react';
import UsuarioPostador from './UsuarioPostador';
import { CommentIcon } from './CommentIcon';
import '../styledComponents/ReceitaCard.css';
import Comentarios from './Comentarios/Comentarios';

const ReceitaCard = ({
	fotoReceita,
	fotoUsuarioPostador,
	usuarioPostador,
	nome,
	id, // Adicione o id da receita aqui
}) => {
	const [comentariosVisiveis, setComentariosVisiveis] = useState(false);

	// Função para alternar a visibilidade dos comentários
	const toggleComentarios = () => {
		setComentariosVisiveis(prev => !prev);
	};

	return (
		<div className='container-receita-card'>
			<img
				className='foto-receita'
				src={fotoReceita}
				alt={`Receita de ${nome}`}
			/>

			<div className='container-usuario-e-comentarios'>
				<UsuarioPostador
					fotoUsuarioPostador={fotoUsuarioPostador}
					usuarioPostador={usuarioPostador}
				/>
				{/* Ícone de comentários, que ao ser clicado, abre/fecha a seção de comentários */}
				<div onClick={toggleComentarios}>
					<CommentIcon />
				</div>
			</div>

			{/* Se o estado comentariosVisiveis for true, exiba o componente Comentarios */}
			{comentariosVisiveis && (
				<div className='container-comentarios'>
					<Comentarios receitaId={id} />
					<button
						className='btn-fechar-comentarios'
						onClick={toggleComentarios}
					>
						Ocultar Comentários
					</button>
				</div>
			)}
		</div>
	);
};

export default ReceitaCard;
