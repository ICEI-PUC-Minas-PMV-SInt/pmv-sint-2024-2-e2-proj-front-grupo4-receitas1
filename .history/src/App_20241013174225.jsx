/** @format */

import { useState } from 'react';
import './App.css';
import { receitas } from './components/utils/receitas.js';
import { styled } from 'styled-components';
import { CommentIcon } from './CommentIcon.jsx';
import { ShareIcon } from './ShareIcon.jsx';
import { LikeIcon } from './LikeIcon.jsx';
import { SaveIcon } from './SaveIcon.jsx';
import UsuarioPostador from './UsuarioPostador.jsx';
import ReceitaCard from './ReceitaCard.jsx';

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
