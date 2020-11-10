import React from 'react'

class Checkout extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    city: '',
    address1: '',
    address2: '',
    zipcode: '',
    cardName: '',
    cardNumber: '',
    securityCode: '',
  }

   handleFirstNameChange = e => {
     this.setState({
       firstName: e.target.value
     })
   }

   handleLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    })
  }

  handleCountryChange = e => {
    this.setState({
      country: e.target.value
    })
  }

  handleStateChange = e => {
    this.setState({
      state: e.target.value
    })
  }

  handleCityChange = e => {
    this.setState({
      city: e.target.value
    })
  }

  handleAddress1Change = e => {
    this.setState({
      address1: e.target.value
    })
  }

  handleAddress2Change = e => {
    this.setState({
      address2: e.target.value
    })
  }

  handleZipcodeChange = e => {
    this.setState({
      zipcode: e.target.value
    })
  }

  handleCardNameChange = e => {
    this.setState({
      cardName: e.target.value
    })
  }

  handleCardNumberChange = e => {
    this.setState({
      cardNumber: e.target.value
    })
  }

  handleSecurityCode = e => {
    this.setState({
      securityCode: e.target.value
    })
  }

  // handleSubmit =() =>{
  //   console.log(e)
  // }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor='first-name'>First Name</label>
          <input onChange={this.handleFirstNameChange} name='first-name' type='text' />
          <br />

          <label htmlFor='last-name'>Last Name</label>
          <input onChange={this.handleLastNameChange} name='last-name' type='text' />
          <br />

          <label htmlFor='email'>Email</label>
          <input onChange={this.handleEmailChange} name='email' type='text' />
          <br />

          <label htmlFor='country'>Country</label>
          <input onChange={this.handleCountryChange} name='country' type='text' />
          <br />

          <label htmlFor='state'>State</label>
          <input onChange={this.handleStateChange} name='state' type='text' />
          <br />

          <label htmlFor='city'>City</label>
          <input onChange={this.handleCityChange} name='city' type='text' />
          <br />

          <label htmlFor='zipcode'>Zip Code</label>
          <input onChange={this.handleZipcodeChange} name='zipcode' type='number' />
          <br />

          <label htmlFor='address1'>Address 1</label>
          <input onChange={this.handleAddress1Change} name='address1' type='text' />
          <br />

          <label htmlFor='address2'>Address 2</label>
          <input onChange={this.handleAddress2Change} name='address2' type='text' />
          <br />

          <label htmlFor='card-name'>Name On Card</label>
          <input onChange={this.handleCardNameChange} name='cardName' type='text' />
          <br />

          <label htmlFor='card-number'>Card Number</label>
          <input onChange={this.handleCardNumberChange} name='cardNumber' type='number' />
          <br />

          <label htmlFor='security-code'>Security Code</label>
          <input onChange={this.handleSecurityCode} name='securityCode' type='number' />
          <br />

        </form>

        <button type='submit'>Pay Now</button>
      </div>
    )
  }
}

export default Checkout