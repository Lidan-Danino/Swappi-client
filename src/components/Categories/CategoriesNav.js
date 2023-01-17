import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'


import { useRef } from 'react';

const img1 = "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg";
const img2 = "https://images.unsplash.com/photo-1604601815764-6d01fc6bebde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
const img3 = "https://media.cntraveler.com/photos/60e612ae0a709e97d73d9c60/1:1/w_3840,h_3840,c_limit/Beach%20Vacation%20Packing%20List-2021_GettyImages-1030311160.jpg";
const img4 = "https://images.unsplash.com/photo-1557787163-1635e2efb160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmNlcnR8ZW58MHx8MHx8&w=1000&q=80";
const img5 = "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000";
const img6 = "https://dmjetdubai.com/wp-content/uploads/2021/04/Polaris-RZR-XP-PRO-MAX-4-places-Full-Option.png";

const CategoriesNav = () => {
 
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
 
    return (
        
<div className="container" id="categories">
            <h1>Categories</h1>
            <div>
            
            <Link to="/categories/Hotel">
                    <Button  id="close-image" style={{backgroundImage: `url(${img1})` }} onClick={handleClick}>Hotel</Button>
              </Link>
              <Link to="/categories/Flight">
                    <Button id="close-image" style={{backgroundImage: `url(${img2})` }} onClick={handleClick}>Flight</Button>
              </Link>
              <Link to="/categories/Vacation">
                    <Button id="close-image" style={{backgroundImage: `url(${img3})` }} onClick={handleClick}>Vacation</Button>
              </Link>
              <Link to="/categories/Concert">
                    <Button id="close-image" style={{backgroundImage: `url(${img4})` }} onClick={handleClick}>Concert</Button>
              </Link>
              <Link to="/categories/Sport">
                    <Button id="close-image" style={{backgroundImage: `url(${img5})` }} onClick={handleClick}>Sport</Button>
              </Link>
              <Link to="/categories/Other">
                    <Button id="close-image"style={{backgroundImage: `url(${img6})` }} onClick={handleClick}>Other</Button>
            </Link>
              
                     
        <div style={{height: '2rem'}} />

        <div ref={ref}></div>
     
            </div>
        </div>
    )
}

export default CategoriesNav;
