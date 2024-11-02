/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { receitas } from '../../utils/receitas.js';
import ReceitaCard from '../ReceitaCard.js';
import styles from './PaginaReceita.module.css';
import Breadcrumbs from '../Breadcrumbs.js';

const PaginaReceita = () => {
	const { id } = useParams();
	const receita = receitas.find(r => r.id === Number(id));
	const [receitasRecomendadas, setReceitasRecomendadas] = useState([]);

	// Rola a página para o topo sempre que o componente é montado
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Filtra receitas da mesma categoria e embaralha para exibição aleatória
	useEffect(() => {
		if (receita) {
			const receitasDaMesmaCategoria = receitas.filter(
				r => r.tipoRefeicao === receita.tipoRefeicao && r.id !== receita.id
			);
			const receitasAleatorias = receitasDaMesmaCategoria
				.sort(() => Math.random() - 0.5)
				.slice(0, 8); // Exibe até 8 receitas
			setReceitasRecomendadas(receitasAleatorias);
		}
	}, [receita]);

	if (!receita) {
		return <p>Receita não encontrada!</p>;
	}

	return (
		<Breadcrumbs
		categoria={receita.tipoRefeicao}
		receitaNome={receita.nome}
	/>
		<div className={styles.paginaReceita}>
			<div className={styles.receitaConteudo}>
				<div className={styles.receitaImagemBotoes}>
					<p className={styles.receitaNome}>{receita.nome}</p>
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
				<h3 className={styles.recomendacoesTitulo}>Receitas Recomendadas</h3>
				<div className={styles.recomendacoesLista}>
					{receitasRecomendadas.map(recomendada => (
						<ReceitaCard key={recomendada.id} {...recomendada} />
					))}
				</div>
			</div>
		</div>
	);
};

export default PaginaReceita;
