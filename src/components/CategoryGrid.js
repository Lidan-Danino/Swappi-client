// CategoryGrid.js
import React from 'react';
import Category from './Category';

function CategoryGrid({ categories }) {
  return (
    <div
      className="categories-section"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', // Three columns
        gap: '20px', // Add gap between items
        justifyContent: 'center',
      }}
    >
      {categories.map((category, index) => (
        <Category
          key={index}
          title={category.title}
          description={category.description}
          image={category.image}
        />
      ))}
    </div>
  );
}

export default CategoryGrid;
