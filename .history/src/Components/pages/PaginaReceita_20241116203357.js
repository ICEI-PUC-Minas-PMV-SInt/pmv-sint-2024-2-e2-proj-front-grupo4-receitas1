/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { receitas } from '../../utils/receitas.js';
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

const PaginaReceita = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const receita = receitas.find(r => r.id === Number(id));
	const [receitasRecomendadas, setReceitasRecomendadas] = useState([]);
	const [comentariosVisiveis, setComentariosVisiveis] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [likes, setLikes] = useState(receita?.likes || 0);
	const [liked, setLiked] = useState(false);
	const [showShareModal, setShowShareModal] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
		if (savedRecipes.includes(receita.id)) setIsSaved(true);

		// Carregar estado de curtidas e número de likes do localStorage
		const likedRecipes = JSON.parse(localStorage.getItem('likedRecipes')) || [];
		const storedLikes = JSON.parse(localStorage.getItem('likesCount')) || {};

		if (likedRecipes.includes(receita.id)) setLiked(true);
		if (storedLikes[receita.id] !== undefined) {
			setLikes(storedLikes[receita.id]);
		}
	}, [receita]);

	useEffect(() => {
		if (receita) {
			const receitasDaMesmaCategoria = receitas.filter(
				r => r.tipoRefeicao === receita.tipoRefeicao && r.id !== receita.id
			);
			const receitasAleatorias = receitasDaMesmaCategoria
				.sort(() => Math.random() - 0.5)
				.slice(0, 8);
			setReceitasRecomendadas(receitasAleatorias);
		}
	}, [receita]);

	if (!receita) {
		return <p>Receita não encontrada!</p>;
	}

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
			// Se estiver curtido, descurtir e diminuir o número de likes
			setLikes(prevLikes => prevLikes - 1);
			likedRecipes = likedRecipes.filter(recipeId => recipeId !== receita.id);
			storedLikes[receita.id] = (storedLikes[receita.id] || likes) - 1;
		} else {
			// Se não estiver curtido, curtir e aumentar o número de likes
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
		<>
			<Breadcrumbs
				categoria={receita.tipoRefeicao}
				receitaNome={receita.nome}
			/>
			<div className={styles.paginaReceita}>
				<div className={styles.receitaConteudo}>
					<div className={styles.receitaImagemBotoes}>
						<UsuarioPostador
							className={styles.usuarioPostadorPgReceita}
							fotoUsuarioPostador={receita.fotoUsuarioPostador}
							usuarioPostador={receita.usuarioPostador}
						/>
						<div className={styles.nomeReceitaEUsuarioPostador}>
							<p className={styles.receitaNome}>{receita.nome}</p>
						</div>
						<img src={receita.fotoReceita} alt={`Receita de ${receita.nome}`} />
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
		</>
	);
};

export default PaginaReceita;
