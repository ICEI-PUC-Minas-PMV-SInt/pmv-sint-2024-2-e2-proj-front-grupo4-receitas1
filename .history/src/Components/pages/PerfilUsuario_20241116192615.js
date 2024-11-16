/** @format */

import React, { useState, useEffect } from 'react';
import styles from './Inicio.module.css';
import ReceitaCard from './../ReceitaCard';
import { receitas } from '../../utils/receitas.js'; // Importe o array de receitas

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
	const [receitasFiltradas, setReceitasFiltradas] = useState([]);

	// Atualiza as preferências selecionadas com base no estado atual
	useEffect(() => {
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
	}, [preferences]);

	// Busca as receitas salvas e aplica os filtros
	useEffect(() => {
		const savedRecipesIds =
			JSON.parse(localStorage.getItem('savedRecipes')) || [];
		const receitasSalvas = receitas.filter(receita =>
			savedRecipesIds.includes(receita.id)
		);

		const filtrarReceitas = receita => {
			return Object.entries(preferenciasSelecionadas).every(
				([categoria, preferencias]) => {
					return preferencias.some(preferencia => {
						const preferenciaLower = preferencia.toLowerCase();
						// Verifica o tipo de refeição
						if (categoria === 'Categorias') {
							return receita.tipoRefeicao?.toLowerCase() === preferenciaLower;
						}
						// Verifica componentes da receita
						if (categoria === 'Tipos de Refeição') {
							return (
								receita.nome?.toLowerCase().includes(preferenciaLower) ||
								receita.ingredientes?.some(ingrediente =>
									ingrediente.toLowerCase().includes(preferenciaLower)
								)
							);
						}
						// Verifica estilos alimentares ou tags
						if (categoria === 'Estilos Alimentares' || categoria === 'Tags') {
							return receita.tags?.some(
								tag => tag.toLowerCase() === preferenciaLower
							);
						}
						return false;
					});
				}
			);
		};

		setReceitasFiltradas(receitasSalvas.filter(filtrarReceitas));
	}, [preferenciasSelecionadas]);

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
						<h3>Suas Receitas Salvas</h3>
						<div className={styles.listaReceitas}>
							{receitasFiltradas.length > 0 ? (
								receitasFiltradas.map(receita => (
									<ReceitaCard
										key={receita.id}
										id={receita.id}
										nome={receita.nome}
										fotoReceita={receita.fotoReceita}
										fotoUsuarioPostador={receita.fotoUsuarioPostador}
										usuarioPostador={receita.usuarioPostador}
									/>
								))
							) : (
								<p>Nenhuma receita salva encontrada.</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PerfilUsuario;
