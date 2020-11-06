import React from 'react'
import './App.css'
import Header from './Components/Header'
import PlantsContainer from './Containers/PlantsContainer'
import FavoritesContainer from './Containers/FavoritesContainer'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
  
    </div>
  );
}

export default App;
