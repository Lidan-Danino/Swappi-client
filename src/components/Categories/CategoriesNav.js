import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Categories.css";

import { useRef } from "react";

const img1 =
  "https://res.cloudinary.com/dd5irg4pr/image/upload/v1678882405/hotel_rbomnc.webp";
const img2 =
  "https://res.cloudinary.com/dd5irg4pr/image/upload/v1678882411/flight_qqljm5.jpg";
const img3 =
  "https://res.cloudinary.com/dd5irg4pr/image/upload/v1678882423/Vacation_ya7syp.webp";
const img4 =
  "https://res.cloudinary.com/dd5irg4pr/image/upload/v1678882425/concert_uqegtw.jpg";
const img5 =
  "https://res.cloudinary.com/dd5irg4pr/image/upload/v1678882430/sport_bafqad.avif";
const img6 =
  "https://res.cloudinary.com/dd5irg4pr/image/upload/v1678885629/Otherr_sd7taz.jpg";

const CategoriesNav = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container" id="categories">
      <h1>Categories</h1>
      <div>
        <Link to="/categories/Hotel">
          <Button
            id="close-image"
            style={{ backgroundImage: `url(${img1})` }}
            onClick={handleClick}
          >
            Hotel
          </Button>
        </Link>
        <Link to="/categories/Flight">
          <Button
            id="close-image"
            style={{ backgroundImage: `url(${img2})` }}
            onClick={handleClick}
          >
            Flight
          </Button>
        </Link>
        <Link to="/categories/Vacation">
          <Button
            id="close-image"
            style={{ backgroundImage: `url(${img3})` }}
            onClick={handleClick}
          >
            Vacation
          </Button>
        </Link>
        <Link to="/categories/Concert">
          <Button
            id="close-image"
            style={{ backgroundImage: `url(${img4})` }}
            onClick={handleClick}
          >
            Concert
          </Button>
        </Link>
        <Link to="/categories/Sport">
          <Button
            id="close-image"
            style={{ backgroundImage: `url(${img5})` }}
            onClick={handleClick}
          >
            Sport
          </Button>
        </Link>
        <Link to="/categories/Other">
          <Button
            id="close-image"
            style={{ backgroundImage: `url(${img6})` }}
            onClick={handleClick}
          >
            Other
          </Button>
        </Link>

        <div style={{ height: "2rem" }} />

        <div ref={ref}></div>
      </div>
    </div>
  );
};

export default CategoriesNav;
