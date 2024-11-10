/** @format */

import React from 'react';
import { FaFacebook, FaWhatsapp, FaLink, FaTimes } from 'react-icons/fa';
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
				<button className={styles.closeButton} onClick={onClose}>
					<FaTimes />
				</button>
				<h3 className={styles.modalTitle}>Compartilhar</h3>
				<div className={styles.shareLinkContainer}>
					<input
						type='text'
						value={link}
						readOnly
						className={styles.shareLink}
					/>
					<button onClick={copyToClipboard} className={styles.copyButton}>
						<FaLink />
					</button>
				</div>
				<div className={styles.socialIcons}>
					<button onClick={shareOnFacebook} className={styles.socialButton}>
						<FaFacebook /> Facebook
					</button>
					<button onClick={shareOnWhatsApp} className={styles.socialButton}>
						<FaWhatsapp /> WhatsApp
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShareModal;
