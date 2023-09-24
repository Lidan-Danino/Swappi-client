import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/about">Chat With US</a></li>
          </ul>
        </div>
        <div className="row" style={{color:'#fff'}}>
          SWAPPI Copyright © 2022 Swappi - All rights reserved || Designed By: SwappI-AI Team
        </div>
      </div>
    </footer>
  );
}

export default Footer;