/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({
	tipoRefeicao = '',
	todasReceitas = false,
	onCommentClick,
}) => {
	if (tipoRefeicao !== '') {
		const receitasFiltradas = receitas.filter(
			r => r.tipoRefeicao === tipoRefeicao
		);
		return (
			<ul className={styles.containerListaReceitas}>
				{receitasFiltradas.map(rf => (
					<ReceitaCard key={rf.id} {...rf} onCommentClick={onCommentClick} />
				))}
			</ul>
		);
	} else if (todasReceitas === true) {
		return (
			<ul className={styles.containerListaReceitas}>
				{receitas.map(r => (
					<ReceitaCard key={r.id} {...r} onCommentClick={onCommentClick} />
				))}
			</ul>
		);
	}

	return null;
};

export default ListaReceitas;
