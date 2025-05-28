import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lista from './Lista';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lista" element={<Lista />} />
    </Routes>
  );
}

export default App;