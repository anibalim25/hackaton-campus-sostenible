import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lista from './Lista';
import Historico from './Historico';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lista" element={<Lista />} />
      <Route path="/Historico" element={<Historico />} />
    </Routes>
  );
}

export default App;