/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	// Função para verificar se a receita atende às seleções de todas as categorias
	const atendePreferencias = receita => {
		return Object.entries(preferenciasSelecionadas).every(
			([categoria, preferencias]) =>
				preferencias.some(preferencia => {
					// Verifica se a propriedade existe na receita e corresponde à preferência
					if (receita.hasOwnProperty(preferencia)) {
						return receita[preferencia] === true;
					}
					// Verifica se a receita possui `tipoRefeicao` ou outras categorias relevantes
					if (categoria === 'Tipos de Refeição') {
						return receita.tipoRefeicao === preferencia;
					}
					// Fallback para `tags` se aplicável
					if (Array.isArray(receita.tags)) {
						return receita.tags.includes(preferencia);
					}
					// Caso nenhuma condição seja satisfeita
					return false;
				})
		);
	};

	// Aplicar filtro às receitas
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
