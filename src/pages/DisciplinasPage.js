import React, { useState, useEffect } from 'react';
import DisciplinaList from '../components/DisciplinaList';
import DisciplinaForm from '../components/DisciplinaForm';
import DisciplinaModal from '../components/DisciplinaModal';
import data from '../data/disciplinas.json';

const DisciplinasPage = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const [editando, setEditando] = useState(null);
  const [visualizando, setVisualizando] = useState(null);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    setDisciplinas(data);
  }, []);

  const salvar = formData => {
    if (formData.id) {
      setDisciplinas(disciplinas.map(d => d.id === formData.id ? { ...formData, ativa: true } : d));
    } else {
      const novoId = Math.max(...disciplinas.map(d => d.id), 0) + 1;
      setDisciplinas([...disciplinas, { ...formData, id: novoId, ativa: true }]);
    }
    setEditando(null);
  };

  const desativar = id => setDisciplinas(disciplinas.map(d => d.id === id ? { ...d, ativa: false } : d));
  const reativar = id => setDisciplinas(disciplinas.map(d => d.id === id ? { ...d, ativa: true } : d));

  const filtradas = disciplinas.filter(d => d.nome.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div className="container mt-4">
      <h2>Disciplinas</h2>
      <div className="d-flex justify-content-between mb-3">
        <input placeholder="Pesquisar..." className="form-control w-50" onChange={e => setFiltro(e.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditando({})}>Adicionar</button>
      </div>
      <DisciplinaList
        disciplinas={filtradas}
        onVisualizar={setVisualizando}
        onEditar={setEditando}
        onDesativar={desativar}
        onReativar={reativar}
      />
      {editando && <DisciplinaForm disciplina={editando} onSave={salvar} />}
      {visualizando && <DisciplinaModal disciplina={visualizando} onClose={() => setVisualizando(null)} />}
    </div>
  );
};

export default DisciplinasPage;
