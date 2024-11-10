/** @format */

// src/components/ShareModal.jsx
import React from 'react';
import { FaFacebook, FaWhatsapp, FaLink, FaTwitter } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
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

	const shareOnTwitter = () => {
		window.open(
			`https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`,
			'_blank'
		);
	};

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<div className={styles.modalHeader}>
					<h3>Compartilhar</h3>
					<button className={styles.closeButton} onClick={onClose}>
						<IoClose size={24} />
					</button>
				</div>
				<div className={styles.socialIcons}>
					<button
						onClick={shareOnFacebook}
						className={styles.socialButton}
						title='Facebook'
					>
						<FaFacebook size={32} />
					</button>
					<button
						onClick={shareOnWhatsApp}
						className={styles.socialButton}
						title='WhatsApp'
					>
						<FaWhatsapp size={32} />
					</button>
					<button
						onClick={shareOnTwitter}
						className={styles.socialButton}
						title='Twitter'
					>
						<FaTwitter size={32} />
					</button>
					<button
						onClick={copyToClipboard}
						className={styles.socialButton}
						title='Copiar Link'
					>
						<FaLink size={32} />
					</button>
				</div>
				<div className={styles.linkContainer}>
					<input
						type='text'
						value={link}
						readOnly
						className={styles.linkInput}
					/>
					<button onClick={copyToClipboard} className={styles.copyButton}>
						Copiar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShareModal;
