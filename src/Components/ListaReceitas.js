import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({
  tipoRefeicao = '',
  todasReceitas = false,
  onCommentClick,
  query = ''
}) => {
  let receitasFiltradas = receitas;

  if (tipoRefeicao !== '') {
    receitasFiltradas = receitas.filter(r => r.tipoRefeicao === tipoRefeicao);
  } else if (todasReceitas === true) {
    receitasFiltradas = receitas;
  }

  if (query !== '') {
    const queryTerms = query.toLowerCase().split(' ');
    receitasFiltradas = receitasFiltradas.filter(r =>
      queryTerms.some(term =>
        r.nome.toLowerCase().includes(term) ||
        r.tipoRefeicao.toLowerCase().includes(term) ||
        r.ingredientes.some(ingrediente => ingrediente.toLowerCase().includes(term))
      )
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
