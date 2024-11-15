/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	// Função para verificar se a receita atende às seleções de todas as categorias
	const atendePreferencias = receita => {
		// Verificar se a receita atende às condições de cada categoria selecionada
		return Object.entries(preferenciasSelecionadas).every(
			([categoria, preferencias]) =>
				preferencias.some(preferencia => {
					// Verificar se a propriedade existe e se é verdadeira ou se está presente em um campo `tags`
					if (receita.hasOwnProperty(preferencia)) {
						return receita[preferencia]; // Propriedade booleana (e.g., `vegana: true`)
					}
					if (Array.isArray(receita.tags)) {
						return receita.tags.includes(preferencia); // Tags genéricas
					}
					return false; // Se nenhuma condição for satisfeita
				})
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
