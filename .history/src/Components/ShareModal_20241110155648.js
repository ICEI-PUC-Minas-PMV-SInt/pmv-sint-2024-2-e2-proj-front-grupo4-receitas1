/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './PaginaReceita.module.css';
import Breadcrumbs from './Breadcrumbs.js';
import UsuarioPostador from './UsuarioPostador.js';
import { SaveIcon } from './SaveIcon.js';
import { ShareIcon } from './ShareIcon.js';
import { LikeIcon } from './LikeIcon.js';
import { CommentIcon } from '../CommentIcon.js';
import Comentarios from '../Comentarios.js';
import ShareModal from '../ShareModal.js'; // Certifique-se de que o caminho está correto

const PaginaReceita = () => {
	const { id } = useParams();
	const receita = receitas.find(r => r.id === Number(id));
	const [receitasRecomendadas, setReceitasRecomendadas] = useState([]);
	const [comentariosVisiveis, setComentariosVisiveis] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [likes, setLikes] = useState(0);
	const [showShareModal, setShowShareModal] = useState(false); // Controle do modal de compartilhamento

	useEffect(() => {
		window.scrollTo(0, 0);
		const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
		if (savedRecipes.includes(receita.id)) setIsSaved(true);
		setLikes(receita.likes || 0);
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
		setLikes(prevLikes => prevLikes + 1);
		receita.likes = likes + 1;
	};

	const toggleShareModal = () => {
		console.log('Toggle Share Modal called'); // Verificação
		setShowShareModal(prev => !prev);
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
						<div className={styles.nomeReceitaEUsuarioPostador}>
							<p className={styles.receitaNome}>{receita.nome}</p>
							<UsuarioPostador
								className={styles.usuarioPostadorPgReceita}
								fotoUsuarioPostador={receita.fotoUsuarioPostador}
								usuarioPostador={receita.usuarioPostador}
							/>
						</div>
						<img src={receita.fotoReceita} alt={`Receita de ${receita.nome}`} />
						<div className={styles.botoes}>
							<LikeIcon onClick={handleLike} />
							<span>{likes}</span>
							<CommentIcon onClick={toggleComentarios} />
							<SaveIcon onClick={handleSaveRecipe} filled={isSaved} />
							<ShareIcon onClick={toggleShareModal} /> {/* Abre o modal */}
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
			{/* Verifica o estado de `showShareModal` */}
			{showShareModal && (
				<>
					{console.log('Rendering Share Modal')} {/* Verificação */}
					<ShareModal link={window.location.href} onClose={toggleShareModal} />
				</>
			)}
		</>
	);
};

export default PaginaReceita;
