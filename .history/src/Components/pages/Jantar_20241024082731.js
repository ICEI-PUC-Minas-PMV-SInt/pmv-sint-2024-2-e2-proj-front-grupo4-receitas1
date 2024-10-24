/** @format */

import React, { useState } from 'react';
import ListaReceitas from '../../Components/ListaReceitas.js';
import ReceitaEComentarios from '../../Components/ReceitaEComentarios.js';
import styles from '../../Components/ReceitasList.module.css';
import stylesCategoria from './Categoria.module.css';
import LargeButton from '../../Components/LargeButton.js';
import MontagemPaginaCategoria from '../MontagemPaginaCategoria.js';

const Jantar = () => {
	return <MontagemPaginaCategoria tipoRefeicao='Jantar' textoBotao='Jantar' />;
};

export default Jantar;
