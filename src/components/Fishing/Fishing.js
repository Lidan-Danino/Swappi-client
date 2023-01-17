import React, { useState } from "react";
import { Modal, Col } from "react-bootstrap";
import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getRandomProducts } from "../../services/productData";
import { CardGroup } from "react-bootstrap";

const Fishing = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRandomProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Hot on sale!</Modal.Title>
      </Modal.Header>
      <CardGroup onClick={props.onHide}>
        {products.map((x) => (
          <Col key={x._id.toString()}>
            <ProductCard params={x} />
          </Col>
        ))}
      </CardGroup>
    </Modal>
  );
};

export default Fishing;
