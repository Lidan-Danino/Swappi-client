import React, { useEffect, useState } from 'react';
import CategorySelectorButton from './CategorySelectorButton';
import { getCategoryNames } from '../services/productData';

function CategorySelector({ onCategorySelect }) {
  const [categoryNames, setCategoryNames] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchCategoryNames() {
      try {
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
          {categoryNames.map((categoryName) => (
            <CategorySelectorButton
              key={categoryName}
              categoryName={categoryName}
              onCategoryChange={onCategorySelect} // Use onCategorySelect
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySelector;
