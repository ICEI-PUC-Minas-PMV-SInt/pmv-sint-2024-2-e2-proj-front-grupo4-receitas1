/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { receitas as receitasEstaticas } from '../../utils/receitas.js';
import ReceitaCard from '../ReceitaCard.js';
import styles from './PaginaReceita.module.css';
import Breadcrumbs from '../Breadcrumbs.js';
import UsuarioPostador from '../UsuarioPostador.js';
import { SaveIcon } from '../SaveIcon.js';
import { ShareIcon } from '../ShareIcon.js';
import { LikeIcon } from '../LikeIcon.js';
import { CommentIcon } from '../CommentIcon.js';
import Comentarios from '../Comentarios.js';
import ShareModal from '../ShareModal.js';
import defaultAvatar from '../../img/default-avatar.png';

const PaginaReceita = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// Estado para a receita atual
	const [receita, setReceita] = useState(null);
	const [receitasRecomendadas, setReceitasRecomendadas] = useState([]);
	const [comentariosVisiveis, setComentariosVisiveis] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [likes, setLikes] = useState(0);
	const [liked, setLiked] = useState(false);
	const [showShareModal, setShowShareModal] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);

		const receitasAdicionadas =
			JSON.parse(localStorage.getItem('userRecipes')) || [];
		const todasReceitas = [...receitasEstaticas, ...receitasAdicionadas];

		const receitaEncontrada = todasReceitas.find(r => r.id === Number(id));
		setReceita(receitaEncontrada);

		if (receitaEncontrada) {
			setLikes(receitaEncontrada.likes || 0);

			const savedRecipes =
				JSON.parse(localStorage.getItem('savedRecipes')) || [];
			if (savedRecipes.includes(receitaEncontrada.id)) setIsSaved(true);

			const likedRecipes =
				JSON.parse(localStorage.getItem('likedRecipes')) || [];
			if (likedRecipes.includes(receitaEncontrada.id)) setLiked(true);

			const receitasDaMesmaCategoria = todasReceitas.filter(
				r =>
					r.tipoRefeicao === receitaEncontrada.tipoRefeicao &&
					r.id !== receitaEncontrada.id
			);

			// Atualizar foto de usuário para receitas adicionadas pelo usuário atual
			const user = JSON.parse(localStorage.getItem('user'));
			const receitasAtualizadas = receitasDaMesmaCategoria.map(receita => {
				if (user && receita.usuarioPostador === user.name) {
					return {
						...receita,
						fotoUsuarioPostador: user.avatar || defaultAvatar,
					};
				}
				return receita;
			});

			setReceitasRecomendadas(
				receitasAtualizadas.sort(() => Math.random() - 0.5).slice(0, 8)
			);
		}
	}, [id]);

	if (!receita) {
		return <p>Receita não encontrada!</p>;
	}

	const getFotoUsuarioPostador = () => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user && receita.usuarioPostador === user.name) {
			return user.avatar || defaultAvatar; // Foto do perfil mais recente
		}
		return receita.fotoUsuarioPostador || defaultAvatar;
	};

	const toggleComentarios = () => {
		setComentariosVisiveis(prev => !prev);
	};

	const handleSaveRecipe = () => {
		const savedUser = JSON.parse(localStorage.getItem('user'));
		if (!savedUser) {
			navigate('/login');
			return;
		}

		let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
		if (!isSaved) {
			savedRecipes.push(receita.id);
			setIsSaved(true);
		} else {
			savedRecipes = savedRecipes.filter(recipeId => recipeId !== receita.id);
			setIsSaved(false);
		}
		localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
	};

	const handleLike = () => {
		const savedUser = JSON.parse(localStorage.getItem('user'));
		if (!savedUser) {
			navigate('/login');
			return;
		}

		let likedRecipes = JSON.parse(localStorage.getItem('likedRecipes')) || [];
		let storedLikes = JSON.parse(localStorage.getItem('likesCount')) || {};

		if (liked) {
			setLikes(prevLikes => prevLikes - 1);
			likedRecipes = likedRecipes.filter(recipeId => recipeId !== receita.id);
			storedLikes[receita.id] = (storedLikes[receita.id] || likes) - 1;
		} else {
			setLikes(prevLikes => prevLikes + 1);
			likedRecipes.push(receita.id);
			storedLikes[receita.id] = (storedLikes[receita.id] || likes) + 1;
		}

		setLiked(!liked);
		localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
		localStorage.setItem('likesCount', JSON.stringify(storedLikes));
	};

	const toggleShareModal = () => {
		setShowShareModal(!showShareModal);
	};

	return (
		<div>
			<Breadcrumbs
				categoria={receita.tipoRefeicao}
				receitaNome={receita.nome}
			/>

			<div className={styles.paginaReceita}>
				<div className={styles.receitaConteudo}>
					<div className={styles.receitaImagemBotoes}>
						<div className={styles.nomeReceitaEUsuarioPostador}>
							<p className={styles.receitaNome}>{receita.nome}</p>
						</div>
						<img src={receita.fotoReceita} alt={`Receita de ${receita.nome}`} />
						<UsuarioPostador
							className={styles.usuarioPostadorPgReceita}
							fotoUsuarioPostador={getFotoUsuarioPostador()}
							usuarioPostador={receita.usuarioPostador}
						/>
						<div className={styles.botoes}>
							<SaveIcon onClick={handleSaveRecipe} filled={isSaved} />
							<LikeIcon onLike={handleLike} filled={liked} />
							<span>{likes}</span>
							<CommentIcon onClick={toggleComentarios} withText={true} />
							<ShareIcon onClick={toggleShareModal} />
						</div>
						{comentariosVisiveis && (
							<div className={styles.comentarios}>
								<Comentarios
									key={receita.id}
									receitaId={receita.id}
									className={styles.comentariosPersonalizados}
								/>
							</div>
						)}
					</div>
					<div className={styles.receitaInfo}>
						<h3>Ingredientes</h3>
						<ul>
							{receita.ingredientes.map((ingrediente, index) => (
								<li key={index}>{ingrediente}</li>
							))}
						</ul>
						<h3>Modo de Preparo</h3>
						<p>{receita.modoPreparo}</p>
						{showShareModal && (
							<ShareModal
								link={window.location.href}
								onClose={toggleShareModal}
							/>
						)}
					</div>
				</div>
				<div className={styles.receitasRecomendadas}>
					<h3 className={styles.recomendacoesTitulo}>Receitas Recomendadas</h3>
					<div className={styles.recomendacoesLista}>
						{receitasRecomendadas.map(recomendada => (
							<ReceitaCard key={recomendada.id} {...recomendada} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaginaReceita;
