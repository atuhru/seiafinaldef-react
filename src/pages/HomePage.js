import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const options = [
    { label: 'Gerenciar Disciplinas', path: '/disciplinas' },
    { label: 'Gerenciar Professores', path: '/professores' },
    { label: 'Gerenciar Alunos', path: '/alunos' },
    { label: 'Gerenciar Turmas', path: '/turmas' },
    { label: 'Gerenciar Salas', path: '/salas' }
  ];

  return (
    <div className="container">
      <h1 className="my-4">SEIA - Sistema Educacional Integrado Aprimorado</h1>
      <div className="list-group">
        {options.map((opt, idx) => (
          <button key={idx} onClick={() => navigate(opt.path)} className="list-group-item list-group-item-action">
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
