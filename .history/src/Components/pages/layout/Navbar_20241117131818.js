/** @format */

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../../img/logo.png';
import defaultAvatar from '../../../img/default-avatar.png';
import SearchBar from '../../SearchBar';
import { receitas } from '../../../utils/receitas';

function Navbar() {
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [hasSearched, setHasSearched] = useState(false);
	const [user, setUser] = useState(null); // Estado para armazenar dados do usuário
	const navigate = useNavigate();

	// Carregar dados do usuário ao montar o componente
	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem('user'));
		setUser(storedUser);
	}, []);

	// Atualizar o estado ao detectar alterações no localStorage
	useEffect(() => {
		const handleStorageChange = () => {
			const updatedUser = JSON.parse(localStorage.getItem('user'));
			setUser(updatedUser);
		};
		window.addEventListener('storage', handleStorageChange);
		return () => {
			window.removeEventListener('storage', handleStorageChange);
		};
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
							<Link to='/perfilusuario' className={styles.avatarLink}>
								<img
									src={user.avatar || defaultAvatar} // Exibe avatar do usuário ou padrão
									alt='Avatar do usuário'
									className={styles.avatar}
									style={{
										objectFit: 'cover',
										width: '50px',
										height: '50px',
										borderRadius: '50%',
									}}
								/>
							</Link>
							<div className={styles.welcomeMessage}>
								<Link to='/perfilusuario' className={styles.profileLink}>
									<p>Bem-vindo(a), </p>
									<p>{user.name}</p>
								</Link>
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
