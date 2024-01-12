import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navigation Bar/Navbar';
import CustomDiv from '../components/Main Section Area/CustomDiv';
import './MainPage.css';
import {
  MainContent,
} from '../assets/styles';
import CategoryGrid from '../components/Categories/CategoryGrid';
import Footer from '../components/Footer';
import debounce from 'debounce';
import HotOffer from '../components/Hot Offers/HotOffers';

function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
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


  return (
    <div className="App">
      <Navbar style={{ marginBottom: '100px' }} />

      <MainContent>
        <CustomDiv/> {/* Main Area of the site where we generate a picture */}
        <HotOffer/>
        <CategoryGrid selectedCategory={selectedCategory} />

        {/* <div className="ProductGridContainer">
          {products.map((product) => (
            <div key={product._id}>{product.title}</div>
          ))}
        </div> */}
      </MainContent>

      <Footer />
    </div>
  );
}

export default MainPage;