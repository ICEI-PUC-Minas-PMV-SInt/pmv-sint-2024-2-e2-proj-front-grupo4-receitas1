/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Inicio.module.css';
import ReceitaCard from './../ReceitaCard';
import { receitas } from '../../utils/receitas.js';
import defaultAvatar from '../../img/default-avatar.png';

// Função para mapear nomes exibidos para os nomes usados na busca
const normalizarPreferencia = preference => {
	const mapeamentos = {
		LowCarb: 'low carb',
		Caldo: 'Sopa',
		Doces: 'Sobremesa',
		Sopas: 'Sopa',
	};
	return mapeamentos[preference] || preference;
};

const PerfilUsuario = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
	const [avatarPreview, setAvatarPreview] = useState(
		user?.avatar || defaultAvatar
	);
	const [preferences, setPreferences] = useState({
		sobremesa: false,
		café: false,
		almoço: false,
		lanche: false,
		jantar: false,
	});
	const [expandedCategories, setExpandedCategories] = useState([]);
	const [preferenciasSelecionadas, setPreferenciasSelecionadas] = useState({});
	const [receitasFiltradas, setReceitasFiltradas] = useState([]);

	// Atualiza preferências
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

	// Busca receitas salvas
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
						if (categoria === 'Categorias') {
							return receita.tipoRefeicao?.toLowerCase() === preferenciaLower;
						}
						if (categoria === 'Tipos de Refeição') {
							return (
								receita.nome?.toLowerCase().includes(preferenciaLower) ||
								receita.ingredientes?.some(ingrediente =>
									ingrediente.toLowerCase().includes(preferenciaLower)
								)
							);
						}
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

	const handleAvatarUpload = e => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setAvatarPreview(reader.result); // Atualiza o preview
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSaveProfile = () => {
		const updatedUser = { ...user, avatar: avatarPreview };
		setUser(updatedUser);
		localStorage.setItem('user', JSON.stringify(updatedUser));

		// Dispara evento customizado para atualizar o Navbar
		window.dispatchEvent(new Event('userAvatarUpdated'));
	};

	const categories = {
		Categorias: ['sobremesa', 'café da Manhã', 'almoço', 'lanche', 'jantar'],
		'Tipos de Refeição': ['macarrão', 'arroz', 'legumes', 'frango', 'peixe'],
		'Estilos Alimentares': ['vegana', 'fitness', 'lowCarb', 'nutritivo'],
		Tags: ['saudável', 'fácil', 'doce', 'rápido', 'sopa'],
	};

	if (!user) {
		return <p>Por favor, faça login para ver o seu perfil.</p>;
	}

	return (
		<>
			<div className={styles.avatarSection}>
				<img
					src={avatarPreview}
					alt='Avatar do usuário'
					className={styles.avatar}
				/>
				<label htmlFor='avatarUpload' className={styles.uploadLabel}>
					Alterar Foto
				</label>
				<input
					id='avatarUpload'
					type='file'
					accept='image/*'
					onChange={handleAvatarUpload}
					className={styles.fileInput}
				/>
				<button className={styles.saveButton} onClick={handleSaveProfile}>
					Salvar Alterações
				</button>
				<button
					className={styles.adicionarReceitaButton}
					onClick={() => navigate('/adicionar-receita')}
				>
					Adicionar Receita
				</button>
			</div>

			<div className={styles.containerBemVindo}>
				<h2>Bem-vindo(a), {user.name}!</h2>
			</div>

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
										fotoUsuarioPostador={user.avatar || defaultAvatar}
										usuarioPostador={user.name}
									/>
								))
							) : (
								<p>Nenhuma receita salva encontrada.</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PerfilUsuario;
