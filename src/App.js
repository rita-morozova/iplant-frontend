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
import Checkout from './Components/Checkout'



class App extends React.Component {

  state = {
    cart: [],
    favorites: []
  }

  componentDidMount(){
    fetch('https://iplant-backend.herokuapp.com/users/1')
    .then(resp => resp.json())
    .then(userData => {
      this.setState({cart: userData.transactions, favorites: userData.favorites})
    })
  }

  addToCart = plant => {
    const newCart= {transaction: { plant_id: plant.id, user_id: 1}}
    fetch('http://iplant-backend.herokuapp.com/transactions', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newCart)
    })
    .then(resp => resp.json())
    .then(data=> {
      this.setState(prevState => {
        return {cart: [...prevState.cart, data]}
      })
    })
  }

  removeFromCart = plant => {
    const cartItem= this.state.cart.find(item => item.plant.id === plant.id)
    fetch(`https://iplant-backend.herokuapp.com/transactions/${cartItem.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(resp => resp.json())
    .then(item => {
      this.setState(prevState => {
        return {cart: prevState.cart.filter(item => item.id !== cartItem.id)}
      })
    })
  }
  
  // clearCart = () => {
  //   this.setState({
  //     cart: []
  //   })
  // }

  addFavorite = (plant) => {
    const newFavorite = { favorite: { plant_id: plant.id, user_id: 1}}
    fetch('https://iplant-backend.herokuapp.com/favorites', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newFavorite)
    })
    .then(resp => resp.json())
    .then(favorite => {
      this.setState(prevState => {
        return {favorites: [...prevState.favorites, favorite]}
      })
    })
  }

  removeFavorite = (plant) => {
    const foundFavorite = this.state.favorites.find(favorite => favorite.plant.id === plant.id)
    fetch(`https://iplant-backend.herokuapp.com/favorites/${foundFavorite.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(resp => resp.json())
    .then(favorite => {
      this.setState(prevState => {
        return {favorites: prevState.favorites.filter(fav => fav.id !== foundFavorite.id)}
      })
    })
  }
  

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
                    <Route exact path='/all-plants' component={() => <MainContainer cart={cart} addFavorite={this.addFavorite} addToCart={this.addToCart} />} />
                    <Route exact path='/all-plants/:id' component={PlantDetails} />
                    <Route exact path='/my-picks' component={() => <FavoritesContainer favorites={this.state.favorites.map(favorite => favorite.plant)} removeFavorite={this.removeFavorite}/>} />
                    <Route exact path='/my-cart' component={() => <Cart cart={cart} removeFromCart={this.removeFromCart} clearCart={this.clearCart} />} />
                    <Route exact path='/checkout' component={() => <Checkout cart={cart} />} />
                    <Route component={NotFound} />
                    </Switch>
                  </div>
            </Router> 
       
    </div>
  );
  }
}

export default App;
