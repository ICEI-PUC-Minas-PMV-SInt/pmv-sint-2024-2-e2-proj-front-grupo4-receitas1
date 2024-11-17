/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Inicio.module.css';
import ReceitaCard from './../ReceitaCard';
import { receitas as receitasEstaticas } from '../../utils/receitas.js';
import defaultAvatar from '../../img/default-avatar.png';
import iconeAddReceita from '../../img/adicionar-receita-icon.png';

const PerfilUsuario = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
	const [avatarPreview, setAvatarPreview] = useState(
		user?.avatar || defaultAvatar
	);
	const [receitasFiltradas, setReceitasFiltradas] = useState([]);

	// Atualiza as receitas filtradas com as receitas salvas
	useEffect(() => {
		const savedRecipesIds =
			JSON.parse(localStorage.getItem('savedRecipes')) || [];
		const userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
		const todasReceitas = [...receitasEstaticas, ...userRecipes];

		const receitasAtualizadas = todasReceitas.map(receita => {
			// Atualiza a foto do postador se for a receita do usuário atual
			if (receita.usuarioPostador === user?.name) {
				return {
					...receita,
					fotoUsuarioPostador: user.avatar, // Atualiza com o avatar atual do usuário
				};
			}
			return receita;
		});

		// Filtra as receitas salvas
		const receitasSalvas = receitasAtualizadas.filter(receita =>
			savedRecipesIds.includes(receita.id)
		);

		setReceitasFiltradas(receitasSalvas);
	}, [user]);

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

	if (!user) {
		return <p>Por favor, faça login para ver o seu perfil.</p>;
	}

	return (
		<>
			<div className={styles.containerBemVindo}>
				<div className={styles.avatarSection}>
					<img
						src={avatarPreview}
						alt='Avatar do usuário'
						className={styles.avatar}
					/>
					<div className={styles.botoesAlterarFotoSalvarAlteracoes}>
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
					</div>
				</div>
				<div
					className={styles.containerBemVindoSalvarAlteracoesAdicionarReceita}
				>
					<div className={styles.bemVindoTexto}>
						<h2>Bem-vindo(a), {user.name}!</h2>
					</div>

					<div
						className={styles.containerAdicionarReceita}
						onClick={() => navigate('/adicionar-receita')}
					>
						<img src={iconeAddReceita} alt='Ícone adicionar receita' />
						<button className={styles.adicionarReceitaButton}>
							Adicionar Receita
						</button>
					</div>
				</div>
			</div>

			<div className={styles.perfilContainer}>
				<div className={styles.perfilContent}>
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
		</>
	);
};

export default PerfilUsuario;
