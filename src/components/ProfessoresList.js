import React from 'react';

const ProfessoresList = ({ professores, onVisualizar, onEditar, onDesativar, onReativar }) => (
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {professores.map(d => (
        <tr key={d.id}>
          <td>{d.id}</td>
          <td>{d.nome}</td>
          <td>{d.descricao}</td>
          <td>{d.ativa ? "Ativo" : "Inativo"}</td>
          <td>
            <button className="btn btn-success btn-sm" onClick={() => onVisualizar(d)}>Visualizar</button>{' '}
            <button className="btn btn-warning btn-sm" onClick={() => onEditar(d)}>Editar</button>{' '}
            {d.ativa ? (
              <button className="btn btn-danger btn-sm" onClick={() => onDesativar(d.id)}>Desativar</button>
            ) : (
              <button className="btn btn-secondary btn-sm" onClick={() => onReativar(d.id)}>Reativar</button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProfessoresList;
