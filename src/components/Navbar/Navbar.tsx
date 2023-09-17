import React from 'react';
import './Navbar.css';

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
