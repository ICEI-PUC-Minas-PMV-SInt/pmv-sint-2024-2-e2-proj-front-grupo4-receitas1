/** @format */

// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css';
import logo from '../../img/logo.png';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false); // Estado para controle da mensagem
	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const savedUser = JSON.parse(localStorage.getItem('user'));

		// Valida os dados de login com os dados salvos no localStorage
		if (
			savedUser &&
			savedUser.email === formData.email &&
			savedUser.password === formData.password
		) {
			setMessage('Login realizado com sucesso!');
			setIsError(false); // Define como sucesso
			setTimeout(() => {
				navigate('/');
			}, 3000);
		} else {
			setMessage('Email ou senha incorretos.');
			setIsError(true); // Define como erro
		}
	};

	// Função para redirecionar para a página de cadastro
	const redirectToCadastro = () => {
		navigate('/cadastro');
	};

	return (
		<div className={styles.containerGeralLogoETela}>
			<div className={styles.containerLogo}>
				<img className={styles.logo} src={logo} alt='Logosabordomomento' />
			</div>
			<div className={styles.container}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h2 className={styles.title}>Login</h2>
					{message && <p className={styles.message}>{message}</p>}
					<div className={styles.inputGroup}>
						<label htmlFor='email' className={styles.label}>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className={styles.input}
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='password' className={styles.label}>
							Senha
						</label>
						<input
							type='password'
							id='password'
							name='password'
							className={styles.input}
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div>
					<button type='submit' className={styles.button}>
						Entrar
					</button>
					<p className={styles.signupPrompt}>
						Ainda não tem uma conta?
						<span className={styles.signupLink} onClick={redirectToCadastro}>
							Cadastre-se
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
