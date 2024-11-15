/** @format */

import React, { useEffect, useState } from 'react';
import { receitas } from '../../utils/receitas.js'; // Importe diretamente o array de receitas
import ReceitaCard from './ReceitaCard.js';
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
	const [carouselIndex, setCarouselIndex] = useState({}); // Armazena o índice de início para cada tipo

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

		// Inicializa os índices do carrossel para cada tipo com zero
		const initialIndex = tiposRefeicao.reduce((acc, tipo) => {
			acc[tipo] = 0;
			return acc;
		}, {});
		setCarouselIndex(initialIndex);
	}, []);

	const handleNext = tipo => {
		setCarouselIndex(prevIndex => ({
			...prevIndex,
			[tipo]: Math.min(
				prevIndex[tipo] + 1,
				(salvasPorTipo[tipo]?.length || 0) - 4
			),
		}));
	};

	const handlePrev = tipo => {
		setCarouselIndex(prevIndex => ({
			...prevIndex,
			[tipo]: Math.max(prevIndex[tipo] - 1, 0),
		}));
	};

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
								<div className={styles.carrosselContainer}>
									<button
										className={styles.navButton}
										onClick={() => handlePrev(tipo)}
									>
										◀
									</button>
									<div className={styles.carrossel}>
										{salvasPorTipo[tipo]
											.slice(carouselIndex[tipo], carouselIndex[tipo] + 4)
											.map(receita => (
												<ReceitaCard key={receita.id} {...receita} />
											))}
									</div>
									<button
										className={styles.navButton}
										onClick={() => handleNext(tipo)}
									>
										▶
									</button>
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
