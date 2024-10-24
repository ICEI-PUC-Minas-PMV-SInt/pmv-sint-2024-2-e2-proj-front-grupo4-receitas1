/** @format */

import React, { useState } from 'react';
import UsuarioPostador from './UsuarioPostador.js';
import { CommentIcon } from './CommentIcon.js';
import ModalComentarios from './ModalComentarios.js'; // Importe o Modal
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
			<div className={styles.containerNomeReceita}>
				<p className={styles.nomeReceita}>{nome}</p>
			</div>
			<img
				className={styles.fotoReceita}
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
