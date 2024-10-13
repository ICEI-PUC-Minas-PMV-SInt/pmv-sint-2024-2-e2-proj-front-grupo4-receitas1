/** @format */

import { useState } from 'react';
import './App.css';
import { receitas } from './newComponents/utils/receitas.js';
import { styled } from 'styled-components';
import ReceitaCard from './newComponents/ReceitaCard.jsx';

export function App() {
	return (
		<>
			<section>
				{receitas.map(r => (
					<ReceitaCard key={r.id} {...r} />
				))}
			</section>
		</>
	);
}
