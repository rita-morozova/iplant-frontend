import React from "react";
import { Container } from "semantic-ui-react";
import cat from "../images/cat.jpg";

const NotFound = () => {
  return (
    <Container textAlign="center">
      <br />
      <h2>Sorry, This Page Is Not Found</h2>
      <br />
      <br />
      <img src={cat} alt="cat broke a flower pot" />
    </Container>
  );
};

export default NotFound;
