import React from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'
import CartTotal from './CartTotal'
import {Icon, Button} from 'semantic-ui-react'
import PayPal from './PayPal'




class Cart extends React.Component {

  // state ={
  //   quantity: 1,
  // }

  // getQty = e =>{
  //  this.setState({
  //   quantity: parseInt(e.target.value)
  //  })
  // }



  render(){
    const {cart} = this.props
    return(
      <div>
        <br />
        <Button className="mx-auto" floated='right' secondary onClick={this.props.clearCart} style={{margin: '1.5rem'}}>Clear Cart</Button>
        <br />
        <h2> Your Cart</h2>
        <div>
          {cart.map(plant => (
            <li className='cart-item' key={plant.id}>
              <img className='cart-item-image' src={plant.plant.image} alt='plant' />
              <div className='cart-item-info'>
              <h1 className='cart-item-name'>{plant.plant.name}</h1>
                <div className='cart-item-value'>
                  <span className='cart-item-price'>${plant.plant.price.toFixed(2)}</span>
                  {/* <span className='cart-item-qty'>Qty:
                    <select onChange={this.getQty} className='cart-item-qty-select' name='qty' value={plant.plant.quantity =this.state.quantity}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>
                  </span> */}
                </div>
              </div>
              <span className='cart-item-delete' onClick={() => {this.props.removeFromCart(plant.plant)}}>
                <Icon name='trash alternate outline' size='small' />
              </span>
            </li>
          ))}
        </div>
        

        <CartTotal cart={cart} />

        

         <Link to={'/checkout'} total={<CartTotal cart={cart} />}>
              <Button className="mx-auto" color='olive' type='button' className='cart-checkout-button' style={{margin: '1.5rem', width: '250px'}} > 
                Checkout
               </Button>
          </Link>

          <PayPal  />
       
          
         
      </div>
    )
  }
}

export default Cart 