import React from 'react'
import PlantsContainer from './PlantsContainer'
import PlantDetails from '../Components/PlantDetails'
import {Container} from 'semantic-ui-react'
import SearchBar from '../Components/SearchBar'
import Filter from '../Components/Filter'


class MainContainer extends React.Component {

  state = {
    plants: [],
    chosenPlant: null,
    searchTerm: '',
    filter: 'none'
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

  selectFilter = filter => {
    this.setState({
      filter
    })
  }

  // handleSearch = e => {
  //   this.setState({
  //     searchTerm: e.target.value
  //   })
  // }


  render(){
    const{plants, chosenPlant, filter} = this.state
    const searchedPlant =plants.filter(plant => plant.name.includes(this.state.searchTerm))
    
    return(
      <div>
        <Container>
          <br />
          <h2>Hello! Welcome to our store! Bla bla bla bla</h2>
          {/* <SearchBar onChange={this.handleSearch} /> */}
          <Filter selectFilter={this.selectFilter} />
          <br />
          {!chosenPlant ?
          <PlantsContainer plants={plants} selectPlant={this.selectPlant} filter={filter} /> :
          <PlantDetails chosenPlant={chosenPlant} goBackToAllPlants={this.goBackToAllPlants}  /> 
          }
        </Container>
      </div>
    )
  }
}

export default MainContainer