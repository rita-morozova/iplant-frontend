import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import plant1 from "../images/plant1.jpg";
import plant3 from "../images/plant3.jpg";
import { Link } from "react-router-dom";
import "../App.css";
import main1 from "../images/main1.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <img className="main-img" src={main1} alt="plant shop" />
      <Segment vertical textAlign="center">
        <Container text>
          <h1>WHO WE ARE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
        </Container>
      </Segment>
      <Container>
        <Segment vertical>
          <Grid container stackable textAlign="center" columns={3}>
            <Grid.Column>
              <Image centered circular size="small" src={plant3} />
              <Header as="h1">SHOP</Header>
              <p>
                Who doesn't love a nice plant? We've stocked our shelves with
                locally grown indoor plants. Now more than ever, is a great time
                to shop small.
              </p>
              <Link to="/all-plants">
                <Button basic>Shop Now</Button>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Image centered circular size="small" src={plant1} />
              <Header as="h1">PLANTS</Header>
              <p>
                Have we mentioned we love plants? We have a huge selection of
                indoor plants available in our store. We also offer free
                delivery.
              </p>
              <Link to="/all-plants">
                <Button basic>Shop Plants</Button>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Image centered circular size="small" src={plant3} />
              <Header as="h1">VENUE RENTAL</Header>
              <p>
                Need to throw a little party? Let us know, our space upstairs is
                available for rent. We also have a full bar to bring a little
                fun to your party!
              </p>
              <a href="mailto: hello@iplant.com">
                <Button basic>Email Us</Button>
              </a>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};

export default Home;
