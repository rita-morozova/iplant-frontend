import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "../App.css";

const PlantCard = ({ plant, selectPlant, removeFavorite }) => {
  
    const price = plant.price.toFixed(2);

    const handleClick = () => {
      selectPlant(plant.id);
    };

    return (
     <div className="plant-card">
      <Card>
        <div key={plant.id}>
          <div className="image" onClick={handleClick}>
            <Image src={plant.image} alt="Plant" wrapped ui={false} />
          </div>
          <Card.Content>
            <Card.Header>{plant.name}</Card.Header>
            <Card.Description>${price}</Card.Description>
          </Card.Content>
          <br />
          {removeFavorite ? (
            <span onClick={() => removeFavorite(plant)}>
              <Icon className="overlay" color="red" name="heart" />
            </span>
          ) : null}
        </div>
      </Card>
    </div>
    );
}

export default PlantCard;
