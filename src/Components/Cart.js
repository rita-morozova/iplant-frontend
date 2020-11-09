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
    const {cart} = this.props
    console.log(cart)
    return(
      <div>
        <br />
        <h2> Your Cart</h2>
        <div>
          {cart.map(plant => <PlantCard key={plant.id} plant={plant} /> )}

          {/* <div>{plant.name} {plant.price.toFixed(2)} */}

        </div>
      </div>
    )
  }
}

export default Cart 