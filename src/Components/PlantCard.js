import React from 'react'
import {Card} from 'semantic-ui-react'

const PlantCard = ({plant, selectPlant}) => {


  const price= plant.price.toFixed(2)

  const handleClick = () => {
    selectPlant(plant.id)
  }

  return(
    <Card onClick={handleClick} >
      <div>
        <div className="image">
           <img src={plant.image} alt="Flower" />
        </div>
        <div className="content">
           <h2>{plant.name}</h2>
            <h3>${price}</h3>
        </div>
    </div>
    </Card>
  )
}

export default PlantCard