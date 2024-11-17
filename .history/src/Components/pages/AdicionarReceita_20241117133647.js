/** @format */

import React, { useState, useEffect } from 'react';
import styles from './AdicionarReceita.module.css';
import { useNavigate } from 'react-router-dom';

const AdicionarReceita = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('user'));

	// Garantir que os hooks sejam chamados fora de condições
	const [nome, setNome] = useState('');
	const [ingredientes, setIngredientes] = useState([]);
	const [novoIngrediente, setNovoIngrediente] = useState('');
	const [modoPreparo, setModoPreparo] = useState('');
	const [foto, setFoto] = useState(null);
	const [filtrosSelecionados, setFiltrosSelecionados] = useState([]);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user, navigate]);

	// Lista de filtros para o usuário adicionar
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

	// Função para adicionar ingredientes
	const handleAdicionarIngrediente = () => {
		if (novoIngrediente.trim()) {
			setIngredientes([...ingredientes, novoIngrediente.trim()]);
			setNovoIngrediente('');
		}
	};

	// Função para adicionar receita ao localStorage
	const handleSalvarReceita = () => {
		if (!nome || !modoPreparo || ingredientes.length === 0 || !foto) {
			alert('Por favor, preencha todos os campos antes de salvar.');
			return;
		}

		const novaReceita = {
			id: Date.now(), // Usar timestamp como ID único
			nome,
			ingredientes,
			modoPreparo,
			fotoReceita: URL.createObjectURL(foto), // Salvar como URL temporária
			usuarioPostador: user.name || 'Usuário Anônimo', // Nome do usuário
			fotoUsuarioPostador: user.avatar || null, // Usar avatar do usuário ou null
			tipoRefeicao:
				filtrosSelecionados.find(f =>
					['Café da Manhã', 'Almoço', 'Jantar', 'Sobremesa', 'Lanche'].includes(
						f
					)
				) || '',
			tags: filtrosSelecionados,
			likes: 0,
		};

		// Recuperar receitas existentes no localStorage
		const receitasExistentes =
			JSON.parse(localStorage.getItem('userRecipes')) || [];
		localStorage.setItem(
			'userRecipes',
			JSON.stringify([...receitasExistentes, novaReceita])
		);

		// Redirecionar após salvar
		alert('Receita adicionada com sucesso!');
		navigate('/');
	};

	return (
		<div className={styles.container}>
			<h2>Adicionar Nova Receita</h2>
			<form
				onSubmit={e => {
					e.preventDefault();
					handleSalvarReceita();
				}}
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
					<label>Foto da Receita</label>
					<input
						type='file'
						accept='image/*'
						onChange={e => setFoto(e.target.files[0])}
					/>
				</div>

				<div className={styles.formGroup}>
					<label>Filtros</label>
					<div className={styles.filtros}>
						{filtrosDisponiveis.map(filtro => (
							<div key={filtro} className={styles.filtroChip}>
								<input
									type='checkbox'
									id={filtro}
									checked={filtrosSelecionados.includes(filtro)}
									onChange={() =>
										setFiltrosSelecionados(prev =>
											prev.includes(filtro)
												? prev.filter(f => f !== filtro)
												: [...prev, filtro]
										)
									}
								/>
								<label htmlFor={filtro}>{filtro}</label>
							</div>
						))}
					</div>
				</div>

				<button type='submit' className={styles.salvarButton}>
					Salvar Receita
				</button>
			</form>
		</div>
	);
};

export default AdicionarReceita;
