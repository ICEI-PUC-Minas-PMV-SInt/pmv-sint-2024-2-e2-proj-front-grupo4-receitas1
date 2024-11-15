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

	const togglePreference = preference => {
		setPreferences(prevPreferences => ({
			...prevPreferences,
			[preference]: !prevPreferences[preference],
		}));
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
					<div className={styles.preferencesGrid}>
						{Object.entries(categories).map(([category, preferencesList]) => (
							<div key={category} className={styles.categorySection}>
								<h4 className={styles.categoryTitle}>{category}</h4>
								<div className={styles.categoryChips}>
									{preferencesList.map(preference => (
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
							</div>
						))}
					</div>
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
