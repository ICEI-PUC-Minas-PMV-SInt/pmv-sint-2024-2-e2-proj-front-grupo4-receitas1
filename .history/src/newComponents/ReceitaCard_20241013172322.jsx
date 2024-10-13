/** @format */

import React from 'react';
import UsuarioPostador from './UsuarioPostador';
import { CommentIcon } from './CommentIcon';
import './styleComponents/ReceitaCard.css';

const ReceitaCard = ({
	fotoReceita,
	fotoUsuarioPostador,
	usuarioPostador,
	nome,
}) => {
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
				<CommentIcon />
			</div>
		</div>
	);
};

export default ReceitaCard;
