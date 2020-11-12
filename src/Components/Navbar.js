import React from 'react'
import {NavLink} from 'react-router-dom'
import {Icon, Grid, Menu} from 'semantic-ui-react'
import '../App.css'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'black',
}

class Navbar extends React.Component {

  render(){
    return(
      <div>
        <Grid padded className='tablet computer only'>
          <Menu borderless fluid size='large'>
              <Menu.Item header>IPLANT<Icon name='heart'  /></Menu.Item>
                  <NavLink to='/' exact style={link} activeStyle={{background: '#f1f3f3'}}> Home </NavLink>
                  {this.props.userid ? 
                    <>
                    <NavLink to='/all-plants' exact style={link} activeStyle={{background: '#f1f3f3'}}> Shop All </NavLink>
                    <NavLink to='/my-picks' exact style={link} activeStyle={{background: '#f1f3f3'}}> Favorites </NavLink>
                <Menu.Menu position='right'>
                    <NavLink to='/my-cart' exact style={link} activeStyle={{background: '#f1f3f3'}}> <Icon name='shopping cart' size='large' /> </NavLink>
                    <NavLink to='/logout' exact style={link} activeStyle={{background: '#f1f3f3'}}> Logout </NavLink>
                </Menu.Menu>   
                    </>

                    : 
                    <>
                  <Menu.Menu position='right'>
                    <NavLink to='/login' exact style={link} activeStyle={{background: '#f1f3f3'}}> Login </NavLink>
                    <NavLink to='/signup' exact style={link} activeStyle={{background: '#f1f3f3'}}> Signup </NavLink>
                  </Menu.Menu> 
                    </>}
              </Menu>
          </Grid>
      </div> 
    )
  }
}

export default Navbar