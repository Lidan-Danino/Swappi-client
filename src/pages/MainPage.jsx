import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CustomDiv from '../components/CustomDiv';
import { StyledButton, MainContent, MainHeading, SubHeading } from '../assets/styles';
import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';
import CategorySelector from '../components/CategorySelector';
import { getAll } from '../services/productData';

function MainPage() {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Initialize selectedCategory state
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [hasMore, setHasMore] = useState(true); // State for checking if more pages are available
  const [categories, setCategories] = useState([]); // Initialize categories state

  useEffect(() => {
    async function loadMoreProducts(page) {
      try {
        const data = await getAll(page, selectedCategory); // Use selectedCategory
        if (Array.isArray(data.products)) {
          if (data.products.length === 0) {
            setHasMore(false);
          } else {
            setCategories((prevCategories) => [...prevCategories, ...data.products]);
          }
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error loading data. Please try again later.');
        setLoading(false);
      }
    }

    if (currentPage === 1) {
      loadMoreProducts(currentPage);
    }

    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        if (hasMore) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedCategory, currentPage, hasMore]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update selectedCategory when a category is selected
    setShowCategoryMenu(false); // Close the category selection menu
    setCurrentPage(1); // Reset to the first page when the category changes
    setCategories([]); // Clear the existing categories to fetch new ones
    setHasMore(true); // Reset the hasMore flag
    setLoading(true); // Set loading to true for the loading indicator
  };

  return (
    <div className="App">
      <Navbar style={{ marginBottom: '100px' }} />

      <MainContent>
        <MainHeading>Unlock the world of ticket trading</MainHeading>
        <SubHeading>Your One-Stop Marketplace for All Kinds of Ticket Transactions</SubHeading>
        <StyledButton style={{ width: '225px', fontSize: '20px', padding: '10px' }}>
          Begin your journey
        </StyledButton>

        <CustomDiv />

        {/* Button to open category selection menu */}
        <StyledButton onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
          Select Category
        </StyledButton>

        {/* Category Selection Menu (conditionally displayed based on "showCategoryMenu" state) */}
        {showCategoryMenu && (
          <CategorySelector onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
        )}

        {/* CategoryGrid component now uses the selectedCategory state */}
        <CategoryGrid selectedCategory={selectedCategory} />

        {/* Filter Button for "NON HOT" Categories (on the left) */}
        {/* <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            marginBottom: '30px',
          }}
        >
          <StyledButton onClick={() => setShowNonHot(!showNonHot)}>
            Filter
          </StyledButton>
          {/* "NON HOT" Categories Section (conditionally displayed based on "showNonHot" state) */}
          {/* {showNonHot && <CategoryGrid selectedCategory={selectedCategory} />}
        </div> */}
      </MainContent>
      <Footer />
    </div>
  );
}

export default MainPage;
