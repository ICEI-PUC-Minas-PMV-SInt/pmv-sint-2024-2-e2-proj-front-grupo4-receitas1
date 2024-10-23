/** @format */

import React from 'react';
import { receitas } from '../utils/receitas.js';
import Comentarios from './Comentarios.js';
import UsuarioPostador from './UsuarioPostador.js';
import styles from './ReceitaEComentarios.module.css';

const ReceitaEComentarios = ({ id }) => {
	// Encontra a receita correspondente ao id passado
	const receita = receitas.find(receita => receita.id === id);

	// Verifica se a receita foi encontrada, caso contrário, retorna uma mensagem de erro
	if (!receita) {
		return <p>Receita não encontrada</p>;
	}

	// Extrai as propriedades da receita encontrada
	const { fotoReceita, nome, fotoUsuarioPostador, usuarioPostador } = receita;

	return (
		<div className={styles.containerReceitaEComentarios}>
			<div className={styles.containerNomeImagemEUsuario}>
				<p>{nome}</p>
				<img src={fotoReceita} alt={`Receita de ${nome}`} />
				<UsuarioPostador
					fotoUsuarioPostador={fotoUsuarioPostador}
					usuarioPostador={usuarioPostador}
				/>
			</div>
			<Comentarios key={id} receitaId={id} />
		</div>
	);
};

export default ReceitaEComentarios;
