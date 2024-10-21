/** @format */

import React, { useState, useEffect, useRef } from 'react';
import ReceitaEComentarios from './ReceitaEComentarios'; // O componente de receita com comentários
import '../styledComponents/ReceitaCardNovo.css';

const ReceitaCard = ({ receita }) => {
	const [comentariosVisiveis, setComentariosVisiveis] = useState(false);
	const comentariosRef = useRef(null); // Para referenciar a seção de comentários

	// Função para abrir e fechar os comentários
	const toggleComentarios = () => {
		setComentariosVisiveis(!comentariosVisiveis);
	};

	// Função para fechar os comentários se o clique for fora da seção
	const handleClickOutside = event => {
		if (
			comentariosRef.current &&
			!comentariosRef.current.contains(event.target)
		) {
			setComentariosVisiveis(false); // Fecha se o clique for fora
		}
	};

	// useEffect para adicionar o event listener para clicar fora
	useEffect(() => {
		if (comentariosVisiveis) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		// Cleanup para remover o listener quando o componente desmontar
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [comentariosVisiveis]);

	return (
		<div className='receita-card'>
			<img
				src={receita.fotoReceita}
				alt={`Imagem da receita ${receita.nome}`}
			/>
			<h3>{receita.nome}</h3>
			<button onClick={toggleComentarios}>Mostrar Comentários</button>

			{/* Seção de Comentários */}
			{comentariosVisiveis && (
				<div className='comentarios-overlay' ref={comentariosRef}>
					<ReceitaEComentarios id={receita.id} />
					<button className='fechar-btn' onClick={toggleComentarios}>
						Fechar Comentários
					</button>
				</div>
			)}
		</div>
	);
};

export default ReceitaCard;
