/** @format */

import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../../img/logo.png';
import SearchBar from '../../SearchBar';
import { useState } from 'react';
import { receitas } from '../../../utils/receitas';

function Navbar() {
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);

	const handleSearch = query => {
		setHasSearched(true);
		const filtered = receitas.filter(recipe =>
			recipe.nome.toLowerCase().includes(query.toLowerCase())
		);

		setFilteredRecipes(filtered);
	};

	const resetSearch = () => {
		setFilteredRecipes([]);
		setHasSearched(false);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarContent}>
				<Link to='/'>
					<img className={styles.logo} src={logo} alt='Logosabordomomento' />
				</Link>

				<div className={styles.searchBar}>
					<SearchBar onSearch={handleSearch} />
				</div>

				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to='/' onClick={resetSearch}>
							Início
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/cafedamanha' onClick={resetSearch}>
							Café da Manhã
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/almoco' onClick={resetSearch}>
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
			</div>

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
		</nav>
	);
}

export default Navbar;
