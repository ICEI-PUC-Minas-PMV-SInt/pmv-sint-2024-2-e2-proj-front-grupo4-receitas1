/** @format */

import React, { useState, useEffect } from 'react';
import styles from './AdicionarReceita.module.css';
import { useNavigate } from 'react-router-dom';

const AdicionarReceita = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('user'));

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
				setFoto(reader.result); // Salvar a imagem como string base64
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
			fotoReceita: foto, // Salvar a imagem em base64
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
		<div className={styles.container}>
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
					<input type='file' accept='image/*' onChange={handleFotoUpload} />
					{foto && <img src={foto} alt='Preview' className={styles.preview} />}
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
