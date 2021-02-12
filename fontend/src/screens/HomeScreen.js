import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
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
