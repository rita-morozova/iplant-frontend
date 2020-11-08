import React from 'react'
import './App.css'
import Header from './Components/Header'
import PlantsContainer from './Containers/PlantsContainer'
import FavoritesContainer from './Containers/FavoritesContainer'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import MainContainer from './Containers/MainContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './Components/NotFound'


class App extends React.Component {

  

  render(){


  return (
    <div className="App">      
      <Header />
      <br />
      <Router>
        <Navbar />   
        <div>
          <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/all-plants' component={MainContainer} />
          <Route exact path='/my-picks' component={FavoritesContainer} />
          <Route exact path='/my-cart' component={Cart} />
          <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
   
  
    </div>
  );
  }
}

export default App;
