/** @format */

// src/components/ShareModal.jsx
import React from 'react';
import { FaFacebook, FaWhatsapp, FaLink } from 'react-icons/fa';
import styles from './ShareModal.module.css';

const ShareModal = ({ link, onClose }) => {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(link);
		alert('Link copiado para a área de transferência!');
	};

	const shareOnWhatsApp = () => {
		window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
	};

	const shareOnFacebook = () => {
		window.open(
			`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
				link
			)}`,
			'_blank'
		);
	};

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<h3>Compartilhar Receita</h3>
				<p className={styles.shareLink}>{link}</p>
				<button onClick={copyToClipboard} className={styles.copyButton}>
					<FaLink /> Copiar Link
				</button>
				<div className={styles.socialIcons}>
					<button onClick={shareOnFacebook} className={styles.socialButton}>
						<FaFacebook /> Facebook
					</button>
					<button onClick={shareOnWhatsApp} className={styles.socialButton}>
						<FaWhatsapp /> WhatsApp
					</button>
				</div>
				<button onClick={onClose} className={styles.closeButton}>
					Fechar
				</button>
			</div>
		</div>
	);
};

export default ShareModal;
