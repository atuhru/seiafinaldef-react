import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DisciplinasPage from './pages/DisciplinasPage';
import ProfessoresPage from './pages/ProfessoresPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/disciplinas" element={<DisciplinasPage />} />
        <Route path="/professores" element={<ProfessoresPage />} />
        {/* Resto das rotas futuras (turmas, salas, alunos) */}
      </Routes>
    </Router>
  );
}

export default App;
