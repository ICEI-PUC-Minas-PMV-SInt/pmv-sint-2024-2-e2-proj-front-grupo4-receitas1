/** @format */

import React, { useState } from 'react';

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
		<div>
			<h2>Cadastro</h2>
			<input
				type='text'
				placeholder='Nome'
				onChange={e => setNome(e.target.value)}
			/>
			<input
				type='email'
				placeholder='Email'
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Senha'
				onChange={e => setSenha(e.target.value)}
			/>
			<input type='file' onChange={e => setFoto(e.target.files[0])} />
			<button onClick={handleCadastro}>Cadastrar</button>
		</div>
	);
};

export default Cadastro;
