import React, { useEffect, useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { ListUsers } from "../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";
import Table from "react-bootstrap/Table";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import Paginate from "../components/Paginate";

import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

function ProductListScreen({ history, match }) {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const { error, loading, products, page, pages } = useSelector(
    (state) => state.productList
  );

  const {
    error: productDeleteError,
    loading: productDeleteLoading,
    success: productDeleteSuccess,
  } = useSelector((state) => state.productDelete);

  const { userInfo } = useSelector((state) => state.userLogin);
  const {
    error: productCreateError,
    loading: productCreateLoading,
    success: productCreateSuccess,
    product: productCreated,
  } = useSelector((state) => state.productCreate);

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (productCreateSuccess) {
      history.push(`/admin/product/${productCreated._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    productDeleteSuccess,
    productCreateSuccess,
    productCreated,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h2>Products</h2>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {productDeleteLoading && <Loader />}
      {productDeleteError && (
        <Message variant="danger">{productDeleteError}</Message>
      )}

      {productCreateLoading && <Loader />}
      {productCreateError && (
        <Message variant="danger">{productCreateError}</Message>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>

                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" size="sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>

                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  );
}

export default ProductListScreen;
