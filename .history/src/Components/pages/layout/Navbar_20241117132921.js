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
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	// Carregar dados do usuário ao montar o componente
	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem('user'));
		setUser(storedUser);
	}, []);

	// Atualiza quando o evento customizado é disparado
	useEffect(() => {
		const handleAvatarUpdate = () => {
			const updatedUser = JSON.parse(localStorage.getItem('user'));
			setUser(updatedUser);
		};

		window.addEventListener('userAvatarUpdated', handleAvatarUpdate);
		return () => {
			window.removeEventListener('userAvatarUpdated', handleAvatarUpdate);
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

				{/* Avatar e saudação */}
				<div className={styles.userSection}>
					{user ? (
						<div className={styles.loggedInUser}>
							<Link to='/perfilusuario' className={styles.avatarLink}>
								<img
									src={user.avatar || defaultAvatar}
									alt='Avatar do usuário'
									className={styles.avatar}
									onError={e => {
										e.target.src = defaultAvatar;
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
			</Container>
		</nav>
	);
}

export default Navbar;
