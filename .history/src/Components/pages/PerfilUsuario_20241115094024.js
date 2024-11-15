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

	const handleCheckboxChange = event => {
		const { name, checked } = event.target;
		setPreferences(prevPreferences => ({
			...prevPreferences,
			[name]: checked,
		}));
	};

	const selectedPreferences = Object.keys(preferences).filter(
		key => preferences[key]
	);

	if (!user) {
		return <p>Por favor, faça login para ver o seu perfil.</p>;
	}

	return (
		<div className={styles.perfilContainer}>
			<div className={styles.perfilContent}>
				<div className={styles.preferencesCard}>
					<h3>Preferências</h3>
					<div className={styles.preferencesGrid}>
						{Object.keys(preferences).map(preference => (
							<label key={preference} className={styles.preferenceItem}>
								<input
									type='checkbox'
									name={preference}
									checked={preferences[preference]}
									onChange={handleCheckboxChange}
								/>
								{preference.charAt(0).toUpperCase() + preference.slice(1)}
							</label>
						))}
					</div>
				</div>

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
	);
};

export default PerfilUsuario;
