/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdicionarReceita.module.css';

const AdicionarReceita = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const navigate = useNavigate();

	// Verifica se o usuário está logado
	if (!user) {
		return <p>Por favor, faça login para adicionar uma receita.</p>;
	}

	// Estados do formulário
	const [nome, setNome] = useState('');
	const [ingrediente, setIngrediente] = useState('');
	const [ingredientes, setIngredientes] = useState([]);
	const [modoPreparo, setModoPreparo] = useState('');
	const [tags, setTags] = useState([]);
	const [tipoRefeicao, setTipoRefeicao] = useState('');
	const [fotoReceita, setFotoReceita] = useState(null);

	// Opções para o formulário
	const opcoesCategorias = [
		'Café da Manhã',
		'Almoço',
		'Lanche',
		'Jantar',
		'Sobremesa',
	];
	const opcoesTags = [
		'vegana',
		'fitness',
		'low carb',
		'rápido',
		'sopa',
		'fácil',
		'doce',
		'saudável',
	];

	// Adiciona ingrediente à lista
	const adicionarIngrediente = () => {
		if (ingrediente.trim() !== '') {
			setIngredientes(prev => [...prev, ingrediente]);
			setIngrediente('');
		}
	};

	// Remove um ingrediente da lista
	const removerIngrediente = index => {
		setIngredientes(prev => prev.filter((_, i) => i !== index));
	};

	// Lida com o upload da foto
	const handleFotoUpload = e => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => setFotoReceita(reader.result);
			reader.readAsDataURL(file);
		}
	};

	// Lida com submissão do formulário
	const handleSubmit = e => {
		e.preventDefault();

		const novaReceita = {
			id: Date.now(), // ID único com timestamp
			nome,
			ingredientes,
			modoPreparo,
			fotoReceita,
			usuarioPostador: user.name,
			fotoUsuarioPostador:
				user.photo || 'https://randomuser.me/api/portraits/lego/2.jpg',
			tipoRefeicao,
			tags,
			likes: 0,
		};

		// Salvar no localStorage
		const receitasSalvas =
			JSON.parse(localStorage.getItem('customRecipes')) || [];
		receitasSalvas.push(novaReceita);
		localStorage.setItem('customRecipes', JSON.stringify(receitasSalvas));

		// Redireciona para a página inicial
		navigate('/');
	};

	// Alterna tags selecionadas
	const toggleTag = tag => {
		setTags(prev =>
			prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
		);
	};

	return (
		<div className={styles.container}>
			<h2>Adicionar Receita</h2>
			<form className={styles.formulario} onSubmit={handleSubmit}>
				{/* Nome da receita */}
				<label htmlFor='nome'>Nome da Receita</label>
				<input
					type='text'
					id='nome'
					value={nome}
					onChange={e => setNome(e.target.value)}
					required
				/>

				{/* Ingredientes */}
				<label htmlFor='ingrediente'>Adicionar Ingredientes</label>
				<div className={styles.ingredienteInput}>
					<input
						type='text'
						id='ingrediente'
						value={ingrediente}
						onChange={e => setIngrediente(e.target.value)}
					/>
					<button type='button' onClick={adicionarIngrediente}>
						Adicionar
					</button>
				</div>
				<ul className={styles.listaIngredientes}>
					{ingredientes.map((ing, index) => (
						<li key={index}>
							{ing}{' '}
							<button type='button' onClick={() => removerIngrediente(index)}>
								Remover
							</button>
						</li>
					))}
				</ul>

				{/* Modo de preparo */}
				<label htmlFor='modoPreparo'>Modo de Preparo</label>
				<textarea
					id='modoPreparo'
					value={modoPreparo}
					onChange={e => setModoPreparo(e.target.value)}
					required
				/>

				{/* Foto da receita */}
				<label htmlFor='fotoReceita'>Foto da Receita</label>
				<input type='file' id='fotoReceita' onChange={handleFotoUpload} />
				{fotoReceita && (
					<img
						src={fotoReceita}
						alt='Preview da receita'
						className={styles.preview}
					/>
				)}

				{/* Tipo de refeição */}
				<label htmlFor='tipoRefeicao'>Tipo de Refeição</label>
				<select
					id='tipoRefeicao'
					value={tipoRefeicao}
					onChange={e => setTipoRefeicao(e.target.value)}
					required
				>
					<option value=''>Selecione...</option>
					{opcoesCategorias.map(opcao => (
						<option key={opcao} value={opcao}>
							{opcao}
						</option>
					))}
				</select>

				{/* Tags */}
				<label>Tags</label>
				<div className={styles.tagsContainer}>
					{opcoesTags.map(tag => (
						<div
							key={tag}
							className={`${styles.tag} ${
								tags.includes(tag) ? styles.activeTag : ''
							}`}
							onClick={() => toggleTag(tag)}
						>
							{tag}
						</div>
					))}
				</div>

				{/* Botão de envio */}
				<button type='submit' className={styles.botaoEnviar}>
					Adicionar Receita
				</button>
			</form>
		</div>
	);
};

export default AdicionarReceita;
