/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	// Função para verificar se a receita atende às seleções de todas as categorias
	const atendePreferencias = receita => {
		// Verifica se as tags estão definidas para evitar erros
		const receitaTags = receita.tags || []; // Garante que seja um array vazio se `tags` não existir

		// Verificar se a receita atende às condições de cada categoria selecionada
		return Object.values(preferenciasSelecionadas).every(
			preferencesInCategory =>
				preferencesInCategory.some(preferencia =>
					receitaTags.includes(preferencia)
				)
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