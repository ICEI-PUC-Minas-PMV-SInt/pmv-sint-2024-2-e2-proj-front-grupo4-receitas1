/** @format */

import { useState } from 'react';
import './App.css';
import { receitas } from './newComponents/utils/receitas.js';
import { styled } from 'styled-components';
import ReceitaCard from './newComponents/ReceitaCard.jsx';
import LargeButton from './newComponents/LargeButton.jsx';
import VerMaisButton from './newComponents/VerMaisButton.jsx';
import ListaReceitas from './newComponents/ListaReceitas.jsx';
import Comentarios from './newComponents/Comentarios.jsx';

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
		</div>
	);
}
