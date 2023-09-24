import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import ProfileArea from './ProfileArea';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="navbar">
      <div className="left-section">
        <HamburgerMenu />
      </div>
      <div className={`middle-section ${isSearchFocused ? 'focused' : ''}`}>
        <input
          className={`search-bar ${isSearchFocused ? 'focused' : ''}`}
          type="text"
          placeholder="Search.."
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>
      <div className="right-section">
        <ProfileArea />
      </div>
    </div>
  );
};

export default Navbar;
