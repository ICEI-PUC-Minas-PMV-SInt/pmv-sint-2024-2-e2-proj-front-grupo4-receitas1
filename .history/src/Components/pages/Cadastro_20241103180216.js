/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css';
import logo from '../../img/logo.png';

const Cadastro = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		localStorage.setItem('user', JSON.stringify(formData));
		setMessage('Cadastro realizado com sucesso!');
		setFormData({ name: '', email: '', password: '' });

		// Redireciona após 2 segundos
		setTimeout(() => {
			navigate('/login');
		}, 2000);
	};

	return (
		<div className={styles.containerGeralLogoETela}>
			<div className={styles.containerLogo}>
				<img className={styles.logo} src={logo} alt='Logosabordomomento' />
			</div>
			<div className={styles.container}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h2 className={styles.title}>Cadastro</h2>
					{message && <p className={styles.message}>{message}</p>}
					<div className={styles.inputGroup}>
						<label htmlFor='name' className={styles.label}>
							Nome
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className={styles.input}
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
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
						Cadastrar
					</button>
					<p className={styles.signupPrompt}>
						Já possui uma conta?
						<span className={styles.signupLink} onClick={redirectToCadastro}>
							Faça login
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Cadastro;
