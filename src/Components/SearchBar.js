import React from 'react';
import styles from './SearchBar.module.css'; // Certifique-se que o caminho esteja correto

function SearchBar() {
  return (
    <input 
      type="text" 
      placeholder=" Pesquisar..." // Coloque a imagem da lupa no placeholder
      className={styles.searchInput}
    />
  );
}

export default SearchBar;
