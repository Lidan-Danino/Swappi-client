import React, { useState } from 'react';
import '../../CSS/HamburgerMenu.css'; // Import CSS for styling
import HamburgerIcon from '../../assets/images/hamburger-icon.png';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
      <div className="menu-button" onClick={toggleMenu}>
        <img
          src={HamburgerIcon}
          alt="Hamburger Menu"
        />
      </div>
      <div className={`menu-options ${menuOpen ? 'show' : ''}`}>
        {/* Add your menu options here */}
        <ul>
          <li className="menu-item">Option 1</li>
          <li className="menu-item">Option 2</li>
          <li className="menu-item">Option 3</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
