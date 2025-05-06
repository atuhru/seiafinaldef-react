import React from 'react';

const ProfessoresModal = ({ professores, onClose }) => (
  <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Visualizar Professores</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <p><strong>ID:</strong> {professores.id}</p>
          <p><strong>Nome:</strong> {professores.nome}</p>
          <p><strong>Descrição:</strong> {professores.descricao}</p>
          <p><strong>Status:</strong> {professores.ativa ? "Ativo" : "Inativo"}</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  </div>
);

export default ProfessoresModal;
