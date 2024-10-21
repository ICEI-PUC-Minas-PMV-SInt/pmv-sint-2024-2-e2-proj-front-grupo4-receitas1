/** @format */

import React from 'react';
import { receitas } from './utils/receitas';
import Comentarios from './Comentarios/Comentarios';
import UsuarioPostador from './UsuarioPostador';

const ReceitaEComentarios = ({
	fotoReceita,
	nome,
	id,
	fotoUsuarioPostador,
	usuarioPostador,
}) => {
	return (
		<div>
			<p>{nome}</p>
			<img src={fotoReceita} alt={`Receita de ${nome}`} />
			<UsuarioPostador
				fotoUsuarioPostador={fotoUsuarioPostador}
				usuarioPostador={usuarioPostador}
			/>
			<Comentarios receitaId={id} />
		</div>
	);
};

export default ReceitaEComentarios;
