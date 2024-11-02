/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import UsuarioPostador from './UsuarioPostador.js';
import { CommentIcon } from './CommentIcon.js';
import ModalComentarios from './ModalComentarios.js'; // Importe o Modal
import styles from './ReceitaCard.module.css';
import ReactDOM from 'react-dom';

const ReceitaCard = ({
	fotoReceita,
	fotoUsuarioPostador,
	usuarioPostador,
	nome,
	id,
}) => {
	const [modalAberto, setModalAberto] = useState(false);
	const navigate = useNavigate();

	const abrirModal = () => {
		setModalAberto(true);
	};

	const fecharModal = () => {
		setModalAberto(false);
	};

	// Função para redirecionar para a página da receita ao clicar na imagem
	const handleNavigateToRecipe = () => {
		navigate(`/receitas/${id}`);
	};

	return (
		<div className={styles.containerReceitaCard}>
			<div className={styles.containerNomeReceita}>
				<p>{nome}</p>
			</div>
			<img
				className={styles.fotoReceita}
				src={fotoReceita}
				alt={`Receita de ${nome}`}
				onClick={handleNavigateToRecipe} // Redireciona ao clicar na imagem
				style={{ cursor: 'pointer' }} // Mostra o ponteiro para indicar clicável
			/>

			<div className={styles.containerUsuarioEComentarios}>
				<UsuarioPostador
					fotoUsuarioPostador={fotoUsuarioPostador}
					usuarioPostador={usuarioPostador}
				/>
				<CommentIcon onClick={abrirModal} /> {/* Abre o modal */}
			</div>

			{/* Renderiza o modal de comentários, se estiver aberto */}
			{modalAberto &&
				ReactDOM.createPortal(
					<ModalComentarios receitaId={id} onClose={fecharModal} />,
					document.body
				)}
		</div>
	);
};

export default ReceitaCard;
