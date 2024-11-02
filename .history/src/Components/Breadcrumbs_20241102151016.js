/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa'; // Ícones para Home e seta
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ categoria, receitaNome }) => {
	return (
		<div className={styles.breadcrumbs}>
			<Link to='/' className={styles.link}>
				<FaHome /> {/* Ícone de Home */}
				<span>Início</span>
			</Link>
			<FaChevronRight className={styles.chevron} />
			<Link to={`/${categoria.toLowerCase()}`} className={styles.link}>
				<span>{categoria}</span>
			</Link>
			<FaChevronRight className={styles.chevron} />
			<span className={styles.receitaNome}>{receitaNome}</span>
		</div>
	);
};

export default Breadcrumbs;
