import React from 'react';
import './Ticket.css';

function Ticket({ title, description, image }) {
  return (
    <div className="category" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius:'10px', margin:'20px' }}>
      <div>
        <img src={image} alt={title} className="category-image" />
        <div className="category-details">
          <h2 className="category-title">{title}</h2>
          <p className="category-description">{description}</p>
          <button className="category-button">See more</button>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
