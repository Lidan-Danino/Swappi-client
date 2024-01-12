// CustomDiv.js

import React, { useState, useEffect } from 'react';
import './CustomDiv.css'; // Import a CSS file for styling
import image1 from '../../assets/images/MainContentPic1.jpg';
import image2 from '../../assets/images/MainContentPic2.jpg';
import image3 from '../../assets/images/MainContentPic3.jpg';
import image4 from '../../assets/images/MainContentPic4.jpg';

const CustomDiv = () => {
  const [isChatVisible, setChatVisible] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState([image1, image2, image3, image4]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
  };

  return (
    <div className="custom-div" style={backgroundImageStyle}>
      <div className="text-container" style={{margin:'50px'}}>
        <div style={{justifyContent:'space-evenly'}}>
          <div
            className="main-section"
            style={{ fontSize: '55px', fontWeight: 'bold', textAlign: 'left', marginBottom: '5px' }}
          >
            Unlock the World of Ticket Trading
          </div>
          <div className="sub-section" style={{fontSize:'30px', marginBottom:'30px'}}>
            Your One-Stop Marketplace for All Kinds Ticket Transactions
          </div>
        </div>
        <div className="third-section" style={{fontSize:'20px'}}>
          Experience the Future of Ticket Trading, with AI-Powered Conveniences
        </div>
      </div>
      <button className="chat-button" onClick={toggleChat}>
        Begin your journey
      </button>

      {isChatVisible && (
        <div className="chat-popup">
          {/* Placeholder for chat content */}
          <div>Chat Window</div>
        </div>
      )}
    </div>
  );
};

export default CustomDiv;
