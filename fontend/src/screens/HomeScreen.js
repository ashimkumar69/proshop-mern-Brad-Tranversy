import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Meta from "../components/Meta";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <React.Fragment>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <>
          <Link to="/">
            <Button variant="light">Back</Button>
          </Link>
        </>
      )}

      <h2>Leatest Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} lg={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </React.Fragment>
  );
};

export default HomeScreen;
