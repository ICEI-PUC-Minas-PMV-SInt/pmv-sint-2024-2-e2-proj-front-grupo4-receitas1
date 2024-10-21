/** @format */

import React from 'react';
import iconeComent from 'src/assets/iconeComentarios.svg';
import './styleComponents/IconsStyle.css';

export function CommentIcon() {
	return <img className='icon' src={iconeComent} alt='Icone Comentários' />;
}