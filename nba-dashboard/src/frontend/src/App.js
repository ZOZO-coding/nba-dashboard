import TeamPage from "./pages/TeamPage";
import MatchPage from "./pages/MatchPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/team/:teamName" element={<TeamPage />}/>
          <Route path="/team/:teamName/matches/:year" element={<MatchPage />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
