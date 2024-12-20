/** @format */

import React, { useState } from 'react';
import UsuarioPostador from './UsuarioPostador';
import { CommentIcon } from './CommentIcon';
import ModalComentarios from './ModalComentarios'; // Importe o Modal
import styles from './ReceitaCard.module.css';

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
		<div className={styles.containerReceitaCard}>
			<img
				className='foto-receita'
				src={fotoReceita}
				alt={`Receita de ${nome}`}
			/>

			<div className={styles.containerUsuarioEComentarios}>
				<UsuarioPostador
					fotoUsuarioPostador={fotoUsuarioPostador}
					usuarioPostador={usuarioPostador}
				/>
				<CommentIcon onClick={abrirModal} /> {/* Abre o modal */}
			</div>

			{/* Renderiza o modal de comentários, se estiver aberto */}
			{modalAberto && <ModalComentarios receitaId={id} onClose={fecharModal} />}
		</div>
	);
};

export default ReceitaCard;
