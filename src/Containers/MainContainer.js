import React from 'react'
import PlantsContainer from './PlantsContainer'
import PlantDetails from '../Components/PlantDetails'
import {Container} from 'semantic-ui-react'


class MainContainer extends React.Component {

  state = {
    plants: [],
    chosenPlant: null
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

  selectPlant = id => {
    this.setState({
      chosenPlant: this.state.plants.find(plant => plant.id === id)
    })
  }

  goBackToAllPlants = () => {
    this.setState({
      chosenPlant: null
    })
  }


  render(){
    const{plants, chosenPlant} = this.state
    
    return(
      <div>
        <Container>
          <br />
          <h2>Hello! Welcome to our store! Bla bla bla bla</h2>
          {!chosenPlant ?
          <PlantsContainer plants={plants} selectPlant={this.selectPlant} /> :
          <PlantDetails chosenPlant={chosenPlant} goBackToAllPlants={this.goBackToAllPlants} /> 
          }
        </Container>
      </div>
    )
  }
}

export default MainContainer