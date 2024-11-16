/** @format */

import React, { useState, useEffect } from 'react';
import LargeButton from '../LargeButton';
import styles from './PerfilUsuario.module.css';
import ListaReceitas from './../ListaReceitas';

// Função para mapear nomes exibidos para os nomes usados na busca
const normalizarPreferencia = preference => {
	const mapeamentos = {
		LowCarb: 'low carb',
		Caldo: 'Sopa',
		Doces: 'Sobremesa',
		Sopas: 'Sopa',
	};
	return mapeamentos[preference] || preference; // Retorna o mapeamento ou o próprio valor se não houver mapeamento
};

const Inicio = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	const [preferences, setPreferences] = useState({
		sobremesa: false,
		café: false,
		almoço: false,
		lanche: false,
		jantar: false,
		macarrão: false,
		arroz: false,
		legumes: false,
		frango: false,
		peixe: false,
		carne: false,
		salada: false,
		feijão: false,
		milho: false,
		lasanha: false,
		vegana: false,
		caldo: false,
		fitness: false,
		saudável: false,
		fácil: false,
		econômica: false,
		lowCarb: false,
		rápido: false,
		doces: false,
		sopas: false,
	});

	const [expandedCategories, setExpandedCategories] = useState([]);
	const [preferenciasSelecionadas, setPreferenciasSelecionadas] = useState({});

	const togglePreference = preference => {
		setPreferences(prevPreferences => ({
			...prevPreferences,
			[preference]: !prevPreferences[preference],
		}));
	};

	const toggleCategory = category => {
		setExpandedCategories(prevState =>
			prevState.includes(category)
				? prevState.filter(item => item !== category)
				: [...prevState, category]
		);
	};

	const categories = {
		Categorias: ['sobremesa', 'café da Manhã', 'almoço', 'lanche', 'jantar'],
		'Tipos de Refeição': [
			'macarrão',
			'arroz',
			'legumes',
			'frango',
			'peixe',
			'carne',
			'salada',
			'feijão',
			'milho',
			'lasanha',
			'chocolate',
			'creme',
			'bolo',
			'torta',
		],
		'Estilos Alimentares': [
			'vegana',
			'fitness',
			'lowCarb',
			'rico em Proteínas',
			'rico em Fibras',
			'rico em Vegetais',
			'sem Lactose',
			'light',
			'natural',
			'rico em Vitaminas',
			'sem Glúten',
			'nutritivo',
			'leve',
			'energético',
			'vegetariana',
			'salgado',
			'tradicional',
			'mexicano',
			'italiano',
		],
		Tags: ['saudável', 'fácil', 'doce', 'rápido', 'sopa'],
	};

	useEffect(() => {
		// Normalizar todas as preferências selecionadas ao atualizar o estado
		const atualizadas = Object.entries(categories).reduce(
			(acc, [categoria, preferenciasLista]) => {
				const selecionadas = preferenciasLista.filter(
					pref => preferences[pref]
				);
				if (selecionadas.length > 0) {
					acc[categoria] = selecionadas.map(normalizarPreferencia);
				}
				return acc;
			},
			{}
		);
		setPreferenciasSelecionadas(atualizadas);
	}, [preferences]); // Recalcula quando `preferences` mudar

	if (!user) {
		return <p>Por favor, faça login para ver o seu perfil.</p>;
	}

	return (
		<div className={styles.containerGeral}>
			<LargeButton textoBotao={'Início'} />;
			<div className={styles.perfilContainer}>
				<div className={styles.perfilContent}>
					<div className={styles.preferencesCard}>
						<h3>Preferências</h3>
						{Object.keys(categories).map(category => (
							<div key={category} className={styles.accordion}>
								<div
									className={styles.accordionHeader}
									onClick={() => toggleCategory(category)}
								>
									{category}
									<span className={styles.accordionArrow}>
										{expandedCategories.includes(category) ? '▲' : '▼'}
									</span>
								</div>
								{expandedCategories.includes(category) && (
									<div className={styles.accordionContent}>
										{categories[category].map(preference => (
											<div
												key={preference}
												className={`${styles.preferenceChip} ${
													preferences[preference] ? styles.activeChip : ''
												}`}
												onClick={() => togglePreference(preference)}
											>
												{preference.charAt(0).toUpperCase() +
													preference.slice(1)}
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>

					<div className={styles.containerBemVindoEFilteredRecipes}>
						<div className={styles.filteredRecipes}>
							<h3>Receitas Baseadas nas Preferências</h3>
							<ListaReceitas
								preferenciasSelecionadas={preferenciasSelecionadas}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Inicio;
