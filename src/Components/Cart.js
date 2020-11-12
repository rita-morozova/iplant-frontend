import React from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'
import CartTotal from './CartTotal'
import {Icon, Button} from 'semantic-ui-react'





class Cart extends React.Component {

  // state ={
  //   qty: 1,
  // }

  // getQty = e =>{
  //   this.setState({
  //     qty: e.target.value,
  //   })
  // }



  render(){
    const {cart} = this.props
    return(
      <div>
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
                    <select onChange={this.getQty} className='cart-item-qty-select' name='qty' value={this.state.getQty}>
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
        

        <CartTotal cart={cart}/>
       
        <Button className='clear' secondary onClick={this.props.clearCart}>Clear Cart</Button>

         <Link to={'/checkout'} total={<CartTotal cart={cart} />}>
              <Button color='olive' type='button' className='cart-checkout-button'> 
                Checkout
               </Button>
          </Link>
      </div>
    )
  }
}

export default Cart 