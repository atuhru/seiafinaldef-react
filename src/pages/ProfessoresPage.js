import React, { useState, useEffect } from 'react';
import ProfessoresList from '../components/ProfessoresList';
import ProfessoresForm from '../components/ProfessoresForm';
import ProfessoresModal from '../components/ProfessoresModal';
import data from '../data/professores.json';

const ProfessoresPage = () => {
  const [Professores, setProfessores] = useState([]);
  const [editando, setEditando] = useState(null);
  const [visualizando, setVisualizando] = useState(null);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    setProfessores(data);
  }, []);

  const salvar = formData => {
    if (formData.id) {
      setProfessores(Professores.map(d => d.id === formData.id ? { ...formData, ativa: true } : d));
    } else {
      const novoId = Math.max(...Professores.map(d => d.id), 0) + 1;
      setProfessores([...Professores, { ...formData, id: novoId, ativo: true }]);
    }
    setEditando(null);
  };

  const desativar = id => setProfessores(Professores.map(d => d.id === id ? { ...d, ativa: false } : d));
  const reativar = id => setProfessores(Professores.map(d => d.id === id ? { ...d, ativa: true } : d));

  const filtradas = Professores.filter(d => d.nome.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div className="container mt-4">
      <h2>Professores</h2>
      <div className="d-flex justify-content-between mb-3">
        <input placeholder="Pesquisar..." className="form-control w-50" onChange={e => setFiltro(e.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditando({})}>Adicionar</button>
      </div>
      <ProfessoresList
        disciplinas={filtradas}
        onVisualizar={setVisualizando}
        onEditar={setEditando}
        onDesativar={desativar}
        onReativar={reativar}
      />
      {editando && <ProfessoresForm Professores={editando} onSave={salvar} />}
      {visualizando && <ProfessoresModal Professores={visualizando} onClose={() => setVisualizando(null)} />}
    </div>
  );
};

export default ProfessoresPage;
