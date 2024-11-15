/** @format */

import React, { useState } from 'react';
import styles from './PerfilUsuario.module.css';
import ListaReceitas from './../ListaReceitas';

const PerfilUsuario = () => {
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
	});

	const [expandedCategories, setExpandedCategories] = useState([]);

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

	// Organizar seleções por categorias
	const categories = {
		'Tipos de Refeição': ['sobremesa', 'café', 'almoço', 'lanche', 'jantar'],
		'Ingredientes Principais': [
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
		],
		'Estilos Alimentares': ['vegana', 'caldo', 'fitness'],
	};

	// Criar `preferenciasSelecionadas`
	const preferenciasSelecionadas = Object.entries(categories).reduce(
		(acc, [categoria, preferenciasLista]) => {
			const selecionadas = preferenciasLista.filter(pref => preferences[pref]);
			if (selecionadas.length > 0) acc[categoria] = selecionadas;
			return acc;
		},
		{}
	);

	if (!user) {
		return <p>Por favor, faça login para ver o seu perfil.</p>;
	}

	return (
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
											{preference.charAt(0).toUpperCase() + preference.slice(1)}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>

				<div className={styles.containerBemVindoEFilteredRecipes}>
					<h2>Bem-vindo(a), {user.name}!</h2>
					<div className={styles.filteredRecipes}>
						<h3>Receitas Baseadas nas Preferências</h3>
						<ListaReceitas
							preferenciasSelecionadas={preferenciasSelecionadas}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PerfilUsuario;
