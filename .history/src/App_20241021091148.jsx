/** @format */

import { useState } from 'react';
import './App.css';
import { receitas } from './newComponents/utils/receitas.js';
import { styled } from 'styled-components';
import ReceitaCard from './newComponents/ReceitaCard.jsx';
import LargeButton from './newComponents/LargeButton.jsx';
import VerMaisButton from './newComponents/VerMaisButton.jsx';
import ListaReceitas from './newComponents/ListaReceitas.jsx';
import Comentarios from './newComponents/Comentarios/Comentarios.jsx';
import ReceitaEComentarios from './newComponents/ReceitaEComentarios.jsx';

// ESTE ARQUIVO É PARA TESTAR OS COMPONENTES.

export function App() {
	return (
		<div className='main'>
			{/* <section>
				{receitas.map(r => (
					<ReceitaCard key={r.id} {...r} />
				))}
			</section> */}

			{/* <section>
				<LargeButton textoBotao={'Almoço'} />
				<VerMaisButton />
			</section> */}

			{/* <ListaReceitas tipoRefeicao='Lanche' /> */}

			{/* <Comentarios receitaId={receitas[0].id} /> */}
			{/* <Comentarios receitaId={receitas[6].id} /> */}
			{/* <ReceitaEComentarios id={1} /> */}
			{/* <ReceitaCardNovo key={receitas[0].id} receita={receitas[0]} /> */}
			{/* <ReceitaCard
				key={receitas[9].id}
				fotoReceita={receitas[9].fotoReceita}
				fotoUsuarioPostador={receitas[9].fotoUsuarioPostador}
				usuarioPostador={receitas[9].usuarioPostador}
				nome={receitas[9].nome}
				id={receitas[9].id}
			/> */}
		</div>
	);
}
