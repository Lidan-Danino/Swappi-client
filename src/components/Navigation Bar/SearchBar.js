import React, { useState } from 'react';

const SearchBar = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  return (
    <div className={`search-bar ${searchFocused ? 'focused' : ''}`}>
      <input
        type="text"
        placeholder="Search..."
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
      />
    </div>
  );
};

export default SearchBar;
