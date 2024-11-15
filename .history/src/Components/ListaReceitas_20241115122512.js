/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	// Se nenhuma preferência for selecionada, exiba todas as receitas
	if (Object.keys(preferenciasSelecionadas).length === 0) {
		return (
			<ul className={styles.containerListaReceitas}>
				{receitas.map(receita => (
					<ReceitaCard
						key={receita.id}
						id={receita.id}
						nome={receita.nome}
						fotoReceita={receita.fotoReceita}
						fotoUsuarioPostador={receita.fotoUsuarioPostador}
						usuarioPostador={receita.usuarioPostador}
					/>
				))}
			</ul>
		);
	}

	// Função para verificar se a receita atende às seleções
	const atendePreferencias = receita => {
		return Object.entries(preferenciasSelecionadas).every(
			([categoria, preferencias]) =>
				preferencias.some(preferencia => {
					// Verifica propriedades específicas
					if (receita[preferencia] === true) {
						return true;
					}
					// Verifica tipo de refeição
					if (
						categoria === 'Tipos de Refeição' &&
						receita.tipoRefeicao === preferencia
					) {
						return true;
					}
					// Caso nenhuma condição seja satisfeita
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
