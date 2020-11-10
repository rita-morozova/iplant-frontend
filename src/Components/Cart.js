import React from 'react'
import PlantCard from './PlantCard'
import {Link} from 'react-router-dom'
import './Cart.css'



class Cart extends React.Component {


  render(){
    const {cart} = this.props
    console.log(cart)
    return(
      <div>
        <br />
        <h2> Your Cart</h2>
        <div>
          {cart.map(plant => (
            <li className='cart-item' key={plant.id}>
              <img className='cart-item-image' src={plant.plant.image} />
              <div className='cart-item-info'>
              <h1 className='cart-item-name'>{plant.plant.name}</h1>
                <div className='cart-item-value'>
                  <span className='cart-item-price'>${plant.plant.price.toFixed(2)}</span>
                  <span className='cart-item-qty'>Qty:
                    <select className='cart-item-qty-select' value='count'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>
                  </span>
                </div>
              </div>
              <button className='cart-item-delete' onClick={() => {this.props.removeFromCart(plant.plant)}}>X</button>
            </li>
          ))}

        </div>
        {/* <h2 className='cart-total'>Your total:  </h2> */}
        <div className='cart-total'>
            <span className='cart-total-label'>
               Your Total:
             </span>
                 <span className='cart-total-value'>
         
                 </span>
        </div>
        <button>Checkout</button>
      </div>
    )
  }
}

export default Cart 