import React from "react";
import PlantCard from "../Components/PlantCard";
import { Container, Card, } from "semantic-ui-react";

const FavoritesContainer = props => {
  
    return (
      <Container textAlign="center">
        <br />
        <h1>These plants need a new home!</h1>
        <div className="ui divider"></div>
        <Card.Group itemsPerRow={3}>
          {props.favorites.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              removeFavorite={props.removeFavorite}
            />
          ))}
        </Card.Group>
      </Container>
    );
}

export default FavoritesContainer;
