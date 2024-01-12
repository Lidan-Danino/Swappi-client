import React, { useState, useEffect } from 'react';
import { getCategoryNames } from '../../services/productData';

function HotOffer() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [categoryNames, setCategoryNames] = useState([]);

  const toggleFilter = async () => {
    if (!isFilterOpen) {
      try {
        const names = await getCategoryNames();
        setCategoryNames(names);
      } catch (error) {
        console.error('Error fetching category names:', error);
      }
    }

    setFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    if (isFilterOpen) {
      // Additional logic for handling filter open state
    }
  }, [isFilterOpen]);

  return (
    <div style={{textAlign:'left', width:'80%', margin:'10px'}}>
      <div className='Title' style={{ fontSize: '15px', fontWeight: 'bold', color: '#1B729D' }}>
        Hot Offers
      </div>
      <div className='Last-offers' color='grey' style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
          Last offers of the week
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontWeight: '500', color: 'grey', maxWidth: '80%' }}>
            Explore our best offers so you could be spontaneous.
          </span>
          <span style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1B729D' }} onClick={toggleFilter}>
            Filter
          </span>
        </div>
      </div>

      {isFilterOpen && (
        <div>
          {/* Render your filter options here using the categoryNames state */}
          <div className='filter-options'>
            {categoryNames.map((category, index) => (
              <div key={index}>{category}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HotOffer;
