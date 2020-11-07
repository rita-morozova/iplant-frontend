import React from 'react'
import {Card} from 'semantic-ui-react'

const PlantCard = ({plant}) => {

  const price= plant.price.toFixed(2)

  return(
    <Card>
      <div>
        <div className="image">
           <img src={plant.image} />
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