/** @format */

import React from 'react';
import { receitas } from './utils/receitas';
import Comentarios from './Comentarios/Comentarios';

const ReceitaEComentarios = ({ fotoReceita, nomeReceita, id }) => {
	return (
		<div>
			<p>{nomeReceita}</p>
			<img src={fotoReceita} alt={`Receita de ${nomeReceita}`} />
		</div>
	);
};

export default ReceitaEComentarios;
