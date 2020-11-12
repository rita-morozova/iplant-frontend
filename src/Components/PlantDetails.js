import React from 'react'
import {Card, Icon, Button, Image} from 'semantic-ui-react'
import ModalAddToCart from './ModalAddToCart'


const PlantDetails= ({chosenPlant, goBackToAllPlants, cart, addToCart, addFavorite}) => {

  const price= chosenPlant.price.toFixed(2)
 

  const extra = (
    <div onClick={() => addFavorite(chosenPlant)}>
      <Icon bordered color='red' name='heart outline'  />
    </div>
  )

  return(
    <Card>
          <Image src={chosenPlant.image} alt="Plant" wrapped ui={false}/> 
        <Card.Content>
           <Card.Header>{chosenPlant.name}</Card.Header>
           <Card.Description>{chosenPlant.description}</Card.Description>
            <h4>{chosenPlant.easyToCare ? "Low Maintenance" : "High Maintenance"}</h4>
            <h4>{chosenPlant.lowLight ? "Low Light" : "Bright Light"}</h4>
            <h3>${price}</h3>
            <ModalAddToCart addToCart={addToCart} chosenPlant={chosenPlant} />
            {/* <button onClick={() => addToCart(chosenPlant)}>Add To Cart</button> */}
            <br />
            <br />
            <Button onClick={goBackToAllPlants}>Back To All Plants</Button>
            <br />
            <br />
            </Card.Content>
            <div className="extra">
            {extra}
        </div>
    </Card>
  )
}

export default PlantDetails