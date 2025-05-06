import React from 'react';

const DisciplinaModal = ({ disciplina, onClose }) => (
  <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Visualizar Disciplina</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <p><strong>ID:</strong> {disciplina.id}</p>
          <p><strong>Nome:</strong> {disciplina.nome}</p>
          <p><strong>Descrição:</strong> {disciplina.descricao}</p>
          <p><strong>Status:</strong> {disciplina.ativa ? "Ativa" : "Inativa"}</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  </div>
);

export default DisciplinaModal;
