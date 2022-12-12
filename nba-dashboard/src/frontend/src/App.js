import './App.scss';

import TeamPage from "./pages/TeamPage";
import MatchPage from "./pages/MatchPage";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/team/:teamName" element={<TeamPage />} />
        <Route path="/team/:teamName/matches/:year" element={<MatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
