/** @format */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import styles from './AdicionarReceita.module.css';
import { useNavigate } from 'react-router-dom';
import { receitas as receitasEstaticas } from '../../utils/receitas.js';
import ReceitaCard from '../ReceitaCard.js';

const AdicionarReceita = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('user'));

	const [nome, setNome] = useState('');
	const [ingredientes, setIngredientes] = useState([]);
	const [novoIngrediente, setNovoIngrediente] = useState('');
	const [modoPreparo, setModoPreparo] = useState('');
	const [foto, setFoto] = useState(null);
	const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
	const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
	const [receitasRecomendadas, setReceitasRecomendadas] = useState([]);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}

		// Verificar se já existem receitas recomendadas no sessionStorage
		const receitasSalvas = sessionStorage.getItem('receitasRecomendadas');

		if (receitasSalvas) {
			// Usar as receitas armazenadas no sessionStorage
			setReceitasRecomendadas(JSON.parse(receitasSalvas));
		} else {
			// Caso não existam, calcular receitas recomendadas
			const receitasAdicionadas =
				JSON.parse(localStorage.getItem('userRecipes')) || [];
			const todasReceitas = [...receitasEstaticas, ...receitasAdicionadas];

			// Embaralhar receitas e selecionar aleatoriamente
			const receitasAleatorias = [...todasReceitas]
				.sort(() => Math.random() - 0.5)
				.slice(0, 8); // Seleciona 8 receitas aleatórias

			// Salvar no estado e no sessionStorage
			setReceitasRecomendadas(receitasAleatorias);
			sessionStorage.setItem(
				'receitasRecomendadas',
				JSON.stringify(receitasAleatorias)
			);
		}
	}, [user, navigate]);

	const categoriasDisponiveis = [
		'Café da Manhã',
		'Almoço',
		'Jantar',
		'Sobremesa',
		'Lanche',
	];

	const tagsDisponiveis = [
		'Vegana',
		'Fitness',
		'LowCarb',
		'Sopa',
		'Doce',
		'Rápido',
		'Saudável',
	];

	const handleAdicionarIngrediente = () => {
		if (novoIngrediente.trim()) {
			setIngredientes([...ingredientes, novoIngrediente.trim()]);
			setNovoIngrediente('');
		}
	};

	const handleFotoUpload = e => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setFoto(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSalvarReceita = () => {
		if (
			!nome ||
			!modoPreparo ||
			ingredientes.length === 0 ||
			!foto ||
			!categoriaSelecionada
		) {
			alert(
				'Por favor, preencha todos os campos e selecione uma categoria antes de salvar.'
			);
			return;
		}

		const novaReceita = {
			id: Date.now(),
			nome,
			ingredientes,
			modoPreparo,
			fotoReceita: foto,
			usuarioPostador: user.name,
			fotoUsuarioPostador: user.avatar,
			tipoRefeicao: categoriaSelecionada,
			tags: tagsSelecionadas,
			likes: 0,
		};

		const receitasExistentes =
			JSON.parse(localStorage.getItem('userRecipes')) || [];
		localStorage.setItem(
			'userRecipes',
			JSON.stringify([...receitasExistentes, novaReceita])
		);

		alert('Receita adicionada com sucesso!');
		navigate('/');
	};

	return (
		<div>
			<div className={styles.breadcrumbs}>
				<Link to='/' className={styles.link}>
					<FaHome className={styles.iconHome} />
					<span>Início</span>
				</Link>
				<FaChevronRight className={styles.chevron} />
				<Link to='/perfilusuario' className={styles.link}>
					<span>Meu Perfil</span>
				</Link>
				<FaChevronRight className={styles.chevron} />
				<span className={styles.receitaNome}>Adicionar Receita</span>
			</div>
			<div className={styles.paginaAdicionarReceita}>
				<div className={styles.receitaConteudo}>
					<h2 className={styles.titulo}>Adicionar Nova Receita</h2>
					<form
						onSubmit={e => {
							e.preventDefault();
							handleSalvarReceita();
						}}
						className={styles.formulario}
					>
						<div className={styles.formGroup}>
							<label>Nome da Receita</label>
							<input
								type='text'
								value={nome}
								onChange={e => setNome(e.target.value)}
								placeholder='Digite o nome da receita'
							/>
						</div>
						<div className={styles.formGroup}>
							<label>Foto da Receita</label>
							<input type='file' accept='image/*' onChange={handleFotoUpload} />
							{foto && (
								<div className={styles.previewWrapper}>
									<img src={foto} alt='Preview' className={styles.preview} />
								</div>
							)}
						</div>
						<div className={styles.formGroup}>
							<label>Ingredientes</label>
							<div className={styles.ingredientesInput}>
								<input
									type='text'
									value={novoIngrediente}
									onChange={e => setNovoIngrediente(e.target.value)}
									placeholder='Digite um ingrediente'
								/>
								<button type='button' onClick={handleAdicionarIngrediente}>
									Adicionar
								</button>
							</div>
							<ul className={styles.listaIngredientes}>
								{ingredientes.map((ing, index) => (
									<li key={index}>{ing}</li>
								))}
							</ul>
						</div>
						<div className={styles.formGroup}>
							<label>Selecione a Categoria</label>
							<div className={styles.filtros}>
								{categoriasDisponiveis.map(categoria => (
									<div
										key={categoria}
										className={`${styles.filtroChip} ${
											categoriaSelecionada === categoria
												? styles.activeChip
												: ''
										}`}
										onClick={() => setCategoriaSelecionada(categoria)}
									>
										{categoria}
									</div>
								))}
							</div>
						</div>
						<div className={styles.formGroup}>
							<label>Adicione Tags</label>
							<div className={styles.filtros}>
								{tagsDisponiveis.map(tag => (
									<div
										key={tag}
										className={`${styles.filtroChip} ${
											tagsSelecionadas.includes(tag) ? styles.activeChip : ''
										}`}
										onClick={() =>
											setTagsSelecionadas(prev =>
												prev.includes(tag)
													? prev.filter(t => t !== tag)
													: [...prev, tag]
											)
										}
									>
										{tag}
									</div>
								))}
							</div>
						</div>
						<button type='submit' className={styles.salvarButton}>
							Salvar Receita
						</button>
					</form>
				</div>
				<div className={styles.receitasRecomendadas}>
					<h3 className={styles.recomendacoesTitulo}>Outras Receitas</h3>
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

export default AdicionarReceita;
