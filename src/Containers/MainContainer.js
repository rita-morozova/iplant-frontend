import React from "react";
import PlantsContainer from "./PlantsContainer";
import PlantDetails from "../Components/PlantDetails";
import { Container } from "semantic-ui-react";
import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";

class MainContainer extends React.Component {
  state = {
    plants: [],
    chosenPlant: null,
    searchTerm: "",
    filter: "none",
  };

  componentDidMount() {
    fetch("https://iplant-backend.herokuapp.com/plants")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          plants: data,
        });
      });
  }

  selectPlant = (id) => {
      this.setState({
       chosenPlant: this.state.plants.find((plant) => plant.id === id),
    });
  };

  goBackToAllPlants = () => {
    this.setState({
      chosenPlant: null,
    });
  };

  selectFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    const { plants, chosenPlant, filter, searchTerm } = this.state;
    const searchPlant = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <Container textAlign="center">
          <br />
          <h2 className="main-header">ALL PLANTS </h2>
          <div className="ui divider"></div>
          <SearchBar onChange={this.handleSearch} />
          <br />
          <Filter selectFilter={this.selectFilter} />
          <br />
          {!chosenPlant ? (
            <PlantsContainer
              plants={searchPlant}
              selectPlant={this.selectPlant}
              filter={filter}
            />
          ) : (
            <PlantDetails
              chosenPlant={chosenPlant}
              goBackToAllPlants={this.goBackToAllPlants}
              cart={this.props.cart}
              addFavorite={this.props.addFavorite}
              addToCart={this.props.addToCart}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default MainContainer;
