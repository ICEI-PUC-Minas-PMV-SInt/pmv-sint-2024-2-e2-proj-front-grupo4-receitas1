/** @format */

import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import logo from '../../img/logo.png';

const Cadastro = () => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [foto, setFoto] = useState('');

	const handleCadastro = () => {
		const usuario = { nome, email, senha, foto };
		localStorage.setItem('usuario', JSON.stringify(usuario));
		alert('Cadastro realizado com sucesso!');
	};

	return (
		<div className={styles.cadastroContainer}>
			<img src={logo} alt='Logo' className={styles.logo} />
			<h2 className={styles.titulo}>Cadastro</h2>
			<div className={styles.formContainer}>
				<input
					type='text'
					placeholder='Nome'
					onChange={e => setNome(e.target.value)}
					className={styles.input}
				/>
				<input
					type='email'
					placeholder='Email'
					onChange={e => setEmail(e.target.value)}
					className={styles.input}
				/>
				<input
					type='password'
					placeholder='Senha'
					onChange={e => setSenha(e.target.value)}
					className={styles.input}
				/>
				<input
					type='file'
					onChange={e => setFoto(e.target.files[0])}
					className={styles.fileInput}
				/>
				<button onClick={handleCadastro} className={styles.button}>
					Cadastrar
				</button>
			</div>
		</div>
	);
};

export default Cadastro;
