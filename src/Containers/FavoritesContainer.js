import React from 'react'
import PlantCard from '../Components/PlantCard'
import {Container, Card} from 'semantic-ui-react'

class FavoritesContainer extends React.Component {

  render(){
    return(
      <Container>
        <div>
          <br />
          <h1>These plants need a new home!</h1>
          <div>
            <Card.Group itemsPerRow={2}>
              {this.props.favorites.map(plant => <PlantCard plant={plant} removeFavorite={this.props.removeFavorite}/>)}
            </Card.Group>
          </div>
        </div>
      </Container>
    )
  }
}

export default FavoritesContainer