/** @format */

import React from 'react';
import iconeShare from 'src/assets/iconeCompartilhar.svg';
import './styleComponents/IconsStyle.css';

export function ShareIcon() {
	return <img className='icon' src={iconeShare} alt='Icone Compartilhar' />;
}
