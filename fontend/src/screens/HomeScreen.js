import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <h2>Leatest Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} lg={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
