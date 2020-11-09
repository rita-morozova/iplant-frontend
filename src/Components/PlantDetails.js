import React from 'react'
import {Card, Icon} from 'semantic-ui-react'


const PlantDetails= ({chosenPlant, goBackToAllPlants, cart, addToCart, addFavorite}) => {

  const price= chosenPlant.price.toFixed(2)

  const extra = (
    <div onClick={() => addFavorite(chosenPlant)}>
      <Icon name='favorite' />
    </div>
  )

  //POST REQUEST HERE
  // const addToCart = chosenPlant => {
  //   console.log(chosenPlant)
  //  cart.push([chosenPlant[0]])
  // }



  return(
    <Card>
      <div>
        <div className="image">
          <img src={chosenPlant.image} alt="Plant"/> 
        </div>
        <div className="content">
           <h2>{chosenPlant.name}</h2>
           <p>{chosenPlant.description}</p>
            <h4>{chosenPlant.easyToCare ? "Low Maintenance" : "High Maintenance"}</h4>
            <h4>{chosenPlant.lowLight ? "Low Light" : "Bright Light"}</h4>
            <h3>${price}</h3>
            <button onClick={() => addToCart(chosenPlant)}>Add To Cart</button>
            <br />
            <br />
            <button onClick={goBackToAllPlants}>Back To All Plants</button>
            <br />
            <br />
            <div className="extra">
            {extra}
        </div>
        </div>
    </div>
    </Card>
  )
}

export default PlantDetails