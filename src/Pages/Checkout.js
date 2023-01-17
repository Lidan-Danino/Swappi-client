import { useLocation } from "react-router-dom";
import { saveAs } from "file-saver";
import { useState } from "react";

import "./Checkout.css";

const Checkout = (props) => {
  const Item = (props) => (
    <div className="item-container">
      <div className="item-image">
        <img src={props.img} />
        <div className="item-details">
          <h3 className="item-name"> {props.name} </h3>
          <h2 className="item-price"> {props.price} ₪</h2>
        </div>
      </div>
    </div>
  );

  const Input = (props) => (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} />
        <img src={props.imgSrc} />
      </div>
    </div>
  );

  const location = useLocation();
  const { fromLocation } = location.state;

  const productImage = location.state.image;
  const productName = location.state.title;
  const productPrice = location.state.price;
  const productPDF = location.state.pdf;

  const downloadFile = () => {
    if (productPDF) {
      saveAs(productPDF, "Ticket");
    } else console.error("problem with PDF:", productPDF);
  };

  return (
    <div className="app-container">
      <div className="row">
        <div className="col">
          <Item name={productName} price={productPrice} img={productImage} />
        </div>
        <div className="col no-gutters">
          <div className="checkout">
            <div className="checkout-container">
              <h3 className="heading-3">Credit card checkout</h3>
              <Input label="Cardholder's Name" type="text" name="name" />
              <Input
                label="Card Number"
                type="number"
                name="card_number"
                imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
              />
              <div className="row">
                <div className="col">
                  <Input label="Expiration Date" type="month" name="exp_date" />
                </div>
                <div className="col">
                  <Input label="CVV" type="number" name="cvv" />
                </div>
              </div>

              <button
                className="checkout-btn"
                type="button"
                onClick={() => {
                  downloadFile();
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
