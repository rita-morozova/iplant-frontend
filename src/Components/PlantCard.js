import { render } from '@testing-library/react'
import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import PlantDetails from './PlantDetails'


class PlantCard extends React.Component {

    render() {
      const {plant, selectPlant} = this.props
      const price= plant.price.toFixed(2)

      const handleClick = () => {
        selectPlant(plant.id)
       
      }

   
        return(
          <Card>
            <div key={plant.id}>
              <div className='image' onClick={handleClick}>
                  <Image src={plant.image} alt="Plant" wrapped ui={false} />
              </div>
              <Card.Content>
                <Card.Header>{plant.name}</Card.Header>
                  <Card.Description>${price}</Card.Description>
              </Card.Content>
              <br />
              {this.props.removeFavorite ? <span onClick={() => this.props.removeFavorite(plant)}><Icon bordered color='red' name='heart'  /></span> : null}
          </div>
          </Card>
         
        )
    }
}

export default PlantCard