/** @format */

import React from 'react';
import { receitas } from './utils/receitas';
import ReceitaCard from './ReceitaCard';

const ListaReceitas = ({ todasReceitas = false, tipoRefeicao }) => {
	if (tipoRefeicao !== '') {
		const receitasFiltradas = receitas.filter(
			r => r.tipoRefeicao === tipoRefeicao
		);
		return (
			<ul>
				{receitasFiltradas.map(rf => (
					<ReceitaCard key={rf.id} {...rf} />
				))}
			</ul>
		);
	} else if (todasReceitas === true) {
		return (
			<ul>
				{receitas.map(r => (
					<ReceitaCard key={r.id} {...r} />
				))}
			</ul>
		);
	}

	return null;
};

export default ListaReceitas;
