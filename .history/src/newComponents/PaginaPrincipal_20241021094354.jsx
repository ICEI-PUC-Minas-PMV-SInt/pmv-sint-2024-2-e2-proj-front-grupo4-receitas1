/** @format */

import React, { useState } from 'react';
import ListaReceitas from './ListaReceitas';
import ReceitaEComentarios from './ReceitaEComentarios';
import './ReceitasList.css'; // Crie um CSS para o modal se necessário

const PaginaPrincipal = () => {
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
		<div>
			{/* Lista de Receitas */}
			<ListaReceitas todasReceitas={true} onCommentClick={abrirModal} />

			{/* Modal para ReceitaEComentarios */}
			{modalVisivel && (
				<div className='modal'>
					<div className='modal-content'>
						<button className='fechar-modal' onClick={fecharModal}>
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

export default PaginaPrincipal;
