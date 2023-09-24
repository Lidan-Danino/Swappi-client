import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CustomDiv from '../components/CustomDiv';
import { StyledButton, Avatar, MainContent, MainHeading, SubHeading } from '../assets/styles'; // Import styled components from your styles.js
import images from '../assets/images'; // Import image paths from your images.js
import CategoryGrid from '../components/CategoryGrid';
import CategoryImg from '../assets/images/Category.jpeg';
import Footer from '../components/Footer';


{/*API Calls . get categories       */}
const hotCategories = [
  {
    title: 'Category 1',
    description: 'Short description for Category 1',
    image: CategoryImg, // Replace with the actual image URL
  },
  {
    title: 'Category 2',
    description: 'Short description for Category 2',
    image: CategoryImg, // Replace with the actual image URL
  },
  {
    title: 'Category 3',
    description: 'Short description for Category 2',
    image: CategoryImg, // Replace with the actual image URL
  },
  // Add more "HOT" categories as needed
];

const nonHotCategories = [
  {
    title: 'Category 4',
    description: 'Short description for Category 3',
    image: CategoryImg, // Replace with the actual image URL
  },
  {
    title: 'Category 5',
    description: 'Short description for Category 4',
    image: CategoryImg, // Replace with the actual image URL
  },
  {
    title: 'Category 6',
    description: 'Short description for Category 3',
    image: CategoryImg, // Replace with the actual image URL
  },
  {
    title: 'Category 7',
    description: 'Short description for Category 4',
    image: CategoryImg, // Replace with the actual image URL
  },
  {
    title: 'Category 8',
    description: 'Short description for Category 3',
    image: CategoryImg, // Replace with the actual image URL
  },
  {
    title: 'Category 9',
    description: 'Short description for Category 4',
    image: CategoryImg, // Replace with the actual image URL
  },
  // Add more "NON HOT" categories as needed
];

function MainPage() {
  const [showNonHot, setShowNonHot] = useState(false);

  return (
    <div className="App">
      <Navbar style={{ marginBottom: '100px' }} />

      <MainContent>
        <MainHeading>Unlock the world of ticket trading</MainHeading>
        <SubHeading>Your One-Stop Marketplace for All Kinds Ticket Transactions</SubHeading>
        <StyledButton style={{ width: '225px', fontSize: '20px', padding: '10px' }}>
          Begin your journey
        </StyledButton>

        <CustomDiv />

        {/* "HOT" Categories Section */}
        <CategoryGrid categories={hotCategories} />

        {/* Filter Button for "NON HOT" Categories (on the left) */}
        <div
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
          {showNonHot && <CategoryGrid categories={nonHotCategories} />}
        </div>
      </MainContent>
      <Footer/>
    </div>
  );
}

export default MainPage;
