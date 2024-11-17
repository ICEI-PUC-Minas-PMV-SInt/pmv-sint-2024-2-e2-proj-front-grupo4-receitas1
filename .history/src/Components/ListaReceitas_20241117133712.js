/** @format */

import React, { useEffect, useState } from 'react';
import { receitas as receitasEstaticas } from '../utils/receitas.js'; // Importa as receitas estáticas
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';
import defaultAvatar from '../img/default-avatar.png';

const ListaReceitas = ({ preferenciasSelecionadas = {} }) => {
	const [todasReceitas, setTodasReceitas] = useState([]); // Estado para armazenar todas as receitas (estáticas + adicionadas)

	useEffect(() => {
		const receitasAdicionadas =
			JSON.parse(localStorage.getItem('userRecipes')) || []; // Receitas do localStorage
		const user = JSON.parse(localStorage.getItem('user'));

		// Adiciona o avatar do usuário às receitas criadas
		const receitasComAvatar = receitasAdicionadas.map(receita => ({
			...receita,
			fotoUsuarioPostador: user?.avatar || defaultAvatar,
			usuarioPostador: user?.name || 'Usuário Anônimo',
		}));

		setTodasReceitas([...receitasEstaticas, ...receitasComAvatar]); // Combina as duas listas
	}, []);

	// Função para verificar se uma receita atende às preferências selecionadas
	const atendePreferencias = receita => {
		return Object.entries(preferenciasSelecionadas).every(
			([categoria, preferencias]) => {
				return preferencias.some(preferencia => {
					const preferenciaLower = preferencia.toLowerCase();
					if (categoria === 'Categorias') {
						return receita.tipoRefeicao?.toLowerCase() === preferenciaLower;
					}
					if (categoria === 'Tipos de Refeição') {
						return (
							receita.nome?.toLowerCase().includes(preferenciaLower) ||
							receita.ingredientes?.some(ingrediente =>
								ingrediente.toLowerCase().includes(preferenciaLower)
							)
						);
					}
					if (categoria === 'Estilos Alimentares' || categoria === 'Tags') {
						return receita.tags?.some(
							tag => tag.toLowerCase() === preferenciaLower
						);
					}
					return false;
				});
			}
		);
	};

	// Filtrar receitas com base nas preferências selecionadas
	const receitasFiltradas = todasReceitas.filter(atendePreferencias);

	return (
		<ul className={styles.containerListaReceitas}>
			{receitasFiltradas.length > 0 ? (
				receitasFiltradas.map(receita => (
					<ReceitaCard
						key={receita.id}
						id={receita.id}
						nome={receita.nome}
						fotoReceita={receita.fotoReceita}
						fotoUsuarioPostador={receita.fotoUsuarioPostador}
						usuarioPostador={receita.usuarioPostador}
					/>
				))
			) : (
				<p>Nenhuma receita encontrada.</p>
			)}
		</ul>
	);
};

export default ListaReceitas;
