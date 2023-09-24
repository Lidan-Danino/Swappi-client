import React from 'react';
import '../CSS/Category.css';

function Category({ title, description, image }) {
  return (
    <div className="category">
      <img src={image} alt={title} className="category-image" />
      <div className="category-details">
        <h2 className="category-title">{title}</h2>
        <p className="category-description">{description}</p>
        <button className="category-button">See more</button>
      </div>
    </div>
  );
}

export default Category;
