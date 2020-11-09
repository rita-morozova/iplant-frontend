import React from 'react'
import './App.css'
import FavoritesContainer from './Containers/FavoritesContainer'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import MainContainer from './Containers/MainContainer'
import NotFound from './Components/NotFound'
import Home from './Containers/Home'
import Header from './Components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



class App extends React.Component {

  

  render(){

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
