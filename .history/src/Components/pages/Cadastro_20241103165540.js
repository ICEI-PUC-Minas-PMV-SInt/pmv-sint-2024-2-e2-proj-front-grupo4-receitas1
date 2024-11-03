/** @format */

// src/components/SignUp.jsx
import React, { useState } from 'react';
import styles from './Cadastro.module.css';

const Cadastro = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [message, setMessage] = useState('');

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		localStorage.setItem('user', JSON.stringify(formData));
		setMessage('Cadastro realizado com sucesso!');
		setFormData({ name: '', email: '', password: '' });
	};

	return (
		<div>
			<div>
				<img src=''>

				</img>
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
				</form>
			</div>
		</div>
	);
};

export default Cadastro;
