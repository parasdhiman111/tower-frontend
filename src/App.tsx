import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Update the import path
import Menu from './components/Menu/Menu'; // Update the import path
import RegisterCardForm from './components/RegisterCardForm/RegisterCardForm'; // Update the import path
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <Router>
      <div className="App">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<RegisterCardForm menuOpen={menuOpen} />} />
        </Routes>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </Router>
  );
}
export default App;
