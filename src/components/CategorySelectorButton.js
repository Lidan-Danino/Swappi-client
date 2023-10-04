import React from 'react';

function CategorySelectorButton({ categoryName, onCategoryChange }) {
  return (
    <button
      className="category-selector-button"
      onClick={() => {
        onCategoryChange(categoryName);
        console.log(categoryName);
      }}>
      {categoryName}
    </button>
  );
}

export default CategorySelectorButton;
