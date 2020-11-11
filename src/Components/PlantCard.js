import { render } from '@testing-library/react'
import React from 'react'
import {Card, Icon} from 'semantic-ui-react'


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
              <div className="image" onClick={handleClick}>
                <img src={plant.image} alt="Plant" />
              </div>
              <div className="content">
                <h2>{plant.name}</h2>
                  <h3>${price}</h3>
              </div>
              <br />
              {this.props.removeFavorite ? <span onClick={() => this.props.removeFavorite(plant)}><Icon bordered color='red' name='heart'  /></span> : null}
          </div>
          </Card>
         
        )
    }
}

export default PlantCard