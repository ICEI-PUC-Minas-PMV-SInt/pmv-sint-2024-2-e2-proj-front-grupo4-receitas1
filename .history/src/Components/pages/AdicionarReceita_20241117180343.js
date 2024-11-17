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

		const receitasAdicionadas =
			JSON.parse(localStorage.getItem('userRecipes')) || [];
		const todasReceitas = [...receitasEstaticas, ...receitasAdicionadas];

		const receitasAleatorias = [...todasReceitas]
			.sort(() => Math.random() - 0.5)
			.slice(0, 8);
		setReceitasRecomendadas(receitasAleatorias);
	}, [user, navigate]);

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
		<div className={styles.paginaAdicionarReceita}>
			{/* Breadcrumbs */}
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

			{/* Formulário */}
			<div className={styles.receitaConteudo}>
				<h2 className={styles.titulo}>Adicionar Nova Receita</h2>
				<form
					onSubmit={e => {
						e.preventDefault();
						handleSalvarReceita();
					}}
					className={styles.formulario}
				>
					{/* Outros campos do formulário */}
					<button type='submit' className={styles.salvarButton}>
						Salvar Receita
					</button>
				</form>
			</div>
			{/* Recomendações */}
			<div className={styles.receitasRecomendadas}>
				<h3 className={styles.recomendacoesTitulo}>Receitas Recomendadas</h3>
				<div className={styles.recomendacoesLista}>
					{receitasRecomendadas.map(recomendada => (
						<ReceitaCard key={recomendada.id} {...recomendada} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AdicionarReceita;
