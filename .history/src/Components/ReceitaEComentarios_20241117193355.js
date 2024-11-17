/** @format */

import React from 'react';
import { receitas as receitasEstaticas } from '../utils/receitas.js';
import Comentarios from './Comentarios.js';
import UsuarioPostador from './UsuarioPostador.js';
import styles from './ReceitaEComentarios.module.css';

const ReceitaEComentarios = ({ id }) => {
	// Obtém receitas adicionadas pelo usuário do localStorage
	const receitasUsuario = JSON.parse(localStorage.getItem('userRecipes')) || [];

	// Combina as receitas estáticas com as do usuário
	const todasReceitas = [...receitasEstaticas, ...receitasUsuario];

	// Encontra a receita correspondente ao id passado
	const receita = todasReceitas.find(receita => receita.id === id);

	// Verifica se a receita foi encontrada, caso contrário, retorna uma mensagem de erro
	if (!receita) {
		return <p>Receita não encontrada</p>;
	}

	// Obtém o usuário logado para buscar a foto atualizada
	const user = JSON.parse(localStorage.getItem('user'));

	// Determina a foto do usuário postador
	const fotoUsuarioAtualizada =
		receita.usuarioPostador === user?.name
			? user?.avatar
			: receita.fotoUsuarioPostador;

	// Extrai as propriedades da receita encontrada
	const { fotoReceita, nome, usuarioPostador } = receita;

	return (
		<div className={styles.containerReceitaEComentarios}>
			<div className={styles.containerNomeImagemEUsuario}>
				<p>{nome}</p>
				<img src={fotoReceita} alt={`Receita de ${nome}`} />
				<UsuarioPostador
					fotoUsuarioPostador={fotoUsuarioAtualizada}
					usuarioPostador={usuarioPostador}
				/>
			</div>
			<Comentarios key={id} receitaId={id} />
		</div>
	);
};

export default ReceitaEComentarios;
