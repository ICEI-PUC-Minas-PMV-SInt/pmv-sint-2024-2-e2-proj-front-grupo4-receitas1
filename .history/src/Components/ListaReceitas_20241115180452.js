/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	// Função para verificar se uma receita atende às preferências selecionadas
	const atendePreferencias = receita => {
		return Object.entries(preferenciasSelecionadas).every(
			([categoria, preferencias]) => {
				return preferencias.some(preferencia => {
					const preferenciaLower = preferencia.toLowerCase();
					// Verifica o tipo de refeição
					if (categoria === 'Tipos de Refeição') {
						return receita.tipoRefeicao?.toLowerCase() === preferenciaLower;
					}
					// Verifica componentes da receita
					if (categoria === 'Componentes da Receita') {
						return (
							receita.nome?.toLowerCase().includes(preferenciaLower) ||
							receita.ingredientes?.some(ingrediente =>
								ingrediente.toLowerCase().includes(preferenciaLower)
							)
						);
					}
					// Verifica estilos alimentares ou tags
					if (categoria === 'Estilos Alimentares' || categoria === 'tags') {
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
	const receitasFiltradas = receitas.filter(atendePreferencias);

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
