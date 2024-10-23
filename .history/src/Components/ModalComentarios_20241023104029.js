/** @format */

import React from 'react';
import styles from './ModalComentarios.module.css'; // Estilo do modal
import ReceitaEComentarios from './ReceitaEComentarios.js'; // Componente que exibe a receita e os comentários

const ModalComentarios = ({ receitaId, onClose }) => {
	const handleOverlayClick = event => {
		if (event.target.className === 'modalOverlay') {
			onClose(); // Fecha o modal ao clicar fora
		}
	};

	return (
		<div className='modal-overlay' onClick={handleOverlayClick}>
			<div className='modal-content'>
				<button className='modal-close-btn' onClick={onClose}>
					X
				</button>
				<ReceitaEComentarios id={receitaId} />
			</div>
		</div>
	);
};

export default ModalComentarios;
