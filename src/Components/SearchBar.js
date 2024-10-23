import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Chama a função de pesquisa com o novo valor
  };

  return (
    <input 
      type="text" 
      className={styles.searchInput} 
      placeholder=" Pesquisar..." 
      value={query} 
      onChange={handleInputChange} // Atualiza a pesquisa sempre que o valor mudar
    />
  );
}

export default SearchBar;
