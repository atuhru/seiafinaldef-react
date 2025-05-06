import React, { useState, useEffect } from 'react';

const DisciplinaForm = ({ disciplina, onSave }) => {
  const [formData, setFormData] = useState({ id: '', nome: '', descricao: '' });

  useEffect(() => {
    if (disciplina) setFormData(disciplina);
  }, [disciplina]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
    setFormData({ id: '', nome: '', descricao: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Nome</label>
        <input name="nome" className="form-control" value={formData.nome} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Descrição</label>
        <input name="descricao" className="form-control" value={formData.descricao} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Salvar</button>
    </form>
  );
};

export default DisciplinaForm;
