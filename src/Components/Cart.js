import React from 'react'
import PlantCard from './PlantCard'

class Cart extends React.Component {

//GET REQUEST HERE TO SHOW ALL ADDED ITEMS
  // componentDidMount(){
  //   fetch('http://user/id/cart')
  //   .then(resp => resp.json())
  //   .then(data => {
  //     this.props.setState({
  //       cart: data
  //     })
  //   })
  // }

  render(){
    console.log(this.props)
    return(
      <div>
        <br />
        <h2> Your Cart</h2>
        <div>
          {this.props.cart.map(plant => <PlantCard  key={plant.id} />)}
        </div>
      </div>
    )
  }
}

export default Cart 