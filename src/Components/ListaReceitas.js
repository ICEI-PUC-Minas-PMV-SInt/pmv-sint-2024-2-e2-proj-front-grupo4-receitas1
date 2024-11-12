import React from 'react';
import { receitas } from '../utils/receitas.js';
import ReceitaCard from './ReceitaCard.js';
import styles from './ListaReceitas.module.css';

const ListaReceitas = ({
  tipoRefeicao = '',
  todasReceitas = false,
  query = ''
}) => {
  // Inicia com todas as receitas
  let receitasFiltradas = receitas;

  // Filtro por tipo de refeição, se especificado
  if (tipoRefeicao !== '') {
    receitasFiltradas = receitas.filter(r => r.tipoRefeicao === tipoRefeicao);
  } else if (todasReceitas) {
    receitasFiltradas = receitas;
  }

  // Aplica o filtro baseado na query de pesquisa
  if (query !== '') {
    const queryTerms = query.toLowerCase().split(' ');
    receitasFiltradas = receitasFiltradas.filter(r =>
      queryTerms.some(term =>
        r.nome.toLowerCase().includes(term) ||
        r.tipoRefeicao.toLowerCase().includes(term) ||
        r.ingredientes.some(ingrediente => ingrediente.toLowerCase().includes(term)) ||
        (term === 'vegana' && r.vegana) ||
        (term === 'fitness' && r.receitaFitness)
      )
    );
  }

  return (
    <ul className={styles.containerListaReceitas}>
      {receitasFiltradas.length > 0 ? (
        receitasFiltradas.map(rf => (
          <ReceitaCard
            key={rf.id}
            id={rf.id}
            nome={rf.nome}
            fotoReceita={rf.fotoReceita}
            fotoUsuarioPostador={rf.fotoUsuarioPostador}
            usuarioPostador={rf.usuarioPostador}
          />
        ))
      ) : (
        <p>Nenhuma receita encontrada.</p>
      )}
    </ul>
  );
};

export default ListaReceitas;
