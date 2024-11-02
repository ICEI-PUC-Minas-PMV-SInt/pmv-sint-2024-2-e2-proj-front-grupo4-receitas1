/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import { receitas } from '../../utils/receitas.js';
import ReceitaCard from '../ReceitaCard.js';
import styles from './PaginaReceita.module.css'; // Importa o CSS modular

const PaginaReceita = () => {
	const { id } = useParams();
	const receita = receitas.find(r => r.id === Number(id));

	if (!receita) {
		return <p>Receita não encontrada!</p>;
	}

	return (
		<div className={styles.paginaReceita}>
			<div className={styles.receitaConteudo}>
				<div className={styles.receitaImagemBotoes}>
					<p>{receita.nome}</p>
					<img src={receita.fotoReceita} alt={`Receita de ${receita.nome}`} />
					<div className={styles.botoes}>
						<button className={styles.likeBtn}>Like</button>
						<button
							className={styles.comentariosBtn}
							onClick={() => {
								/* abre comentários */
							}}
						>
							Comentários
						</button>
						<button className={styles.salvarBtn}>Salvar</button>
						<button className={styles.compartilharBtn}>Compartilhar</button>
					</div>
				</div>
				<div className={styles.receitaInfo}>
					<h3>Ingredientes:</h3>
					<ul>
						{receita.ingredientes.map((ingrediente, index) => (
							<li key={index}>{ingrediente}</li>
						))}
					</ul>
					<h3>Modo de Preparo:</h3>
					<p>{receita.modoPreparo}</p>
				</div>
			</div>
			<div className={styles.receitasRecomendadas}>
				<h3>Receitas Recomendadas</h3>
				{receitas
					.filter(r => r.id !== receita.id)
					.slice(0, 5)
					.map(recomendada => (
						<ReceitaCard key={recomendada.id} {...recomendada} />
					))}
			</div>
		</div>
	);
};

export default PaginaReceita;
