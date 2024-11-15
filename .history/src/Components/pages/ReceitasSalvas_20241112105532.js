/** @format */

import React, { useEffect, useState } from 'react';
import { receitas } from '../../utils/receitas.js'; // Importe diretamente o array de receitas
import ReceitaCard from '../ReceitaCard.js';
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
		const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

		// Filtrar as receitas para incluir apenas as que estão em `savedRecipes`
		const receitasSalvas = receitas.filter(receita =>
			savedRecipes.includes(receita.id)
		);

		// Agrupar as receitas salvas por tipo de refeição
		const salvasAgrupadas = tiposRefeicao.reduce((acc, tipo) => {
			acc[tipo] = receitasSalvas.filter(r => r.tipoRefeicao === tipo);
			return acc;
		}, {});

		setSalvasPorTipo(salvasAgrupadas);
	}, []);

	return (
		<div className={styles.receitasSalvasContainer}>
			{Object.keys(salvasPorTipo).length === 0 ? (
				<p>Nenhuma receita salva encontrada.</p>
			) : (
				tiposRefeicao.map(tipo => (
					<div key={tipo} className={styles.tipoRefeicaoSection}>
						{salvasPorTipo[tipo] && salvasPorTipo[tipo].length > 0 && (
							<>
								<div className={styles.tipoHeader}>{tipo}</div>
								<div className={styles.carrossel}>
									{salvasPorTipo[tipo].map(receita => (
										<ReceitaCard key={receita.id} {...receita} />
									))}
								</div>
							</>
						)}
					</div>
				))
			)}
		</div>
	);
};

export default ReceitasSalvas;
