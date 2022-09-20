import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Business from './pages/Buniness';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/empresa" element={<Business/>}/>
        <Route path="/contato" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
