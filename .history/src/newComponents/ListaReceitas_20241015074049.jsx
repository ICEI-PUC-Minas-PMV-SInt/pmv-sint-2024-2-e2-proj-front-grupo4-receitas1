/** @format */

import React from 'react';
import { receitas } from './utils/receitas';

const ListaReceitas = ({ tipoRefeicao, todasReceitas = false }) => {
	if (tipoRefeicao !== '') {
		return <ul>{receitas.filter(r => r.tipoRefeicao === tipoRefeicao)}</ul>;
	} else if ((todasReceitas = true)) {
		return <ul>{}</ul>;
	}
};

export default ListaReceitas;
