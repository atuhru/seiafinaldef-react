import React, { useState } from "react";

const CrudTable = ({ title, data, setData, storageKey }) => {
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    const updated = data.map(item =>
      item.id === id ? { ...item, ativo: false } : item
    );
    setData(updated);
  };

  const handleReactivate = (id) => {
    const updated = data.map(item =>
      item.id === id ? { ...item, ativo: true } : item
    );
    setData(updated);
  };

  const filtered = Array.isArray(data)
  ? data.filter(item =>
      item.nome.toLowerCase().includes(search.toLowerCase())
    )
  : [];


  return (
    <div>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-2"
      />
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.ativo ? "Ativo" : "Inativo"}</td>
              <td>
                <button className="btn btn-success btn-sm me-1">Visualizar</button>
                <button className="btn btn-warning btn-sm me-1">Editar</button>
                {item.ativo ? (
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                    Excluir
                  </button>
                ) : (
                  <button className="btn btn-info btn-sm" onClick={() => handleReactivate(item.id)}>
                    Reativar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
