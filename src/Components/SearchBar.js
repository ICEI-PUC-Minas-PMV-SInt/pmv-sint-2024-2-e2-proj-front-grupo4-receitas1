import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    const value = event.target.value;
    setQuery(value);
    console.log('Valor digitado no SearchBar:', value); // Depuração
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <input
      type='text'
      className={styles.searchInput}
      placeholder='Pesquisar...'
      value={query}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;
