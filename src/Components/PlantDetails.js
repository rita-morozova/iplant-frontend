import React from "react";
import { Icon, Button, Image, Grid, Card } from "semantic-ui-react";
import ModalAddToCart from "./ModalAddToCart";

const PlantDetails = ({
  chosenPlant,
  goBackToAllPlants,
  cart,
  addToCart,
  addFavorite,
}) => {
  const price = chosenPlant.price.toFixed(2);

  const extra = (
    <div onClick={() => addFavorite(chosenPlant)}>
      <Icon color="red" name="heart outline" />
    </div>
  );

  return (
    <Grid>
      <Grid.Column width={4}>
        <Image src={chosenPlant.image} alt="Plant" wrapped ui={false} />
        <br />
        <Card.Content> {extra}</Card.Content>
      </Grid.Column>
      <Grid.Column width={9}>
        <h1> {chosenPlant.name}</h1>
        <h2>${price}</h2>
        <p>{chosenPlant.description}</p>
        <h4 className="care">
          {chosenPlant.easyToCare ? "Low Maintenance" : "High Maintenance"}
        </h4>
        <h4 className="care">
          {chosenPlant.lowLight ? "Low Light" : "Bright Light"}
        </h4>
        <br />
        <ModalAddToCart addToCart={addToCart} chosenPlant={chosenPlant} />
        {/* <button onClick={() => addToCart(chosenPlant)}>Add To Cart</button> */}
        <br />
        <br />
        <Button
          className="go-back-btn"
          color="olive"
          onClick={goBackToAllPlants}
          style={{ width: "200px" }}
        >
          Back To All Plants
        </Button>
        <br />
        <br />
      </Grid.Column>
    </Grid>
  );
};

export default PlantDetails;
