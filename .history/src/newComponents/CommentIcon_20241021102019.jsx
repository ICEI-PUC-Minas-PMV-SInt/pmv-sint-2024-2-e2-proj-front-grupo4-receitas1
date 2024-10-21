/** @format */

import React from 'react';
import iconeComent from '../assets/iconeComentarios.svg';
import '../styledComponents/IconsStyle.css';

export function CommentIcon({ onClick }) {
	return (
		<button>
			<img className='icon' src={iconeComent} alt='Icone Comentários' />
		</button>
	);
}
