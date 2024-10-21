/** @format */

import React from 'react';
import { receitas } from './utils/receitas';
import Comentarios from './Comentarios/Comentarios';

const ReceitaEComentarios = ({ fotoReceita, nome, id }) => {
	return (
		<div>
			<p>{nome}</p>
			<img src={fotoReceita} alt={`Receita de ${nome}`} />
		</div>
	);
};

export default ReceitaEComentarios;
