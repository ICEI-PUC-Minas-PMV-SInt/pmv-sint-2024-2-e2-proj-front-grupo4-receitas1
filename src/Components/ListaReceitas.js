import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({
  tipoRefeicao = '',
  todasReceitas = false,
  onCommentClick,
  query = '' // Adiciona a query como parâmetro
}) => {
  // Filtra as receitas com base no tipo de refeição
  let receitasFiltradas = receitas;
  if (tipoRefeicao !== '') {
    receitasFiltradas = receitas.filter(r => r.tipoRefeicao === tipoRefeicao);
  } else if (todasReceitas === true) {
    receitasFiltradas = receitas;
  }

  // Filtra com base na query da pesquisa
  if (query !== '') {
    receitasFiltradas = receitasFiltradas.filter(r =>
      r.nome.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <ul className={styles.containerListaReceitas}>
      {receitasFiltradas.length > 0 ? (
        receitasFiltradas.map(rf => (
          <ReceitaCard key={rf.id} {...rf} onCommentClick={onCommentClick} />
        ))
      ) : (
        <p>Nenhuma receita encontrada.</p>
      )}
    </ul>
  );
};

export default ListaReceitas;
