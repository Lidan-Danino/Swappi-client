import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CustomDiv from '../components/CustomDiv';
import './MainPage.css';
import {
  StyledButton,
  MainContent,
  MainHeading,
  SubHeading,
  ProductGridContainer,
  ProductItem,
  ProductGrid,
} from '../assets/styles';
import CategoryGrid from '../components/Categories/CategoryGrid';
import Footer from '../components/Footer';
import CategorySelector from '../components/Categories/CategorySelector';
import { getAll } from '../services/productData';
import debounce from 'debounce';

function MainPage() {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); 
  const [hasMore, setHasMore] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 100 &&
        hasMore &&
        !loadingData
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedCategory, currentPage, hasMore, loadingData, products]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryMenu(false);
    setCurrentPage(1);
    setProducts([]);
    setHasMore(true);
    setLoadingData(false);
    setLoading(true);
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

        <CustomDiv /> {/* Main Area of the site where we generate a picture */}

        <StyledButton onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
          Select Category
        </StyledButton>

        {showCategoryMenu && (
          <CategorySelector
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        )}

        <CategoryGrid selectedCategory={selectedCategory} />

        <div className="ProductGridContainer">
          {products.map((product) => (
            <div key={product._id}>{product.title}</div>
          ))}
        </div>
      </MainContent>

      <Footer />
    </div>
  );
}

export default MainPage;