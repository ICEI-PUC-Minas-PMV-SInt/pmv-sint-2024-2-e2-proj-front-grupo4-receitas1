/** @format */

import { useState } from 'react';
import './App.css';
import { receitas } from './newComponents/utils/receitas.js';
import { styled } from 'styled-components';
import { CommentIcon } from './newComponents/CommentIcon.jsx';
import { ShareIcon } from './newComponents/ShareIcon.jsx';
import { LikeIcon } from './newComponents/LikeIcon.jsx';
import { SaveIcon } from './newComponents/SaveIcon.jsx';
import UsuarioPostador from './newComponents/UsuarioPostador.jsx';
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
