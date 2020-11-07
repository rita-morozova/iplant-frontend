import React from 'react'
import PlantCard from '../Components/PlantCard'
import {Card} from 'semantic-ui-react'


class PlantsContainer extends React.Component{

  

  render(){
   const{plants} = this.props
    return(
      <div>
         <Card.Group itemsPerRow={2}>
        {plants.map(plant => (
          <PlantCard  key={plant.id} plant={plant}/>
        ))}
         </Card.Group>
      </div>
    )
  }
}

export default PlantsContainer