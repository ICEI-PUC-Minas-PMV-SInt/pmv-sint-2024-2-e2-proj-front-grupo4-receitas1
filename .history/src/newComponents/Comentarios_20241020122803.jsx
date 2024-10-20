/** @format */

import React, { useState, useEffect } from 'react';

// Exemplo de componente para exibir comentários

const Comentarios = ({ receitaId }) => {
	const [comentarios, setComentarios] = useState([]);
	const [novoComentario, setNovoComentario] = useState ("");

	// Carregar comentários do localStorage na montagem do componente

	useEffect(() => {
		const comentariosSalvos = localStorage.getItem(`comentarios-${receitaId}`);
		if (comentariosSalvos)
	})
};

export default Comentarios;
