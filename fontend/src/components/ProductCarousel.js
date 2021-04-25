import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getTopRatedProduct } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.topRatedProduct
  );

  useEffect(() => {
    dispatch(getTopRatedProduct());
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <>
          <Carousel>
            {products.map((product) => (
              <Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <img
                    className="d-block w-100"
                    src={product.image}
                    alt={product.image}
                    height="400px"
                  />
                  <Carousel.Caption>
                    <h3>{product.name}</h3>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      )}
    </React.Fragment>
  );
};

export default ProductCarousel;
