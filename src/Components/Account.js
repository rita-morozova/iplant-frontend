import React, { Component } from "react";
import "../App.css";
import { Form, Button, Grid, Header, Segment } from "semantic-ui-react";

class Account extends Component {
  state = {
    email: this.props.user.email,
    name: this.props.user.name,
    address: this.props.user.address,
    phone: this.props.user.phone,
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(
      this.state,
      `/users/${this.props.user.id}`,
      "PATCH"
    );
  };

  render() {
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Edit Your Account
            </Header>
            <Form
              className="signup-form"
              onSubmit={(event) => this.handleSubmit(event)}
              size="large"
            >
              <Segment stacked>
                <Form.Input
                  fluid
                  placeholder="E-mail address"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <br />

                <Form.Input
                  fluid
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <br />

                <Form.Input
                  fluid
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <br />

                <Form.Input
                  fluid
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                <br />

                <Form.Input
                  fluid
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br />

                {/* <input type='submit' /> */}
                <Button color="olive" fluid size="large">
                  Update Account
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Account;
