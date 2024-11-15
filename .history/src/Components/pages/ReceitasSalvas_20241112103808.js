/** @format */

import React, { useEffect, useState } from 'react';
import ListaReceitas from './ListaReceitas.js';
import styles from './ReceitasSalvas.module.css';

const tiposRefeicao = [
	'Café da Manhã',
	'Almoço',
	'Lanche',
	'Jantar',
	'Sobremesa',
];

const ReceitasSalvas = () => {
	const [salvasPorTipo, setSalvasPorTipo] = useState({});

	useEffect(() => {
		// Carregar receitas salvas do localStorage
		const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
		const receitas = JSON.parse(localStorage.getItem('receitas')) || []; // Assumindo que você tem todas as receitas aqui

		// Filtrar as receitas salvas e agrupar por tipo de refeição
		const salvasAgrupadas = tiposRefeicao.reduce((acc, tipo) => {
			acc[tipo] = receitas.filter(
				r => savedRecipes.includes(r.id) && r.tipoRefeicao === tipo
			);
			return acc;
		}, {});

		setSalvasPorTipo(salvasAgrupadas);
	}, []);

	return (
		<div className={styles.receitasSalvasContainer}>
			{tiposRefeicao.map(tipo => (
				<div key={tipo} className={styles.tipoRefeicaoSection}>
					{salvasPorTipo[tipo] && salvasPorTipo[tipo].length > 0 && (
						<>
							<div className={styles.tipoHeader}>{tipo}</div>
							<div className={styles.carrossel}>
								{salvasPorTipo[tipo].map(receita => (
									<ListaReceitas key={receita.id} tipoRefeicao={tipo} />
								))}
							</div>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default ReceitasSalvas;
