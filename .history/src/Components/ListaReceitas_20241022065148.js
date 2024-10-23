/** @format */

import React from 'react';
import { receitas } from './utils/receitas';
import ReceitaCard from './ReceitaCard';
import '../styledComponents/ListaReceitas.css';

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
			<ul className='container-lista-receitas'>
				{receitasFiltradas.map(rf => (
					<ReceitaCard key={rf.id} {...rf} onCommentClick={onCommentClick} />
				))}
			</ul>
		);
	} else if (todasReceitas === true) {
		return (
			<ul className='container-lista-receitas'>
				{receitas.map(r => (
					<ReceitaCard key={r.id} {...r} onCommentClick={onCommentClick} />
				))}
			</ul>
		);
	}

	return null;
};

export default ListaReceitas;
