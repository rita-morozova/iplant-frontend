import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";

const EmptyCart = () => {
  return (
    <Container textAlign="center">
      <br />
      <h1>Your Cart Is Empty</h1>
      <br />
      <Link to="/all-plants">
        <Button color="olive">Continue Shopping</Button>
      </Link>
    </Container>
  );
};

export default EmptyCart;
