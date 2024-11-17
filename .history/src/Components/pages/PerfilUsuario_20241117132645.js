/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Inicio.module.css';
import ReceitaCard from './../ReceitaCard';
import { receitas } from '../../utils/receitas.js';
import defaultAvatar from '../../img/default-avatar.png';

const PerfilUsuario = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
	const [avatarPreview, setAvatarPreview] = useState(
		user?.avatar || defaultAvatar
	);

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

		// Emite evento customizado para atualizar o Navbar
		window.dispatchEvent(new Event('userAvatarUpdated'));
	};

	if (!user) {
		return <p>Por favor, faça login para ver o seu perfil.</p>;
	}

	return (
		<div className={styles.perfilContainer}>
			<div className={styles.perfilContent}>
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
				</div>

				<div className={styles.containerBemVindo}>
					<h2>Bem-vindo(a), {user.name}!</h2>
					<button
						className={styles.adicionarReceitaButton}
						onClick={() => navigate('/adicionar-receita')}
					>
						Adicionar Receita
					</button>
				</div>
			</div>
		</div>
	);
};

export default PerfilUsuario;
