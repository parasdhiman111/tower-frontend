import React from 'react';
import './Menu.css';

interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;

}
function Menu({ menuOpen, setMenuOpen }: MenuProps) {

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };


  return (
    <div className={`menu ${menuOpen ? 'open' : ''}`}>
    <button className="back-icon" onClick={toggleMenu}>
      &#8249; Back
    </button>
      <div className="menu-content">
        <h2>Menu Content</h2>
        <p>This is the menu content.</p>
      </div>
    </div>
  );
}
export default Menu;
