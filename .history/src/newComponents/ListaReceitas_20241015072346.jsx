/** @format */

import React from 'react';
import { receitas } from './utils/receitas';

const ListaReceitas = ({ tipoRefeicao, todasReceitas = false }) => {
	return <ul>{receitas.filter(r => r === '')}</ul>;
};

export default ListaReceitas;
