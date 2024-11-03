/** @format */

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../../img/logo.png';
import defaultAvatar from '../../../img/default-avatar.png'; // Imagem padrão de usuário
import SearchBar from '../../SearchBar';
import { receitas } from '../../../utils/receitas';

function Navbar() {
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);
	const [user, setUser] = useState(null); // Estado para armazenar dados do usuário
	const navigate = useNavigate();

	useEffect(() => {
		// Verifica o LocalStorage para dados de usuário ao carregar a página
		const storedUser = JSON.parse(localStorage.getItem('user'));
		if (storedUser) {
			setUser(storedUser);
		}
	}, []);

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

	const handleLogout = () => {
		// Remove dados do usuário do LocalStorage e atualiza o estado
		localStorage.removeItem('user');
		setUser(null);
		navigate('/login');
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

				{/* Botões de login/cadastro ou saudação com avatar */}
				<div className={styles.userSection}>
					{user ? (
						<div className={styles.loggedInUser}>
							<img
								src={user.avatar || defaultAvatar} // Avatar do usuário ou imagem padrão
								alt='Avatar do usuário'
								className={styles.avatar}
							/>
							<div className={styles.welcomeMessage}>
								<div>
									<p>Bem-vindo, </p>
									<p>{user.name}</p>
								</div>
								<button onClick={handleLogout} className={styles.logoutButton}>
									Sair
								</button>
							</div>
						</div>
					) : (
						<div className={styles.authButtons}>
							<Link to='/login' className={styles.authLink}>
								Entrar
							</Link>
							<Link to='/cadastro' className={styles.authLink}>
								Cadastre-se
							</Link>
						</div>
					)}
				</div>

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
