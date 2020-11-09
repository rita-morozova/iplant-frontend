import React from 'react'
import './App.css'
import FavoritesContainer from './Containers/FavoritesContainer'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import MainContainer from './Containers/MainContainer'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import Header from './Components/Header'
import PlantDetails from './Components/PlantDetails'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



class App extends React.Component {

  state = {
    cart: [],
  }

  addToCart = id => {
    if(!this.state.cart.includes(id)){
      this.setState((prevState) =>({
        cart: [...prevState.cart, id]
      }))
    }
  }

  // removeFromCart = id => {
  //   this.setState({
  //     cart: this.state.cart.filter(item => item !== id)
  //   })
  // }

  // clearCart = () => {
  //   this.setState({
  //     cart: []
  //   })
  // }
  

  render(){
      let {cart} = this.state
  return (
    <div className="App">   
       <Header />
          <br />
            <Router>
               <Navbar />   
               <br />
                  <div>
                    <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/all-plants' component={() => <MainContainer cart={cart} addToCart={this.addToCart}/>} />
                    <Route exact path='/all-plants/:id' component={PlantDetails} />
                    <Route exact path='/my-picks' component={FavoritesContainer} />
                    <Route exact path='/my-cart' component={() => <Cart cart={cart} removeFromCart={this.removeFromCart} clearCart={this.clearCart} />} />
                    <Route component={NotFound} />
                    </Switch>
                  </div>
            </Router> 
       
    </div>
  );
  }
}

export default App;
