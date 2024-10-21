/** @format */

import React from 'react';
import iconeLike from 'src/assets/iconeLike.svg';
import './styleComponents/IconsStyle.css';

export function LikeIcon() {
	return <img className='icon' src={iconeLike} alt='Icone Like' />;
}