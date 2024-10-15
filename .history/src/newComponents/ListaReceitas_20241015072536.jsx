/** @format */

import React from 'react';
import { receitas } from './utils/receitas';

const ListaReceitas = ({ tipoRefeicao, todasReceitas = false }) => {
	return <ul>{receitas.filter(r => r.tipoRefeicao === '{tipoRefeicao}')}</ul>;
};

export default ListaReceitas;
