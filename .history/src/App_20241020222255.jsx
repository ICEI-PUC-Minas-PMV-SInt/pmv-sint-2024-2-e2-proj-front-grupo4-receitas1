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
			<ReceitaEComentarios
				fotoReceita={receitas[10].fotoReceita}
				nome={receitas[10].nome}
				id={receitas[10].id}
				fotoUsuarioPostador={receitas[10].fotoUsuarioPostador}
				usuarioPostador={receitas[10].usuarioPostador}
			/>
		</div>
	);
}
