import React, { Component } from "react";
import "../App.css";
import { Form, Button, Grid, Header, Segment } from "semantic-ui-react";

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state, "/users");
  };

  render() {
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Create Your Account
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
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br />

                <Form.Input
                  fluid
                  placeholder="Confirm Password"
                  type="password"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                />
                <br />
                <Button color="olive" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signup;
