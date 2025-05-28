import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lista from './Lista';
import Historico from './Historico';
import Contenedor from './Contenedor'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lista" element={<Lista />} />
      <Route path="/Historico" element={<Historico />} />
      <Route path="/Contenedor" element={<Contenedor />} />
    </Routes>
  );
}

export default App;