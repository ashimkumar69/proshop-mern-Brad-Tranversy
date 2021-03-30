import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FromContainer from "../components/FromContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAdress } from "../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingAdress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <FromContainer>
      <CheckoutSteps step1 step2 />
      <h2>Shipping</h2>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </FromContainer>
  );
};

export default ShippingScreen;
