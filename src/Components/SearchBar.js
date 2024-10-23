import React from 'react';
import styles from './SearchBar.module.css'; 

function SearchBar() {
  return (
    <input 
      type="text" 
      placeholder=" Pesquisar..." 
      className={styles.searchInput}
    />
  );
}

export default SearchBar;
