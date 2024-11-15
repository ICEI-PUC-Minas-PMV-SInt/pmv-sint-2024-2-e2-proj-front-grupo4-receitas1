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

	const [expandedCategories, setExpandedCategories] = useState([]); // Array de categorias abertas

	const togglePreference = preference => {
		setPreferences(prevPreferences => ({
			...prevPreferences,
			[preference]: !prevPreferences[preference],
		}));
	};

	const toggleCategory = category => {
		setExpandedCategories(
			prevState =>
				prevState.includes(category)
					? prevState.filter(item => item !== category) // Remove a categoria se já estiver aberta
					: [...prevState, category] // Adiciona a categoria se não estiver aberta
		);
	};

	const selectedPreferences = Object.keys(preferences).filter(
		key => preferences[key]
	);

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
							query={selectedPreferences.join(' ')}
							preferencias={preferences}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PerfilUsuario;
