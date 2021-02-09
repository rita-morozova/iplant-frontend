import React from "react";
import ModalPurchase from "./ModalPurchase";
import { Form, Select } from "semantic-ui-react";


class Checkout extends React.Component {
  state = {
    firstName: this.props.user.name.split(" ")[0],
    lastName: this.props.user.name.split(" ")[1]
      ? this.props.user.name.split(" ")[1]
      : "",
    email: this.props.user.email,
    confirmEmail: "",
    country: "",
    state: "",
    city: "",
    address1: this.props.user.address,
    address2: "",
    zipcode: "",
    cardName: "",
    cardNumber: "",
    securityCode: "",
    total: 0,
  };

  componentDidMount = () => {
    let cartTotal = this.props.cart
      .map((plant) => plant.plant.price)
      .reduce((acc, price) => acc + price, 0)
      .toFixed(2);
    this.setState({
      total: cartTotal,
    });
  };

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleEmailConfirmChange = (e) => {
    this.setState({
      confirmEmail: e.target.value,
    });
  };

  handleCountryChange = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

  handleStateChange = (e) => {
    this.setState({
      state: e.target.value,
    });
  };

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleAddress1Change = (e) => {
    this.setState({
      address1: e.target.value,
    });
  };

  handleAddress2Change = (e) => {
    this.setState({
      address2: e.target.value,
    });
  };

  handleZipcodeChange = (e) => {
    this.setState({
      zipcode: e.target.value,
    });
  };

  handleCardNameChange = (e) => {
    this.setState({
      cardName: e.target.value,
    });
  };

  handleCardNumberChange = (e) => {
    this.setState({
      cardNumber: e.target.value,
    });
  };

  handleSecurityCode = (e) => {
    this.setState({
      securityCode: e.target.value,
    });
  };

  // handleSubmit =() =>{
  //  POST method, not required for this projects
  // }

  purchased = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      state: "",
      city: "",
      address1: "",
      address2: "",
      zipcode: "",
      cardName: "",
      cardNumber: "",
      securityCode: "",
    });
    this.props.clearCart();
  };

  render() {
    const country = [{ key: "USA", text: "USA", value: "USA" }];
    return (
      <div>
        <div className="cart-total">
          <span className="cart-total-label">Total:</span>
          <span className="cart-total-value">${this.state.total}</span>
        </div>

        <Form className="checkout-form" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              required
              label="First Name"
              name="first-name"
              placeholder="First Name"
              type="text"
              width={6}
              onChange={this.handleFirstNameChange}
              value={this.state.firstName}
            />
            <Form.Input
              required
              label="Last Name"
              name="last-name"
              placeholder="Last Name"
              type="text"
              width={6}
              onChange={this.handleLastNameChange}
              value={this.state.lastName}
            />
          </Form.Group>
          <br />

          <Form.Group>
            <Form.Input
              required
              label="Email"
              name="email"
              placeholder="iPlant@plants.com"
              type="text"
              width={6}
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
            <Form.Input
              required
              label="Confirm Email"
              name="confirm-email"
              placeholder="iPlant@plants.com"
              type="text"
              width={6}
              onChange={this.handleEmailConfirmChange}
              value={this.state.confirmEmail}
            />
          </Form.Group>
          <br />

          <Form.Group>
            <Form.Input
              required
              control={Select}
              options={country}
              label={{
                children: "Country",
                htmlFor: "form-select-control-country",
              }}
              placeholder="Country"
              search
              searchInput={{ id: "form-select-control-country" }}
              width={4}
              onChange={this.handleCountryChange}
            />
            <Form.Input
              required
              label="State"
              name="state"
              placeholder="State"
              type="text"
              width={4}
              onChange={this.handleStateChange}
            />
            <Form.Input
              required
              label="City"
              name="city"
              placeholder="City"
              type="text"
              width={4}
              onChange={this.handleCityChange}
            />
          </Form.Group>
          <br />

          <Form.Group>
            <Form.Input
              required
              label="Zip Code"
              name="zipcode"
              placeholder="Zip Code"
              type="text"
              width={4}
              onChange={this.handleZipcodeChange}
            />
            <Form.Input
              required
              label="Address 1"
              name="address1"
              placeholder="Address 1"
              type="text"
              width={4}
              onChange={this.handleAddress1Change}
              value={this.state.address1}
            />
            <Form.Input
              label="Address 2"
              name="address2"
              placeholder="Address 2"
              type="text"
              width={4}
              onChange={this.handleAddress2Change}
            />
          </Form.Group>

          <Form.Group>
            <Form.Input
              required
              label="Name On Card"
              name="cardName"
              placeholder="Name On Card"
              type="text"
              width={4}
              onChange={this.handleCardNameChange}
            />
            <Form.Input
              required
              label="Card Number"
              name="cardNumber"
              placeholder="Card Number"
              type="password"
              width={4}
              onChange={this.handleCardNumberChange}
            />
            <Form.Input
              required
              label="CVV"
              name="CVV"
              placeholder="CVV"
              type="password"
              width={4}
              onChange={this.handleSecurityCode}
            />
          </Form.Group>
        </Form>
        <br />

        <ModalPurchase purchased={this.purchased} />
        {/* <Button type='submit' onClick={this.purchased}>Pay Now</Button> */}
      </div>
    );
  }
}

export default Checkout;
