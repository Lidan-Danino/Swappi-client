import React, { useEffect, useState } from 'react';
import { getCategoryNames } from '../../services/productData';


{/*CategorySelector.js:
This component represents a category selector menu.
It contains a button to toggle the visibility of the category menu and renders 
CategorySelectorButton components based on available category names fetched from the getCategoryNames service.*/ }

function CategorySelector({ onCategorySelect }) {
  const [categoryNames, setCategoryNames] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchCategoryNames() {
      try {
        // Update the import path for getCategoryNames based on your project structure
        const data = await getCategoryNames();
        setCategoryNames(data);
      } catch (error) {
        console.error('Error fetching category names:', error);
      }
    }

    fetchCategoryNames();
  }, []);

  return (
    <div className="category-selector">
      <button onClick={() => setMenuOpen(!menuOpen)}>Select Category</button>
      {menuOpen && (
        <div className="category-menu">
          {/* Remove the import for CategorySelectorButton if it doesn't exist */}
          {/* {categoryNames.map((categoryName) => (
            <CategorySelectorButton
              key={categoryName}
              categoryName={categoryName}
              onCategoryChange={onCategorySelect} // Use onCategorySelect
            />
          ))} */}
          {categoryNames.map((categoryName) => (
            <button
              key={categoryName}
              onClick={() => onCategorySelect(categoryName)}
            >
              {categoryName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySelector;