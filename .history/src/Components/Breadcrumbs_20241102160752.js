/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import styles from './Breadcrumbs.module.css';

const formatarCategoriaParaURL = categoria => {
	return categoria
		.toLowerCase()
		.replace(/\s+/g, '')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
};

const Breadcrumbs = ({ categoria, receitaNome }) => {
	const categoriaPath = formatarCategoriaParaURL(categoria);

	return (
		<div className={styles.breadcrumbs}>
			<Link to='/' className={styles.link}>
				<FaHome className={styles.iconHome} />{' '}
				{/* Adiciona a classe para espaçamento */}
				<span>Início</span>
			</Link>
			<FaChevronRight className={styles.chevron} />
			<Link to={`/${categoriaPath}`} className={styles.link}>
				<span>{categoria}</span>
			</Link>
			<FaChevronRight className={styles.chevron} />
			<span className={styles.receitaNome}>{receitaNome}</span>
		</div>
	);
};

export default Breadcrumbs;
