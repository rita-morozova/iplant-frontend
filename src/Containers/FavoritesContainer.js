import React from 'react'
import PlantCard from '../Components/PlantCard'
import {Container, Card, Image} from 'semantic-ui-react'


class FavoritesContainer extends React.Component {

  render(){
    return(
      <Container textAlign='center'>
          <br />
          <h1>These plants need a new home!</h1>
          <div class="ui divider"></div>
            <Card.Group itemsPerRow={3}>
              {this.props.favorites.map(plant => <PlantCard plant={plant} removeFavorite={this.props.removeFavorite}/>)}
            </Card.Group>
      </Container>
    )
  }
}

export default FavoritesContainer