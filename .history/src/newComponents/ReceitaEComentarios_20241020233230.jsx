/** @format */

import React from 'react';
import { receitas } from './utils/receitas';
import Comentarios from './Comentarios/Comentarios';
import UsuarioPostador from './UsuarioPostador';
import '../styledComponents/ReceitaEComentarios.css';

const ReceitaEComentarios = ({
	fotoReceita,
	nome,
	id,
	fotoUsuarioPostador,
	usuarioPostador,
}) => {
	return (
		<div className='container-receita-e-comentarios'>
			<div className='container-nome-imagem-e-usuario'>
				<p>{nome}</p>
				<img src={fotoReceita} alt={`Receita de ${nome}`} />
				<UsuarioPostador
					fotoUsuarioPostador={fotoUsuarioPostador}
					usuarioPostador={usuarioPostador}
				/>
			</div>
			<Comentarios receitaId={id} />
		</div>
	);
};

export default ReceitaEComentarios;
