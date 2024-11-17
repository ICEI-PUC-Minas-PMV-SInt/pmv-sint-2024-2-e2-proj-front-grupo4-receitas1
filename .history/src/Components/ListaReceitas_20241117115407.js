/** @format */

import React, { useEffect, useState } from 'react';
import { receitas as receitasEstaticas } from '../utils/receitas.js'; // Importa as receitas estáticas
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	const [todasReceitas, setTodasReceitas] = useState([]); // Estado para armazenar todas as receitas (estáticas + adicionadas)

	// Carregar receitas do localStorage e combinar com as estáticas
	useEffect(() => {
		const receitasAdicionadas =
			JSON.parse(localStorage.getItem('userRecipes')) || []; // Receitas do localStorage
		setTodasReceitas([...receitasEstaticas, ...receitasAdicionadas]); // Combina as duas listas
	}, []);

	// Função para verificar se uma receita atende às preferências selecionadas
	const atendePreferencias = receita => {
		return Object.entries(preferenciasSelecionadas).every(
			([categoria, preferencias]) => {
				return preferencias.some(preferencia => {
					const preferenciaLower = preferencia.toLowerCase();
					// Verifica o tipo de refeição
					if (categoria === 'Categorias') {
						return receita.tipoRefeicao?.toLowerCase() === preferenciaLower;
					}
					// Verifica componentes da receita
					if (categoria === 'Tipos de Refeição') {
						return (
							receita.nome?.toLowerCase().includes(preferenciaLower) ||
							receita.ingredientes?.some(ingrediente =>
								ingrediente.toLowerCase().includes(preferenciaLower)
							)
						);
					}
					// Verifica estilos alimentares ou tags
					if (categoria === 'Estilos Alimentares' || categoria === 'Tags') {
						return receita.tags?.some(
							tag => tag.toLowerCase() === preferenciaLower
						);
					}
					// Caso nenhum critério seja atendido
					return false;
				});
			}
		);
	};

	// Filtrar receitas com base nas preferências selecionadas
	const receitasFiltradas = todasReceitas.filter(atendePreferencias);

	return (
		<ul className={styles.containerListaReceitas}>
			{receitasFiltradas.length > 0 ? (
				receitasFiltradas.map(receita => (
					<ReceitaCard
						key={receita.id}
						id={receita.id}
						nome={receita.nome}
						fotoReceita={receita.fotoReceita}
						fotoUsuarioPostador={receita.fotoUsuarioPostador}
						usuarioPostador={receita.usuarioPostador}
					/>
				))
			) : (
				<p>Nenhuma receita encontrada.</p>
			)}
		</ul>
	);
};

export default ListaReceitas;
