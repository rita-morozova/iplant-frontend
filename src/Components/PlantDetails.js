import React from 'react'
import {Card} from 'semantic-ui-react'


const PlantDetails= ({chosenPlant, goBackToAllPlants}) => {

  const price= chosenPlant.price.toFixed(2)
 

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
            <button>Add To Cart</button>
            <br />
            <button onClick={goBackToAllPlants}>Back To All Plants</button>
        </div>
    </div>
    </Card>
  )
}

export default PlantDetails