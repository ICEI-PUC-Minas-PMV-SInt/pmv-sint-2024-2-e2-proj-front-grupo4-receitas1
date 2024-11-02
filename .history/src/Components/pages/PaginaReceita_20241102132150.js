/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import { receitas } from '../../utils/receitas.js';
import ReceitaCard from '../ReceitaCard.js';
import Comentarios from '../Comentarios.js';

const PaginaReceita = () => {
	const { id } = useParams();
	const receita = receitas.find(r => r.id === Number(id));

	if (!receita) {
		return <p>Receita não encontrada!</p>;
	}

	return (
		<div className='pagina-receita'>
			<div className='receita-conteudo'>
				<div className='receita-imagem-botoes'>
					<img src={receita.fotoReceita} alt={`Receita de ${receita.nome}`} />
					<div className='botoes'>
						<button className='like-btn'>Like</button>
						<button
							className='comentarios-btn'
							onClick={() => {
								/* abre comentários */
							}}
						>
							Comentários
						</button>
						<button className='salvar-btn'>Salvar</button>
						<button className='compartilhar-btn'>Compartilhar</button>
					</div>
				</div>
				<div className='receita-info'>
					<h2>{receita.nome}</h2>
					<h3>Ingredientes:</h3>
					<ul>
						{receita.ingredientes.map((ingrediente, index) => (
							<li key={index}>{ingrediente}</li>
						))}
					</ul>
					<h3>Modo de Preparo:</h3>
					<p>{receita.modoPreparo}</p>
				</div>
			</div>
			<div className='receitas-recomendadas'>
				<h3>Receitas Recomendadas</h3>
				{receitas
					.filter(r => r.id !== receita.id)
					.slice(0, 5)
					.map(recomendada => (
						<ReceitaCard key={recomendada.id} {...recomendada} />
					))}
			</div>
		</div>
	);
};

export default PaginaReceita;
