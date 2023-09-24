import React from 'react';
import CategoryImg from '../assets/images/Category.jpeg';

function CustomDiv() {
  const divStyle = {
    backgroundColor: '#1B729D',
    borderRadius: '66px',
    width: '1314px',
    height: '300px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr', // Three columns
    gap: '30px', // Add gap between items
    alignItems: 'center',
    padding: '20px',
    marginBottom: '50px',
  };

  const textStyle = {
    color: '#fcf0da',
    fontFamily: 'Kodchasan-Bold, Helvetica',
    fontSize: '22px',
    fontWeight: 700,
  };

  return (
    <div className="custom-div" style={divStyle}>
      <div style={{ ...textStyle }}>
        <img src={CategoryImg} style={{ borderRadius: '20px',  objectFit: 'cover' }} alt="Category" />
      </div>
      <div style={{ ...textStyle }}>
        <p>Experience the Future of Ticket Trading with AI-Powered Convenience</p>
      </div>
      <div style={{ textAlign: 'center', ...textStyle }}>
        <p>Secure and transparent transaction process that safeguards your payment and personal information.</p>
      </div>
    </div>
  );
}

export default CustomDiv;
