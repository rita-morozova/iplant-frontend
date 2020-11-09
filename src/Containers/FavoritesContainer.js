import React from 'react'
import PlantCard from '../Components/PlantCard'

class FavoritesContainer extends React.Component {
  state = {
    plants: []
  }

  componentDidMount(){
    fetch('https://iplant-backend.herokuapp.com/plants')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        plants: data
      })
    })
  }

  handleFavorites = () => {
    if (this.state.plants.length > 0){
      return this.props.favorites.map(favorite => this.state.plants.find(plant => plant.id === favorite['plant_id']))
    } else {
      return []
    }
  }

  render(){
    return(
      <div>
        <br />
        <h1>These plants need a new home!</h1>
        <div>{this.handleFavorites().map(plant => <PlantCard plant={plant} />)}</div>
      </div>
    )
  }
}

export default FavoritesContainer