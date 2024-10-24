/** @format */

import React, { useState } from 'react';
import ListaReceitas from './ListaReceitas.js';
import ReceitaEComentarios from './ReceitaEComentarios.js';
import styles from './ReceitasList.module.css';
import stylesCategoria from './pages/Categoria.module.css';
import LargeButton from './LargeButton.js';

const MontagemPaginaCategoria = ({
	todasReceitas = false,
	tipoRefeicao = '',
	textoBotao = 'Página Inicial',
}) => {
	// Estados para controlar o id da receita e visibilidade do modal
	const [idReceitaAtiva, setIdReceitaAtiva] = useState(null);
	const [modalVisivel, setModalVisivel] = useState(false);

	// Função para abrir o modal e definir a receita ativa
	const abrirModal = id => {
		setIdReceitaAtiva(id); // Define o id da receita clicada
		setModalVisivel(true); // Exibe o modal
	};

	// Função para fechar o modal
	const fecharModal = () => {
		setModalVisivel(false); // Esconde o modal
		setIdReceitaAtiva(null); // Reseta o id da receita
	};

	return (
		<div className={stylesCategoria.containerPaginaDaCategoria}>
			{/* Lista de Receitas */}
			<LargeButton textoBotao={textoBotao} />
			<ListaReceitas
				tipoRefeicao={tipoRefeicao}
				todasReceitas={todasReceitas}
				onCommentClick={abrirModal}
			/>

			{/* Modal para ReceitaEComentarios */}
			{modalVisivel && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<button className={styles.fecharModal} onClick={fecharModal}>
							Fechar
						</button>
						{/* Renderiza o ReceitaEComentarios passando o id da receita ativa */}
						<ReceitaEComentarios id={idReceitaAtiva} />
					</div>
				</div>
			)}
		</div>
	);
};

export default MontagemPaginaCategoria;
