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
	textoBotao,
	preferenciasAdicionais = {}, // Suporte para filtros adicionais, como tags ou estilos alimentares
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

	// Configurar preferências padrão (exemplo: apenas filtro por tipo de refeição)
	const preferenciasSelecionadas = {
		...(tipoRefeicao ? { 'Tipos de Refeição': [tipoRefeicao] } : {}),
		...preferenciasAdicionais, // Inclui filtros adicionais, como tags ou estilos alimentares
	};

	return (
		<div className={stylesCategoria.containerPaginaDaCategoria}>
			{/* Botão grande para navegação ou ação */}
			<LargeButton textoBotao={textoBotao} />

			{/* Lista de Receitas com as preferências selecionadas */}
			<ListaReceitas
				preferenciasSelecionadas={preferenciasSelecionadas}
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
