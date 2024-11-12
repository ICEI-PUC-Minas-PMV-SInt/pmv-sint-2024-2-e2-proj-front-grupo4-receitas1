import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsuarioPostador from './UsuarioPostador.js';
import { CommentIcon } from './CommentIcon.js';
import ModalComentarios from './ModalComentarios.js';
import styles from './ReceitaCard.module.css';
import ReactDOM from 'react-dom';

const ReceitaCard = ({
  fotoReceita,
  fotoUsuarioPostador,
  usuarioPostador,
  nome,
  id,
}) => {
  const [modalAberto, setModalAberto] = useState(false);
  const navigate = useNavigate();

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const handleNavigateToRecipe = () => {
    navigate(`/receitas/${id}`);
  };

  return (
    <div className={styles.containerReceitaCard}>
      <div className={styles.containerNomeReceita}>
        <p>{nome}</p>
      </div>
      <img
        className={styles.fotoReceita}
        src={fotoReceita}
        alt={`Receita de ${nome}`}
        onClick={handleNavigateToRecipe}
        style={{ cursor: 'pointer' }}
      />
      <div className={styles.containerUsuarioEComentarios}>
        <UsuarioPostador
          fotoUsuarioPostador={fotoUsuarioPostador}
          usuarioPostador={usuarioPostador}
        />
        <CommentIcon onClick={abrirModal} />
      </div>
      {modalAberto &&
        ReactDOM.createPortal(
          <ModalComentarios receitaId={id} onClose={fecharModal} />,
          document.body
        )}
    </div>
  );
};

export default ReceitaCard;
