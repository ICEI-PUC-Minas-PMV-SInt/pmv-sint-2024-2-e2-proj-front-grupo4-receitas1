/** @format */

import React, { useState } from 'react';
import UsuarioPostador from './UsuarioPostador';
import { CommentIcon } from './CommentIcon';
import ModalComentarios from './ModalComentarios'; // Importe o Modal
import '../styledComponents/ReceitaCard.css';

const ReceitaCard = ({
	fotoReceita,
	fotoUsuarioPostador,
	usuarioPostador,
	nome,
	id,
}) => {
	const [modalAberto, setModalAberto] = useState(false);

	const abrirModal = () => {
		setModalAberto(true);
	};

	const fecharModal = () => {
		setModalAberto(false);
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
				<CommentIcon />
			</div>
		</div>
	);
};

export default ReceitaCard;
