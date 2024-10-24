/** @format */

import React, { useState } from 'react';
import ListaReceitas from '../../Components/ListaReceitas.js';
import ReceitaEComentarios from '../../Components/ReceitaEComentarios.js';
import styles from '../../Components/ReceitasList.module.css';
import stylesCategoria from './Categoria.module.css';
import LargeButton from '../../Components/LargeButton.js';
import MontagemPaginaCategoria from '../MontagemPaginaCategoria.js';

const Inicio = () => {
	return <MontagemPaginaCategoria todasReceitas={true} />;
};

export default Inicio;
