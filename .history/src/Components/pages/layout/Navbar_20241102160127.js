/** @format */

import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../../img/logo.png';
import SearchBar from '../../SearchBar';
import { useState } from 'react';
import { receitas } from '../../../utils/receitas'; // Ajuste o caminho para importar suas receitas

function Navbar() {
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [hasSearched, setHasSearched] = useState(false); // Estado para controlar a pesquisa

	const handleSearch = query => {
		setHasSearched(true); // Marca que uma pesquisa foi realizada
		const filtered = receitas.filter(recipe =>
			recipe.nome.toLowerCase().includes(query.toLowerCase())
		);

		setFilteredRecipes(filtered);
	};

	const resetSearch = () => {
		setFilteredRecipes([]); // Limpa os resultados da pesquisa
		setHasSearched(false); // Reseta o estado de pesquisa
	};

	return (
		<nav className={styles.navbar}>
			<Container>
				<div className={styles.navbarContent}>
					<Link to='/'>
						<img className={styles.logo} src={logo} alt='Logosabordomomento' />
					</Link>
					<SearchBar onSearch={handleSearch} />
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to='/' onClick={resetSearch}>
							Início
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/cafédamanhã' onClick={resetSearch}>
							Café da Manhã
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/almoço' onClick={resetSearch}>
							Almoço
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/jantar' onClick={resetSearch}>
							Jantar
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/sobremesa' onClick={resetSearch}>
							Sobremesa
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/lanche' onClick={resetSearch}>
							Lanche
						</Link>
					</li>
				</ul>

				{/* Renderiza os resultados da pesquisa, se houver */}
				{hasSearched && filteredRecipes.length > 0 ? (
					<div className={styles.results}>
						{filteredRecipes.map(recipe => (
							<Link
								key={recipe.id}
								to={`/receitas/${recipe.id}`}
								className={styles.recipeLink}
								onClick={resetSearch}
							>
								<p>{recipe.nome}</p>
							</Link>
						))}
					</div>
				) : (
					hasSearched && (
						<div className={styles.results}>
							<p>Nenhum resultado encontrado</p>
						</div>
					)
				)}
			</Container>
		</nav>
	);
}

export default Navbar;
