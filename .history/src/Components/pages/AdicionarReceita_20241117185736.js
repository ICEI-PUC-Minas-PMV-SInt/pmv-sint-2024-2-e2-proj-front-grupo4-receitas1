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
	const [filtrosSelecionados, setFiltrosSelecionados] = useState([]);
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
				.sort(() => Math.random() - 0.5) // Embaralha as receitas
				.slice(0, 8); // Seleciona 8 receitas aleatórias

			// Salvar no estado e no sessionStorage
			setReceitasRecomendadas(receitasAleatorias);
			sessionStorage.setItem(
				'receitasRecomendadas',
				JSON.stringify(receitasAleatorias)
			);
		}
	}, [user, navigate]);

	const filtrosDisponiveis = [
		'Café da Manhã',
		'Almoço',
		'Jantar',
		'Sobremesa',
		'Lanche',
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
		if (!nome || !modoPreparo || ingredientes.length === 0 || !foto) {
			alert('Por favor, preencha todos os campos antes de salvar.');
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
			tipoRefeicao:
				filtrosSelecionados.find(f =>
					['Café da Manhã', 'Almoço', 'Jantar', 'Sobremesa', 'Lanche'].includes(
						f
					)
				) || '',
			tags: filtrosSelecionados,
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
					<div>
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
								<input
									type='file'
									accept='image/*'
									onChange={handleFotoUpload}
								/>
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
								<label>Modo de Preparo</label>
								<textarea
									value={modoPreparo}
									onChange={e => setModoPreparo(e.target.value)}
									placeholder='Descreva o modo de preparo'
								/>
							</div>
							<div className={styles.formGroup}>
								<label>Tags</label>
								<div className={styles.filtros}>
									{filtrosDisponiveis.map(filtro => (
										<div
											key={filtro}
											className={`${styles.filtroChip} ${
												filtrosSelecionados.includes(filtro)
													? styles.activeChip
													: ''
											}`}
											onClick={() =>
												setFiltrosSelecionados(prev =>
													prev.includes(filtro)
														? prev.filter(f => f !== filtro)
														: [...prev, filtro]
												)
											}
										>
											{filtro}
										</div>
									))}
								</div>
							</div>

							<button type='submit' className={styles.salvarButton}>
								Salvar Receita
							</button>
						</form>
					</div>
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
