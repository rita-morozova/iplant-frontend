import React from 'react'
import PlantsContainer from './PlantsContainer'
import {Container} from 'semantic-ui-react'


class MainContainer extends React.Component {

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


  render(){
    const{plants} = this.state
    return(
      <div>
        <Container>
        <PlantsContainer plants={plants} />
        </Container>
      </div>
    )
  }
}

export default MainContainer