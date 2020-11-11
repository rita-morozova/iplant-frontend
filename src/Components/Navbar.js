import React from 'react'
import {NavLink} from 'react-router-dom'

//temporary style NO PIXELS!
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class Navbar extends React.Component {

  render(){
    return(
      <div>
        <NavLink to='/' exact style={link} activeStyle={{background: 'darkblue'}}> Home </NavLink>
        {this.props.userid ? 
          <>
          <NavLink to='/all-plants' exact style={link} activeStyle={{background: 'darkblue'}}> Shop All </NavLink>
          <NavLink to='/my-picks' exact style={link} activeStyle={{background: 'darkblue'}}> My Favorites </NavLink>
          <NavLink to='/my-cart' exact style={link} activeStyle={{background: 'darkblue'}}> Cart </NavLink>
          <NavLink to='/logout' exact style={link} activeStyle={{background: 'darkblue'}}> Logout </NavLink>
          </>
          : 
          <>
          <NavLink to='/login' exact style={link} activeStyle={{background: 'darkblue'}}> Login </NavLink>
          <NavLink to='/signup' exact style={link} activeStyle={{background: 'darkblue'}}> Signup </NavLink>
          </>}
      </div>
    )
  }
}

export default Navbar