/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	// Função para verificar se a receita atende às seleções de todas as categorias
	const atendePreferencias = receita => {
		// Verifica se as preferências selecionadas estão sendo atendidas
		return Object.entries(preferenciasSelecionadas).every(
			([categoria, preferencias]) =>
				preferencias.some(preferencia => {
					// Verifica propriedades específicas (e.g., vegana, fitness)
					if (receita.hasOwnProperty(preferencia)) {
						return receita[preferencia] === true;
					}
					// Verifica tipo de refeição
					if (categoria === 'Tipos de Refeição') {
						return receita.tipoRefeicao === preferencia;
					}
					// Fallback para `tags` (caso usado)
					if (Array.isArray(receita.tags)) {
						return receita.tags.includes(preferencia);
					}
					// Caso nenhuma das condições seja atendida
					return false;
				})
		);
	};

	// Aplicar o filtro às receitas
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
