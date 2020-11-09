import React from 'react'
import PlantCard from '../Components/PlantCard'

class FavoritesContainer extends React.Component {

  render(){
    return(
      <div>
        <br />
        <h1>These plants need a new home!</h1>
        <div>{this.props.favorites.map(plant => <PlantCard plant={plant} />)}</div>
      </div>
    )
  }
}

export default FavoritesContainer