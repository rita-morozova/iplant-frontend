import { render } from '@testing-library/react'
import React from 'react'
import {Card, Icon} from 'semantic-ui-react'


class PlantCard extends React.Component {

  // state = {
  //   favoritePlants: [],
  // }

  // addToFavorites = id =>{
  //   if(!this.state.favoritePlants.includes(id)){
  //     this.setState({
  //       favoritePlants: 1
  //       //POST TO FAVORITES HERE
  //       {
  //         fetch('http://..'), {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'Accept': 'application/json'
  //           },
  //           body: JSON.stringify({
  //             what gets posted
  //           })
  //           .then(resp => resp.json())
  //         }
  //       }
  //     })
  //   }

  // }

    render() {
      const {plant, selectPlant} = this.props
      const price= plant.price.toFixed(2)

      const handleClick = () => {
        selectPlant(plant.id)
      }

      const extra = (
        <a href='/my-picks'>
          <Icon name='favorite' />
        </a>
      )
        return(
          <Card>
            <div>
              <div className="image" onClick={handleClick}>
                <img src={plant.image} alt="Flower" />
              </div>
              <div className="content">
                <h2>{plant.name}</h2>
                  <h3>${price}</h3>
              </div>
              <br />
              <div className="extra">
                  {extra}
              </div>
          </div>
          </Card>
         
        )
    }
}

export default PlantCard