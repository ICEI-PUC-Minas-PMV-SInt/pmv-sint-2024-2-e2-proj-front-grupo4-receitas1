/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	// Filtrar receitas com base nas preferências selecionadas
	const filtrarReceitas = receitas.filter(receita => {
		return Object.entries(preferenciasSelecionadas).every(
			([categoria, preferencias]) => {
				return preferencias.some(preferencia => {
					// Verifica propriedades booleanas (e.g., vegana, receitaFitness)
					if (receita.hasOwnProperty(preferencia)) {
						return receita[preferencia] === true;
					}
					// Verifica tipo de refeição
					if (categoria === 'Tipos de Refeição') {
						return receita.tipoRefeicao === preferencia;
					}
					// Caso nenhuma condição seja satisfeita
					return false;
				});
			}
		);
	});

	return (
		<ul className={styles.containerListaReceitas}>
			{filtrarReceitas.length > 0 ? (
				filtrarReceitas.map(receita => (
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
